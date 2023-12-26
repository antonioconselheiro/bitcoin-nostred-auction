import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomValidator } from '@shared/custom-validator/custom-validator';
import { ModalableDirective } from '@shared/modal/modalable.directive';
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
    private fb: FormBuilder,
    private authenticatedProfile$: AuthenticatedProfileObservable,
    private nostrSecretStatefull: AccountManagerStatefull,
    private profileProxy: ProfileProxy
  ) {
    super();
  }

  async login(nostrSecret: string, pin: string, saveAccount = false): Promise<(IUnauthenticatedUser & {
    nsecEncrypted: string;
  }) | null> {
    const account = await this.profileProxy
      .loadAccount(nostrSecret, pin) as IUnauthenticatedUser & {
        nsecEncrypted: string;
      };

    if (this.isAccountNostrSecretEncrypted(account)) {
      if (saveAccount) {
        this.nostrSecretStatefull.addAccount(account);
      }
      await this.authenticatedProfile$.authenticateAccount(account, pin);
    }

    this.close();
    return Promise.resolve(account);
  }

  private isAccountNostrSecretEncrypted(
    account: IUnauthenticatedUser | null
  ): account is IUnauthenticatedUser & { nsecEncrypted: string; } {
    return account && account.nsecEncrypted && true || false;
  }

  toggleShowNsec(): void {
    this.showNsec = !this.showNsec;
  }

  toggleShowPin(): void {
    this.showPin = !this.showPin;
  }
}
