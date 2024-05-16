import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NostrCredentialService } from './nostr-credential.service';
import { AccountManagerStatefull } from './account-manager.statefull';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    NostrCredentialService,
    AccountManagerStatefull
  ]
})
export class NostrCredentialModule { }
