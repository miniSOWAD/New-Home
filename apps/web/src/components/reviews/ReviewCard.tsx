import { CalendarDays, UserRound } from "lucide-react";

import { RatingStars } from "@/components/reviews/RatingStars";
import { Card, CardContent } from "@/components/ui/card";

type ReviewCardProps = {
  reviewerName?: string;
  rating: number;
  comment?: string;
  date?: string;
};

export function ReviewCard({
  reviewerName = "Customer User",
  rating,
  comment = "Good service. Communication was smooth and the provider was helpful.",
  date = "May 2026"
}: ReviewCardProps) {
  return (
    <Card className="border-orange-100 bg-white shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-400 text-white">
            <UserRound className="size-6" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
              <div>
                <h3 className="font-black text-slate-950">{reviewerName}</h3>

                <div className="mt-2">
                  <RatingStars value={rating} readonly />
                </div>
              </div>

              <p className="flex items-center gap-2 text-sm font-semibold text-slate-500">
                <CalendarDays className="size-4 text-orange-500" />
                {date}
              </p>
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-600">{comment}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}