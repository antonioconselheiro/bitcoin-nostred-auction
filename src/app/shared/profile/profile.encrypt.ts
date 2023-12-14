import { Injectable } from '@angular/core';
import { NostrUser } from '@domain/nostr-user';
import { IUnauthenticatedUser } from '@shared/security-service/unauthenticated-user';
import { IProfile } from '@domain/profile.interface';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class ProfileEncrypt {

  private readonly mode = CryptoJS.mode.CBC;
  private readonly padding = CryptoJS.pad.Pkcs7;

  encryptAccount(profile: IProfile, pin: string): IUnauthenticatedUser & { nsecEncrypted: string } | null;
  encryptAccount(profile: IProfile, pin: undefined): IUnauthenticatedUser | null;
  encryptAccount(profile: IProfile, pin?: string): IUnauthenticatedUser | null {
    const nostrSecret = profile.user.nostrSecret;
    const displayName = profile.display_name || profile.name;
    const picture = profile.picture || ''; // TODO: fixar uma imagem padrão

    if (!nostrSecret || !displayName) {
      return null;
    }

    const initializationVector = CryptoJS.enc.Hex.parse(
      CryptoJS.lib.WordArray.random(128/8).toString()
    );

    const account: IUnauthenticatedUser = {
      picture,
      displayName,
      npub: profile.user.nostrPublic,
      nip05: profile.nip05,
      nip05valid: profile.nip05valid,
      iv: String(initializationVector)
    };

    if (pin) {
      const nsecEncrypted = CryptoJS.AES.encrypt(nostrSecret, String(pin), {
        iv: initializationVector,
        mode: this.mode,
        padding: this.padding
      });

      account.nsecEncrypted = String(nsecEncrypted);
    }

    return account;
  }

  decryptAccount(account: IUnauthenticatedUser & { nsecEncrypted: string }, pin: string): NostrUser {
    const decrypted = CryptoJS.AES.decrypt(account.nsecEncrypted, pin, {
      iv: CryptoJS.enc.Hex.parse(account.iv),
      mode: this.mode,
      padding: this.padding
    });

    const nsec = CryptoJS.enc.Utf8.stringify(decrypted);
    return new NostrUser(nsec);
  }
}
