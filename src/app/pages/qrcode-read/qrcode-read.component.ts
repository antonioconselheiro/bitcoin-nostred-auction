import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalChooseCamComponent } from '@shared/modal-choose-cam/modal-choose-cam.component';
import { ModalPinManagerComponent } from '@shared/modal-pin-manager/modal-pin-manager.component';
import { ModalService } from '@shared/modal/modal.service';
import QrScanner from 'qr-scanner';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'auc-qrcode-read',
  templateUrl: './qrcode-read.component.html',
  styleUrls: ['./qrcode-read.component.scss']
})
export class QrcodeReadComponent {
  @ViewChild('video', { read: ElementRef })
  videoEl?: ElementRef<HTMLVideoElement>;

  scanning?: QrScanner;

  constructor(
    private modalService: ModalService,
    private router: Router
  ) { }

  ngAfterViewInit(): void {
    if (this.videoEl && this.videoEl.nativeElement) {
      this.readQRCode(this.videoEl.nativeElement);
    }
  }

  ngOnDestroy(): void {
    if (this.videoEl && this.videoEl.nativeElement) {
      this.stopStreaming(this.videoEl.nativeElement);
    }

    this.stopScanning();
  }

  private async readQRCode(video: HTMLVideoElement): Promise<void> {
    const qrScanner = new QrScanner(
      video, result => this.triggerResult(result.data), {}
    );

    const cameras = await QrScanner.listCameras();
    const camera = await this.chooseCam(cameras);
    await qrScanner.setCamera(camera.id);
    await qrScanner.start();
    return Promise.resolve();
  }

  private async triggerResult(result: string): Promise<void> {
    if (/^nsec/.test(result)) {
      const pin = await firstValueFrom(this.modalService
        .createModal(ModalPinManagerComponent)
        .setTitle('Create a pin')
        .setBindToRoute(this.router)
        .build());

//  encriptar
//  logar sem salvar conta se não vier pin

    } else if (/^encrypted:aes/.test(result)) {
      const pin = await firstValueFrom(this.modalService
        .createModal(ModalPinManagerComponent)
        .setTitle('Open pin')
        .setBindToRoute(this.router)
        .build());

        //  se o pin for invalido para abrir o encriptado, então 
        //  um erro deve ser exibido e esta função deve ser chamada
        //  recursivamente dando a oportunidade de escrever o pin
        //  novamente
    } else {
      return firstValueFrom(this.modalService.alertError(
        'There is no authentication content into this qrcode, content read: ' + result
      ));
    }
  }

  private async chooseCam(cameras: Array<QrScanner.Camera>): Promise<QrScanner.Camera> {
    if (cameras.length === 1) {
      return Promise.resolve(cameras[0]);
    }

    const choosen = await firstValueFrom(this.modalService
      .createModal(ModalChooseCamComponent)
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
