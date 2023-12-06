import { Component } from '@angular/core';
import { AuthModalComponent } from '@shared/auth-modal/auth-modal.component';
import { ModalService } from '@shared/modal/modal.service';
import { NsecManagerModalComponent } from '@shared/nsec-manager-modal/nsec-manager-modal.component';
import { firstValueFrom } from 'rxjs';

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
      .createModal(AuthModalComponent)
      .setTitle('Select an authentication method')
      .build())
      .then(writeNSec => {
        if (writeNSec) {
          this.openNostrSecretManager();
        }
      });
  }

  private openNostrSecretManager(): void {
    firstValueFrom(this.modalService
      .createModal(NsecManagerModalComponent)
      .setTitle('Login')
      .build());
  }

  selectNostrAccount(): void {

  }
}
