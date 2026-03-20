export function HowItWorks() {
  const steps = [
    "Tell Strxngth your body stats, goals, diet, schedule, and constraints.",
    "Get a personalized plan with workouts, nutrition targets, reminders, and a daily checklist.",
    "Adjust in real time as your adherence, energy, and routine change.",
  ];

  return (
    <section className="px-6 py-16 md:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          Built for consistency, not fantasy.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step, idx) => (
            <div key={step} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-white/40">0{idx + 1}</div>
              <p className="mt-4 text-white/80">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
