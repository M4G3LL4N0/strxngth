import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            AI health optimization for real execution
          </div>
          <h1 className="text-5xl font-semibold tracking-tight text-white md:text-7xl">
            Stop guessing.
            <br />
            Start executing.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Strxngth builds your workouts, nutrition targets, consistency system,
            and daily plan around your body, goals, limitations, and real life.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/onboarding">
              <Button className="w-full sm:w-auto">Build My Plan</Button>
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              View Demo Dashboard
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
