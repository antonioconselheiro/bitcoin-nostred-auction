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

  authenticateAccount(account: IUnauthenticatedUser & { nsecEncrypted: string }, pin: string): Promise<IProfile> {
    const user = this.profileEncrypt.decryptAccount(account, pin);
    return this.autenticate(user);
  }

  authenticateEncryptedEncode(encryptedQueryString: string, pin: string): Promise<IProfile> {
    const { cypher, iv } = this.castEncryptedQueryStringToObject(encryptedQueryString);
    const nsec = this.profileEncrypt.decryptAES(cypher, pin, iv);

    return this.autenticate(NostrUser.fromNostrSecret(nsec));
  }

  private castEncryptedQueryStringToObject(encryptedQueryString: string): {
    cypher: string;
    iv: string;
  } {
    const cypher = encryptedQueryString.replace(/^encrypted:.*;/, '');
    const iv = encryptedQueryString.replace(/^.*\?iv=|;.*$/g, '');

    return { cypher, iv };
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

  hasEncriptedNostrSecret(
    account: IUnauthenticatedUser
  ): account is IUnauthenticatedUser & { nsecEncrypted: string } {
    if (account.nsecEncrypted) {
      return true;
    }

    return false;
  }

  logout(): void {
    this.next(null);
    sessionStorage.clear();
  }
}
