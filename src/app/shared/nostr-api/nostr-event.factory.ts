import { Injectable } from '@angular/core';
import { IAuctionBid } from '@domain/auction-bid.model';
import { NostrEventKind } from '@domain/nostr-event-kind.enum';
import { NostrUser } from '@domain/nostr-user';
import { IProduct } from '@domain/product.model';
import moment from 'moment';
import { Event, UnsignedEvent, getEventHash, getSignature } from 'nostr-tools';

@Injectable()
export class NostrEventFactory {

  private getCurrentTimestamp(): number {
    const oneMillisecond = 1000;
    return Math.floor(Date.now() / oneMillisecond);
  }

  /**
   * @param expireIn time in seconds to expire, default to 60
   * @returns expiration timestamp
   */
  getExpirationTimestamp(expireIn: number): string {
    const oneMillisecond = 1000;
    const expirationTimestamp = Math.floor(Date.now() / oneMillisecond) + expireIn;
    return String(expirationTimestamp);
  }

  /**
   * NIP 15
   * https://github.com/nostr-protocol/nips/blob/master/15.md
   */
  async createStallEvent(you: Required<NostrUser>, description: string): Promise<Event> {
    const unsignedEvent = {
      id: '',
      kind: NostrEventKind.ProductsStall,
      description,
      currency: 'msat',
      pubkey: you.publicKeyHex,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      created_at: this.getCurrentTimestamp(),
      tags: [],
      shipping: []
    };

    unsignedEvent.id = getEventHash(unsignedEvent as object as UnsignedEvent);
    const sig = getSignature(unsignedEvent as object as UnsignedEvent, you.privateKeyHex);

    return Promise.resolve({ sig, ...unsignedEvent } as object as Event);
  }

  /**
   * NIP 15
   * https://github.com/nostr-protocol/nips/blob/master/15.md
   */
  async createProductEvent(
    you: Required<NostrUser>,
    product: IProduct,
    expirationDate: moment.Moment
  ): Promise<Event> {
    const unsignedEvent = {
      id: '',
      stall_id: product.stall,
      kind: NostrEventKind.Product,
      name: product.name,
      description: product.description,
      images: product.images,
      currency: 'msat',
      price: product.price,
      pubkey: you.publicKeyHex,
      specs: product.specs.map(spec => [ spec.name, spec.value ]),
      quantity: 1, // this is an auction software, not a marketplace
      // eslint-disable-next-line @typescript-eslint/naming-convention
      created_at: this.getCurrentTimestamp(),
      tags: [
        ['expiration', this.getExpirationTimestamp(
          this.calculateExpirationTimeFromNow(expirationDate)
        )]
      ],
      shipping: []
    };

    unsignedEvent.id = getEventHash(unsignedEvent as object as UnsignedEvent);
    const sig = getSignature(unsignedEvent as object as UnsignedEvent, you.privateKeyHex);

    return Promise.resolve({ sig, ...unsignedEvent } as object as Event);
  }

  private calculateExpirationTimeFromNow(
    expirationDate: moment.Moment
  ): number {
    const now = moment();
    const differenceInMilliseconds = expirationDate.diff(now);
    return differenceInMilliseconds;
  }

  /**
   * NIP 90
   * https://github.com/nostr-protocol/nips/blob/master/90.md
   */
  async createBidEvent(you: Required<NostrUser>, bid: IAuctionBid) {
    const unsignedEvent = {
      id: '',
      kind: NostrEventKind.Text,
      content: bid.comment,
      pubkey: you.publicKeyHex,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      created_at: this.getCurrentTimestamp(),
      tags: [
        ['e', bid.idProduto],
        ['bid', bid.amount]
      ]
    };

    unsignedEvent.id = getEventHash(unsignedEvent as object as Event);
    const sig = getSignature(unsignedEvent as object as Event, you.privateKeyHex);

    return Promise.resolve({ sig, ...unsignedEvent } as object as Event);
  }
}
