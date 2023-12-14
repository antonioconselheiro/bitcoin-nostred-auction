import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalAccountManagerComponent } from './modal-account-manager.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ModalAccountManagerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ModalAccountManagerModule { }
