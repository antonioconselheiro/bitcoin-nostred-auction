import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NetworkComponent } from './network.component';
import { NetworkRouting } from './network.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NetworkComponent
  ],
  imports: [
    CommonModule,
    NetworkRouting,
    FormsModule
  ]
})
export class NetworkModule { }
