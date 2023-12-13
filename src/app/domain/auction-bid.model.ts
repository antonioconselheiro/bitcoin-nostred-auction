export interface IAuctionBid {
  idProduto: string;
  comment: string;
  /**
   * in msat
   */
  amount: number;
}