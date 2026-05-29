import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type DashboardStatsCardProps = {
  title: string;
  value: string;
  description?: string;
  icon: LucideIcon;
  trend?: string;
  className?: string;
};

export function DashboardStatsCard({
  title,
  value,
  description,
  icon: Icon,
  trend,
  className
}: DashboardStatsCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[1.7rem] border border-orange-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(251,146,60,0.16)]",
        className
      )}
    >
      <div className="absolute -right-8 -top-8 size-28 rounded-full bg-orange-100 opacity-70 transition-transform group-hover:scale-125" />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-slate-500">{title}</p>
          <p className="mt-3 text-3xl font-black tracking-tight text-slate-950">
            {value}
          </p>

          {description ? (
            <p className="mt-2 text-sm text-slate-500">{description}</p>
          ) : null}

          {trend ? (
            <p className="mt-4 inline-flex rounded-full bg-yellow-100 px-3 py-1 text-xs font-black text-orange-700">
              {trend}
            </p>
          ) : null}
        </div>

        <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-400 text-white shadow-lg shadow-orange-500/20">
          <Icon className="size-7" />
        </div>
      </div>
    </div>
  );
}