import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { buyerInfoSchema, type BuyerInfo } from "@shared/schema";
import { useCart } from "@/lib/cart-context";
import { formatCurrency, generateWhatsAppMessage, generateEmailMessage } from "@/lib/utils";
import { SiWhatsapp } from "react-icons/si";
import { Mail } from "lucide-react";

interface CheckoutModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const OWNER_PHONE = '6281234567890';
const OWNER_EMAIL = 'owner@agromesin.com';

export default function CheckoutModal({ open, onOpenChange }: CheckoutModalProps) {
  const { items, total } = useCart();
  const { register, handleSubmit, formState: { errors } } = useForm<BuyerInfo>({
    resolver: zodResolver(buyerInfoSchema),
  });

  const onSubmitWhatsApp = (data: BuyerInfo) => {
    const message = generateWhatsAppMessage(items, total, data);
    const url = `https://wa.me/${OWNER_PHONE}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const onSubmitEmail = (data: BuyerInfo) => {
    const { subject, body } = generateEmailMessage(items, total, data);
    const url = `mailto:${OWNER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Checkout Pesanan</DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="font-semibold mb-4">Ringkasan Pesanan</h3>
            <div className="space-y-3">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>
                    {item.name} x{item.qty}
                  </span>
                  <span className="font-medium">
                    {formatCurrency(item.price * item.qty)}
                  </span>
                </div>
              ))}
              <div className="border-t pt-3 flex justify-between font-bold">
                <span>Total</span>
                <span className="text-primary">{formatCurrency(total)}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Informasi Pembeli</h3>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Nama Lengkap *</Label>
                <Input 
                  id="name" 
                  {...register('name')} 
                  placeholder="Masukkan nama Anda"
                  data-testid="input-buyer-name"
                />
                {errors.name && (
                  <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="phone">Nomor Telepon / WhatsApp *</Label>
                <Input 
                  id="phone" 
                  {...register('phone')} 
                  placeholder="08123456789"
                  data-testid="input-buyer-phone"
                />
                {errors.phone && (
                  <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="address">Alamat (Opsional)</Label>
                <Textarea 
                  id="address" 
                  {...register('address')} 
                  placeholder="Alamat lengkap Anda"
                  data-testid="input-buyer-address"
                  rows={2}
                />
              </div>

              <div>
                <Label htmlFor="notes">Catatan (Opsional)</Label>
                <Textarea 
                  id="notes" 
                  {...register('notes')} 
                  placeholder="Catatan tambahan untuk pesanan"
                  data-testid="input-buyer-notes"
                  rows={2}
                />
              </div>

              <div className="space-y-2 pt-2">
                <Button 
                  type="button"
                  className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white"
                  onClick={handleSubmit(onSubmitWhatsApp)}
                  data-testid="button-send-whatsapp"
                >
                  <SiWhatsapp className="w-5 h-5 mr-2" />
                  Kirim via WhatsApp
                </Button>
                <Button 
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={handleSubmit(onSubmitEmail)}
                  data-testid="button-send-email"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Kirim via Email
                </Button>
              </div>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
