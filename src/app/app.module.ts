import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { AuthModalModule } from '@shared/auth-modal/auth-modal.module';
import { ModalModule } from '@shared/modal/modal.module';
import { NsecManagerModalModule } from '@shared/nsec-manager-modal/nsec-manager-modal.module';
import { CryptModule } from '@shared/crypt/crypt.module';
import { UtilModule } from '@shared/util/util.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ModalModule,
    AuthModalModule,
    CryptModule,
    NsecManagerModalModule,
    UtilModule,
    AppRouting
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
