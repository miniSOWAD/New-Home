"use client";

import { Check } from "lucide-react";

import { toletFacilities } from "@/config/tolet.config";
import { cn } from "@/lib/utils";

type FacilitiesSelectorProps = {
  selected: string[];
  onChange: (facilities: string[]) => void;
};

export function FacilitiesSelector({
  selected,
  onChange
}: FacilitiesSelectorProps) {
  const toggleFacility = (facility: string) => {
    if (selected.includes(facility)) {
      onChange(selected.filter((item) => item !== facility));
      return;
    }

    onChange([...selected, facility]);
  };

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {toletFacilities.map((facility) => {
        const isSelected = selected.includes(facility);

        return (
          <button
            key={facility}
            type="button"
            onClick={() => toggleFacility(facility)}
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

            {facility}
          </button>
        );
      })}
    </div>
  );
}