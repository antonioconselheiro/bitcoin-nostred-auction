import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileApi } from './profile.api';
import { ProfileConverter } from './profile.converter';
import { ProfileCache } from './profile.cache';
import { ProfileProxy } from './profile.proxy';
import { ProfileEncrypt } from './profile.encrypt';
import { AccountManagerStatefull } from '../nostr-credential/account-manager.statefull';
import { AuthenticatedProfileObservable } from '@shared/nostr-credential/authenticated-profile.observable';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ProfileApi,
    ProfileCache,
    ProfileProxy,
    ProfileEncrypt,
    
    ProfileConverter,
    AccountManagerStatefull,
    AuthenticatedProfileObservable
  ]
})
export class ProfileServiceModule { }
