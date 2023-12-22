import { Injectable } from "@angular/core";
import { NostrEventKind } from "@domain/nostr-event-kind.enum";
import { TNostrPublic } from "@domain/nostr-public.type";
import { NostrUser } from "@domain/nostr-user";
import { NostrService } from "@shared/nostr-api/nostr.service";
import { Event } from 'nostr-tools';

@Injectable()
export class ProfileApi {

  constructor(
    private nostrService: NostrService
  ) { }

  loadProfiles(npubs: Array<TNostrPublic>): Promise<Event[]> {
    return this.nostrService.request([
      {
        kinds: [
          Number(NostrEventKind.Metadata)
        ],
        authors: npubs.map(npub => (new NostrUser(npub)).publicKeyHex)
      }
    ])
  }
}
