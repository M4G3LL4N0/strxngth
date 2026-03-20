import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="px-6 py-20 md:px-10">
      <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
        <h2 className="text-3xl font-semibold text-white md:text-5xl">
          Your body needs a system.
        </h2>
        <p className="mt-4 max-w-2xl text-white/70">
          Build your plan, train with structure, eat with purpose, and stop relying on random motivation.
        </p>
        <div className="mt-8">
          <Link href="/onboarding">
            <Button>Start Strxngth</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
