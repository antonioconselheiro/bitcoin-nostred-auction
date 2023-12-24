import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MainErrorObservable } from '@shared/error/main-error.observable';
import { ModalChooseCamComponent } from '@shared/modal-choose-cam/modal-choose-cam.component';
import { ModalPinManagerComponent } from '@shared/modal-pin-manager/modal-pin-manager.component';
import { ModalService } from '@shared/modal/modal.service';
import { AuthenticatedProfileObservable } from '@shared/profile/authenticated-profile.observable';
import { ProfileProxy } from '@shared/profile/profile.proxy';
import QrScanner from 'qr-scanner';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'auc-qrcode-read',
  templateUrl: './qrcode-read.component.html',
  styleUrls: ['./qrcode-read.component.scss']
})
export class QrcodeReadComponent implements OnInit, OnDestroy {

  @ViewChild('video', { read: ElementRef })
  videoEl?: ElementRef<HTMLVideoElement>;

  scanning?: QrScanner;

  camActive = true;

  constructor(
    private authenticatedProfile$: AuthenticatedProfileObservable,
    private modalService: ModalService,
    private profileProxy: ProfileProxy,
    private error$: MainErrorObservable,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.camActive = true;
    setTimeout(() => {
      if (this.camActive && this.videoEl && this.videoEl.nativeElement) {
        this.readQRCode(this.videoEl.nativeElement);
      }
    });
  }

  ngOnDestroy(): void {
    return this.stop();
  }

  private stop(): void {
    this.camActive = false;
    if (this.videoEl && this.videoEl.nativeElement) {
      this.stopStreaming(this.videoEl.nativeElement);
    }

    this.stopScanning();
  }

  private async readQRCode(video: HTMLVideoElement): Promise<void> {
    const qrScanner = new QrScanner(
      video, result => this.triggerResult(result.data)
        .then(() => this.router.navigate(['/auctions-list']))
        .catch(e => this.error$.next(e)), {}
    );

    const cameras = await QrScanner.listCameras();
    const camera = await this.chooseCam(cameras);
    await qrScanner.setCamera(camera.id);
    await qrScanner.start();

    return Promise.resolve();
  }

  private async triggerResult(result: string): Promise<void> {
    this.stop();

    if (/^nsec/.test(result)) {
      return this.triggerResultAsNostrSecret(result);
    } else if (/^encrypted:aes/.test(result)) {
      return this.triggerResultAsEncryptedEncodedNostrSecred(result);
    } else {
      return firstValueFrom(this.modalService.alertError(
        'There is no authentication content into this qrcode, content read: ' + result
      ));
    }
  }

  private async triggerResultAsNostrSecret(nsec: string): Promise<void> {
    const pin = await firstValueFrom(this.modalService
      .createModal(ModalPinManagerComponent)
      .setBindToRoute(this.router)
      .setTitle('Create a pin')
      .build());

      const account = await this.profileProxy
        .loadAccount(nsec, pin);

    if (
      account &&
      this.authenticatedProfile$.hasEncriptedNostrSecret(account) &&
      pin
    ) {
      this.authenticatedProfile$.authenticateAccount(account, pin);
    } else {
      this.authenticatedProfile$.authenticateWithNostrSecret(nsec);
    }
  }

  private async triggerResultAsEncryptedEncodedNostrSecred(
    encryptedEncode: string
  ): Promise<void> {
    const key = await firstValueFrom(this.modalService
      .createModal(ModalPinManagerComponent)
      .setBindToRoute(this.router)
      .setTitle('Open pin')
      .build());

    if (!key) {
      return firstValueFrom(this.modalService.alertError('Invalid key'));
    }

    await this.authenticatedProfile$.authenticateEncryptedEncode(
      encryptedEncode, key
    );

    return Promise.resolve();
  }

  private async chooseCam(cameras: Array<QrScanner.Camera>): Promise<QrScanner.Camera> {
    if (cameras.length === 0) {
      await firstValueFrom(this.modalService
        .alertError('No camera found'));

      return Promise.reject(new Error('No camera found'));
    } else if (cameras.length === 1) {
      return Promise.resolve(cameras[0]);
    }

    const choosen = await firstValueFrom(this.modalService
      .createModal(ModalChooseCamComponent)
      .setBindToRoute(this.router)
      .setData(cameras)
      .setTitle('Choose one camera')
      .build());

    if (!choosen) {
      return cameras[0];
    }

    return choosen;
  }

  private stopScanning(): void {
    if (this.scanning) {
      this.scanning.stop();
      this.scanning.destroy();
    }
  }

  private stopStreaming(video: HTMLVideoElement | undefined): void {
    if (video) {
      const stream = video.srcObject as MediaStream | null;
      if (stream instanceof MediaStream) {
        stream.getTracks().forEach(track => track.stop());
      }
    }
  }
}
