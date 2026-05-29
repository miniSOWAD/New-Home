import { CheckCircle2, LogIn, Search, UserPlus } from "lucide-react";

import { SectionTitle } from "@/components/shared/SectionTitle";

const steps = [
  {
    title: "Create account",
    description:
      "Register as a Customer or Provider with your basic information and role.",
    icon: UserPlus
  },
  {
    title: "Wait for approval",
    description:
      "Admin or Super Admin checks your account and approves your access.",
    icon: CheckCircle2
  },
  {
    title: "Login dashboard",
    description:
      "Approved users can access their dedicated role-based dashboard.",
    icon: LogIn
  },
  {
    title: "Use services",
    description:
      "Customers can search and request. Providers can create posts and manage requests.",
    icon: Search
  }
];

export function HowItWorks() {
  return (
    <section className="section-padding bg-muted/40">
      <div className="container-main">
        <SectionTitle
          eyebrow="Process"
          title="How New Home works"
          description="The system is designed with security, approval, and role-based access from the beginning."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="relative rounded-3xl border bg-card p-6 shadow-sm"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <Icon className="size-7" />
                  </div>

                  <span className="text-5xl font-black text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-xl font-black">{step.title}</h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}