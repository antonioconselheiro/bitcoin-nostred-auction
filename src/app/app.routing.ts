import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auctions-list',
    loadChildren: () => import('./pages/auctions-list/auctions-list.module').then(m => m.AuctionsListModule)
  },

  {
    path: 'auction',
    loadChildren: () => import('./pages/auction/auction.module').then(m => m.AuctionModule)
  },

  {
    path: 'my-auctions',
    loadChildren: () => import('./pages/my-auctions/my-auctions.module').then(m => m.MyAuctionsModule)
  },

  {
    path: 'my-bids',
    loadChildren: () => import('./pages/my-bids/my-bids.module').then(m => m.MyBidsModule)
  },

  {
    path: 'qrcode-read',
    loadChildren: () => import('./pages/qrcode-read/qrcode-read.module').then(m => m.QrcodeReadModule)
  },

  {
    path: 'network',
    loadChildren: () => import('./pages/network/network.module').then(m => m.NetworkModule)
  },

  {
    path: 'auction-create',
    loadChildren: () => import('./pages/auction-create/auction-create.module').then(m => m.AuctionCreateModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chats/chats.module').then(m => m.ChatsModule)

  },

  {
    path: '',
    redirectTo: 'auctions-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRouting { }
