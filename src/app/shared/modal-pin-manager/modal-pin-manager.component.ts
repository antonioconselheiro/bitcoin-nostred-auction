import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalableDirective } from '@shared/modal/modalable.directive';
import { Subject } from 'rxjs';

@Component({
  selector: 'auc-modal-pin-manager',
  templateUrl: './modal-pin-manager.component.html',
  styleUrls: ['./modal-pin-manager.component.scss']
})
export class ModalPinManagerComponent extends ModalableDirective<void, string> {

  showPin = false;

  override response = new Subject<string | void>();

  pinForm = this.fb.group({
    pin: ['', [
      Validators.required.bind(this)
    ]]
  });

  constructor(
    private fb: FormBuilder
  ) {
    super();
  }

  toggleShowPin(): void {
    this.showPin = !this.showPin;
  }

  onSubmitPin(): void {
    if (this.pinForm.valid) {
      const raw = this.pinForm.getRawValue();
      if (raw.pin) {
        this.response.next(raw.pin);
      }
    }

    this.close();
  }
}
