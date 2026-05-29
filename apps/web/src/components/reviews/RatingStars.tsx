"use client";

import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

type RatingStarsProps = {
  value: number;
  onChange?: (value: number) => void;
  readonly?: boolean;
  size?: "sm" | "md" | "lg";
};

const sizeMap = {
  sm: "size-4",
  md: "size-5",
  lg: "size-7"
};

export function RatingStars({
  value,
  onChange,
  readonly = false,
  size = "md"
}: RatingStarsProps) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => {
        const starValue = index + 1;
        const isActive = starValue <= value;

        return (
          <button
            key={starValue}
            type="button"
            disabled={readonly}
            onClick={() => onChange?.(starValue)}
            className={cn(
              "text-yellow-400 transition hover:scale-110 disabled:pointer-events-none",
              !isActive && "text-slate-300"
            )}
            aria-label={`Rate ${starValue} star${starValue > 1 ? "s" : ""}`}
          >
            <Star
              className={cn(
                sizeMap[size],
                isActive && "fill-current"
              )}
            />
          </button>
        );
      })}
    </div>
  );
}