import { Component } from '@angular/core';
import { IAuction } from '@domain/auction/auction.model';

@Component({
  selector: 'auc-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
// TODO: Does it make more sense to be a ActionsList?
export class ProductsListComponent {
  // FIXME: MOCK DATA, this guy (or the a filter) should be an input
  auctions: IAuction[] = [
    {
      id: '123',
      name: 'Ir no podcast',
      description:
        'Neque porro quisquam est qui dolorem ipsum Neque porro quisquam est qui dolorem ipsum Neque porro quisquam est qui dolorem ipsumNeque porro quisquam est qui dolorem ipsumNeque porro quisquam est qui dolorem ipsumNeque porro quisquam est qui dolorem ipsumNeque porro quisquam est qui dolorem ipsum',
      bidderName: 'João Maria de Santo Agostinho',
      publishDate: new Date(2024, 3, 20, 19, 32, 0),
      completionDate: new Date(2024, 3, 21, 3, 23, 0),
      highestBid: 1000,
      images: [{
        url: 'https://i.nostr.build/resp/360p/5AkK.jpg',
        isCover: true
      }],
    },
    {
      id: '321',
      name: 'Ir no podcast 2',
      description: 'Quia dolor sit amet, consectetur, adipisci velit',
      bidderName: 'Eärendil',
      publishDate: new Date(2024, 3, 20, 17, 32, 0),
      completionDate: new Date(2024, 3, 21, 0, 0, 0),
      highestBid: 500,
      images: [{
        url: 'https://i.nostr.build/resp/360p/nb5112.png',
        isCover: true
      }],
    },
    {
      id: '222',
      name: 'Ir no podcast 3',
      description: 'Quia dolor sit amet, consectetur, adipisci velit',
      bidderName: 'Renato Crackiani',
      publishDate: new Date(2024, 3, 20, 17, 32, 0),
      completionDate: new Date(2024, 9, 3, 20, 15, 0),
      highestBid: 500,
      images: [{
        url: 'https://i.nostr.build/resp/360p/nb5112.png',
        isCover: true
      }],
    },
    {
      id: '441',
      name: 'Ir no podcast 3',
      description: 'Quia dolor sit amet, consectetur, adipisci velit',
      bidderName: 'Renato Crackiani',
      publishDate: new Date(2023, 3, 18, 17, 32, 0),
      completionDate: new Date(2023, 11, 23, 13, 10, 10),
      highestBid: 500,
      images: [{
        url: 'https://i.nostr.build/resp/360p/nb5112.png',
        isCover: true
      }],
    },
    {
      id: '658',
      name: 'Ir no podcast 3',
      description: 'Quia dolor sit amet, consectetur, adipisci velit',
      bidderName: 'Elrond',
      publishDate: new Date(2023, 10, 23, 13, 10, 10),
      completionDate: new Date(2023, 11, 23, 13, 10, 10),
      highestBid: 500,
      images: [{
        url: 'https://i.nostr.build/resp/360p/nb5112.png',
        isCover: true
      }],
    }
  ];

  trackByFn(index: number, auction: IAuction): string {
    return auction.id;
  }

  getBarPercentage(auctionId: string): string {
    const nowDate = new Date().getTime();
    const auction = this.auctions.find(auction => auction.id === auctionId);

    const expirationAuctionDate = auction?.completionDate.getTime()

    const remainingTime = -((nowDate || 0) - (expirationAuctionDate || 0));
    
    const totalTime = (expirationAuctionDate || 0) - (auction?.publishDate.getTime() || 0);

    let progress = (remainingTime/ totalTime) * 100;

    if (progress < 0){
      progress = 0
    }

    return (progress.toFixed(2) + '%')
  }
}
