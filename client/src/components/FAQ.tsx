import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Apakah ada garansi untuk produk yang dijual?",
    answer: "Ya, semua produk kami dilengkapi dengan garansi resmi dari pabrikan selama 2 tahun. Garansi mencakup kerusakan komponen dan layanan perbaikan gratis."
  },
  {
    question: "Bagaimana cara pemesanan dan pembayaran?",
    answer: "Anda bisa memesan melalui website ini dengan menambahkan produk ke keranjang, lalu checkout via WhatsApp atau Email. Kami menerima pembayaran transfer bank, cicilan, dan COD untuk wilayah tertentu."
  },
  {
    question: "Berapa lama waktu pengiriman?",
    answer: "Waktu pengiriman bervariasi tergantung lokasi. Untuk Jawa: 3-5 hari kerja, luar Jawa: 5-10 hari kerja. Semua pengiriman dilengkapi dengan asuransi dan tracking number."
  },
  {
    question: "Apakah tersedia layanan instalasi dan training?",
    answer: "Ya, kami menyediakan layanan instalasi dan training penggunaan mesin oleh teknisi berpengalaman. Layanan ini sudah termasuk dalam pembelian untuk wilayah tertentu."
  },
  {
    question: "Bagaimana jika mesin mengalami kerusakan?",
    answer: "Hubungi customer service kami segera. Kami akan mengirim teknisi untuk melakukan pengecekan. Jika masih dalam garansi, perbaikan gratis. Kami juga menyediakan suku cadang original."
  },
  {
    question: "Apakah bisa membeli secara kredit?",
    answer: "Ya, kami bekerja sama dengan beberapa lembaga pembiayaan untuk memberikan kemudahan kredit dengan bunga kompetitif. Proses persetujuan cepat dan persyaratan mudah."
  },
];

export default function FAQ() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pertanyaan Umum
          </h2>
          <p className="text-lg text-muted-foreground">
            Temukan jawaban untuk pertanyaan yang sering diajukan
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
