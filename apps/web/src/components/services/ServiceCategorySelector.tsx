"use client";

import { Check } from "lucide-react";

import { serviceCategories } from "@/config/service.config";
import { cn } from "@/lib/utils";

type ServiceCategorySelectorProps = {
  selected?: string;
  onChange: (category: string) => void;
};

export function ServiceCategorySelector({
  selected,
  onChange
}: ServiceCategorySelectorProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {serviceCategories.map((category) => {
        const isSelected = selected === category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
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

            {category}
          </button>
        );
      })}
    </div>
  );
}