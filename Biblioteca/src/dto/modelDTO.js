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
  userId: z.number().int().min(1).description("ID of the user who made the loan"),
  productId: z.number().int().min(1).description("ID of the borrowed product"),
  startDate: z.date().description("Start date of the loan"),
  endDate: z.date().description("End date of the loan"),
  status: z.enum(["active", "expired", "returned"]).description("Loan status (active, expired, returned)"),
});

const ReservationSchema = z.object({
  userId: z.number().int().min(1).description("ID of the user who made the reservation"),
  productId: z.number().int().min(1).description("ID of the reserved product"),
  reservationDate: z.date().description("Reservation date"),
  status: z.enum(["pending", "confirmed", "canceled"]).description("Reservation status (pending, confirmed, canceled)"),
});

const InventorySchema = z.object({
  productId: z.number().int().min(1).description("ID of the product in inventory"),
  quantity: z.number().int().min(0).description("Quantity available in inventory"),
  status: z.string().description("Product status in inventory"),
  entryDate: z.date().description("Date of entry of the product into inventory"),
  supplier: z.string().description("Product supplier"),
});



export {
    userSchema,
    LoanSchema,
    ReservationSchema,
    InventorySchema
};
