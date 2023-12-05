import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyBidsComponent } from './my-bids.component';

const routes: Routes = [
  {
    path: '',
    component: MyBidsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MyBidsRouting { }
