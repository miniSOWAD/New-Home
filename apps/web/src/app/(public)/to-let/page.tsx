import Link from "next/link";
import { BedDouble, Building2, Home, MapPin, Search } from "lucide-react";

import { SmartSearchBox } from "@/components/ai/SmartSearchBox";
import { PageHeader } from "@/components/shared/PageHeader";
import { SearchBar } from "@/components/shared/SearchBar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const listings = [
  {
    id: "family-flat-mirzapur",
    title: "Family flat near main road",
    type: "Family Flat",
    location: "Mirzapur, Tangail",
    rent: "৳12,000/month",
    details: "2 bedrooms · 2 bathrooms · 900 sq ft",
    description:
      "A clean family flat near the main road with gas, water, and security facilities."
  },
  {
    id: "bachelor-room-dhanmondi",
    title: "Bachelor room for students",
    type: "Bachelor Room",
    location: "Dhanmondi, Dhaka",
    rent: "৳6,000/month",
    details: "1 room · Shared bathroom · Wi-Fi available",
    description:
      "Affordable bachelor room suitable for students and job holders."
  },
  {
    id: "office-space-uttara",
    title: "Small office space",
    type: "Office Space",
    location: "Uttara, Dhaka",
    rent: "৳18,000/month",
    details: "600 sq ft · Main road side · Lift available",
    description:
      "Commercial office space suitable for small business, agency, or startup."
  }
];

export default function ToLetPage() {
  return (
    <div>
      <PageHeader
        badge="To-let Hub"
        title="Find houses, rooms, flats, and spaces"
        description="Browse rental listings. Login and approval will be required before contacting owners or sending requests."
      />

      <section className="section-padding">
        <div className="container-main space-y-8">
          <SmartSearchBox placeholder="Example: Find me a bachelor room under 6000 near Mirzapur..." />

          <div className="rounded-3xl border bg-card p-5 shadow-sm">
            <SearchBar placeholder="Search by location, rent, or type..." />
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {listings.map((listing) => (
              <Card
                key={listing.id}
                className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="flex h-48 items-center justify-center bg-gradient-to-br from-emerald-100 via-teal-100 to-sky-100 dark:from-emerald-950 dark:via-teal-950 dark:to-sky-950">
                  <Building2 className="size-16 text-primary" />
                </div>

                <CardContent className="p-6">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <Badge variant="secondary">{listing.type}</Badge>
                    <p className="font-black text-primary">{listing.rent}</p>
                  </div>

                  <h2 className="text-xl font-black">{listing.title}</h2>

                  <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="size-4 text-primary" />
                    {listing.location}
                  </p>

                  <p className="mt-3 text-sm font-medium">{listing.details}</p>

                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted-foreground">
                    {listing.description}
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <Button asChild variant="outline">
                      <Link href={`/to-let/${listing.id}`}>View Details</Link>
                    </Button>

                    <Button asChild>
                      <Link href="/auth/login">Contact</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <Home className="mb-4 size-8 text-primary" />
                <h3 className="font-black">Family Houses</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Search family-ready rental homes with useful facilities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <BedDouble className="mb-4 size-8 text-primary" />
                <h3 className="font-black">Bachelor Seats</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Find rooms, mess seats, hostel seats, and sublets.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Search className="mb-4 size-8 text-primary" />
                <h3 className="font-black">Filtered Search</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Filter by area, rent, property type, and facilities later.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}