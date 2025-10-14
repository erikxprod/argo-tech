import ProductCard from '../ProductCard';
import { CartProvider } from '@/lib/cart-context';
import tractorImg from '@assets/stock_images/agricultural_tractor_ff5b52d1.jpg';

export default function ProductCardExample() {
  const mockProduct = {
    id: 'P002',
    name: 'Traktor Pertanian T-450',
    type: 'Traktor',
    description: 'Traktor serbaguna untuk membajak, mengangkut, dan berbagai kebutuhan pertanian',
    specs: {
      power: '85 HP',
      capacity: '2 Ton',
    },
    price: 95000000,
    image: tractorImg,
  };

  return (
    <CartProvider>
      <div className="max-w-sm">
        <ProductCard product={mockProduct} />
      </div>
    </CartProvider>
  );
}
