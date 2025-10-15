import { SiWhatsapp, SiFacebook, SiInstagram, SiYoutube } from "react-icons/si";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">AgroMesin</h3>
            <p className="text-muted-foreground">
              Solusi mesin pertanian modern untuk meningkatkan produktivitas pertanian Indonesia
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Produk</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Mesin Pemanen</li>
              <li>Traktor Pertanian</li>
              <li>Mesin Tanam</li>
              <li>Sistem Irigasi</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href="https://wa.me/62895414357400" className="hover:text-primary" data-testid="link-footer-phone">
                  +62 895-4143-57400
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:candrasuryapermana79@gmail.com" className="hover:text-primary" data-testid="link-footer-email">
                  candrasuryapermana79@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Ikuti Kami</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary" data-testid="link-whatsapp">
                <SiWhatsapp className="w-8 h-8" />
              </a>
              <a href="#" className="hover:text-primary" data-testid="link-facebook">
                <SiFacebook className="w-8 h-8" />
              </a>
              <a href="#" className="hover:text-primary" data-testid="link-instagram">
                <SiInstagram className="w-8 h-8" />
              </a>
              <a href="#" className="hover:text-primary" data-testid="link-youtube">
                <SiYoutube className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 AgroMesin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
