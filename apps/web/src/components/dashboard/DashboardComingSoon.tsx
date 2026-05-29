import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

type DashboardComingSoonProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  actionLabel?: string;
};

export function DashboardComingSoon({
  title,
  description,
  icon: Icon,
  actionLabel = "Coming Soon"
}: DashboardComingSoonProps) {
  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-400 p-8 text-white shadow-[0_20px_70px_rgba(251,146,60,0.25)]">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/75">
          New Home Dashboard
        </p>

        <h1 className="mt-3 text-4xl font-black tracking-tight">{title}</h1>

        <p className="mt-3 max-w-2xl text-white/85">{description}</p>
      </div>

      <div className="rounded-[2rem] border border-orange-100 bg-white p-8 shadow-sm">
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="mb-6 flex size-20 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-500 to-yellow-400 text-white shadow-lg shadow-orange-500/20">
            <Icon className="size-10" />
          </div>

          <h2 className="text-3xl font-black text-slate-950">
            {title} module is ready for development
          </h2>

          <p className="mt-4 max-w-xl text-slate-500">{description}</p>

          <Button className="mt-8 rounded-2xl bg-yellow-400 font-black text-slate-950 shadow-lg shadow-yellow-400/25 hover:bg-yellow-300">
            {actionLabel}
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}