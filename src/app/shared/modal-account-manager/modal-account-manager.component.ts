import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProfile } from '@domain/profile.interface';
import { MainErrorObservable } from '@shared/error/main-error.observable';
import { ModalableDirective } from '@shared/modal/modalable.directive';
import { AuthenticatedProfileObservable } from '@shared/profile-service/authenticated-profile.observable';
import { NostrSecretStatefull } from '@shared/security-service/nostr-secret.statefull';
import { IUnauthenticatedUser } from '@shared/security-service/unauthenticated-user';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'auc-modal-account-manager',
  templateUrl: './modal-account-manager.component.html',
  styleUrls: ['./modal-account-manager.component.scss']
})
export class ModalAccountManagerComponent
  extends ModalableDirective<void, boolean>
  implements OnInit, OnDestroy {

  private subscriptions = new Subscription();
  response = new Subject<boolean | void>();

  profile: IProfile | null = null;
  accounts: IUnauthenticatedUser[] = [];

  constructor(
    private router: Router,
    private nostrSecretStatefull: NostrSecretStatefull,
    private authenticatedProfile$: AuthenticatedProfileObservable,
    private error$: MainErrorObservable
  ) {
    super();
  }

  ngOnInit(): void {
    this.loadProfile();
    this.bindAccountsSubscription();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private bindAccountsSubscription(): void {
    this.subscriptions.add(this.nostrSecretStatefull.accounts$.subscribe({
      next: accounts => this.accounts = accounts
    }));
  }

  private loadProfile(): void {
    this.subscriptions.add(this.authenticatedProfile$.subscribe({
      next: profile => this.profile = profile,
      error: error => this.error$.next(error)
    }));
  }

  getUnauthenticatedAccounts(): IUnauthenticatedUser[] {
    const profile = this.profile;
    if (!profile) {
      return this.accounts;
    }

    return this.accounts
      .filter(account => account.npub !== profile.npub);
  }

  chooseWrite(): void {
    this.response.next(true);
    this.close();
  }

  chooseFromQrcode(): void {
    this.response.next(false);
    this.close();
    this.router
      .navigate(['/qrcode-read'])
      .catch(e => this.error$.next(e));
  }

  logout(): void {
    this.authenticatedProfile$.logout();
  }
}
