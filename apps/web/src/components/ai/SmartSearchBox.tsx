"use client";

import { Bot, Loader2, Search, Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { AiSuggestionPanel } from "@/components/ai/AiSuggestionPanel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type SmartSearchBoxProps = {
  placeholder?: string;
};

export function SmartSearchBox({
  placeholder = "Example: Find me a family flat under 12000 near Mirzapur..."
}: SmartSearchBoxProps) {
  const [query, setQuery] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      toast.error("Please write what you are looking for.");
      return;
    }

    setIsThinking(true);

    window.setTimeout(() => {
      setIsThinking(false);
      setShowSuggestions(true);
      toast.success("AI smart search demo ready. LangChain API will connect later.");
    }, 700);
  };

  return (
    <div className="space-y-6">
      <form
        onSubmit={handleSearch}
        className="rounded-[2rem] border border-orange-100 bg-white p-5 shadow-sm"
      >
        <div className="mb-5 flex items-center gap-4">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-400 text-white">
            <Bot className="size-6" />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
              AI Smart Search
            </p>
            <h2 className="text-2xl font-black text-slate-950">
              Search naturally
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-3 md:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-orange-400" />

            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={placeholder}
              className="h-12 rounded-2xl border-orange-100 bg-orange-50/40 pl-11 focus-visible:ring-orange-400"
            />
          </div>

          <Button
            type="submit"
            disabled={isThinking}
            className="h-12 rounded-2xl bg-yellow-400 px-6 font-black text-slate-950 shadow-lg shadow-yellow-400/25 hover:bg-yellow-300"
          >
            {isThinking ? (
              <Loader2 className="mr-2 size-5 animate-spin" />
            ) : (
              <Sparkles className="mr-2 size-5" />
            )}
            {isThinking ? "Thinking..." : "Ask AI"}
          </Button>
        </div>

        <p className="mt-4 text-sm leading-6 text-slate-500">
          Later this will use LangChain to understand user intent, extract
          location, budget, service type, property type, and return smart
          matches.
        </p>
      </form>

      {showSuggestions ? <AiSuggestionPanel /> : null}
    </div>
  );
}