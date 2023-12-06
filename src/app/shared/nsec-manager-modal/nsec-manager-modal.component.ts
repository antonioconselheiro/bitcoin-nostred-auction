import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomValidator } from '@shared/custom-validator/custom-validator';
import { ModalableDirective } from '@shared/modal/modalable.directive';
import { Subject } from 'rxjs';

@Component({
  selector: 'auc-nsec-manager-modal',
  templateUrl: './nsec-manager-modal.component.html',
  styleUrls: ['./nsec-manager-modal.component.scss']
})
export class NsecManagerModalComponent extends ModalableDirective<void, void> {

  response = new Subject<void>();

  accountForm = this.fb.group({
    nsec: ['', [
      Validators.required.bind(this),
      CustomValidator.nostrSecret
    ]],

    pin: ['', [
      Validators.required.bind(this),
    ]]
  });

  constructor(
    private fb: FormBuilder
  ) {
    super();
  }
}
