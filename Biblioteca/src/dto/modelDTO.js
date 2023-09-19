import { z } from "zod";

// Esquema para user
const userSchema = z.object({
    nombre_usuario: z.string().min(1).max(255), 
    email_usuario: z.string().email(),
    password_usuario: z.string(),
    telefono_usuario: z.string().regex(/^\d+$/, "El teléfono debe contener solo números"),
    roles_usuario: z.array(z.string())
  });


export {
    userSchema
};
