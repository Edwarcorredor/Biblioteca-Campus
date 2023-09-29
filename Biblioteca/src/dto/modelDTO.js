import { z } from "zod";

// Esquema para user
const userSchema = z.object({

  name_user: z.string().min(1).max(255),
  email_user: z.string().email(),
  password_user: z.string(),
  phone_user: z.string().regex(/^\d+$/, "The telephone must contain only numbers"),
  role_user: z.string(),
  DNI_user: z.string().regex(/^\d+$/, "The DNI must contain only numbers"),
  address_user: z.string()
});

const LoanSchema = z.object({

  id_user: z.number().int().min(1),
  id_reserva: z.number().int().min(1).optional(),
  id_products: z.array(z.number().int().min(1)).min(1),
  dateStart_loan: z.date(),
  dateEnd_loan: z.date(),
  status_loan: z.enum(["active", "expired", "returned"])
});

const ReservationSchema = z.object({

  id_user: z.number().int().min(1),
  name_product: z.string(),
  date_reservation: z.date(),
  status_loan: z.enum(["pending", "confirmed", "canceled"]),
  quantity_loan: z.number().int().min(1)
});

const InventorySchema = z.object({

  name_inventory: z.string(),
  serial_inventory: z.string(),
  stock_inventory: z.number().int().min(1),
  description_product: z.string(),
  status_inventory: z.enum(["In stock", "Out of stock"]),
  entryDate_inventory: z.date(),
  supplier_inventory: z.string(),
  quantity_inventory: z.number().int().min(1),
  image_inventory: z.string()
});

const ProductSchema = z.object({

  name_product: z.string(),
  serial_product: z.string(),
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
