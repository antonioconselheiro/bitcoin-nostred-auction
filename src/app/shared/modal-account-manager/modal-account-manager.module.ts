import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalAccountManagerComponent } from './modal-account-manager.component';
import { RouterModule } from '@angular/router';
import { ProfileWidgetModule } from '@shared/profile-widget/profile-widget.module';

@NgModule({
  declarations: [
    ModalAccountManagerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProfileWidgetModule
  ],
  exports: [
    ModalAccountManagerComponent
  ]
})
export class ModalAccountManagerModule { }
