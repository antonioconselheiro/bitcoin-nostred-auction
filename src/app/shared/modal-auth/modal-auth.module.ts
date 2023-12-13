import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalAuthComponent } from './modal-auth.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ModalAuthComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ModalAuthModule { }
