import { Hero } from "@/components/home/hero";
import { FeatureGrid } from "@/components/home/feature-grid";
import { HowItWorks } from "@/components/home/how-it-works";
import { CTA } from "@/components/home/cta";
import { getLatestPlan } from "@/lib/supabase/api";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [plan, setPlan] = useState(null);

  useEffect(() => {
    // For now using localStorage ID as temp user ID
    const userId = localStorage.getItem('userId') || crypto.randomUUID();
    if (!localStorage.getItem('userId')) {
      localStorage.setItem('userId', userId);
    }

    async function loadPlan() {
      const latestPlan = await getLatestPlan(userId);
      if (!latestPlan) {
        // Fallback to mock data
        console.log('No plan found, using default data');
        return;
      }
      setPlan(latestPlan);
    }

    loadPlan();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="space-y-24 py-24">
        <Hero />
        <FeatureGrid plan={plan} />
        <HowItWorks />
        <CTA />
      </div>
    </main>
  );
}
