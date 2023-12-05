import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QrcodeReadComponent } from './qrcode-read.component';

const routes: Routes = [
  {
    path: '',
    component: QrcodeReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QrcodeReadRouting { }
