import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auction',
    loadChildren: () => import('./pages/auction/auction.module').then(m => m.AuctionModule)
  },

  {
    path: 'auctions-list',
    loadChildren: () => import('./pages/auctions-list/auctions-list.module').then(m => m.AuctionsListModule)
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
