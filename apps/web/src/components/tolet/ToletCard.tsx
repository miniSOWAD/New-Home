import Link from "next/link";
import { BedDouble, Building2, Heart, MapPin, Ruler, Wallet } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { ToletPost } from "@/types/tolet.types";

type ToletCardProps = {
  tolet: Partial<ToletPost> & {
    id: string;
    title: string;
    location: string;
    category?: string;
    rentAmount?: number;
    rentType?: string;
    bedrooms?: number;
    sizeSqft?: number;
    images?: string[];
  };
  showActions?: boolean;
};

export function ToletCard({ tolet, showActions = true }: ToletCardProps) {
  const rentText = tolet.rentAmount
    ? `৳${tolet.rentAmount.toLocaleString()}/${tolet.rentType ?? "Month"}`
    : "Rent negotiable";

  return (
    <Card className="group overflow-hidden border-orange-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(251,146,60,0.16)]">
      <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-100">
        <Building2 className="size-16 text-orange-500 transition-transform duration-300 group-hover:scale-110" />

        <button
          type="button"
          className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-white/90 text-orange-500 shadow-sm transition hover:bg-yellow-300 hover:text-slate-950"
          aria-label="Save to-let"
        >
          <Heart className="size-5" />
        </button>
      </div>

      <CardContent className="p-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">
            {tolet.category ?? "To-let"}
          </Badge>

          <p className="font-black text-orange-600">{rentText}</p>
        </div>

        <h3 className="line-clamp-1 text-xl font-black text-slate-950">
          {tolet.title}
        </h3>

        <p className="mt-3 flex items-center gap-2 text-sm text-slate-500">
          <MapPin className="size-4 text-orange-500" />
          {tolet.location}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-2xl bg-orange-50 p-3">
            <p className="flex items-center gap-2 font-semibold text-slate-700">
              <BedDouble className="size-4 text-orange-500" />
              {tolet.bedrooms ? `${tolet.bedrooms} Bed` : "Flexible"}
            </p>
          </div>

          <div className="rounded-2xl bg-yellow-50 p-3">
            <p className="flex items-center gap-2 font-semibold text-slate-700">
              <Ruler className="size-4 text-orange-500" />
              {tolet.sizeSqft ? `${tolet.sizeSqft} sq ft` : "Size N/A"}
            </p>
          </div>
        </div>

        {showActions ? (
          <div className="mt-5 grid grid-cols-2 gap-3">
            <Button
              asChild
              variant="outline"
              className="rounded-2xl border-orange-200 text-orange-600 hover:bg-orange-50"
            >
              <Link href={`/to-let/${tolet.id}`}>Details</Link>
            </Button>

            <Button
              asChild
              className="rounded-2xl bg-yellow-400 font-black text-slate-950 hover:bg-yellow-300"
            >
              <Link href="/auth/login">
                <Wallet className="mr-2 size-4" />
                Contact
              </Link>
            </Button>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}