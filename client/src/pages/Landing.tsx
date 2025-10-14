import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Testimonials from "@/components/Testimonials";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import CheckoutModal from "@/components/CheckoutModal";

export default function Landing() {
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const handleCheckout = () => {
    setCheckoutOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onCartClick={() => setCartOpen(true)} />
      <main className="flex-1">
        <Hero />
        <ProductGrid />
        <Testimonials />
        <Guarantee />
        <FAQ />
      </main>
      <Footer />
      
      <CartDrawer 
        open={cartOpen} 
        onOpenChange={setCartOpen}
        onCheckout={handleCheckout}
      />
      <CheckoutModal 
        open={checkoutOpen} 
        onOpenChange={setCheckoutOpen}
      />
    </div>
  );
}
