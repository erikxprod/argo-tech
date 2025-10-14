import TestimonialCard from "./TestimonialCard";
import farmer1 from "@assets/stock_images/indonesian_farmer_sm_2e9edef6.jpg";
import farmer2 from "@assets/stock_images/indonesian_farmer_sm_47729ec9.jpg";
import farmer3 from "@assets/stock_images/indonesian_farmer_sm_fac08baa.jpg";

const testimonials = [
  {
    name: "Budi Santoso",
    location: "Subang, Jawa Barat",
    testimonial: "Mesin pemanen yang saya beli sangat membantu meningkatkan produktivitas sawah saya. Pelayanan sangat memuaskan!",
    image: farmer1,
  },
  {
    name: "Siti Aminah",
    location: "Demak, Jawa Tengah",
    testimonial: "Kualitas mesin terbaik dan harga sangat bersaing. Pengiriman cepat dan tim support responsif. Highly recommended!",
    image: farmer2,
  },
  {
    name: "Ahmad Yani",
    location: "Karawang, Jawa Barat",
    testimonial: "Investasi terbaik untuk pertanian saya. Mesin bekerja dengan sempurna dan garansi yang diberikan sangat meyakinkan.",
    image: farmer3,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Testimoni Pelanggan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kepuasan pelanggan adalah prioritas kami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
