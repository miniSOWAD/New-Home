"use client";

import { useState } from "react";
import { PlusCircle, X } from "lucide-react";
import { toast } from "sonner";

import { ImageUploader } from "@/components/shared/ImageUploader";
import { ProviderAvailability } from "@/components/services/ProviderAvailability";
import { ServiceCategorySelector } from "@/components/services/ServiceCategorySelector";
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
import { serviceRateTypes } from "@/config/service.config";

export function ServiceCreateForm() {
  const [category, setCategory] = useState<string>("");
  const [availability, setAvailability] = useState<string[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  const [skillInput, setSkillInput] = useState("");

  const addSkill = () => {
    const nextSkill = skillInput.trim();

    if (!nextSkill) {
      return;
    }

    if (skills.includes(nextSkill)) {
      setSkillInput("");
      return;
    }

    setSkills([...skills, nextSkill]);
    setSkillInput("");
  };

  const removeSkill = (skill: string) => {
    setSkills(skills.filter((item) => item !== skill));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success("Service form ready. Backend API will be connected later.");
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
          Create Service Post
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Add service information. Admin approval will be required before it
          becomes visible.
        </p>
      </div>

      <div className="space-y-6">
        <div className="form-grid">
          <div className="space-y-2">
            <label className="input-label" htmlFor="title">
              Title
            </label>
            <Input
              id="title"
              placeholder="Example: Experienced home cook"
              className="border-orange-100 focus-visible:ring-orange-400"
            />
          </div>

          <div className="space-y-2">
            <label className="input-label">Rate Type</label>
            <Select>
              <SelectTrigger className="border-orange-100 focus:ring-orange-400">
                <SelectValue placeholder="Select rate type" />
              </SelectTrigger>
              <SelectContent>
                {serviceRateTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-3">
          <label className="input-label">Service Category</label>
          <ServiceCategorySelector selected={category} onChange={setCategory} />
        </div>

        <div className="space-y-2">
          <label className="input-label" htmlFor="description">
            Description
          </label>
          <Textarea
            id="description"
            placeholder="Write full service description..."
            className="border-orange-100 focus-visible:ring-orange-400"
          />
        </div>

        <div className="form-grid">
          <Input
            type="number"
            placeholder="Rate Amount"
            className="border-orange-100 focus-visible:ring-orange-400"
          />
          <Input
            type="number"
            placeholder="Experience Years"
            className="border-orange-100 focus-visible:ring-orange-400"
          />
        </div>

        <Input
          placeholder="Location, e.g. Mirzapur, Tangail"
          className="border-orange-100 focus-visible:ring-orange-400"
        />

        <div className="space-y-3">
          <label className="input-label">Skills</label>

          <div className="flex gap-3">
            <Input
              value={skillInput}
              onChange={(event) => setSkillInput(event.target.value)}
              placeholder="Example: Bangladeshi food"
              className="border-orange-100 focus-visible:ring-orange-400"
            />

            <Button
              type="button"
              onClick={addSkill}
              className="rounded-2xl bg-yellow-400 font-black text-slate-950 hover:bg-yellow-300"
            >
              Add
            </Button>
          </div>

          {skills.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <button
                  key={skill}
                  type="button"
                  onClick={() => removeSkill(skill)}
                  className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-700"
                >
                  {skill}
                  <X className="size-3" />
                </button>
              ))}
            </div>
          ) : null}
        </div>

        <div className="space-y-3">
          <label className="input-label">Availability</label>
          <ProviderAvailability
            selected={availability}
            onChange={setAvailability}
          />
        </div>

        <ImageUploader label="Service Images" />

        <Button className="rounded-2xl bg-yellow-400 font-black text-slate-950 hover:bg-yellow-300">
          <PlusCircle className="mr-2 size-5" />
          Submit Service Post
        </Button>
      </div>
    </form>
  );
}