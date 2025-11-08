export interface Product {
  id: number;
  name: string;
  price: number;
  seller: {
    name: string;
    id: number;
  };
}
