import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFooterComponent } from './auth-footer.component';
import { ProfileWidgetModule } from '@shared/profile-widget/profile-widget.module';

@NgModule({
  declarations: [
    AuthFooterComponent
  ],
  imports: [
    CommonModule,
    ProfileWidgetModule
  ],
  exports: [
    AuthFooterComponent
  ]
})
export class AuthFooterModule { }
