export interface IProduct {
  num: string;
  brand: string;
  model: string;
  color: string[];
  sizes: size;
  price: number;
  favorite: boolean;
  year: number;
  images?: [string, string];
}

export type size = { [key: number]: number };
