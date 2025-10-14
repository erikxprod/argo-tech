import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { formatCurrency } from "@/lib/utils";
import { useState } from "react";

interface CartDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCheckout: () => void;
}

export default function CartDrawer({ open, onOpenChange, onCheckout }: CartDrawerProps) {
  const { items, total, updateQuantity, removeItem, clearCart } = useCart();

  const handleCheckout = () => {
    onCheckout();
    onOpenChange(false);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Keranjang Belanja</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <p className="text-muted-foreground mb-4">Keranjang Anda kosong</p>
            <Button onClick={() => onOpenChange(false)} data-testid="button-continue-shopping">
              Lanjut Belanja
            </Button>
          </div>
        ) : (
          <div className="mt-8 space-y-6">
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 rounded-lg border" data-testid={`cart-item-${item.id}`}>
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold truncate" data-testid={`text-cart-item-name-${item.id}`}>
                      {item.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {formatCurrency(item.price)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => updateQuantity(item.id, item.qty - 1)}
                        disabled={item.qty <= 1}
                        data-testid={`button-decrease-qty-${item.id}`}
                        className="h-8 w-8"
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span className="w-12 text-center font-medium" data-testid={`text-qty-${item.id}`}>
                        {item.qty}
                      </span>
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => updateQuantity(item.id, item.qty + 1)}
                        data-testid={`button-increase-qty-${item.id}`}
                        className="h-8 w-8"
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                      <Button
                        size="icon"
                        variant="destructive"
                        onClick={() => removeItem(item.id)}
                        data-testid={`button-remove-${item.id}`}
                        className="h-8 w-8 ml-auto"
                      >
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold" data-testid={`text-subtotal-${item.id}`}>
                      {formatCurrency(item.price * item.qty)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold">Total</span>
                <span className="text-2xl font-bold text-primary" data-testid="text-cart-total">
                  {formatCurrency(total)}
                </span>
              </div>
              
              <div className="space-y-2">
                <Button 
                  className="w-full" 
                  size="lg" 
                  onClick={handleCheckout}
                  data-testid="button-checkout"
                >
                  Checkout
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full" 
                  onClick={clearCart}
                  data-testid="button-clear-cart"
                >
                  Kosongkan Keranjang
                </Button>
              </div>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
