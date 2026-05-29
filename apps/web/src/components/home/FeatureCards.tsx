import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Hammer,
  LockKeyhole,
  UserCheck
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { SectionTitle } from "@/components/shared/SectionTitle";

const features = [
  {
    title: "To-let Hub",
    description:
      "Search flats, rooms, sublets, bachelor seats, family houses, offices, and shops.",
    icon: Building2,
    href: "/to-let"
  },
  {
    title: "Service Pro",
    description:
      "Find trusted cooks, housemaids, cleaners, drivers, electricians, plumbers, tutors, and more.",
    icon: Hammer,
    href: "/services"
  },
  {
    title: "Approval System",
    description:
      "Every user must be approved before they can access their dashboard or use service features.",
    icon: UserCheck,
    href: "/auth/register"
  },
  {
    title: "Protected Access",
    description:
      "Unregistered visitors can browse only. Requests, contact, and posting require login approval.",
    icon: LockKeyhole,
    href: "/auth/login"
  }
];

export function FeatureCards() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <SectionTitle
          eyebrow="Main Features"
          title="Everything needed for a better home search"
          description="New Home combines housing discovery with trusted service provider access in one professional platform."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Link key={feature.title} href={feature.href}>
                <Card className="group h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <CardContent className="p-6">
                    <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-7" />
                    </div>

                    <h3 className="text-xl font-black">{feature.title}</h3>

                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {feature.description}
                    </p>

                    <div className="mt-5 flex items-center text-sm font-semibold text-primary">
                      Explore
                      <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}