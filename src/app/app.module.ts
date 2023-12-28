import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { ModalModule } from '@shared/modal/modal.module';
import { CryptModule } from '@shared/crypt/crypt.module';
import { UtilModule } from '@shared/util/util.module';
import { ProfileServiceModule } from '@shared/profile-service/profile-service.module';
import { ModalChooseCamModule } from '@shared/modal-choose-cam/modal-choose-cam.module';
import { ModalNsecManagerModule } from '@shared/modal-nsec-manager/modal-nsec-manager.module';
import { ModalAccountManagerModule } from '@shared/modal-account-manager/modal-account-manager.module';
import { ModalPinManagerModule } from '@shared/modal-pin-manager/modal-pin-manager.module';
import { NostrApiModule } from '@shared/nostr-api/nostr-api.module';
import { HtmlfyServiceModule } from '@shared/htmlfy/htmlfy-service.module';
import { ErrorModule } from '@shared/error/error.module';
import { AuthFooterModule } from '@shared/auth-footer/auth-footer.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ModalModule,
    ErrorModule,
    CryptModule,
    ProfileServiceModule,
    UtilModule,
    AppRouting,
    NostrApiModule,
    HtmlfyServiceModule,
    AuthFooterModule,
    ModalAccountManagerModule,
    ModalChooseCamModule,
    ModalNsecManagerModule,
    ModalPinManagerModule,
    BrowserAnimationsModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
