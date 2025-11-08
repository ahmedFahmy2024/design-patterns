import { Product } from "./product-types";

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div>
      {products.map((product: Product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <div>
            <h3>seller</h3>
            <p>{product.seller.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
