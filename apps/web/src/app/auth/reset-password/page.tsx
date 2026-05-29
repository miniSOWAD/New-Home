import { ResetPasswordForm } from "@/components/auth/ResetPasswordForm";

export default function ResetPasswordPage() {
  return (
    <section className="min-h-[calc(100vh-80px)] bg-hero-gradient">
      <div className="container-main flex min-h-[calc(100vh-80px)] items-center justify-center py-12">
        <ResetPasswordForm />
      </div>
    </section>
  );
}