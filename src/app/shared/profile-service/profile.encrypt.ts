import { Injectable } from '@angular/core';
import { NostrUser } from '@domain/nostr-user';
import { IProfile } from '@domain/profile.interface';
import * as CryptoJS from 'crypto-js';
import { IUnauthenticatedUser } from './unauthenticated-user';

@Injectable()
export class ProfileEncrypt {

  private readonly mode = CryptoJS.mode.CBC;
  private readonly padding = CryptoJS.pad.Pkcs7;

  encryptAccount(profile: IProfile, pin?: string | void | null): IUnauthenticatedUser | IUnauthenticatedUser & { nsecEncrypted: string } | null {
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
      const nsecEncrypted = this.encryptAES(nostrSecret, pin, initializationVector);
      account.nsecEncrypted = String(nsecEncrypted);
    }

    return account;
  }


  encryptAES(nostrSecret: string, key: string, initializationVector: CryptoJS.lib.WordArray) {
    return CryptoJS.AES.encrypt(nostrSecret, key, {
      iv: initializationVector,
      mode: this.mode,
      padding: this.padding
    });
  }

  decryptAES(cypher: string, key: string, iv: string) {
    const decrypted = CryptoJS.AES.decrypt(cypher, key, {
      iv: CryptoJS.enc.Hex.parse(iv),
      mode: this.mode,
      padding: this.padding
    });

    return CryptoJS.enc.Utf8.stringify(decrypted);
  }

  decryptAccount(
    account: IUnauthenticatedUser & { nsecEncrypted: string }, pin: string
  ): Required<NostrUser> {
    const nsec = this.decryptAES(account.nsecEncrypted, pin, account.iv);
    return NostrUser.fromNostrSecret(nsec);
  }
}
