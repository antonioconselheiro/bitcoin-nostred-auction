import { Component } from '@angular/core';
import { ModalableDirective } from '@shared/modal/modalable.directive';
import { Subject } from 'rxjs';

@Component({
  selector: 'auc-nsec-manager-modal',
  templateUrl: './nsec-manager-modal.component.html',
  styleUrls: ['./nsec-manager-modal.component.scss']
})
export class NsecManagerModalComponent extends ModalableDirective<void, void> {
  response = new Subject<void>();
}
