import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount);
}

export function generateWhatsAppMessage(
  items: Array<{ name: string; qty: number; price: number }>,
  total: number,
  buyerInfo: { name: string; phone: string; address?: string; notes?: string }
): string {
  const storeName = 'AgroMesin';
  const date = new Date().toISOString();
  
  let message = `Halo, saya ingin memesan:\nToko: ${storeName}\nTanggal: ${date}\n\nItems:\n`;
  
  items.forEach((item, index) => {
    const subtotal = item.price * item.qty;
    message += `${index + 1}) ${item.name} — Qty: ${item.qty} — Harga: ${formatCurrency(item.price)} — Subtotal: ${formatCurrency(subtotal)}\n`;
  });
  
  message += `\nTotal: ${formatCurrency(total)}\n\n`;
  message += `Nama Pembeli: ${buyerInfo.name}\n`;
  message += `No. HP: ${buyerInfo.phone}\n`;
  if (buyerInfo.address) message += `Alamat: ${buyerInfo.address}\n`;
  if (buyerInfo.notes) message += `Catatan: ${buyerInfo.notes}\n`;
  message += `\nMohon konfirmasi ketersediaan & cara pembayaran. Terima kasih.`;
  
  return message;
}

export function generateEmailMessage(
  items: Array<{ name: string; qty: number; price: number }>,
  total: number,
  buyerInfo: { name: string; phone: string; address?: string; notes?: string }
): { subject: string; body: string } {
  const storeName = 'AgroMesin';
  const date = new Date().toISOString();
  
  const subject = `Pesanan Mesin Pertanian dari ${buyerInfo.name}`;
  
  let body = `Pesanan Baru dari Website ${storeName}\n\n`;
  body += `Tanggal: ${date}\n\n`;
  body += `Detail Pesanan:\n`;
  
  items.forEach((item, index) => {
    const subtotal = item.price * item.qty;
    body += `${index + 1}. ${item.name}\n   Qty: ${item.qty} | Harga: ${formatCurrency(item.price)} | Subtotal: ${formatCurrency(subtotal)}\n`;
  });
  
  body += `\nTotal Pesanan: ${formatCurrency(total)}\n\n`;
  body += `Informasi Pembeli:\n`;
  body += `Nama: ${buyerInfo.name}\n`;
  body += `No. HP: ${buyerInfo.phone}\n`;
  if (buyerInfo.address) body += `Alamat: ${buyerInfo.address}\n`;
  if (buyerInfo.notes) body += `Catatan: ${buyerInfo.notes}\n`;
  
  return { subject, body };
}
