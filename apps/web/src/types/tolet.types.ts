import type { ApprovalStatus } from "@/types/role.types";
import type { UserSummary } from "@/types/user.types";

export type ToletCategory =
  | "Flat"
  | "Room"
  | "Sublet"
  | "Bachelor Seat"
  | "Family House"
  | "Hostel Seat"
  | "Office Space"
  | "Shop Space";

export type ToletPost = {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: ToletCategory;
  propertyFor: string;
  rentAmount: number;
  rentType: "Monthly" | "Weekly" | "Daily";
  advanceAmount?: number;
  location: string;
  address: string;
  bedrooms?: number;
  bathrooms?: number;
  sizeSqft?: number;
  facilities: string[];
  images: string[];
  availableFrom?: string;
  approvalStatus: ApprovalStatus;
  isAvailable: boolean;
  providerId: string;
  provider?: UserSummary;
  createdAt: string;
  updatedAt: string;
};

export type ToletFilters = {
  query?: string;
  category?: string;
  location?: string;
  minRent?: number;
  maxRent?: number;
  propertyFor?: string;
};