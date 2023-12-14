import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomValidator } from '@shared/custom-validator/custom-validator';
import { ModalableDirective } from '@shared/modal/modalable.directive';
import { AuthenticatedProfileObservable } from '@shared/profile/authenticated-profile.observable';
import { ProfileProxy } from '@shared/profile/profile.proxy';
import { NostrSecretStatefull } from '@shared/security-service/nostr-secret.statefull';
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
    private nostrSecretStatefull: NostrSecretStatefull,
    private profileProxy: ProfileProxy
  ) {
    super();
  }

  async login(nostrSecret: string, pin: string, saveAccount = false): Promise<void> {
    const account = await this.profileProxy
      .loadAccount(nostrSecret, pin);

    if (account) {
      if (saveAccount) {
        this.nostrSecretStatefull.addAccount(account);
      }
      await this.authenticatedProfile$.authenticateAccount(account, pin);
    }

    this.close();
    return Promise.resolve();
  }

  toggleShowNsec(): void {
    this.showNsec = !this.showNsec;
  }

  toggleShowPin(): void {
    this.showPin = !this.showPin;
  }
}
