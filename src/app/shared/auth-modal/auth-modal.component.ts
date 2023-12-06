import { Component } from '@angular/core';
import { ModalableDirective } from '@shared/modal/modalable.directive';
import { Subject } from 'rxjs';

@Component({
  selector: 'auc-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss']
})
export class AuthModalComponent extends ModalableDirective<void, void> {
  response = new Subject<void>();
}
