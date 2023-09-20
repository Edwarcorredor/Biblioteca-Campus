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



export {
    userSchema
};
