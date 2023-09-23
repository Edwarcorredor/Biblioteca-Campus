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


export {
    userSchema,
    LoanSchema
};
