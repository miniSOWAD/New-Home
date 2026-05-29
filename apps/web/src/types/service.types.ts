import type { ApprovalStatus } from "@/types/role.types";
import type { UserSummary } from "@/types/user.types";

export type ServiceCategory =
  | "Cook"
  | "Housemaid"
  | "Cleaner"
  | "Driver"
  | "Electrician"
  | "Plumber"
  | "Tutor"
  | "Caregiver"
  | "Babysitter"
  | "Security Guard"
  | "Laundry Worker"
  | "Painter"
  | "AC Technician";

export type ServicePost = {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: ServiceCategory;
  skills: string[];
  experienceYears?: number;
  rateAmount: number;
  rateType: "Hourly" | "Daily" | "Weekly" | "Monthly" | "Per Visit" | "Contract";
  location: string;
  availability: string[];
  images: string[];
  approvalStatus: ApprovalStatus;
  isAvailable: boolean;
  providerId: string;
  provider?: UserSummary;
  createdAt: string;
  updatedAt: string;
};

export type ServiceFilters = {
  query?: string;
  category?: string;
  location?: string;
  minRate?: number;
  maxRate?: number;
  availability?: string;
};