import { Hero } from "@/components/home/hero";
import { FeatureGrid } from "@/components/home/feature-grid";
import { HowItWorks } from "@/components/home/how-it-works";
import { CTA } from "@/components/home/cta";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="space-y-24 py-24">
        <Hero />
        <FeatureGrid />
        <HowItWorks />
        <CTA />
      </div>
    </main>
  );
}
