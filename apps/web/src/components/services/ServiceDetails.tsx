import {
  BadgeCheck,
  CalendarDays,
  Clock,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  User,
  Wallet
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { ServicePost } from "@/types/service.types";

type ServiceDetailsProps = {
  service: Partial<ServicePost> & {
    title: string;
    description: string;
    location: string;
    category?: string;
    rateAmount?: number;
    rateType?: string;
    skills?: string[];
    availability?: string[];
  };
};

export function ServiceDetails({ service }: ServiceDetailsProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="space-y-6">
        <Card className="border-orange-100 bg-white shadow-sm">
          <CardContent className="p-6">
            <div className="mb-5 flex flex-wrap gap-2">
              <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">
                {service.category ?? "Service"}
              </Badge>

              <Badge className="bg-yellow-100 text-slate-900 hover:bg-yellow-100">
                {service.approvalStatus ?? "APPROVED"}
              </Badge>
            </div>

            <div className="mb-6 flex size-20 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-500 to-yellow-400 text-white shadow-lg shadow-orange-500/20">
              <User className="size-10" />
            </div>

            <h2 className="text-2xl font-black text-slate-950">
              About this service
            </h2>

            <p className="mt-4 leading-8 text-slate-500">
              {service.description}
            </p>
          </CardContent>
        </Card>

        <Card className="border-orange-100 bg-white shadow-sm">
          <CardContent className="p-6">
            <h2 className="text-2xl font-black text-slate-950">Skills</h2>

            <div className="mt-5 flex flex-wrap gap-3">
              {(service.skills ?? []).map((skill) => (
                <Badge
                  key={skill}
                  className="bg-orange-100 text-orange-700 hover:bg-orange-100"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-100 bg-white shadow-sm">
          <CardContent className="p-6">
            <h2 className="text-2xl font-black text-slate-950">
              Availability
            </h2>

            <div className="mt-5 flex flex-wrap gap-3">
              {(service.availability ?? []).map((item) => (
                <Badge
                  key={item}
                  className="bg-yellow-100 text-slate-900 hover:bg-yellow-100"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-100 bg-white shadow-sm">
          <CardContent className="p-6">
            <h2 className="text-2xl font-black text-slate-950">
              Reviews Preview
            </h2>

            <div className="mt-5 rounded-2xl bg-orange-50 p-5">
              <div className="mb-3 flex items-center gap-1 text-yellow-500">
                <Star className="size-5 fill-current" />
                <Star className="size-5 fill-current" />
                <Star className="size-5 fill-current" />
                <Star className="size-5 fill-current" />
                <Star className="size-5" />
              </div>

              <p className="text-sm leading-6 text-slate-500">
                Reviews will be connected after completed request flow is
                implemented.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <Card className="border-orange-100 bg-white shadow-sm">
          <CardContent className="p-6">
            <p className="text-sm font-bold text-slate-500">Rate</p>

            <p className="mt-2 text-3xl font-black text-orange-600">
              {service.rateAmount
                ? `৳${service.rateAmount.toLocaleString()}/${service.rateType ?? "Month"}`
                : "Negotiable"}
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3 text-slate-700">
                <MapPin className="size-5 text-orange-500" />
                <span>{service.location}</span>
              </div>

              <div className="flex items-center gap-3 text-slate-700">
                <BadgeCheck className="size-5 text-orange-500" />
                <span>
                  {service.experienceYears
                    ? `${service.experienceYears} years experience`
                    : "Experience not specified"}
                </span>
              </div>

              <div className="flex items-center gap-3 text-slate-700">
                <Clock className="size-5 text-orange-500" />
                <span>{service.availability?.[0] ?? "Flexible time"}</span>
              </div>

              <div className="flex items-center gap-3 text-slate-700">
                <CalendarDays className="size-5 text-orange-500" />
                <span>Available for booking requests</span>
              </div>

              <div className="flex items-center gap-3 text-slate-700">
                <Wallet className="size-5 text-orange-500" />
                <span>Payment method will be added later</span>
              </div>
            </div>

            <Button className="mt-6 w-full rounded-2xl bg-yellow-400 font-black text-slate-950 hover:bg-yellow-300">
              <Phone className="mr-2 size-4" />
              Login to Request Service
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
              Verify provider details before hiring. Requests and messaging will
              be available only after login and account approval.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}