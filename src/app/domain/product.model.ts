import { IProductSpec } from './product-spec.model';

export interface IProduct {
  stall: string;
  name: string;
  description: string;
  images: string[];

  /**
   * Value in msats
   */
  price: number;
  specs: IProductSpec[];
}
