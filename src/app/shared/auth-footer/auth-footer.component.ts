import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalAccountManagerComponent } from '@shared/modal-account-manager/modal-account-manager.component';
import { ModalNsecManagerComponent } from '@shared/modal-nsec-manager/modal-nsec-manager.component';
import { ModalService } from '@shared/modal/modal.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'auc-auth-footer',
  templateUrl: './auth-footer.component.html',
  styleUrls: ['./auth-footer.component.scss']
})
export class AuthFooterComponent {

  constructor(
    private router: Router,
    private modalService: ModalService
  ) { }

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
