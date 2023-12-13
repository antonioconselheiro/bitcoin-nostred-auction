import { Component } from '@angular/core';
import { ModalableDirective } from '@shared/modal/modalable.directive';
import { Subject } from 'rxjs';
import QrScanner from 'qr-scanner';

@Component({
  selector: 'auc-modal-choose-cam',
  templateUrl: './modal-choose-cam.component.html',
  styleUrls: ['./modal-choose-cam.component.scss']
})
export class ModalChooseCamComponent extends ModalableDirective<Array<QrScanner.Camera>, QrScanner.Camera> {
  override response = new Subject<QrScanner.Camera | void>();

  cameras: QrScanner.Camera[] = [];

  override onInjectData(data: QrScanner.Camera[]): void {
    this.cameras = data;
  }

  onChooseCamera(camera: QrScanner.Camera): void {
    this.response.next(camera);
    this.close();
  }
}
