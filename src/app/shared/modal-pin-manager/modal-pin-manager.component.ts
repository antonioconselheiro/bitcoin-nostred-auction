import { Component } from '@angular/core';
import { ModalableDirective } from '@shared/modal/modalable.directive';
import { Subject } from 'rxjs';

@Component({
  selector: 'auc-modal-pin-manager',
  templateUrl: './modal-pin-manager.component.html',
  styleUrls: ['./modal-pin-manager.component.scss']
})
export class ModalPinManagerComponent extends ModalableDirective<void, void> {
  override response = new Subject<void>;
}
