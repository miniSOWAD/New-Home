import Link from "next/link";
import { ArrowRight, Building2, MapPin, Sparkles, Wrench } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

type RecommendationType = "TOLET" | "SERVICE";

type RecommendationCardProps = {
  type: RecommendationType;
  title: string;
  location: string;
  price?: string;
  description?: string;
  href: string;
  score?: string;
};

export function RecommendationCard({
  type,
  title,
  location,
  price,
  description,
  href,
  score = "AI Match"
}: RecommendationCardProps) {
  const Icon = type === "TOLET" ? Building2 : Wrench;

  return (
    <Card className="border-orange-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(251,146,60,0.16)]">
      <CardContent className="p-6">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-400 text-white shadow-lg shadow-orange-500/20">
            <Icon className="size-7" />
          </div>

          <Badge className="bg-yellow-100 text-slate-950 hover:bg-yellow-100">
            <Sparkles className="mr-1 size-3" />
            {score}
          </Badge>
        </div>

        <Badge className="mb-3 bg-orange-100 text-orange-700 hover:bg-orange-100">
          {type === "TOLET" ? "To-let Recommendation" : "Service Recommendation"}
        </Badge>

        <h3 className="line-clamp-1 text-xl font-black text-slate-950">
          {title}
        </h3>

        <p className="mt-3 flex items-center gap-2 text-sm text-slate-500">
          <MapPin className="size-4 text-orange-500" />
          {location}
        </p>

        {price ? (
          <p className="mt-4 text-xl font-black text-orange-600">{price}</p>
        ) : null}

        {description ? (
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
            {description}
          </p>
        ) : null}

        <Button
          asChild
          className="mt-5 w-full rounded-2xl bg-yellow-400 font-black text-slate-950 hover:bg-yellow-300"
        >
          <Link href={href}>
            View Match
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}