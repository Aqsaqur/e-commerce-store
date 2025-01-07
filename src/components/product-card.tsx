'use client';

import { Product } from "@/lib/types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Price } from "./ui/price";
import Image from "next/image";
import { useCart } from "@/hook/use-cart";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const cart = useCart();

  return (
    <Card className="overflow-hidden">
      <Link href={`/products/${product.id}`}>
        <div className="aspect-square relative">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
        <CardHeader>
          <CardTitle className="line-clamp-1">{product.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>
        </CardContent>
      </Link>
      <CardFooter className="flex items-center justify-between">
        <Price amount={product.price} />
        <Button
          size="sm"
          onClick={() => cart.addItem(product)}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}