import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAuctionsComponent } from './my-auctions.component';

const routes: Routes = [
  {
    path: '',
    component: MyAuctionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyAuctionsRouting { }
