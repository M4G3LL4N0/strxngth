import { OnboardingForm } from "@/components/onboarding/onboarding-form";

export default function OnboardingPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white md:px-10">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10">
          <div className="text-sm uppercase tracking-[0.2em] text-white/40">Strxngth</div>
          <h1 className="mt-4 text-4xl font-semibold md:text-6xl">Build your system.</h1>
          <p className="mt-4 max-w-2xl text-white/70">
            Tell Strxngth your goals, your issues, and your constraints. We’ll turn it into a practical performance plan.
          </p>
        </div>
        <OnboardingForm />
      </div>
    </main>
  );
}
