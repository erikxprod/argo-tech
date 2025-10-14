import { Shield, Truck, Wrench, HeadphonesIcon } from "lucide-react";

const guarantees = [
  {
    icon: Shield,
    title: "Garansi Resmi 2 Tahun",
    description: "Garansi resmi dari pabrikan untuk semua produk yang dijual"
  },
  {
    icon: Truck,
    title: "Pengiriman Nasional",
    description: "Pengiriman ke seluruh Indonesia dengan asuransi lengkap"
  },
  {
    icon: Wrench,
    title: "Layanan Purna Jual",
    description: "Suku cadang original dan teknisi berpengalaman siap membantu"
  },
  {
    icon: HeadphonesIcon,
    title: "Dukungan 24/7",
    description: "Tim customer service siap membantu Anda kapan saja"
  },
];

export default function Guarantee() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Jaminan & Layanan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami berkomitmen memberikan pelayanan terbaik untuk Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guarantees.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
