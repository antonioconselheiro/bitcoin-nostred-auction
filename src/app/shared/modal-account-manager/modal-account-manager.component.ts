import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProfile } from '@domain/profile.interface';
import { MainErrorObservable } from '@shared/error/main-error.observable';
import { ModalableDirective } from '@shared/modal/modalable.directive';
import { AuthenticatedProfileObservable } from '@shared/profile-service/authenticated-profile.observable';
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

  constructor(
    private router: Router,
    private authenticatedProfile$: AuthenticatedProfileObservable,
    private error$: MainErrorObservable
  ) {
    super();
  }

  ngOnInit(): void {
    this.loadProfile();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private loadProfile(): void {
    this.subscriptions.add(this.authenticatedProfile$.subscribe({
      next: profile => this.profile = profile,
      error: error => this.error$.next(error)
    }));
  }

  chooseWrite(): void {
    this.response.next(true);
    this.close();
  }

  chooseFromQrcode(): void {
    this.response.next(false);
    this.close();
    this.router.navigate(['/qrcode-read']).catch(e => this.error$.next(e));
  }
}
