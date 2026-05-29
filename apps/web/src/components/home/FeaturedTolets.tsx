import Link from "next/link";
import { ArrowRight, BedDouble, MapPin, Ruler, Wallet } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionTitle } from "@/components/shared/SectionTitle";

const tolets = [
  {
    title: "Family flat near main road",
    location: "Mirzapur, Tangail",
    rent: "৳12,000/month",
    type: "Family",
    size: "900 sq ft",
    rooms: "2 Bed"
  },
  {
    title: "Bachelor room for students",
    location: "Dhanmondi, Dhaka",
    rent: "৳6,000/month",
    type: "Bachelor",
    size: "250 sq ft",
    rooms: "1 Room"
  },
  {
    title: "Small office space",
    location: "Uttara, Dhaka",
    rent: "৳18,000/month",
    type: "Office",
    size: "600 sq ft",
    rooms: "Open space"
  }
];

export function FeaturedTolets() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle
            align="left"
            eyebrow="To-let Hub"
            title="Featured rental listings"
            description="A preview of house, room, flat, and commercial rental posts."
          />

          <Button asChild variant="outline">
            <Link href="/to-let">
              View All To-let
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {tolets.map((item) => (
            <Card
              key={item.title}
              className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="h-48 bg-gradient-to-br from-emerald-100 via-teal-100 to-sky-100 dark:from-emerald-950 dark:via-teal-950 dark:to-sky-950">
                <div className="flex h-full items-center justify-center">
                  <BedDouble className="size-16 text-primary" />
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <Badge variant="secondary">{item.type}</Badge>
                  <p className="font-black text-primary">{item.rent}</p>
                </div>

                <h3 className="text-xl font-black">{item.title}</h3>

                <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="size-4 text-primary" />
                  {item.location}
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-xl bg-muted p-3">
                    <p className="flex items-center gap-2 font-medium">
                      <Ruler className="size-4 text-primary" />
                      {item.size}
                    </p>
                  </div>

                  <div className="rounded-xl bg-muted p-3">
                    <p className="flex items-center gap-2 font-medium">
                      <Wallet className="size-4 text-primary" />
                      {item.rooms}
                    </p>
                  </div>
                </div>

                <Button asChild className="mt-5 w-full">
                  <Link href="/auth/login">Login to Contact</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}