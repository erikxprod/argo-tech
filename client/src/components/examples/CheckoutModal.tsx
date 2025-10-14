import { useState } from 'react';
import CheckoutModal from '../CheckoutModal';
import { CartProvider } from '@/lib/cart-context';
import { Button } from '@/components/ui/button';

export default function CheckoutModalExample() {
  const [open, setOpen] = useState(true);

  return (
    <CartProvider>
      <Button onClick={() => setOpen(true)}>Open Checkout</Button>
      <CheckoutModal open={open} onOpenChange={setOpen} />
    </CartProvider>
  );
}
