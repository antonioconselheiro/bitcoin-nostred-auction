import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuctionCreateComponent } from './auction-create.component';
import { AuctionCreateRouting } from './auction-create.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';
import { CarouselImagesModule } from '@shared/carousel-images/carousel-images.module';

@NgModule({
  declarations: [
    AuctionCreateComponent
  ],
  imports: [
    CommonModule,
    AuctionCreateRouting,
    TagInputModule,
    ReactiveFormsModule,
    CarouselImagesModule
  ]
})
export class AuctionCreateModule { }
