"use client";

import { Filter, RotateCcw, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {
  availabilityOptions,
  serviceCategories
} from "@/config/service.config";
import { useFilterStore } from "@/store/filter.store";

type ServiceFiltersProps = {
  onApply?: () => void;
};

export function ServiceFilters({ onApply }: ServiceFiltersProps) {
  const { serviceFilters, setServiceFilter, resetServiceFilters } =
    useFilterStore();

  return (
    <div className="rounded-[1.7rem] border border-orange-100 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
            Filter
          </p>
          <h2 className="text-2xl font-black text-slate-950">
            Search Services
          </h2>
        </div>

        <div className="flex size-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
          <Filter className="size-6" />
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-4">
        <div className="space-y-2 lg:col-span-2">
          <label className="input-label" htmlFor="serviceQuery">
            Search
          </label>

          <div className="relative">
            <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-orange-400" />
            <Input
              id="serviceQuery"
              value={serviceFilters.query}
              onChange={(event) =>
                setServiceFilter("query", event.target.value)
              }
              placeholder="Search cook, housemaid, cleaner, driver..."
              className="border-orange-100 pl-11 focus-visible:ring-orange-400"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="input-label">Category</label>
          <Select
            value={serviceFilters.category}
            onValueChange={(value) => setServiceFilter("category", value)}
          >
            <SelectTrigger className="border-orange-100 focus:ring-orange-400">
              <SelectValue placeholder="Any category" />
            </SelectTrigger>

            <SelectContent>
              {serviceCategories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="input-label">Availability</label>
          <Select
            value={serviceFilters.availability}
            onValueChange={(value) => setServiceFilter("availability", value)}
          >
            <SelectTrigger className="border-orange-100 focus:ring-orange-400">
              <SelectValue placeholder="Any time" />
            </SelectTrigger>

            <SelectContent>
              {availabilityOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <div className="space-y-2">
          <label className="input-label" htmlFor="serviceLocation">
            Location
          </label>
          <Input
            id="serviceLocation"
            value={serviceFilters.location}
            onChange={(event) =>
              setServiceFilter("location", event.target.value)
            }
            placeholder="Example: Mirzapur, Tangail"
            className="border-orange-100 focus-visible:ring-orange-400"
          />
        </div>

        <div className="space-y-2">
          <label className="input-label" htmlFor="minRate">
            Min Rate
          </label>
          <Input
            id="minRate"
            type="number"
            value={serviceFilters.minRate}
            onChange={(event) =>
              setServiceFilter("minRate", event.target.value)
            }
            placeholder="৳ Min"
            className="border-orange-100 focus-visible:ring-orange-400"
          />
        </div>

        <div className="space-y-2">
          <label className="input-label" htmlFor="maxRate">
            Max Rate
          </label>
          <Input
            id="maxRate"
            type="number"
            value={serviceFilters.maxRate}
            onChange={(event) =>
              setServiceFilter("maxRate", event.target.value)
            }
            placeholder="৳ Max"
            className="border-orange-100 focus-visible:ring-orange-400"
          />
        </div>
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
          onClick={resetServiceFilters}
          className="rounded-2xl border-orange-200 text-orange-600 hover:bg-orange-50"
        >
          <RotateCcw className="mr-2 size-4" />
          Reset
        </Button>
      </div>
    </div>
  );
}