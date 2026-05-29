import { ProfileCard } from "@/components/profile/ProfileCard";
import { ProfileEditForm } from "@/components/profile/ProfileEditForm";
import { ChangePasswordForm } from "@/components/profile/ChangePasswordForm";

export default function ProviderProfilePage() {
  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-400 p-8 text-white shadow-[0_20px_70px_rgba(251,146,60,0.25)]">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/75">
          Provider / Profile
        </p>

        <h1 className="mt-3 text-4xl font-black tracking-tight">
          Provider Profile
        </h1>

        <p className="mt-3 max-w-2xl text-white/85">
          Manage your provider identity, service area, contact information, and
          security settings.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
        <ProfileCard
          name="Provider User"
          email="provider@newhome.com"
          phone="+880 1000-000000"
          address="Tangail, Bangladesh"
          role="PROVIDER"
          approvalStatus="APPROVED"
        />

        <div className="space-y-6">
          <ProfileEditForm
            name="Provider User"
            email="provider@newhome.com"
            phone="+880 1000-000000"
            address="Tangail, Bangladesh"
          />

          <ChangePasswordForm />
        </div>
      </div>
    </div>
  );
}