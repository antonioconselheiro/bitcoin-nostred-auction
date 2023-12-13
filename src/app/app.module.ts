import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { ModalModule } from '@shared/modal/modal.module';
import { CryptModule } from '@shared/crypt/crypt.module';
import { UtilModule } from '@shared/util/util.module';
import { ProfileModule } from '@shared/profile/profile.module';
import { ModalAuthModule } from '@shared/modal-auth/modal-auth.module';
import { ModalChooseCamModule } from '@shared/modal-choose-cam/modal-choose-cam.module';
import { ModalNsecManagerModule } from '@shared/modal-nsec-manager/modal-nsec-manager.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ModalModule,
    CryptModule,
    ProfileModule,
    UtilModule,
    AppRouting,
    ModalAuthModule,
    ModalChooseCamModule,
    ModalNsecManagerModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
