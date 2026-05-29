import { ForgotPasswordForm } from "@/components/auth/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <section className="min-h-[calc(100vh-80px)] bg-hero-gradient">
      <div className="container-main flex min-h-[calc(100vh-80px)] items-center justify-center py-12">
        <ForgotPasswordForm />
      </div>
    </section>
  );
}