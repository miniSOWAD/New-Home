import { z } from "zod";

export const userRoleSchema = z.enum([
  "SUPER_ADMIN",
  "ADMIN",
  "CUSTOMER",
  "PROVIDER"
]);

export const approvalStatusSchema = z.enum([
  "PENDING",
  "APPROVED",
  "REJECTED",
  "SUSPENDED"
]);

export const updateUserProfileSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters.")
    .max(80, "Name must be less than 80 characters."),

  phone: z
    .string()
    .min(11, "Phone number must be at least 11 digits.")
    .max(20, "Phone number is too long.")
    .optional(),

  address: z
    .string()
    .max(180, "Address must be less than 180 characters.")
    .optional(),

  avatarUrl: z
    .string()
    .url("Avatar must be a valid URL.")
    .optional()
});

export const updateUserStatusSchema = z.object({
  approvalStatus: approvalStatusSchema,
  note: z
    .string()
    .max(300, "Note must be less than 300 characters.")
    .optional()
});

export const createAdminSchema = z.object({
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
    .max(20, "Phone number is too long.")
    .optional(),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
});

export const customerProfileSchema = z.object({
  preferredLocation: z
    .string()
    .max(120, "Preferred location must be less than 120 characters.")
    .optional(),

  budgetMin: z
    .number()
    .min(0, "Minimum budget cannot be negative.")
    .optional(),

  budgetMax: z
    .number()
    .min(0, "Maximum budget cannot be negative.")
    .optional()
});

export const providerProfileSchema = z.object({
  providerType: z.enum(["TOLET_PROVIDER", "SERVICE_PROVIDER", "BOTH"]),

  serviceArea: z
    .string()
    .max(120, "Service area must be less than 120 characters.")
    .optional(),

  experience: z
    .string()
    .max(500, "Experience must be less than 500 characters.")
    .optional(),

  verificationNote: z
    .string()
    .max(500, "Verification note must be less than 500 characters.")
    .optional()
});

export type UpdateUserProfileSchema = z.infer<typeof updateUserProfileSchema>;
export type UpdateUserStatusSchema = z.infer<typeof updateUserStatusSchema>;
export type CreateAdminSchema = z.infer<typeof createAdminSchema>;
export type CustomerProfileSchema = z.infer<typeof customerProfileSchema>;
export type ProviderProfileSchema = z.infer<typeof providerProfileSchema>;