import { Injectable } from '@angular/core';
import { IProfile } from '@domain/profile.interface';
import { BehaviorSubject } from 'rxjs';
import { ProfileEncrypt } from './profile.encrypt';
import { ProfileProxy } from './profile.proxy';
import { NostrUser } from '@domain/nostr-user';
import { IUnauthenticatedUser } from './unauthenticated-user';

/**
 * This class responsible for caching event information
 * involving profiles, including events: Metadata (0)
 * 
 * Them main observable of this class emit the authenticated
 * profile metadata
 */
@Injectable()
export class AuthenticatedProfileObservable extends BehaviorSubject<IProfile | null> {

  accounts: {
    [npub: string]: IUnauthenticatedUser
  } = JSON.parse(localStorage.getItem('accountManagerStatefull_accounts') || '{}');

  static instance: AuthenticatedProfileObservable | null = null;

  constructor(
    private profileProxy: ProfileProxy,
    private profileEncrypt: ProfileEncrypt
  ) {
    const authProfileSerialized = sessionStorage.getItem('ProfilesObservable_auth');
    const authProfile = authProfileSerialized ? JSON.parse(authProfileSerialized) as IProfile : null;

    super(authProfile);

    if (!AuthenticatedProfileObservable.instance) {
      AuthenticatedProfileObservable.instance = this;
    }

    return AuthenticatedProfileObservable.instance;
  }

  getAuthProfile(): IProfile | null {
    return this.getValue();
  }

  authenticateWithNostrSecret(nsec: string): Promise<IProfile> {
    return this.autenticate(NostrUser.fromNostrSecret(nsec));
  }

  authenticateAccount(account: IUnauthenticatedUser & { ncryptsec: string }, pin: string): Promise<IProfile> {
    const user = this.profileEncrypt.decryptAccount(account, pin);
    return this.autenticate(user);
  }

  authenticateEncryptedEncode(ncryptsec: string, pin: string): Promise<IProfile> {
    const nsec = this.profileEncrypt.decryptNcryptsec(ncryptsec, pin);

    return this.autenticate(NostrUser.fromNostrSecret(nsec));
  }

  private autenticate(user: Required<NostrUser>): Promise<IProfile> {
    return this.profileProxy
      .load(user.nostrPublic)
      .then(profile => {
        const authProfile = { ...profile, ...{ user } };
        this.next(authProfile);
        sessionStorage.setItem('ProfilesObservable_auth', JSON.stringify(authProfile));
        return Promise.resolve(authProfile);
      });
  }

  hasNcryptsec(
    account: IUnauthenticatedUser
  ): account is IUnauthenticatedUser & { ncryptsec: string } {
    if (account.ncryptsec) {
      return true;
    }

    return false;
  }

  logout(): void {
    this.next(null);
    sessionStorage.clear();
  }
}
