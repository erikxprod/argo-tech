import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import type { Product } from "@shared/schema";
import { formatCurrency } from "@/lib/utils";
import { useCart } from "@/lib/cart-context";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addItem(product);
    toast({
      title: "Ditambahkan ke keranjang",
      description: `${product.name} berhasil ditambahkan`,
    });
  };

  return (
    <Card className="overflow-hidden hover-elevate active-elevate-2 transition-all">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Badge className="absolute top-4 left-4 z-10" data-testid={`badge-type-${product.id}`}>
          {product.type}
        </Badge>
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2" data-testid={`text-product-name-${product.id}`}>
          {product.name}
        </h3>
        <p className="text-muted-foreground mb-4">{product.description}</p>
        
        <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
          {product.specs.power && (
            <div>
              <span className="text-muted-foreground">Daya:</span>
              <span className="ml-2 font-medium">{product.specs.power}</span>
            </div>
          )}
          {product.specs.capacity && (
            <div>
              <span className="text-muted-foreground">Kapasitas:</span>
              <span className="ml-2 font-medium">{product.specs.capacity}</span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between gap-4 mt-6">
          <div className="text-2xl font-bold text-primary" data-testid={`text-price-${product.id}`}>
            {formatCurrency(product.price)}
          </div>
          <Button 
            onClick={handleAddToCart}
            data-testid={`button-add-to-cart-${product.id}`}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Tambah
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
