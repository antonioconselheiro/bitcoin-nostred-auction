import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalableDirective } from '@belomonte/async-modal-ngx';
import { Subject } from 'rxjs';
import { IPinManagerOptions } from './pin-manager-options.interface';

@Component({
  selector: 'auc-modal-pin-manager',
  templateUrl: './modal-pin-manager.component.html',
  styleUrls: ['./modal-pin-manager.component.scss']
})
export class ModalPinManagerComponent extends ModalableDirective<{
  title: string;
  showCheckboxToRememberAccount?: boolean;
}, IPinManagerOptions> {

  showPin = false;
  showCheckboxToRememberAccount = false;

  override response = new Subject<IPinManagerOptions | void>();

  pinForm = this.fb.group({
    rememberAccount: [false],
    pin: ['', [
      Validators.required.bind(this)
    ]]
  });

  constructor(
    private fb: FormBuilder
  ) {
    super();
  }

  override onInjectData(data: { title: string; showCheckboxToRememberAccount?: boolean | undefined; }): void {
    this.showCheckboxToRememberAccount = data.showCheckboxToRememberAccount || false;
  }

  toggleShowPin(): void {
    this.showPin = !this.showPin;
  }

  onSubmitPin(): void {
    if (this.pinForm.valid) {
      const raw = this.pinForm.getRawValue();

      if (raw.pin) {
        this.response.next({
          pin: raw.pin,
          rememberAccount: !!raw.rememberAccount
        });
      }
    }

    this.close();
  }
}
