import Link from "next/link";
import { ArrowLeft, PlusCircle } from "lucide-react";

import { ServiceEditForm } from "@/components/services/ServiceEditForm";
import { Button } from "@/components/ui/button";

type EditServicePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditServicePage({ params }: EditServicePageProps) {
  const { id } = await params;

  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-400 p-8 text-white shadow-[0_20px_70px_rgba(251,146,60,0.25)]">
        <Button
          asChild
          variant="outline"
          className="mb-6 border-white/40 bg-white/15 text-white hover:bg-white hover:text-orange-600"
        >
          <Link href="/dashboard/provider/my-services">
            <ArrowLeft className="mr-2 size-4" />
            Back to My Services
          </Link>
        </Button>

        <div className="flex items-center gap-4">
          <div className="flex size-16 items-center justify-center rounded-3xl bg-white/20 text-white">
            <PlusCircle className="size-8" />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/75">
              Provider / Service Pro
            </p>

            <h1 className="mt-2 text-4xl font-black tracking-tight">
              Edit Service Post
            </h1>
          </div>
        </div>

        <p className="mt-5 max-w-2xl text-white/85">
          Editing service ID: <span className="font-black">{id}</span>. Update
          category, skills, rate, experience, availability, location, images,
          and service description.
        </p>
      </div>

      <ServiceEditForm />
    </div>
  );
}