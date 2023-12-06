import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalableDirective } from '@shared/modal/modalable.directive';
import { Subject } from 'rxjs';

@Component({
  selector: 'auc-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss']
})
export class AuthModalComponent extends ModalableDirective<void, boolean> {

  response = new Subject<boolean | void>();

  constructor(
    private router: Router
  ) {
    super();
  }

  chooseWrite(): void {
    this.response.next(true);
  }

  chooseFromQrcode(): void {
    this.response.next(false);
    this.router.navigate(['/qrcode-read']);
    this.close();
  }
}
