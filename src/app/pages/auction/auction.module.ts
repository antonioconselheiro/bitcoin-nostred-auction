import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuctionComponent } from './auction.component';
import { AuctionsRouting } from './auction.routing';

@NgModule({
  declarations: [
    AuctionComponent
  ],
  imports: [
    CommonModule,
    AuctionsRouting
  ]
})
export class AuctionModule { }
