import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainModalComponent } from './main-modal.component';
import { AsyncModalModule } from '@belomonte/async-modal-ngx';

@NgModule({
  imports: [
    CommonModule,
    AsyncModalModule
  ],
  declarations: [
    MainModalComponent
  ],
  exports: [
    MainModalComponent,
    AsyncModalModule
  ]
})
export class MainModalModule { }
