import Link from "next/link";
import {
  ArrowRight,
  Car,
  CookingPot,
  Hammer,
  Plug,
  ShieldCheck,
  Sparkles
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionTitle } from "@/components/shared/SectionTitle";

const services = [
  {
    title: "Cook",
    description: "Daily, part-time, or monthly cooking support.",
    icon: CookingPot
  },
  {
    title: "Housemaid",
    description: "Cleaning, washing, home support, and regular help.",
    icon: Sparkles
  },
  {
    title: "Driver",
    description: "Verified drivers for personal or family needs.",
    icon: Car
  },
  {
    title: "Electrician",
    description: "Wiring, fan, light, switch, and electrical repair.",
    icon: Plug
  },
  {
    title: "Plumber",
    description: "Pipe, basin, kitchen, bathroom, and water-line support.",
    icon: Hammer
  },
  {
    title: "Security Guard",
    description: "Trusted security support for homes and buildings.",
    icon: ShieldCheck
  }
];

export function FeaturedServices() {
  return (
    <section className="section-padding bg-muted/40">
      <div className="container-main">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle
            align="left"
            eyebrow="Service Pro"
            title="Find trusted home services"
            description="Search local service providers after registering and getting approved."
          />

          <Button asChild variant="outline">
            <Link href="/services">
              View Services
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card
                key={service.title}
                className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <CardContent className="p-6">
                  <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-7" />
                  </div>

                  <h3 className="text-xl font-black">{service.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {service.description}
                  </p>

                  <Button asChild className="mt-5 w-full" variant="secondary">
                    <Link href="/auth/login">Login to Request</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}