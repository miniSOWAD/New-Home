import { z } from "zod";

export const reportStatusSchema = z.enum([
  "PENDING",
  "REVIEWED",
  "RESOLVED",
  "REJECTED"
]);

export const createReportSchema = z.object({
  reason: z
    .string()
    .min(3, "Reason must be at least 3 characters.")
    .max(120, "Reason must be less than 120 characters."),

  description: z
    .string()
    .max(1000, "Description must be less than 1000 characters.")
    .optional(),

  reportedUserId: z
    .string()
    .optional(),

  toletPostId: z
    .string()
    .optional(),

  servicePostId: z
    .string()
    .optional()
});

export const updateReportStatusSchema = z.object({
  status: reportStatusSchema,
  adminNote: z
    .string()
    .max(700, "Admin note must be less than 700 characters.")
    .optional()
});

export type CreateReportSchema = z.infer<typeof createReportSchema>;
export type UpdateReportStatusSchema = z.infer<
  typeof updateReportStatusSchema
>;