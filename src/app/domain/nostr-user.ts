import { getPublicKey, nip19 } from 'nostr-tools';

export class NostrUser {

  /**
   * nsec
   */
  readonly nostrSecret?: string;

  /**
   * npub
   */
  readonly nostrPublic: string;

  /**
   * nsec decoded
   */
  readonly privateKeyHex?: Uint8Array;

  /**
   * npub decoded
   */
  readonly publicKeyHex: string;

  constructor(
    /**
     * npub or nsec
     */
    nostrString: string
  ) {
    const { type, data } = nip19.decode(nostrString);
    if (type === 'nsec') {
      this.nostrSecret = nostrString;
      this.privateKeyHex = data;
      this.publicKeyHex = getPublicKey(this.privateKeyHex);
      this.nostrPublic = nip19.npubEncode(this.publicKeyHex);
    } else if (type === 'npub') {
      this.nostrPublic = nostrString;
      this.publicKeyHex = data.toString();

      this.nostrSecret = undefined;
      this.privateKeyHex = undefined;
    } else {
      throw new Error('Invalid argument, NostrUser expect nsec or npub string');
    }
  }

  static fromPubkey(pubkey: string): NostrUser {
    return new NostrUser(nip19.npubEncode(pubkey));
  }

  static fromNostrSecret(nsec: string): Required<NostrUser> {
    return new NostrUser(nsec) as Required<NostrUser>;
  }

  toString(): string {
    return this.publicKeyHex;
  }
}