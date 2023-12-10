import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TimeLeftPipe } from './time-left.pipe';

@NgModule({
  declarations: [
    TimeLeftPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TimeLeftPipe
  ]
})
export class DateModule { }
