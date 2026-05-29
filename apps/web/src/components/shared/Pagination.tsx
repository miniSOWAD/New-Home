"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

type PaginationProps = {
  page: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
};

export function Pagination({
  page,
  totalPages,
  onPageChange
}: PaginationProps) {
  const canGoPrevious = page > 1;
  const canGoNext = page < totalPages;

  return (
    <div className="flex items-center justify-center gap-3">
      <Button
        variant="outline"
        disabled={!canGoPrevious}
        onClick={() => onPageChange?.(page - 1)}
      >
        <ChevronLeft className="mr-2 size-4" />
        Previous
      </Button>

      <div className="rounded-xl border bg-card px-4 py-2 text-sm font-medium">
        Page {page} of {totalPages}
      </div>

      <Button
        variant="outline"
        disabled={!canGoNext}
        onClick={() => onPageChange?.(page + 1)}
      >
        Next
        <ChevronRight className="ml-2 size-4" />
      </Button>
    </div>
  );
}