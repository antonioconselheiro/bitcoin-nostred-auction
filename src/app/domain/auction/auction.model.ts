export interface IAuction {
  id: string;
  name: string;
  description: string;
  images: IAuctionImage[];
  publishDate: Date,
  completionDate: Date;
  highestBid: number;
  bidderName: string
}

export interface IAuctionImage {
  url: string;
  isCover: boolean
}
