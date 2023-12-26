import { Component, OnDestroy, OnInit } from '@angular/core';
import { MainErrorObservable } from '@shared/error/main-error.observable';
import { IErrorNormalized } from 'ecma-error-normalizer';
import { Subscription } from 'rxjs';

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
}
