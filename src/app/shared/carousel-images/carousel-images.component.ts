import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAuctionImage } from '@domain/auction/auction.model';

@Component({
  selector: 'auc-carousel-images',
  templateUrl: './carousel-images.component.html',
  styleUrls: ['./carousel-images.component.scss']
})
export class CarouselImagesModuleComponent {
  @Input()
  images: IAuctionImage[] = [];

  @Output()
  onRemoveImage = new EventEmitter<IAuctionImage>();

  @Output()
  onSetImageCover = new EventEmitter<IAuctionImage>();

  trackByFn(index: number, auctionImage: IAuctionImage): string {
    return auctionImage.url;
  }
}
