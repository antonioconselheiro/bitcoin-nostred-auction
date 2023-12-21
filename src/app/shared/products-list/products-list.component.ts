import { Component } from '@angular/core';
import { Auction } from '@domain/auction/auction.model';

@Component({
  selector: 'auc-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
// TODO: Does it make more sense to be a ActionsList?
export class ProductsListComponent {
  // FIXME: MOCK DATA, this guy (or the a filter) should be an input
  auctions: Auction[] = [
    {
      id: '123',
      name: 'Ir no podcast',
      description:
        'Neque porro quisquam est qui dolorem ipsum Neque porro quisquam est qui dolorem ipsum Neque porro quisquam est qui dolorem ipsumNeque porro quisquam est qui dolorem ipsumNeque porro quisquam est qui dolorem ipsumNeque porro quisquam est qui dolorem ipsumNeque porro quisquam est qui dolorem ipsum',
      bidderName: 'João Maria de Santo Agostinho',
      expirationDate: new Date(2023, 11, 16, 14, 10, 0),
      highestBid: 1000,
      image: 'https://i.nostr.build/resp/360p/5AkK.jpg',
    },
    {
      id: '321',
      name: 'Ir no podcast 2',
      description: 'Quia dolor sit amet, consectetur, adipisci velit',
      bidderName: 'Eärendil',
      expirationDate: new Date(2023, 11, 23, 13, 10, 10),
      highestBid: 500,
      image: 'https://i.nostr.build/resp/360p/nb5112.png',
    },
    {
      id: '222',
      name: 'Ir no podcast 3',
      description: 'Quia dolor sit amet, consectetur, adipisci velit',
      bidderName: 'Renato Crackiani',
      expirationDate: new Date(2023, 11, 23, 13, 10, 10),
      highestBid: 500,
      image: 'https://i.nostr.build/resp/360p/nb5112.png',
    },
    {
      id: '441',
      name: 'Ir no podcast 3',
      description: 'Quia dolor sit amet, consectetur, adipisci velit',
      bidderName: 'Renato Crackiani',
      expirationDate: new Date(2023, 11, 23, 13, 10, 10),
      highestBid: 500,
      image: 'https://i.nostr.build/resp/360p/nb5112.png',
    },
    {
      id: '658',
      name: 'Ir no podcast 3',
      description: 'Quia dolor sit amet, consectetur, adipisci velit',
      bidderName: 'Elrond',
      expirationDate: new Date(2023, 11, 23, 13, 10, 10),
      highestBid: 500,
      image: 'https://i.nostr.build/resp/360p/nb5112.png',
    }
  ];

  trackByFn(index: number, auction: Auction): string {
    return auction.id;
  }
}
