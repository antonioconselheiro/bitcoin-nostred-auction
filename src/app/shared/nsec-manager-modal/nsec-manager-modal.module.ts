import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NsecManagerModalComponent } from './nsec-manager-modal.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NsecManagerModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class NsecManagerModalModule { }
