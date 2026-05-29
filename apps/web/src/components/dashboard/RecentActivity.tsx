import { Clock, Dot } from "lucide-react";

export type RecentActivityItem = {
  id: string;
  title: string;
  description: string;
  time: string;
};

type RecentActivityProps = {
  items?: RecentActivityItem[];
  isLoading?: boolean;
};

const defaultItems: RecentActivityItem[] = [
  {
    id: "activity-1",
    title: "Dashboard initialized",
    description: "New Home role-based dashboard layout is ready.",
    time: "Just now"
  },
  {
    id: "activity-2",
    title: "Approval system prepared",
    description: "Pending users will wait for admin approval before dashboard access.",
    time: "Today"
  },
  {
    id: "activity-3",
    title: "Smart search added",
    description: "LangChain-ready AI smart search section has been added.",
    time: "Today"
  }
];

export function RecentActivity({
  items = defaultItems,
  isLoading = false
}: RecentActivityProps) {
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

      {isLoading ? (
        <p className="text-sm text-slate-500">Loading recent activity...</p>
      ) : items.length === 0 ? (
        <p className="text-sm text-slate-500">No recent activity found.</p>
      ) : (
        <div className="space-y-5">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4">
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
      )}
    </div>
  );
}