import { apiPost } from "@/lib/api";
import type { ServicePost } from "@/types/service.types";
import type { ToletPost } from "@/types/tolet.types";

export type SmartSearchPayload = {
  query: string;
  location?: string;
};

export type SmartSearchResult = {
  interpretedQuery: string;
  intent: "TOLET_SEARCH" | "SERVICE_SEARCH" | "GENERAL";
  tolets?: ToletPost[];
  services?: ServicePost[];
};

export const aiService = {
  async smartSearch(payload: SmartSearchPayload) {
    return apiPost<SmartSearchResult, SmartSearchPayload>(
      "/ai/smart-search",
      payload
    );
  },

  async recommendTolets(payload: {
    location?: string;
    budget?: number;
    propertyFor?: string;
    description?: string;
  }) {
    return apiPost<ToletPost[], typeof payload>(
      "/ai/recommend-tolets",
      payload
    );
  },

  async recommendServices(payload: {
    location?: string;
    category?: string;
    budget?: number;
    description?: string;
  }) {
    return apiPost<ServicePost[], typeof payload>(
      "/ai/recommend-services",
      payload
    );
  },

  async generateDescription(payload: {
    type: "TOLET" | "SERVICE";
    rawText: string;
  }) {
    return apiPost<{ description: string }, typeof payload>(
      "/ai/generate-description",
      payload
    );
  }
};