import { z } from "zod";

export const registerValidationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  phone: z.string().min(6, "Phone number is required."),
  address: z.string().optional(),
  password: z.string().min(8, "Password must be at least 8 characters."),
  role: z.enum(["CUSTOMER", "PROVIDER"])
});

export const loginValidationSchema = z.object({
  email: z.string().email("Invalid email address."),
  password: z.string().min(1, "Password is required.")
});

export type RegisterInput = z.infer<typeof registerValidationSchema>;
export type LoginInput = z.infer<typeof loginValidationSchema>;