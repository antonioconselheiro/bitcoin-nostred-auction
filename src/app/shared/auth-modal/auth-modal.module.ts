import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModalComponent } from './auth-modal.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AuthModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AuthModalModule { }
