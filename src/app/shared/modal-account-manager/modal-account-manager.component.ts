import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainErrorObservable } from '@shared/error/main-error.observable';
import { ModalableDirective } from '@shared/modal/modalable.directive';
import { Subject } from 'rxjs';

@Component({
  selector: 'auc-modal-account-manager',
  templateUrl: './modal-account-manager.component.html',
  styleUrls: ['./modal-account-manager.component.scss']
})
export class ModalAccountManagerComponent extends ModalableDirective<void, boolean> {

  response = new Subject<boolean | void>();

  constructor(
    private router: Router,
    private error$: MainErrorObservable
  ) {
    super();
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
