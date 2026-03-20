import { Card } from "@/components/ui/card";

const features = [
  {
    title: "Adaptive training",
    text: "Workout structure built around your goal, experience, recovery, and consistency level.",
  },
  {
    title: "Nutrition intelligence",
    text: "Protein-first nutrition guidance, meal timing, hydration, and sustainable daily targets.",
  },
  {
    title: "Execution engine",
    text: "Daily checklist, reminders, and adherence tracking so the plan gets followed.",
  },
  {
    title: "AI coach",
    text: "Talk to Strxngth like a real coach and get practical adjustments in real time.",
  },
];

export function FeatureGrid() {
  return (
    <section className="px-6 py-16 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <Card key={feature.title} className="p-6">
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-white/70">{feature.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
