import { Card } from "@/components/ui/card";

export function NutritionPanel({
  mealTiming,
  notes,
}: {
  mealTiming: string[];
  notes: string[];
}) {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold text-white">Nutrition timing</h2>
      <ul className="mt-4 space-y-3 text-white/80">
        {mealTiming.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>

      <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-white/40">
        Notes
      </h3>
      <ul className="mt-3 space-y-3 text-white/70">
        {notes.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </Card>
  );
}
