import { apiDelete, apiGet, apiPatch, apiPost } from "@/lib/api";
import type {
  CreateReviewSchema,
  UpdateReviewSchema
} from "@/schemas/review.schema";
import type { Review } from "@/types/review.types";

export const reviewService = {
  async getReviews(params?: {
    targetUserId?: string;
    toletPostId?: string;
    servicePostId?: string;
  }) {
    return apiGet<Review[]>("/reviews", params);
  },

  async getMyReviews() {
    return apiGet<Review[]>("/reviews/my");
  },

  async createReview(payload: CreateReviewSchema) {
    return apiPost<Review, CreateReviewSchema>("/reviews", payload);
  },

  async updateReview(id: string, payload: UpdateReviewSchema) {
    return apiPatch<Review, UpdateReviewSchema>(`/reviews/${id}`, payload);
  },

  async deleteReview(id: string) {
    return apiDelete<null>(`/reviews/${id}`);
  }
};