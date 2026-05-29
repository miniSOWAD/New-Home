import { Bot, Lightbulb, SearchCheck, ShieldCheck } from "lucide-react";

import { RecommendationCard } from "@/components/ai/RecommendationCard";

const suggestions = [
  {
    title: "Try natural search",
    description:
      "Example: Find me a bachelor room under 6000 near Mirzapur.",
    icon: SearchCheck
  },
  {
    title: "Get better matches",
    description:
      "The AI search can understand location, budget, service type, and user intent.",
    icon: Lightbulb
  },
  {
    title: "Stay protected",
    description:
      "AI suggestions do not bypass approval, login, or verification rules.",
    icon: ShieldCheck
  }
];

const demoRecommendations = [
  {
    type: "TOLET" as const,
    title: "Bachelor room near university area",
    location: "Mirzapur, Tangail",
    price: "৳5,500/month",
    description:
      "Suggested because it matches low budget, student-friendly housing, and nearby location.",
    href: "/to-let/bachelor-room-mirzapur"
  },
  {
    type: "SERVICE" as const,
    title: "Part-time cook available",
    location: "Tangail Sadar",
    price: "৳6,000/month",
    description:
      "Suggested because it matches home service need, monthly availability, and nearby area.",
    href: "/services/cook-tangail"
  }
];

export function AiSuggestionPanel() {
  return (
    <section className="rounded-[2rem] border border-orange-100 bg-white p-6 shadow-sm">
      <div className="mb-8 flex items-start gap-4">
        <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-400 text-white shadow-lg shadow-orange-500/20">
          <Bot className="size-7" />
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
            LangChain Ready
          </p>
          <h2 className="mt-1 text-3xl font-black text-slate-950">
            AI Suggestions
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            This section is prepared for LangChain-powered smart search,
            recommendations, and description generation.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {suggestions.map((suggestion) => {
          const Icon = suggestion.icon;

          return (
            <div
              key={suggestion.title}
              className="rounded-2xl bg-orange-50 p-5"
            >
              <Icon className="mb-4 size-7 text-orange-500" />
              <h3 className="font-black text-slate-950">{suggestion.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                {suggestion.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {demoRecommendations.map((item) => (
          <RecommendationCard
            key={item.title}
            type={item.type}
            title={item.title}
            location={item.location}
            price={item.price}
            description={item.description}
            href={item.href}
          />
        ))}
      </div>
    </section>
  );
}