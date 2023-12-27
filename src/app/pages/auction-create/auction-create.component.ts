import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';
import { IAuctionImage } from '@domain/auction/auction.model';

@Component({
  selector: 'auc-action-create',
  templateUrl: './auction-create.component.html',
  styleUrls: ['./auction-create.component.scss']
})
export class AuctionCreateComponent {

  constructor(
    private fb: FormBuilder,
  ) { }

  submitted = false;
  auctionForm = this.fb.group({
    name: ['', Validators.required],
    description: [''],
    tags: [''],
    images: this.fb.array<IAuctionImage>([]),
    completionDate: ['', Validators.required],
    initialValue: ['', [Validators.required]]
  });

  onImageSelected(event: Event): void {
    const target = event.target as HTMLInputElement;
    const file = target.files ? target.files[0] : null;

    const url = `https://i.nostr.build/resp/360p/nb5112.png` // TODO: Call to norst.build API

    this.auctionForm.controls.images.push(new FormControl({
      url,
      isCover: !this.auctionForm.controls.images.length
    }))
  }

  onRemoveImage(image: IAuctionImage): void {
    const index = this.auctionForm.controls.images.value.findIndex(item => item?.url === image.url)

    if (this.auctionForm.controls.images.at(index).getRawValue()?.isCover && this.auctionForm.controls.images.length > 1) {
      this.auctionForm.controls.images.at(1).getRawValue()!.isCover = true;
    }

    this.auctionForm.controls.images.removeAt(index);
  }

  onSetImageCover(image: IAuctionImage): void {
    const currentCover = this.auctionForm.controls.images.value.find(item => item?.isCover);
    const newCover = this.auctionForm.controls.images.value.find(item => item?.url === image.url)

    if (!currentCover || !newCover) {
      return;
    }

    currentCover.isCover = false;
    newCover.isCover = true;
  }

  onSubmit(): void {
    this.submitted = true;

    if (!this.auctionForm.valid) {
      return;
    }

    console.log(this.auctionForm.value);
  }

  get formControl(): {
    [key: string]: AbstractControl;
  } {
    return this.auctionForm.controls;
  }
}
