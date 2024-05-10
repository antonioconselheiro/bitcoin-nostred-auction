import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselImagesModuleComponent } from './carousel-images.component';

@NgModule({
  declarations: [
    CarouselImagesModuleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CarouselImagesModuleComponent
  ]
})
export class CarouselImagesModule { }
