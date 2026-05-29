"use client";

import { Filter, RotateCcw, Search } from "lucide-react";

import { RentRangeSlider } from "@/components/tolet/RentRangeSlider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { propertyForOptions, toletCategories } from "@/config/tolet.config";
import { useFilterStore } from "@/store/filter.store";

type ToletFiltersProps = {
  onApply?: () => void;
};

export function ToletFilters({ onApply }: ToletFiltersProps) {
  const { toletFilters, setToletFilter, resetToletFilters } = useFilterStore();

  return (
    <div className="rounded-[1.7rem] border border-orange-100 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
            Filter
          </p>
          <h2 className="text-2xl font-black text-slate-950">
            Search To-let
          </h2>
        </div>

        <div className="flex size-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
          <Filter className="size-6" />
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-4">
        <div className="space-y-2 lg:col-span-2">
          <label className="input-label" htmlFor="toletQuery">
            Search
          </label>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-orange-400" />
            <Input
              id="toletQuery"
              value={toletFilters.query}
              onChange={(event) => setToletFilter("query", event.target.value)}
              placeholder="Search by location, title, rent..."
              className="border-orange-100 pl-11 focus-visible:ring-orange-400"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="input-label">Category</label>
          <Select
            value={toletFilters.category}
            onValueChange={(value) => setToletFilter("category", value)}
          >
            <SelectTrigger className="border-orange-100 focus:ring-orange-400">
              <SelectValue placeholder="Any category" />
            </SelectTrigger>
            <SelectContent>
              {toletCategories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="input-label">Property For</label>
          <Select
            value={toletFilters.propertyFor}
            onValueChange={(value) => setToletFilter("propertyFor", value)}
          >
            <SelectTrigger className="border-orange-100 focus:ring-orange-400">
              <SelectValue placeholder="Any type" />
            </SelectTrigger>
            <SelectContent>
              {propertyForOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-2">
          <label className="input-label" htmlFor="toletLocation">
            Location
          </label>
          <Input
            id="toletLocation"
            value={toletFilters.location}
            onChange={(event) => setToletFilter("location", event.target.value)}
            placeholder="Example: Mirzapur, Tangail"
            className="border-orange-100 focus-visible:ring-orange-400"
          />
        </div>

        <RentRangeSlider
          minRent={toletFilters.minRent}
          maxRent={toletFilters.maxRent}
          onMinRentChange={(value) => setToletFilter("minRent", value)}
          onMaxRentChange={(value) => setToletFilter("maxRent", value)}
        />
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <Button
          type="button"
          onClick={onApply}
          className="rounded-2xl bg-yellow-400 font-black text-slate-950 hover:bg-yellow-300"
        >
          Apply Filters
        </Button>

        <Button
          type="button"
          variant="outline"
          onClick={resetToletFilters}
          className="rounded-2xl border-orange-200 text-orange-600 hover:bg-orange-50"
        >
          <RotateCcw className="mr-2 size-4" />
          Reset
        </Button>
      </div>
    </div>
  );
}