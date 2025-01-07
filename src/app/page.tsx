import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/data";

export default function Home() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold">Featured Products</h2>
      <h6 className="text-xl font-bold">You can add to Cart</h6>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
