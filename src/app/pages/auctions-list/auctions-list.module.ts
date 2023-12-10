import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuctionsListComponent } from './auctions-list.component';
import { AuctionsListRouting } from './auctions-list.routing';
import { ProductsListModule } from '@shared/products-list/products-list.module';

@NgModule({
  declarations: [
    AuctionsListComponent
  ],
  imports: [
    CommonModule,
    AuctionsListRouting,
    ProductsListModule
  ]
})
export class AuctionsListModule { }
