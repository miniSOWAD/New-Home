import { HeroSection } from "@/components/home/HeroSection";
import { FeatureCards } from "@/components/home/FeatureCards";
import { HowItWorks } from "@/components/home/HowItWorks";
import { FeaturedTolets } from "@/components/home/FeaturedTolets";
import { FeaturedServices } from "@/components/home/FeaturedServices";
import { TrustSection } from "@/components/home/TrustSection";
import { StatsSection } from "@/components/home/StatsSection";
import { CTASection } from "@/components/home/CTASection";

type HomePageProps = {
  searchParams?: Promise<{
    status?: string;
  }>;
};

export default async function HomePage({ searchParams }: HomePageProps) {
  const params = await searchParams;
  const status = params?.status;

  return (
    <div className="min-h-screen">
      <HeroSection status={status} />
      <FeatureCards />
      <HowItWorks />
      <FeaturedTolets />
      <FeaturedServices />
      <TrustSection />
      <StatsSection />
      <CTASection />
    </div>
  );
}