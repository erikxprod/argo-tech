# AgroMesin - Landing Page Mesin Pertanian

Website landing page penjualan mesin pertanian yang modern, responsif, dan dilengkapi dengan fitur keranjang belanja.

## Fitur Utama

- ✅ Landing page single-page dengan desain modern & profesional
- ✅ Hero section dengan call-to-action
- ✅ Katalog produk dengan grid layout responsif
- ✅ Shopping cart dengan localStorage persistence
- ✅ Checkout via WhatsApp dan Email
- ✅ Testimonial pelanggan
- ✅ Section garansi dan layanan
- ✅ FAQ dengan accordion
- ✅ Footer dengan informasi kontak
- ✅ Dark/Light mode toggle
- ✅ Responsive design (mobile, tablet, desktop)

## Struktur Proyek

```
├── client/
│   ├── src/
│   │   ├── components/       # Komponen UI
│   │   ├── pages/           # Halaman aplikasi
│   │   ├── lib/             # Utilities & context
│   │   └── hooks/           # Custom hooks
│   └── index.html
├── shared/
│   └── schema.ts            # Type definitions & schemas
└── server/                  # Backend (minimal)
```

## Cara Menjalankan Lokal

1. Install dependencies:
```bash
npm install
```

2. Jalankan development server:
```bash
npm run dev
```

3. Buka browser di `http://localhost:5000`

## Konfigurasi

### Mengubah Nomor WhatsApp Owner

Edit file `client/src/components/CheckoutModal.tsx`:

```typescript
const OWNER_PHONE = '62895414357400';  // Ganti dengan nomor WhatsApp Anda (format internasional)
```

Juga edit di `client/src/components/Hero.tsx` untuk tombol "Hubungi Kami":

```typescript
const openWhatsApp = () => {
  window.open('https://wa.me/62895414357400', '_blank');  // Ganti nomor di sini
};
```

Dan di `client/src/components/Footer.tsx`:

```typescript
<a href="https://wa.me/62895414357400" ...>  // Ganti nomor di sini
  +62 895-4143-57400
</a>
```

### Mengubah Email Owner

Edit file `client/src/components/CheckoutModal.tsx`:

```typescript
const OWNER_EMAIL = 'candrasuryapermana79@gmail.com';  // Ganti dengan email Anda
```

Dan di `client/src/components/Footer.tsx`:

```typescript
<a href="mailto:candrasuryapermana79@gmail.com" ...>  // Ganti email di sini
  candrasuryapermana79@gmail.com
</a>
```

### Mengubah Nama Toko

Edit file `client/src/lib/utils.ts` di fungsi `generateWhatsAppMessage` dan `generateEmailMessage`:

```typescript
const storeName = 'AgroMesin';  // Ganti dengan nama toko Anda
```

## Teknologi yang Digunakan

- **Frontend Framework**: React + TypeScript + Vite
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui + Radix UI
- **Form Handling**: React Hook Form + Zod
- **State Management**: React Context API
- **Icons**: Lucide React + React Icons
- **Storage**: localStorage untuk cart persistence

## Format Data Cart (localStorage)

Data keranjang disimpan di `localStorage` dengan key `agri_cart_v1`:

```json
{
  "items": [
    {
      "id": "P001",
      "name": "Mesin Pemanen X100",
      "price": 12500000,
      "qty": 2,
      "image": "/assets/p001.jpg"
    }
  ],
  "currency": "IDR",
  "updatedAt": "2025-10-14T08:00:00.000Z"
}
```

## Checkout Flow

1. User menambahkan produk ke keranjang
2. User mengisi form informasi pembeli (nama, telepon, alamat, catatan)
3. User memilih metode pengiriman pesanan:
   - **WhatsApp**: Membuka chat WhatsApp dengan pesan terformat
   - **Email**: Membuka email client dengan subject & body terisi

## Lisensi

© 2025 AgroMesin. All rights reserved.
