import { Card } from "@/components/ui/card";

export function SummaryCards({
  calories,
  protein,
  hydration,
  frequency,
}: {
  calories: string;
  protein: string;
  hydration: string;
  frequency: string;
}) {
  const items = [
    { label: "Calories", value: calories },
    { label: "Protein", value: protein },
    { label: "Hydration", value: hydration },
    { label: "Training", value: frequency },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-4">
      {items.map((item) => (
        <Card key={item.label} className="p-5">
          <div className="text-sm text-white/40">{item.label}</div>
          <div className="mt-3 text-2xl font-semibold text-white">{item.value}</div>
        </Card>
      ))}
    </div>
  );
}
