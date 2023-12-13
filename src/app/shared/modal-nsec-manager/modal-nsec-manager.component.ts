import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomValidator } from '@shared/custom-validator/custom-validator';
import { ModalableDirective } from '@shared/modal/modalable.directive';
import { Subject } from 'rxjs';

@Component({
  selector: 'auc-modal-nsec-manager',
  templateUrl: './modal-nsec-manager.component.html',
  styleUrls: ['./modal-nsec-manager.component.scss']
})
export class ModalNsecManagerComponent extends ModalableDirective<void, void> {
  showNsec = false;
  showPin = false;
  show = false;
  response = new Subject<void>();

  accountForm = this.fb.group({
    nsec: ['', [
      Validators.required.bind(this),
      CustomValidator.nostrSecret
    ]],

    pin: ['', [
      Validators.required.bind(this)
    ]]
  });

  constructor(
    private fb: FormBuilder
  ) {
    super();
  }

  onSubmit(): void {

  }

  toggleShowNsec(): void {
    this.showNsec = !this.showNsec;
  }

  toggleShowPin(): void {
    this.showPin = !this.showPin;
  }
}
