'use client';

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/hook/use-cart";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Price } from "./ui/price";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";

export function CartSheet() {
  const cart = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-4 w-4" />
          {cart.items.length > 0 && (
            <span className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
              {cart.items.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-white">Shopping Cart</SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-[calc(100vh-8rem)] py-4">
          {cart.items.length === 0 ? (
            <p className="text-center text-white">Your cart is empty</p>
          ) : (
            <div className="space-y-4">
              {cart.items.map((item) => (
                <div key={item.product.id} className="flex gap-4">
                  <div className="relative h-16 w-16">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{item.product.name}</h3>
                    <div className="flex items-center justify-between">
                      <Price amount={item.product.price} />
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => {
                            if (item.quantity > 1) {
                              cart.updateQuantity(item.product.id, item.quantity - 1);
                            } else {
                              cart.removeItem(item.product.id);
                            }
                          }}
                        >
                          -
                        </Button>
                        <span>{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => cart.updateQuantity(item.product.id, item.quantity + 1)}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
        {cart.items.length > 0 && (
          <div className="pt-4">
            <Separator className="my-4" />
            <div className="flex items-center justify-between">
              <span className="font-semibold">Total:</span>
              <Price
                amount={cart.total}
                className="text-lg"
              />
            </div>
            <Button className="w-full mt-4">
              Checkout
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}