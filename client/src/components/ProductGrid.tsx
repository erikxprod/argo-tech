import ProductCard from "./ProductCard";
import { products } from "@/lib/products";

export default function ProductGrid() {
  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Katalog Produk Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pilihan mesin pertanian berkualitas tinggi dengan teknologi modern untuk meningkatkan hasil panen Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
