import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters.")
    .max(80, "Name must be less than 80 characters."),

  email: z
    .string()
    .min(1, "Email is required.")
    .email("Enter a valid email address."),

  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters.")
    .max(150, "Subject must be less than 150 characters."),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters.")
    .max(1500, "Message must be less than 1500 characters.")
});

export type ContactSchema = z.infer<typeof contactSchema>;