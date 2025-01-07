import { Button } from "@/components/ui/button";
import { Price } from "@/components/ui/price";
import { useCart } from "@/hook/use-cart";
import { products } from "@/lib/data";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Generate the static paths for each product ID
export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = products.find((p) => p.id === params.id);
  const cart = useCart();

  if (!product) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <Link
        href="/"
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground "
      >
        <ArrowLeft className="w-4 h-4" />
        Back to products
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="aspect-square relative">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <Price amount={product.price} className="text-2xl" />
          <p className="text-muted-foreground">{product.description}</p>
          <Button
            size="lg"
            className="w-full md:w-auto"
            onClick={() => cart.addItem(product)}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}