import ProductGrid from '../ProductGrid';
import { CartProvider } from '@/lib/cart-context';

export default function ProductGridExample() {
  return (
    <CartProvider>
      <ProductGrid />
    </CartProvider>
  );
}
