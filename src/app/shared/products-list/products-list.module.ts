import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductsListComponent } from './products-list.component';
import { DateModule } from '@shared/date/date.module';

@NgModule({
  declarations: [
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    DateModule
  ],
  exports: [ProductsListComponent]
})
export class ProductsListModule { }
