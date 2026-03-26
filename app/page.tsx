import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 md:px-10 md:py-28">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.24em] text-white/45">
            Strxngth
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
            Stop guessing.
            <br />
            Start executing.
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/65 md:text-lg">
            Strxngth is an AI-powered training, nutrition, and execution system
            built around your body, your goals, and your real consistency.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
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

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-white/45">Adaptive training</p>
            <p className="mt-3 text-white/80">
              Personalized structure based on your goal, recovery, and consistency.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-white/45">Nutrition system</p>
            <p className="mt-3 text-white/80">
              Protein-first targets, meal timing, hydration, and practical guidance.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-white/45">Execution engine</p>
            <p className="mt-3 text-white/80">
              Daily checklists, reminders, and momentum built for real adherence.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
