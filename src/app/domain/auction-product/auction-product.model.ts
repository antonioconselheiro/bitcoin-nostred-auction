export interface Auction {
  id: string;
  name: string;
  description: string;
  image: string;
  expirationDate: Date;
  highestBid: number;
  bidderName: string
}
