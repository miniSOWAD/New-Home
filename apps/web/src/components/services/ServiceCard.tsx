import Link from "next/link";
import {
  Heart,
  MapPin,
  Phone,
  Star,
  UserRoundCheck,
  Wrench
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { ServicePost } from "@/types/service.types";

type ServiceCardProps = {
  service: Partial<ServicePost> & {
    id: string;
    title: string;
    location: string;
    category?: string;
    rateAmount?: number;
    rateType?: string;
    experienceYears?: number;
  };
  showActions?: boolean;
};

export function ServiceCard({
  service,
  showActions = true
}: ServiceCardProps) {
  const rateText = service.rateAmount
    ? `৳${service.rateAmount.toLocaleString()}/${service.rateType ?? "Month"}`
    : "Rate negotiable";

  return (
    <Card className="group overflow-hidden border-orange-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(251,146,60,0.16)]">
      <CardContent className="p-6">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div className="flex size-16 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-500 to-yellow-400 text-white shadow-lg shadow-orange-500/20 transition-transform duration-300 group-hover:scale-105">
            <Wrench className="size-8" />
          </div>

          <button
            type="button"
            className="flex size-10 items-center justify-center rounded-full bg-orange-50 text-orange-500 transition hover:bg-yellow-300 hover:text-slate-950"
            aria-label="Save service"
          >
            <Heart className="size-5" />
          </button>
        </div>

        <div className="mb-3 flex items-center justify-between gap-3">
          <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">
            {service.category ?? "Service"}
          </Badge>

          <div className="flex items-center gap-1 text-sm font-bold text-yellow-600">
            <Star className="size-4 fill-current" />
            4.8
          </div>
        </div>

        <h3 className="line-clamp-1 text-xl font-black text-slate-950">
          {service.title}
        </h3>

        <p className="mt-3 flex items-center gap-2 text-sm text-slate-500">
          <MapPin className="size-4 text-orange-500" />
          {service.location}
        </p>

        <div className="mt-5 rounded-2xl bg-orange-50 p-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
            Service Rate
          </p>
          <p className="mt-1 text-xl font-black text-orange-600">{rateText}</p>
        </div>

        <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-slate-600">
          <UserRoundCheck className="size-4 text-orange-500" />
          {service.experienceYears
            ? `${service.experienceYears} years experience`
            : "Experience not specified"}
        </div>

        {showActions ? (
          <div className="mt-5 grid grid-cols-2 gap-3">
            <Button
              asChild
              variant="outline"
              className="rounded-2xl border-orange-200 text-orange-600 hover:bg-orange-50"
            >
              <Link href={`/services/${service.id}`}>Details</Link>
            </Button>

            <Button
              asChild
              className="rounded-2xl bg-yellow-400 font-black text-slate-950 hover:bg-yellow-300"
            >
              <Link href="/auth/login">
                <Phone className="mr-2 size-4" />
                Request
              </Link>
            </Button>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}