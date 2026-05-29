import { Clock, Dot } from "lucide-react";

type RecentActivityItem = {
  title: string;
  description: string;
  time: string;
};

type RecentActivityProps = {
  items?: RecentActivityItem[];
};

const defaultItems: RecentActivityItem[] = [
  {
    title: "Dashboard initialized",
    description: "New Home role-based dashboard layout is ready.",
    time: "Just now"
  },
  {
    title: "Approval system planned",
    description: "Pending users will wait for admin approval.",
    time: "Today"
  },
  {
    title: "Navigation configured",
    description: "Each role has its own dashboard sidebar tabs.",
    time: "Today"
  }
];

export function RecentActivity({ items = defaultItems }: RecentActivityProps) {
  return (
    <div className="rounded-[1.7rem] border border-orange-100 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
            Activity
          </p>
          <h2 className="mt-1 text-2xl font-black text-slate-950">
            Recent Updates
          </h2>
        </div>

        <div className="flex size-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
          <Clock className="size-6" />
        </div>
      </div>

      <div className="space-y-5">
        {items.map((item) => (
          <div key={item.title} className="flex gap-4">
            <div className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full bg-yellow-100 text-orange-500">
              <Dot className="size-8" />
            </div>

            <div className="min-w-0">
              <p className="font-black text-slate-900">{item.title}</p>
              <p className="mt-1 text-sm leading-6 text-slate-500">
                {item.description}
              </p>
              <p className="mt-1 text-xs font-bold text-orange-400">
                {item.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}