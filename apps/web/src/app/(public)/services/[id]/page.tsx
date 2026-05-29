import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  CalendarDays,
  Clock,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  User
} from "lucide-react";

import { PageHeader } from "@/components/shared/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type ServiceDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const service = {
  name: "Experienced Home Cook",
  category: "Cook",
  location: "Mirzapur, Tangail",
  rate: "৳8,000/month",
  experience: "4 years experience",
  availability: "Morning and evening",
  description:
    "Experienced home cook available for family meal preparation. Skilled in Bangladeshi food, daily cooking, and basic kitchen management.",
  skills: ["Bangladeshi Food", "Daily Cooking", "Kitchen Cleaning", "Meal Prep"]
};

export default async function ServiceDetailsPage({
  params
}: ServiceDetailsPageProps) {
  const { id } = await params;

  return (
    <div>
      <PageHeader
        badge="Service Details"
        title={service.name}
        description={`Service ID: ${id}. Request and contact features require login and account approval.`}
      >
        <Button asChild variant="outline">
          <Link href="/services">
            <ArrowLeft className="mr-2 size-4" />
            Back
          </Link>
        </Button>
      </PageHeader>

      <section className="section-padding">
        <div className="container-main grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="mb-5 flex flex-wrap gap-2">
                  <Badge variant="secondary">{service.category}</Badge>
                  <Badge variant="outline">Provider approval required</Badge>
                </div>

                <div className="mb-6 flex size-20 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                  <User className="size-10" />
                </div>

                <h2 className="text-2xl font-black">About this provider</h2>

                <p className="mt-4 leading-8 text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-black">Skills</h2>

                <div className="mt-5 flex flex-wrap gap-3">
                  {service.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-black">Reviews Preview</h2>

                <div className="mt-5 rounded-2xl bg-muted p-5">
                  <div className="mb-3 flex items-center gap-1 text-warning">
                    <Star className="size-5 fill-current" />
                    <Star className="size-5 fill-current" />
                    <Star className="size-5 fill-current" />
                    <Star className="size-5 fill-current" />
                    <Star className="size-5" />
                  </div>

                  <p className="text-sm leading-6 text-muted-foreground">
                    Review system will be connected after customer request and
                    completed service flow is implemented.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <p className="text-sm font-semibold text-muted-foreground">
                  Rate
                </p>

                <p className="mt-2 text-3xl font-black text-primary">
                  {service.rate}
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="size-5 text-primary" />
                    <span>{service.location}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <BadgeCheck className="size-5 text-primary" />
                    <span>{service.experience}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="size-5 text-primary" />
                    <span>{service.availability}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <CalendarDays className="size-5 text-primary" />
                    <span>Available for monthly service</span>
                  </div>
                </div>

                <Button asChild className="mt-6 w-full">
                  <Link href="/auth/login">
                    <Phone className="mr-2 size-4" />
                    Login to Request Service
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <ShieldCheck className="size-6" />
                </div>

                <h3 className="text-xl font-black">Safety Notice</h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Verify details before hiring. New Home will later include
                  admin verification, reporting, ratings, and request history to
                  make service hiring safer.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}