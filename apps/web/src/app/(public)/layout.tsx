import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

type PublicLayoutProps = {
  children: React.ReactNode;
};

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
}