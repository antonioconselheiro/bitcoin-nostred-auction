import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAuctionsComponent } from './my-auctions.component';
import { MyAuctionsRouting } from './my-auctions.routing';

@NgModule({
  declarations: [
    MyAuctionsComponent
  ],
  imports: [
    CommonModule,
    MyAuctionsRouting
  ]
})
export class MyAuctionsModule { }
