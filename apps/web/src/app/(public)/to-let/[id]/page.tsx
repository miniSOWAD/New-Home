import Link from "next/link";
import {
  ArrowLeft,
  Bath,
  BedDouble,
  Building2,
  Calendar,
  MapPin,
  Phone,
  ShieldCheck,
  Wallet
} from "lucide-react";

import { PageHeader } from "@/components/shared/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type ToLetDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const listing = {
  title: "Family flat near main road",
  type: "Family Flat",
  location: "Mirzapur, Tangail",
  rent: "৳12,000/month",
  bedrooms: "2 Bedrooms",
  bathrooms: "2 Bathrooms",
  availableFrom: "Available now",
  description:
    "A clean and comfortable family flat near the main road. The property is suitable for small families and includes essential facilities such as gas, water, electricity, and nearby market access.",
  facilities: ["Gas", "Water", "Security", "Balcony", "Nearby Market", "Roadside"]
};

export default async function ToLetDetailsPage({
  params
}: ToLetDetailsPageProps) {
  const { id } = await params;

  return (
    <div>
      <PageHeader
        badge="To-let Details"
        title={listing.title}
        description={`Listing ID: ${id}. Full contact and request features require login and account approval.`}
      >
        <Button asChild variant="outline">
          <Link href="/to-let">
            <ArrowLeft className="mr-2 size-4" />
            Back
          </Link>
        </Button>
      </PageHeader>

      <section className="section-padding">
        <div className="container-main grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <div className="flex h-[360px] items-center justify-center rounded-[2rem] border bg-gradient-to-br from-emerald-100 via-teal-100 to-sky-100 dark:from-emerald-950 dark:via-teal-950 dark:to-sky-950">
              <Building2 className="size-24 text-primary" />
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="mb-5 flex flex-wrap gap-2">
                  <Badge variant="secondary">{listing.type}</Badge>
                  <Badge variant="outline">Verified after approval</Badge>
                </div>

                <h2 className="text-2xl font-black">Description</h2>

                <p className="mt-4 leading-8 text-muted-foreground">
                  {listing.description}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-black">Facilities</h2>

                <div className="mt-5 flex flex-wrap gap-3">
                  {listing.facilities.map((facility) => (
                    <Badge key={facility} variant="secondary">
                      {facility}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <p className="text-sm font-semibold text-muted-foreground">
                  Rent
                </p>
                <p className="mt-2 text-3xl font-black text-primary">
                  {listing.rent}
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="size-5 text-primary" />
                    <span>{listing.location}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <BedDouble className="size-5 text-primary" />
                    <span>{listing.bedrooms}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Bath className="size-5 text-primary" />
                    <span>{listing.bathrooms}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Calendar className="size-5 text-primary" />
                    <span>{listing.availableFrom}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Wallet className="size-5 text-primary" />
                    <span>Advance negotiable</span>
                  </div>
                </div>

                <Button asChild className="mt-6 w-full">
                  <Link href="/auth/login">
                    <Phone className="mr-2 size-4" />
                    Login to Contact Owner
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
                  Do not send money before verification. New Home will later
                  provide reporting, verification, and admin review features for
                  safer rental communication.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}