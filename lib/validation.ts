import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre no puede exceder 100 caracteres")
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, "El nombre solo puede contener letras y espacios"),
  email: z
    .string()
    .email("Por favor ingresa un email válido")
    .max(255, "El email es demasiado largo"),
  phone: z
    .string()
    .regex(
      /^\+?1?[-.\s]?\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}$/,
      "Formato requerido: 809-XXX-XXXX"
    ),
  message: z
    .string()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(1000, "El mensaje no puede exceder 1000 caracteres"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
