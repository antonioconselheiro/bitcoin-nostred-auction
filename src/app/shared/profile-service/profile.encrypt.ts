import { Injectable } from '@angular/core';
import { NostrUser } from '@domain/nostr-user';
import { IProfile } from '@domain/profile.interface';
import { IUnauthenticatedUser } from './unauthenticated-user';
import { nip19 } from 'nostr-tools';
import * as nip49 from 'nostr-tools/nip49';

@Injectable()
export class ProfileEncrypt {

  encryptAccount(profile: IProfile, pin?: string | void | null): IUnauthenticatedUser | null
  encryptAccount(profile: IProfile, pin: string): IUnauthenticatedUser & { ncryptsec: string } | null;
  encryptAccount(profile: IProfile, pin?: string | void | null): IUnauthenticatedUser | IUnauthenticatedUser & { ncryptsec: string } | null {
    const nostrSecret = profile.user.nostrSecret;
    const displayName = profile.display_name || profile.name;
    const picture = profile.picture || ''; // TODO: fixar uma imagem padrão

    if (!nostrSecret || !displayName) {
      return null;
    }

    const account: IUnauthenticatedUser = {
      picture,
      displayName,
      npub: profile.user.nostrPublic,
      nip05: profile.nip05,
      nip05valid: profile.nip05valid
    };

    if (pin) {
      const ncryptsec = this.encryptNostrSecret(nostrSecret, pin);
      account.ncryptsec = String(ncryptsec);
    }

    return account;
  }


  encryptNostrSecret(nostrSecret: string, password: string): string {
    const decoded = nip19.decode(nostrSecret);
    const bytes = decoded.data as Uint8Array; 

    return nip49.encrypt(bytes, password);
  }

  decryptNcryptsec(ncryptsec: string, password: string) {
    return nip19.nsecEncode(nip49.decrypt(ncryptsec, password));
  }

  decryptAccount(
    account: IUnauthenticatedUser & { ncryptsec: string }, pin: string
  ): Required<NostrUser> {
    const nsec = this.decryptNcryptsec(account.ncryptsec, pin);
    return NostrUser.fromNostrSecret(nsec);
  }
}
