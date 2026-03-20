import { Hero } from "@/components/home/hero";
import { FeatureGrid } from "@/components/home/feature-grid";
import { HowItWorks } from "@/components/home/how-it-works";
import { CTA } from "@/components/home/cta";
import { getLatestPlan, initializeUser } from "@/lib/supabase/api";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [plan, setPlan] = useState<Plan | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [session, setSession] = useState<AuthSession | null>(null);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session)
      if (session?.user?.id) {
        setUserId(session.user.id)
        localStorage.setItem('userId', session.user.id)
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  useEffect(() => {
    if (!userId) return;

    async function loadPlan() {
      const latestPlan = await getLatestPlan(userId);
      if (!latestPlan) {
        console.log('No plan found, using default data');
        return;
      }
      setPlan(latestPlan);
    }
    
    loadPlan();
  }, [userId]);

  const handleSignIn = async () => {
    if (!session) {
      window.location.href = '/auth'
      return
    }
    window.location.href = '/onboarding'
  }

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
