"use client";

import { useEffect } from "react";
import { RefreshCcw, Home } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

type ErrorPageProps = {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error("New Home app error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="mx-auto max-w-lg rounded-3xl border bg-card p-8 text-center shadow-soft">
        <div className="mx-auto mb-5 flex size-16 items-center justify-center rounded-full bg-destructive/10 text-destructive">
          <RefreshCcw className="size-8" />
        </div>

        <h1 className="text-2xl font-bold tracking-tight">
          Something went wrong
        </h1>

        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          We could not load this page properly. Please try again or return to the
          home page.
        </p>

        {error.digest ? (
          <p className="mt-3 text-xs text-muted-foreground">
            Error ID: {error.digest}
          </p>
        ) : null}

        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Button onClick={reset}>
            <RefreshCcw className="mr-2 size-4" />
            Try again
          </Button>

          <Button asChild variant="outline">
            <Link href="/">
              <Home className="mr-2 size-4" />
              Go home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}