import { Button } from "@/components/ui/button";
import { ShoppingCart, Phone } from "lucide-react";
import heroImage from "@assets/stock_images/modern_agricultural__6811b211.jpg";

export default function Hero() {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/6281234567890', '_blank');
  };

  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 z-10" />
        <img 
          src={heroImage} 
          alt="Mesin pertanian modern di sawah Indonesia" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Mesin Pertanian Modern untuk Indonesia
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Tingkatkan produktivitas pertanian Anda dengan teknologi terkini. 
            Garansi resmi, pengiriman seluruh Indonesia, dan layanan purna jual terpercaya.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              onClick={scrollToProducts}
              data-testid="button-browse-products"
              className="text-lg"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Lihat Produk
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={openWhatsApp}
              data-testid="button-contact-whatsapp"
              className="text-lg bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            >
              <Phone className="w-5 h-5 mr-2" />
              Hubungi Kami
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 bg-primary/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white text-center">
            <div>
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm text-white/80">Tahun Pengalaman</div>
            </div>
            <div>
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm text-white/80">Petani Puas</div>
            </div>
            <div>
              <div className="text-3xl font-bold">Nasional</div>
              <div className="text-sm text-white/80">Pengiriman ke Seluruh Indonesia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
