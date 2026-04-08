import Link from "next/link";
import { Hero } from "@/components/home/hero";
import { FeatureGrid } from "@/components/home/feature-grid";
import { HowItWorks } from "@/components/home/how-it-works";
import { CTA } from "@/components/home/cta";

export const dynamic = 'force-static'

export const dynamic = 'force-dynamic'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <FeatureGrid />
      <HowItWorks />

      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
            <p className="text-sm text-white/45">Adaptive training</p>
            <p className="mt-3 text-white/75">
              Personalized structure based on your goals, recovery, and real-life consistency.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
            <p className="text-sm text-white/45">Nutrition intelligence</p>
            <p className="mt-3 text-white/75">
              Protein-first targets, meal timing, hydration, and practical food guidance.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
            <p className="text-sm text-white/45">Execution engine</p>
            <p className="mt-3 text-white/75">
              Daily checklists, reminders, and adherence support built for real progress.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-3">
          <Link
            href="/onboarding"
            className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90"
          >
            Build My Plan
          </Link>
          <Link
            href="/dashboard"
            className="rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
          >
            View Dashboard
          </Link>
        </div>
      </section>

      <CTA />
    </main>
  );
}
