"use client";

import { Check } from "lucide-react";

import { availabilityOptions } from "@/config/service.config";
import { cn } from "@/lib/utils";

type ProviderAvailabilityProps = {
  selected: string[];
  onChange: (availability: string[]) => void;
};

export function ProviderAvailability({
  selected,
  onChange
}: ProviderAvailabilityProps) {
  const toggleAvailability = (availability: string) => {
    if (selected.includes(availability)) {
      onChange(selected.filter((item) => item !== availability));
      return;
    }

    onChange([...selected, availability]);
  };

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {availabilityOptions.map((availability) => {
        const isSelected = selected.includes(availability);

        return (
          <button
            key={availability}
            type="button"
            onClick={() => toggleAvailability(availability)}
            className={cn(
              "flex items-center gap-3 rounded-2xl border p-3 text-left text-sm font-semibold transition",
              isSelected
                ? "border-orange-400 bg-orange-50 text-orange-700"
                : "border-orange-100 bg-white text-slate-600 hover:bg-orange-50"
            )}
          >
            <span
              className={cn(
                "flex size-5 items-center justify-center rounded-full border",
                isSelected
                  ? "border-orange-500 bg-orange-500 text-white"
                  : "border-orange-200"
              )}
            >
              {isSelected ? <Check className="size-3" /> : null}
            </span>

            {availability}
          </button>
        );
      })}
    </div>
  );
}