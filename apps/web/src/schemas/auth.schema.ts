import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required.")
    .email("Enter a valid email address."),
  password: z
    .string()
    .min(1, "Password is required.")
});

export const registerSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters.")
    .max(80, "Name must be less than 80 characters."),

  email: z
    .string()
    .min(1, "Email is required.")
    .email("Enter a valid email address."),

  phone: z
    .string()
    .min(11, "Phone number must be at least 11 digits.")
    .max(20, "Phone number is too long."),

  address: z
    .string()
    .max(180, "Address must be less than 180 characters.")
    .optional(),

  role: z.enum(["CUSTOMER", "PROVIDER"], {
    required_error: "Please select a role."
  }),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
    .regex(/[0-9]/, "Password must contain at least one number.")
});

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required.")
    .email("Enter a valid email address.")
});

export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters.")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
      .regex(/[0-9]/, "Password must contain at least one number."),

    confirmPassword: z
      .string()
      .min(1, "Please confirm your password.")
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"]
  });

export const changePasswordSchema = z
  .object({
    currentPassword: z
      .string()
      .min(1, "Current password is required."),

    newPassword: z
      .string()
      .min(8, "New password must be at least 8 characters.")
      .regex(/[A-Z]/, "New password must contain at least one uppercase letter.")
      .regex(/[a-z]/, "New password must contain at least one lowercase letter.")
      .regex(/[0-9]/, "New password must contain at least one number."),

    confirmNewPassword: z
      .string()
      .min(1, "Please confirm your new password.")
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "New passwords do not match.",
    path: ["confirmNewPassword"]
  });

export type LoginSchema = z.infer<typeof loginSchema>;
export type RegisterSchema = z.infer<typeof registerSchema>;
export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>;
export type ChangePasswordSchema = z.infer<typeof changePasswordSchema>;