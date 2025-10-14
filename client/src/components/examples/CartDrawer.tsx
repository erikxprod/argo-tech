import { useState } from 'react';
import CartDrawer from '../CartDrawer';
import { CartProvider } from '@/lib/cart-context';
import { Button } from '@/components/ui/button';

export default function CartDrawerExample() {
  const [open, setOpen] = useState(true);

  return (
    <CartProvider>
      <Button onClick={() => setOpen(true)}>Open Cart</Button>
      <CartDrawer 
        open={open} 
        onOpenChange={setOpen}
        onCheckout={() => console.log('Checkout triggered')}
      />
    </CartProvider>
  );
}
