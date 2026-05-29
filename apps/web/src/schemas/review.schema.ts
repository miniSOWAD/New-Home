import { z } from "zod";

export const createReviewSchema = z.object({
  rating: z
    .number()
    .min(1, "Rating must be at least 1.")
    .max(5, "Rating cannot be more than 5."),

  comment: z
    .string()
    .max(700, "Comment must be less than 700 characters.")
    .optional(),

  targetUserId: z
    .string()
    .min(1, "Target user is required."),

  toletPostId: z
    .string()
    .optional(),

  servicePostId: z
    .string()
    .optional()
});

export const updateReviewSchema = createReviewSchema
  .pick({
    rating: true,
    comment: true
  })
  .partial();

export type CreateReviewSchema = z.infer<typeof createReviewSchema>;
export type UpdateReviewSchema = z.infer<typeof updateReviewSchema>;