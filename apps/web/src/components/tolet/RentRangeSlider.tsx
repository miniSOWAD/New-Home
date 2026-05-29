"use client";

import { Input } from "@/components/ui/input";

type RentRangeSliderProps = {
  minRent: string;
  maxRent: string;
  onMinRentChange: (value: string) => void;
  onMaxRentChange: (value: string) => void;
};

export function RentRangeSlider({
  minRent,
  maxRent,
  onMinRentChange,
  onMaxRentChange
}: RentRangeSliderProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <div className="space-y-2">
        <label className="input-label" htmlFor="minRent">
          Min Rent
        </label>
        <Input
          id="minRent"
          type="number"
          value={minRent}
          onChange={(event) => onMinRentChange(event.target.value)}
          placeholder="৳ Min"
          className="border-orange-100 focus-visible:ring-orange-400"
        />
      </div>

      <div className="space-y-2">
        <label className="input-label" htmlFor="maxRent">
          Max Rent
        </label>
        <Input
          id="maxRent"
          type="number"
          value={maxRent}
          onChange={(event) => onMaxRentChange(event.target.value)}
          placeholder="৳ Max"
          className="border-orange-100 focus-visible:ring-orange-400"
        />
      </div>
    </div>
  );
}