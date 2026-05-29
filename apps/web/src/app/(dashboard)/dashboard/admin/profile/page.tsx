import { ProfileCard } from "@/components/profile/ProfileCard";
import { ProfileEditForm } from "@/components/profile/ProfileEditForm";
import { ChangePasswordForm } from "@/components/profile/ChangePasswordForm";

export default function AdminProfilePage() {
  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-400 p-8 text-white shadow-[0_20px_70px_rgba(251,146,60,0.25)]">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/75">
          Admin / Profile
        </p>

        <h1 className="mt-3 text-4xl font-black tracking-tight">
          Admin Profile
        </h1>

        <p className="mt-3 max-w-2xl text-white/85">
          Manage your admin profile, account information, and security settings.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
        <ProfileCard
          name="Admin User"
          email="admin@newhome.com"
          phone="+880 1000-000000"
          address="Bangladesh"
          role="ADMIN"
          approvalStatus="APPROVED"
        />

        <div className="space-y-6">
          <ProfileEditForm
            name="Admin User"
            email="admin@newhome.com"
            phone="+880 1000-000000"
            address="Bangladesh"
          />

          <ChangePasswordForm />
        </div>
      </div>
    </div>
  );
}