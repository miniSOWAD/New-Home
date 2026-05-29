import Link from "next/link";
import { ArrowLeft, HousePlus } from "lucide-react";

import { ToletEditForm } from "@/components/tolet/ToletEditForm";
import { Button } from "@/components/ui/button";

type EditToletPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditToletPage({ params }: EditToletPageProps) {
  const { id } = await params;

  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-400 p-8 text-white shadow-[0_20px_70px_rgba(251,146,60,0.25)]">
        <Button
          asChild
          variant="outline"
          className="mb-6 border-white/40 bg-white/15 text-white hover:bg-white hover:text-orange-600"
        >
          <Link href="/dashboard/provider/my-tolets">
            <ArrowLeft className="mr-2 size-4" />
            Back to My To-lets
          </Link>
        </Button>

        <div className="flex items-center gap-4">
          <div className="flex size-16 items-center justify-center rounded-3xl bg-white/20 text-white">
            <HousePlus className="size-8" />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/75">
              Provider / To-let
            </p>

            <h1 className="mt-2 text-4xl font-black tracking-tight">
              Edit To-let Post
            </h1>
          </div>
        </div>

        <p className="mt-5 max-w-2xl text-white/85">
          Editing listing ID: <span className="font-black">{id}</span>. Update
          rental details, facilities, location, rent, images, and availability.
        </p>
      </div>

      <ToletEditForm />
    </div>
  );
}