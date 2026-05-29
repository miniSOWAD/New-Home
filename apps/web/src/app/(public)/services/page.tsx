import Link from "next/link";
import {
  Car,
  CookingPot,
  Hammer,
  MapPin,
  Plug,
  ShieldCheck,
  Sparkles
} from "lucide-react";

import { PageHeader } from "@/components/shared/PageHeader";
import { SearchBar } from "@/components/shared/SearchBar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    id: "cook-mirzapur",
    name: "Experienced Home Cook",
    category: "Cook",
    location: "Mirzapur, Tangail",
    rate: "৳8,000/month",
    experience: "4 years experience",
    icon: CookingPot
  },
  {
    id: "housemaid-dhanmondi",
    name: "Part-time Housemaid",
    category: "Housemaid",
    location: "Dhanmondi, Dhaka",
    rate: "৳5,000/month",
    experience: "2 years experience",
    icon: Sparkles
  },
  {
    id: "electrician-uttara",
    name: "Electrician for Home Repair",
    category: "Electrician",
    location: "Uttara, Dhaka",
    rate: "৳500/visit",
    experience: "6 years experience",
    icon: Plug
  },
  {
    id: "driver-tangail",
    name: "Family Driver",
    category: "Driver",
    location: "Tangail Sadar",
    rate: "৳15,000/month",
    experience: "5 years experience",
    icon: Car
  },
  {
    id: "plumber-mirpur",
    name: "Emergency Plumber",
    category: "Plumber",
    location: "Mirpur, Dhaka",
    rate: "৳600/visit",
    experience: "3 years experience",
    icon: Hammer
  },
  {
    id: "guard-gazipur",
    name: "Building Security Guard",
    category: "Security Guard",
    location: "Gazipur",
    rate: "৳12,000/month",
    experience: "3 years experience",
    icon: ShieldCheck
  }
];

export default function ServicesPage() {
  return (
    <div>
      <PageHeader
        badge="Service Pro"
        title="Find trusted home service providers"
        description="Browse service providers. Login and admin-approved account access will be required before sending service requests."
      />

      <section className="section-padding">
        <div className="container-main">
          <div className="mb-8 rounded-3xl border bg-card p-5 shadow-sm">
            <SearchBar placeholder="Search cook, housemaid, cleaner, driver, electrician..." />
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Card
                  key={service.id}
                  className="transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
                >
                  <CardContent className="p-6">
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="size-7" />
                      </div>

                      <Badge variant="secondary">{service.category}</Badge>
                    </div>

                    <h2 className="text-xl font-black">{service.name}</h2>

                    <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="size-4 text-primary" />
                      {service.location}
                    </p>

                    <div className="mt-5 rounded-2xl bg-muted p-4">
                      <p className="text-sm text-muted-foreground">Rate</p>
                      <p className="text-xl font-black text-primary">
                        {service.rate}
                      </p>
                    </div>

                    <p className="mt-4 text-sm font-medium">
                      {service.experience}
                    </p>

                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <Button asChild variant="outline">
                        <Link href={`/services/${service.id}`}>
                          View Details
                        </Link>
                      </Button>

                      <Button asChild>
                        <Link href="/auth/login">Request</Link>
                      </Button>
                    </div>
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