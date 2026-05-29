import { BadgeCheck, Building2, ShieldCheck, Users } from "lucide-react";

import { PageHeader } from "@/components/shared/PageHeader";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    title: "Trusted access",
    description:
      "Every registered account must be approved before accessing service features.",
    icon: ShieldCheck
  },
  {
    title: "Better housing search",
    description:
      "Customers can browse organized to-let posts instead of depending only on scattered posts.",
    icon: Building2
  },
  {
    title: "Verified service support",
    description:
      "Service providers can create profiles and customers can find the right help.",
    icon: BadgeCheck
  },
  {
    title: "Role-based platform",
    description:
      "Super Admin, Admin, Customer, and Provider each get separate dashboard access.",
    icon: Users
  }
];

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        badge="About New Home"
        title="A smarter platform for rentals and home services"
        description="New Home is designed to help people find rental places and trusted service providers through a secure approval-based system."
      />

      <section className="section-padding">
        <div className="container-main grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Our Purpose
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
              We connect people with homes and trusted help.
            </h2>

            <p className="mt-5 leading-8 text-muted-foreground">
              Many people struggle to find good rental houses, rooms, bachelor
              seats, family flats, or reliable home service providers. Most of
              the time, they depend on Facebook groups, brokers, phone calls, or
              word-of-mouth. New Home brings these needs into one organized web
              app.
            </p>

            <p className="mt-4 leading-8 text-muted-foreground">
              The platform has two core modules: To-let Hub for rental listings
              and Service Pro for home service providers such as cooks,
              housemaids, cleaners, drivers, electricians, plumbers, tutors, and
              more.
            </p>
          </div>

          <div className="rounded-[2rem] border bg-hero-gradient p-8 shadow-soft">
            <div className="rounded-[1.5rem] bg-card p-6">
              <h3 className="text-2xl font-black">Project Identity</h3>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">
                    Project Name
                  </p>
                  <p className="text-xl font-black">New Home</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-muted-foreground">
                    Tagline
                  </p>
                  <p className="text-xl font-black">
                    Find your place. Find trusted help.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-muted-foreground">
                    Main Modules
                  </p>
                  <p className="text-xl font-black">
                    To-let Hub + Service Pro
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-muted-foreground">
                    Access Rule
                  </p>
                  <p className="text-xl font-black">
                    Login and approval required
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-muted/40">
        <div className="container-main">
          <SectionTitle
            eyebrow="Values"
            title="Why New Home is different"
            description="This web app is not only a listing directory. It is designed with approval, dashboard access, and safer interaction rules."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <Card key={value.title}>
                  <CardContent className="p-6">
                    <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="size-7" />
                    </div>

                    <h3 className="text-xl font-black">{value.title}</h3>

                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}