import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16 md:px-10">
        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.24em] text-white/45">
            Strxngth Dashboard
          </p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Your system for today.
          </h1>
          <p className="max-w-2xl text-sm leading-6 text-white/65 md:text-base">
            Training, nutrition, and execution in one place. This page is now a
            valid Next.js module so the build can continue.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-white/45">Training</p>
            <p className="mt-3 text-2xl font-semibold">Ready</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-white/45">Nutrition</p>
            <p className="mt-3 text-2xl font-semibold">Tracked</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-white/45">Execution</p>
            <p className="mt-3 text-2xl font-semibold">In Progress</p>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">Next move</h2>
          <p className="mt-3 max-w-2xl text-white/65">
            Once the build is green again, wire this page back into your real
            dashboard shell and Supabase-backed plan data.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/"
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:opacity-90"
            >
              Home
            </Link>
            <Link
              href="/onboarding"
              className="rounded-xl border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              Onboarding
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
