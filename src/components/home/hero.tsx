import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-40 md:px-10 md:py-48">
      <div className="container mx-auto grid grid-cols-1 gap-16 md:grid-cols-2">
        <div className="flex flex-col justify-center space-y-8">
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-white/80">
            Elite Performance System
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Precision training,<br />
            built for <span className="text-white/90">real execution</span>.
          </h1>
          <p className="max-w-xl text-lg leading-8 text-white/80">
            Strxngth combines AI-powered workout programming, precision nutrition, and behavioral accountability into one seamless system.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/onboarding">
              <Button className="w-full sm:w-auto" size="lg">
                Build Your Plan
              </Button>
            </Link>
            <Link
              href="/dashboard"
              className="text-sm font-medium text-white/80 underline-offset-4 hover:text-white hover:underline"
            >
              See dashboard →
            </Link>
          </div>
        </div>
        <div className="hidden md:flex">
          <div className="h-full w-full rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 backdrop-blur-sm">
            <div className="grid h-full grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <h3 className="text-sm font-medium text-white/60">Training Plan</h3>
                <p className="mt-2 text-sm text-white/80">4-Day Strength Split</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <h3 className="text-sm font-medium text-white/60">Protein Target</h3>
                <p className="mt-2 text-sm text-white/80">190g daily</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <h3 className="text-sm font-medium text-white/60">Hydration</h3>
                <p className="mt-2 text-sm text-white/80">3.5L water</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <h3 className="text-sm font-medium text-white/60">Coach Message</h3>
                <p className="mt-2 text-sm text-white/80">Focus on consistency today</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
