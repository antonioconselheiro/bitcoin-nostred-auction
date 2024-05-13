import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MainErrorObservable } from '@shared/error/main-error.observable';
import { ModalChooseCamComponent } from '@shared/modal-choose-cam/modal-choose-cam.component';
import { ModalPinManagerComponent } from '@shared/modal-pin-manager/modal-pin-manager.component';
import { ModalService } from '@belomonte/async-modal-ngx';
import { AccountManagerStatefull } from '@shared/profile-service/account-manager.statefull';
import { AuthenticatedProfileObservable } from '@shared/profile-service/authenticated-profile.observable';
import { ProfileProxy } from '@shared/profile-service/profile.proxy';
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
    private accountManagerStatefull: AccountManagerStatefull,
    private modalService: ModalService,
    private profileProxy: ProfileProxy,
    private error$: MainErrorObservable,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initCamera();
  }

  ngOnDestroy(): void {
    return this.stop();
  }

  private initCamera(): void {
    this.camActive = true;
    setTimeout(() => {
      if (this.camActive && this.videoEl && this.videoEl.nativeElement) {
        this.readQRCode(this.videoEl.nativeElement);
      }
    });
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
      console.error('There is no authentication content into this qrcode, content read: ' + result);
      return Promise.resolve();
    }
  }

  private async triggerResultAsNostrSecret(nsec: string): Promise<void> {
    const resultset = await firstValueFrom(this.modalService
      .createModal(ModalPinManagerComponent)
      .setBindToRoute(this.router)
      .setData({
        title: 'Create a pin',
        showCheckboxToRememberAccount: true
      })
      .build());

    if (!resultset || !resultset.pin) {
      this.authenticatedProfile$.authenticateWithNostrSecret(nsec);
      return;
    }

    const { rememberAccount, pin } = resultset;
    const account = await this.profileProxy
      .loadAccount(nsec, pin);

    if (
      account &&
      rememberAccount &&
      this.authenticatedProfile$.hasNcryptsec(account)      
    ) {
      this.authenticatedProfile$.authenticateAccount(account, pin);
    }
  }

  private async triggerResultAsEncryptedEncodedNostrSecred(
    encryptedEncode: string
  ): Promise<void> {
    const resultset = await firstValueFrom(this.modalService
      .createModal(ModalPinManagerComponent)
      .setBindToRoute(this.router)
      .setData({
        title: 'Open pin',
        showCheckboxToRememberAccount: true
      })
      .build());

    if (!resultset || typeof resultset.pin !== 'string') {
      //  FIXME: revisar quando chegar a hora de
      //  implementar o fluxo de tentar novamente
      console.error('Invalid key');
      return;
    }

    const { pin, rememberAccount } = resultset;
    const profile = await this.authenticatedProfile$.authenticateEncryptedEncode(
      encryptedEncode, pin
    );

    if (rememberAccount) {
      const account = this.accountManagerStatefull.createAccount(profile, pin);
      this.accountManagerStatefull.addAccount(account);
    }

    return Promise.resolve();
  }

  private async chooseCam(cameras: Array<QrScanner.Camera>): Promise<QrScanner.Camera> {
    if (cameras.length === 0) {
      console.error('No camera found');

      return Promise.reject(new Error('No camera found'));
    } else if (cameras.length === 1) {
      return Promise.resolve(cameras[0]);
    }

    const choosen = await firstValueFrom(this.modalService
      .createModal(ModalChooseCamComponent)
      .setBindToRoute(this.router)
      .setData({
        title: 'Choose one camera',
        cameras
      })
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
