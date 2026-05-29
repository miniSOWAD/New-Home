import type { LucideIcon } from "lucide-react";

export type DashboardStat = {
  title: string;
  value: string;
  description?: string;
  trend?: string;
  icon: LucideIcon;
};

export type DashboardActivity = {
  title: string;
  description: string;
  time: string;
};