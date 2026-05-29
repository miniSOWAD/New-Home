import { BadgeCheck, Lock, ShieldCheck, UserCheck } from "lucide-react";

import { SectionTitle } from "@/components/shared/SectionTitle";

const trustItems = [
  {
    title: "Admin approval",
    description:
      "New accounts cannot access dashboards until they are approved by Admin or Super Admin.",
    icon: BadgeCheck
  },
  {
    title: "Role-based dashboard",
    description:
      "Super Admin, Admin, Customer, and Provider each get a separate controlled dashboard.",
    icon: UserCheck
  },
  {
    title: "Protected actions",
    description:
      "Only approved logged-in users can request, contact, save, or create posts.",
    icon: Lock
  },
  {
    title: "Report system",
    description:
      "Suspicious listings, users, and service providers can be reported for admin review.",
    icon: ShieldCheck
  }
];

export function TrustSection() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionTitle
            align="left"
            eyebrow="Trust & Safety"
            title="Built with approval and protection from the start"
            description="New Home is not just a listing website. It is designed with user approval, role protection, and safer interactions as core system features."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {trustItems.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="rounded-3xl border bg-card p-6">
                  <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="size-6" />
                  </div>

                  <h3 className="font-black">{item.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}