import { Component } from '@angular/core';
import { ModalService } from '@shared/modal/modal.service';
import { firstValueFrom } from 'rxjs';
import { ModalAuthComponent } from '@shared/modal-auth/modal-auth.component';
import { ModalNsecManagerComponent } from '@shared/modal-nsec-manager/modal-nsec-manager.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //  incluir uma forma de você cadastrar o que você está disposdo em leilão
  //  incluir filtro de pesquisa dos itens em leilão
  //  incluir ordenação de itens em leilão por qual estiver com mais atividade de lances e maiores valores
  //  incluir sistema de lance sobre o NIP de produto/serviço

  constructor(
    private modalService: ModalService
  ) { }

  addNostrAccount(): void {
    firstValueFrom(this.modalService
      .createModal(ModalAuthComponent)
      .setTitle('Select an authentication method')
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
      .setTitle('Login')
      .build());
  }

  selectNostrAccount(): void {

  }
}
