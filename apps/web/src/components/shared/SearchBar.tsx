"use client";

import { Search, X } from "lucide-react";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SearchBarProps = {
  placeholder?: string;
  defaultValue?: string;
  onSearch?: (value: string) => void;
  className?: string;
};

export function SearchBar({
  placeholder = "Search...",
  defaultValue = "",
  onSearch,
  className
}: SearchBarProps) {
  const [value, setValue] = useState(defaultValue);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch?.(value.trim());
  };

  const handleClear = () => {
    setValue("");
    onSearch?.("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("relative flex w-full items-center gap-2", className)}
    >
      <div className="relative w-full">
        <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

        <Input
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder={placeholder}
          className="pl-11 pr-11"
        />

        {value ? (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="size-4" />
          </button>
        ) : null}
      </div>

      <Button type="submit">Search</Button>
    </form>
  );
}