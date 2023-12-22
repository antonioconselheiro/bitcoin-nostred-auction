import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainErrorObservable } from '@shared/error/main-error.observable';
import { ModalAccountManagerComponent } from '@shared/modal-account-manager/modal-account-manager.component';
import { ModalNsecManagerComponent } from '@shared/modal-nsec-manager/modal-nsec-manager.component';
import { ModalService } from '@shared/modal/modal.service';
import { IErrorNormalized } from 'ecma-error-normalizer';
import { Subscription, firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  //  incluir uma forma de você cadastrar o que você está disposdo em leilão
  //  incluir filtro de pesquisa dos itens em leilão
  //  incluir ordenação de itens em leilão por qual estiver com mais atividade de lances e maiores valores
  //  incluir sistema de lance sobre o NIP de produto/serviço
  private subscription = new Subscription();
  error: IErrorNormalized | null = null;

  constructor(
    private router: Router,
    private modalService: ModalService,
    private error$: MainErrorObservable
  ) { }

  ngOnInit(): void {
    this.subscription.add(this.error$.subscribe(
      error => this.error = error as IErrorNormalized | null
    ));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  openNostrAccountManager(): void {
    firstValueFrom(this.modalService
      .createModal(ModalAccountManagerComponent)
      .setTitle('Select an authentication method')
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
      .setTitle('Login')
      .build());
  }
}
