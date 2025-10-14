import Header from '../Header';
import { CartProvider } from '@/lib/cart-context';
import { ThemeProvider } from '@/lib/theme-provider';

export default function HeaderExample() {
  return (
    <ThemeProvider>
      <CartProvider>
        <Header onCartClick={() => console.log('Cart clicked')} />
      </CartProvider>
    </ThemeProvider>
  );
}
