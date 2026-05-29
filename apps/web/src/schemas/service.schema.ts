import { z } from "zod";

export const serviceCategorySchema = z.enum([
  "Cook",
  "Housemaid",
  "Cleaner",
  "Driver",
  "Electrician",
  "Plumber",
  "Tutor",
  "Caregiver",
  "Babysitter",
  "Security Guard",
  "Laundry Worker",
  "Painter",
  "AC Technician"
]);

export const serviceRateTypeSchema = z.enum([
  "Hourly",
  "Daily",
  "Weekly",
  "Monthly",
  "Per Visit",
  "Contract"
]);

export const createServiceSchema = z.object({
  title: z
    .string()
    .min(5, "Title must be at least 5 characters.")
    .max(120, "Title must be less than 120 characters."),

  description: z
    .string()
    .min(20, "Description must be at least 20 characters.")
    .max(2000, "Description must be less than 2000 characters."),

  category: serviceCategorySchema,

  skills: z
    .array(z.string())
    .min(1, "At least one skill is required."),

  experienceYears: z
    .number()
    .min(0, "Experience cannot be negative.")
    .optional(),

  rateAmount: z
    .number()
    .min(1, "Rate amount is required."),

  rateType: serviceRateTypeSchema,

  location: z
    .string()
    .min(2, "Location is required.")
    .max(120, "Location must be less than 120 characters."),

  availability: z
    .array(z.string())
    .min(1, "At least one availability option is required."),

  images: z
    .array(z.string().url("Image must be a valid URL."))
    .default([]),

  isAvailable: z
    .boolean()
    .default(true)
});

export const updateServiceSchema = createServiceSchema.partial();

export const serviceFilterSchema = z.object({
  query: z.string().optional(),
  category: z.string().optional(),
  location: z.string().optional(),
  availability: z.string().optional(),
  minRate: z.number().min(0).optional(),
  maxRate: z.number().min(0).optional(),
  page: z.number().min(1).optional(),
  limit: z.number().min(1).max(100).optional()
});

export type CreateServiceSchema = z.infer<typeof createServiceSchema>;
export type UpdateServiceSchema = z.infer<typeof updateServiceSchema>;
export type ServiceFilterSchema = z.infer<typeof serviceFilterSchema>;