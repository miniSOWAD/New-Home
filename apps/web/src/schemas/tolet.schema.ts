import { z } from "zod";

export const toletCategorySchema = z.enum([
  "Flat",
  "Room",
  "Sublet",
  "Bachelor Seat",
  "Family House",
  "Hostel Seat",
  "Office Space",
  "Shop Space"
]);

export const rentTypeSchema = z.enum(["Monthly", "Weekly", "Daily"]);

export const createToletSchema = z.object({
  title: z
    .string()
    .min(5, "Title must be at least 5 characters.")
    .max(120, "Title must be less than 120 characters."),

  description: z
    .string()
    .min(20, "Description must be at least 20 characters.")
    .max(2000, "Description must be less than 2000 characters."),

  category: toletCategorySchema,

  propertyFor: z
    .string()
    .min(1, "Property type is required."),

  rentAmount: z
    .number()
    .min(1, "Rent amount is required."),

  rentType: rentTypeSchema,

  advanceAmount: z
    .number()
    .min(0, "Advance amount cannot be negative.")
    .optional(),

  location: z
    .string()
    .min(2, "Location is required.")
    .max(120, "Location must be less than 120 characters."),

  address: z
    .string()
    .min(5, "Address must be at least 5 characters.")
    .max(250, "Address must be less than 250 characters."),

  bedrooms: z
    .number()
    .min(0, "Bedrooms cannot be negative.")
    .optional(),

  bathrooms: z
    .number()
    .min(0, "Bathrooms cannot be negative.")
    .optional(),

  sizeSqft: z
    .number()
    .min(0, "Size cannot be negative.")
    .optional(),

  facilities: z
    .array(z.string())
    .default([]),

  images: z
    .array(z.string().url("Image must be a valid URL."))
    .default([]),

  availableFrom: z
    .string()
    .optional(),

  isAvailable: z
    .boolean()
    .default(true)
});

export const updateToletSchema = createToletSchema.partial();

export const toletFilterSchema = z.object({
  query: z.string().optional(),
  category: z.string().optional(),
  location: z.string().optional(),
  propertyFor: z.string().optional(),
  minRent: z.number().min(0).optional(),
  maxRent: z.number().min(0).optional(),
  page: z.number().min(1).optional(),
  limit: z.number().min(1).max(100).optional()
});

export type CreateToletSchema = z.infer<typeof createToletSchema>;
export type UpdateToletSchema = z.infer<typeof updateToletSchema>;
export type ToletFilterSchema = z.infer<typeof toletFilterSchema>;