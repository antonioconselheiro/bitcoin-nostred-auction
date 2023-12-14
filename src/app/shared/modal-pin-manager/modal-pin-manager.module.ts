import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalPinManagerComponent } from './modal-pin-manager.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ModalPinManagerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ModalPinManagerComponent
  ]
})
export class ModalPinManagerModule { }
