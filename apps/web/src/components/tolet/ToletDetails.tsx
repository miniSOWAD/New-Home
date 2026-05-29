import {
  Bath,
  BedDouble,
  Calendar,
  MapPin,
  Phone,
  Ruler,
  ShieldCheck,
  Wallet
} from "lucide-react";

import { LocationMap } from "@/components/tolet/LocationMap";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { ToletPost } from "@/types/tolet.types";

type ToletDetailsProps = {
  tolet: Partial<ToletPost> & {
    title: string;
    description: string;
    location: string;
    rentAmount?: number;
    rentType?: string;
    facilities?: string[];
  };
};

export function ToletDetails({ tolet }: ToletDetailsProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="space-y-6">
        <div className="flex h-[360px] items-center justify-center rounded-[2rem] border border-orange-100 bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-100">
          <BedDouble className="size-24 text-orange-500" />
        </div>

        <Card className="border-orange-100 bg-white shadow-sm">
          <CardContent className="p-6">
            <div className="mb-5 flex flex-wrap gap-2">
              <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">
                {tolet.category ?? "To-let"}
              </Badge>
              <Badge className="bg-yellow-100 text-slate-900 hover:bg-yellow-100">
                {tolet.approvalStatus ?? "APPROVED"}
              </Badge>
            </div>

            <h2 className="text-2xl font-black text-slate-950">Description</h2>
            <p className="mt-4 leading-8 text-slate-500">{tolet.description}</p>
          </CardContent>
        </Card>

        <Card className="border-orange-100 bg-white shadow-sm">
          <CardContent className="p-6">
            <h2 className="text-2xl font-black text-slate-950">Facilities</h2>

            <div className="mt-5 flex flex-wrap gap-3">
              {(tolet.facilities ?? []).map((facility) => (
                <Badge
                  key={facility}
                  className="bg-orange-100 text-orange-700 hover:bg-orange-100"
                >
                  {facility}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <LocationMap location={tolet.location} address={tolet.address} />
      </div>

      <div className="space-y-6">
        <Card className="border-orange-100 bg-white shadow-sm">
          <CardContent className="p-6">
            <p className="text-sm font-bold text-slate-500">Rent</p>
            <p className="mt-2 text-3xl font-black text-orange-600">
              {tolet.rentAmount
                ? `৳${tolet.rentAmount.toLocaleString()}/${tolet.rentType ?? "Month"}`
                : "Negotiable"}
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3 text-slate-700">
                <MapPin className="size-5 text-orange-500" />
                <span>{tolet.location}</span>
              </div>

              <div className="flex items-center gap-3 text-slate-700">
                <BedDouble className="size-5 text-orange-500" />
                <span>{tolet.bedrooms ?? 0} Bedrooms</span>
              </div>

              <div className="flex items-center gap-3 text-slate-700">
                <Bath className="size-5 text-orange-500" />
                <span>{tolet.bathrooms ?? 0} Bathrooms</span>
              </div>

              <div className="flex items-center gap-3 text-slate-700">
                <Ruler className="size-5 text-orange-500" />
                <span>{tolet.sizeSqft ?? "N/A"} sq ft</span>
              </div>

              <div className="flex items-center gap-3 text-slate-700">
                <Calendar className="size-5 text-orange-500" />
                <span>{tolet.availableFrom ?? "Available now"}</span>
              </div>

              <div className="flex items-center gap-3 text-slate-700">
                <Wallet className="size-5 text-orange-500" />
                <span>Advance negotiable</span>
              </div>
            </div>

            <Button className="mt-6 w-full rounded-2xl bg-yellow-400 font-black text-slate-950 hover:bg-yellow-300">
              <Phone className="mr-2 size-4" />
              Login to Contact
            </Button>
          </CardContent>
        </Card>

        <Card className="border-orange-100 bg-white shadow-sm">
          <CardContent className="p-6">
            <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
              <ShieldCheck className="size-6" />
            </div>

            <h3 className="text-xl font-black text-slate-950">Safety Notice</h3>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              Do not send money before verification. Contact and request features
              will be available only after login and account approval.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}