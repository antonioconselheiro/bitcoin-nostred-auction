import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrcodeReadComponent } from './qrcode-read.component';
import { QrcodeReadRouting } from './qrcode-read.routing';

@NgModule({
  declarations: [
    QrcodeReadComponent
  ],
  imports: [
    CommonModule,
    QrcodeReadRouting
  ]
})
export class QrcodeReadModule { }
