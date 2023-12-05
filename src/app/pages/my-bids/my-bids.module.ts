import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyBidsComponent } from './my-bids.component';
import { MyBidsRouting } from './my-bids.routing';

@NgModule({
  declarations: [
    MyBidsComponent
  ],
  imports: [
    CommonModule,
    MyBidsRouting
  ]
})
export class MyBidsModule { }
