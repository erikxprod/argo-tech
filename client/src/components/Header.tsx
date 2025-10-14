import { Button } from "@/components/ui/button";
import { ShoppingCart, Moon, Sun } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { useTheme } from "@/lib/theme-provider";
import { Badge } from "@/components/ui/badge";

interface HeaderProps {
  onCartClick: () => void;
}

export default function Header({ onCartClick }: HeaderProps) {
  const { itemCount } = useCart();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold text-primary">
          AgroMesin
        </h1>
        
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            data-testid="button-theme-toggle"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </Button>
          
          <Button
            variant="outline"
            onClick={onCartClick}
            data-testid="button-open-cart"
            className="relative"
          >
            <ShoppingCart className="w-5 h-5" />
            {itemCount > 0 && (
              <Badge 
                className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center p-0"
                data-testid="badge-cart-count"
              >
                {itemCount}
              </Badge>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
