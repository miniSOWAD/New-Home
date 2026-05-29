"use client";

import Image from "next/image";
import { ImagePlus, X } from "lucide-react";
import { ChangeEvent, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ImageUploaderProps = {
  label?: string;
  maxImages?: number;
  onChange?: (files: File[]) => void;
  className?: string;
};

export function ImageUploader({
  label = "Upload images",
  maxImages = 5,
  onChange,
  className
}: ImageUploaderProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files ?? []);
    const nextFiles = [...files, ...selectedFiles].slice(0, maxImages);
    const nextPreviews = nextFiles.map((file) => URL.createObjectURL(file));

    setFiles(nextFiles);
    setPreviews(nextPreviews);
    onChange?.(nextFiles);
  };

  const removeImage = (index: number) => {
    const nextFiles = files.filter((_, fileIndex) => fileIndex !== index);
    const nextPreviews = nextFiles.map((file) => URL.createObjectURL(file));

    setFiles(nextFiles);
    setPreviews(nextPreviews);
    onChange?.(nextFiles);
  };

  return (
    <div className={cn("space-y-4", className)}>
      <div>
        <p className="input-label">{label}</p>
        <p className="mt-1 text-xs text-muted-foreground">
          Upload up to {maxImages} images.
        </p>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        multiple
        className="hidden"
        onChange={handleFileChange}
      />

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="flex min-h-36 w-full flex-col items-center justify-center rounded-2xl border border-dashed bg-muted/30 p-6 text-center transition-colors hover:bg-muted"
      >
        <ImagePlus className="mb-3 size-8 text-primary" />
        <span className="text-sm font-semibold">Click to upload</span>
        <span className="mt-1 text-xs text-muted-foreground">
          JPG, PNG, or WEBP
        </span>
      </button>

      {previews.length > 0 ? (
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {previews.map((preview, index) => (
            <div
              key={preview}
              className="group relative aspect-video overflow-hidden rounded-2xl border"
            >
              <Image
                src={preview}
                alt={`Uploaded preview ${index + 1}`}
                fill
                className="object-cover"
              />

              <Button
                type="button"
                size="icon"
                variant="destructive"
                className="absolute right-2 top-2 size-8 opacity-0 transition-opacity group-hover:opacity-100"
                onClick={() => removeImage(index)}
              >
                <X className="size-4" />
              </Button>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}