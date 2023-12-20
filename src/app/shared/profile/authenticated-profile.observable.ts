import { Injectable } from '@angular/core';
import { IProfile } from '@domain/profile.interface';
import { IUnauthenticatedUser } from '@shared/security-service/unauthenticated-user';
import { BehaviorSubject } from 'rxjs';
import { ProfileEncrypt } from './profile.encrypt';
import { ProfileProxy } from './profile.proxy';
import { NostrUser } from '@domain/nostr-user';

/**
 * This class responsible for caching event information
 * involving profiles, including events: Metadata (0)
 * 
 * Them main observable of this class emit the authenticated
 * profile metadata
 */
@Injectable()
export class AuthenticatedProfileObservable extends BehaviorSubject<IProfile | null> {

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
    // encrypted:aes?iv=5531709c4c3c43634dc45e85ad78147c;U2FsdGVkX18b2k1fZD1XJSVXe2jWqSVBP/E0wT1gxSwIhOE4MkQBzcaPzyibIm/GbI80bQ9tmshoTiDvlWCGQx6Fx+087eEDrieTtuwC6lM=
    const cypher = encryptedQueryString.replace(/^encrypted:.*;/, '');
    const iv = encryptedQueryString.replace(/^.*\?iv=|;.*$/, '');

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
