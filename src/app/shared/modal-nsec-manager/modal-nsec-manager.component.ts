import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomValidator } from '@shared/custom-validator/custom-validator';
import { ModalableDirective } from '@belomonte/async-modal-ngx';
import { AccountManagerStatefull } from '@shared/profile-service/account-manager.statefull';
import { AuthenticatedProfileObservable } from '@shared/profile-service/authenticated-profile.observable';
import { ProfileProxy } from '@shared/profile-service/profile.proxy';
import { IUnauthenticatedUser } from '@shared/profile-service/unauthenticated-user';
import { Subject } from 'rxjs';

@Component({
  selector: 'auc-modal-nsec-manager',
  templateUrl: './modal-nsec-manager.component.html',
  styleUrls: ['./modal-nsec-manager.component.scss']
})
export class ModalNsecManagerComponent extends ModalableDirective<{
  title: string
}, void> {

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
    ]],

    rememberAccount: [false]
  });

  constructor(
    private fb: FormBuilder,
    private authenticatedProfile$: AuthenticatedProfileObservable,
    private accountManagerStatefull: AccountManagerStatefull,
    private profileProxy: ProfileProxy
  ) {
    super();
  }

  async login(): Promise<void> {
    if (!this.accountForm.valid) {
      return Promise.resolve();
    }

    const raw = this.accountForm.getRawValue();
    if (!raw.nsec) {
      return Promise.resolve();
    }

    const account = await this.profileProxy
      .loadAccount(raw.nsec, raw.pin);
    
    if (this.isAccountNostrSecretEncrypted(account)) {
      if (!raw.pin) { // without pin, you cannot save your account encrypted
        return Promise.resolve();
      }

      await this.authenticatedProfile$
        .authenticateAccount(account, raw.pin);

      if (raw.rememberAccount) {
        this.accountManagerStatefull.addAccount(account);
      }
    } else {
      await this.authenticatedProfile$
        .authenticateWithNostrSecret(raw.nsec);
    }

    setTimeout(() => this.close());
    return Promise.resolve();
  }

  private isAccountNostrSecretEncrypted(
    account: IUnauthenticatedUser | null
  ): account is IUnauthenticatedUser & { ncryptsec: string; } {
    return account && account.ncryptsec && true || false;
  }

  toggleShowNsec(): void {
    this.showNsec = !this.showNsec;
  }

  toggleShowPin(): void {
    this.showPin = !this.showPin;
  }
}
