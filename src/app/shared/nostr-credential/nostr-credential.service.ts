import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NostrCredentialService {

  credentialsStore: 'session' | 'signer' = 'session';

  constructor() { }

  getPublicKey() {

  }

  signEvent() {

  }

  canSetRelays() {

  }

  getRelays() {

  }

  setRelays() {

  }

  onAccountChanged() {
    
  }

  offAccountChanged() {
    
  }

  nip4Encrypt() {

  }

  nip4Decrypt() {

  }
}
