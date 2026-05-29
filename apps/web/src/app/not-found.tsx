import Link from "next/link";
import { Home, Search } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="mx-auto max-w-xl text-center">
        <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Search className="size-10" />
        </div>

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          404 Error
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          Page not found
        </h1>

        <p className="mt-5 text-muted-foreground">
          The page you are looking for does not exist, has been removed, or is
          temporarily unavailable.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild>
            <Link href="/">
              <Home className="mr-2 size-4" />
              Back to Home
            </Link>
          </Button>

          <Button asChild variant="outline">
            <Link href="/to-let">Browse To-let</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}