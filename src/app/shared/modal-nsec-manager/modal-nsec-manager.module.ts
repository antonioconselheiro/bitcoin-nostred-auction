import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalNsecManagerComponent } from './modal-nsec-manager.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ModalNsecManagerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ModalNsecManagerComponent
  ]
})
export class ModalNsecManagerModule { }
