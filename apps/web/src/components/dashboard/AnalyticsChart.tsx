import type { LucideIcon } from "lucide-react";
import { BarChart3 } from "lucide-react";

export type AnalyticsChartItem = {
  label: string;
  value: number;
  icon: LucideIcon;
};

type AnalyticsChartProps = {
  title?: string;
  items: AnalyticsChartItem[];
};

export function AnalyticsChart({
  title = "Platform Activity",
  items
}: AnalyticsChartProps) {
  return (
    <div className="rounded-[1.7rem] border border-orange-100 bg-white p-6 shadow-sm">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
            Analytics
          </p>

          <h2 className="mt-1 text-2xl font-black text-slate-950">{title}</h2>
        </div>

        <div className="flex size-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
          <BarChart3 className="size-6" />
        </div>
      </div>

      <div className="space-y-6">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.label}>
              <div className="mb-2 flex items-center justify-between">
                <p className="flex items-center gap-2 font-bold text-slate-700">
                  <Icon className="size-5 text-orange-500" />
                  {item.label}
                </p>

                <p className="font-black text-orange-600">{item.value}%</p>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-orange-50">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-orange-500 to-yellow-400"
                  style={{ width: `${item.value}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}