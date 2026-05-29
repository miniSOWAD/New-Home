"use client";

import { useState } from "react";
import { PlusCircle } from "lucide-react";
import { toast } from "sonner";

import { FacilitiesSelector } from "@/components/tolet/FacilitiesSelector";
import { ImageUploader } from "@/components/shared/ImageUploader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  propertyForOptions,
  rentTypes,
  toletCategories
} from "@/config/tolet.config";

export function ToletCreateForm() {
  const [facilities, setFacilities] = useState<string[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success("To-let form ready. Backend API will be connected later.");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-orange-100 bg-white p-6 shadow-sm"
    >
      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
          Provider
        </p>
        <h2 className="mt-1 text-3xl font-black text-slate-950">
          Create To-let Post
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Add property details. Admin approval will be required before it becomes
          visible.
        </p>
      </div>

      <div className="space-y-6">
        <div className="form-grid">
          <div className="space-y-2">
            <label className="input-label" htmlFor="title">
              Title
            </label>
            <Input id="title" placeholder="Example: Family flat near main road" />
          </div>

          <div className="space-y-2">
            <label className="input-label">Category</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
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
        </div>

        <div className="space-y-2">
          <label className="input-label" htmlFor="description">
            Description
          </label>
          <Textarea
            id="description"
            placeholder="Write full property description..."
          />
        </div>

        <div className="form-grid">
          <div className="space-y-2">
            <label className="input-label">Property For</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
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

          <div className="space-y-2">
            <label className="input-label">Rent Type</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select rent type" />
              </SelectTrigger>
              <SelectContent>
                {rentTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="form-grid">
          <Input type="number" placeholder="Rent Amount" />
          <Input type="number" placeholder="Advance Amount" />
        </div>

        <div className="form-grid">
          <Input placeholder="Location, e.g. Mirzapur, Tangail" />
          <Input placeholder="Full address" />
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <Input type="number" placeholder="Bedrooms" />
          <Input type="number" placeholder="Bathrooms" />
          <Input type="number" placeholder="Size in sq ft" />
        </div>

        <div className="space-y-3">
          <label className="input-label">Facilities</label>
          <FacilitiesSelector selected={facilities} onChange={setFacilities} />
        </div>

        <ImageUploader label="Property Images" />

        <Button className="rounded-2xl bg-yellow-400 font-black text-slate-950 hover:bg-yellow-300">
          <PlusCircle className="mr-2 size-5" />
          Submit To-let Post
        </Button>
      </div>
    </form>
  );
}