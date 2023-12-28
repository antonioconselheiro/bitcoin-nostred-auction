export interface IAuction {
  id: string;
  name: string;
  description: string;
  images: IAuctionImage[];
  completionDate: Date;
  highestBid: number;
  bidderName: string
}

export interface IAuctionImage {
  url: string;
  isCover: boolean
}
