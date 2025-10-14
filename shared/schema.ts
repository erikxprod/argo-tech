import { z } from "zod";

export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  type: z.string(),
  description: z.string(),
  specs: z.object({
    power: z.string().optional(),
    capacity: z.string().optional(),
  }),
  price: z.number().positive(),
  image: z.string(),
});

export const cartItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number().positive(),
  qty: z.number().int().positive(),
  image: z.string(),
});

export const cartSchema = z.object({
  items: z.array(cartItemSchema),
  currency: z.string().default("IDR"),
  updatedAt: z.string(),
});

export const buyerInfoSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter"),
  phone: z.string().min(10, "Nomor telepon tidak valid"),
  address: z.string().optional(),
  notes: z.string().optional(),
});

export type Product = z.infer<typeof productSchema>;
export type CartItem = z.infer<typeof cartItemSchema>;
export type Cart = z.infer<typeof cartSchema>;
export type BuyerInfo = z.infer<typeof buyerInfoSchema>;
