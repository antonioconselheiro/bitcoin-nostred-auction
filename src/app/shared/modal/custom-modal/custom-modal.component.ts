import { Component, HostBinding, HostListener, NgZone, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalBuilder } from '../modal.builder';
import { ModalDirective } from '../modal.directive';

@Component({
  selector: 'auc-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent extends ModalDirective {

  tagNameElement = 'auc-custom-modal';
  modalInject$ = ModalBuilder.modalInject$;

  @ViewChild('modalContainer', { read: ViewContainerRef })
  container: ViewContainerRef | null = null;

  @HostBinding('style.display')
  display = 'none';

  constructor(
    protected ngZone: NgZone
  ) {
    super();
  }

  override open(): void {
    //  without ngzone this property will not be rendered
    //  in html when it changes don't came triggered by
    //  an user action, like when the video stream a qrcode
    //  and this qrcode got decoded, in this context there
    //  is no event triggering from browser or user, but
    //  from the algorithm
    this.ngZone.run(() => {
      super.open();
      this.display = 'flex';
    });
  }

  override close(): void {
    this.ngZone.run(() => {
      super.close();
      this.display = 'none';  
    });
  }

  @HostListener('document:keydown.escape')
  override closeModal(): void {
    super.closeModal();
  }
}
