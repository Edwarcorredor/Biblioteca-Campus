import { z } from "zod";

// Esquema para user
const userSchema = z.object({
  ID: z.number().optional(),
  name_user: z.string().min(1).max(255),
  email_user: z.string().email(),
  password_user: z.string(),
  phone_user: z.string().regex(/^\d+$/, "The telephone must contain only numbers"),
  role_user: z.string(),
  DNI_user: z.string().regex(/^\d+$/, "The DNI must contain only numbers"),
  address_user: z.string()
});

const LoanSchema = z.object({
  ID: z.number().optional(),
  id_user: z.number().int().min(1),
  id_product: z.number().int().min(1),
  dateStart_loan: z.date(),
  dateEnd_loan: z.date(),
  status_loan: z.enum(["active", "expired", "returned"])
});

const ReservationSchema = z.object({
  ID: z.number().optional(),
  id_user: z.number().int().min(1),
  id_product: z.number().int().min(1),
  date_reservation: z.date(),
  status_loan: z.enum(["pending", "confirmed", "canceled"])
});

const InventorySchema = z.object({
  ID: z.number().optional(),
  id_product: z.number().int().min(1),
  quantity_inventory: z.number().int().min(0),
  status_inventory: z.enum(["In stock", "Out of stock"]),
  entryDate_inventory: z.date(),
  supplier_inventory: z.string()
});

const ProductSchema = z.object({
  ID: z.number().optional(),
  name_product: z.string(),
  description_product: z.string(),
  category_product: z.string(),
  price_product: z.number(),
  available_product: z.boolean()
});



export {
    userSchema,
    LoanSchema,
    ReservationSchema,
    InventorySchema,
    ProductSchema
};
