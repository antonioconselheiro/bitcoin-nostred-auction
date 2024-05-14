import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProfile } from '@domain/profile.interface';
import { MainErrorObservable } from '@shared/error/main-error.observable';
import { ModalAccountManagerComponent } from '@shared/modal-account-manager/modal-account-manager.component';
import { ModalNsecManagerComponent } from '@shared/modal-nsec-manager/modal-nsec-manager.component';
import { ModalService } from '@belomonte/async-modal-ngx';
import { AuthenticatedProfileObservable } from '@shared/profile-service/authenticated-profile.observable';
import { Subscription, firstValueFrom } from 'rxjs';

@Component({
  selector: 'auc-auth-footer',
  templateUrl: './auth-footer.component.html',
  styleUrls: ['./auth-footer.component.scss']
})
export class AuthFooterComponent implements OnInit, OnDestroy {

  private subscriptions = new Subscription();

  profile: IProfile | null = null;

  constructor(
    private router: Router,
    private modalService: ModalService,
    private error$: MainErrorObservable,
    private authenticatedProfile$: AuthenticatedProfileObservable
  ) { }

  ngOnInit(): void {
    this.listenAuthenticatedProfile();
  }

  private listenAuthenticatedProfile(): void {
    this.subscriptions.add(this.authenticatedProfile$.subscribe({
      next: profile => this.profile = profile,
      error: error => this.error$.next(error)
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  openNostrAccountManager(): void {
    firstValueFrom(this.modalService
      .createModal(ModalAccountManagerComponent)
      .setData({
        title: 'Select an authentication method'
      })
      .setBindToRoute(this.router)
      .build())
      .then(writeNSec => {
        if (writeNSec) {
          this.openNostrSecretManager();
        }
      }).catch(e => console.error(e));
  }

  private openNostrSecretManager(): void {
    firstValueFrom(this.modalService
      .createModal(ModalNsecManagerComponent)
      .setBindToRoute(this.router)
      .setData({
        title: 'Login'
      })
      .build());
  }
}
