import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuctionsListComponent } from './auctions-list.component';
import { AuctionsListRouting } from './auctions-list.routing';

@NgModule({
  declarations: [
    AuctionsListComponent
  ],
  imports: [
    CommonModule,
    AuctionsListRouting
  ]
})
export class AuctionsListModule { }
