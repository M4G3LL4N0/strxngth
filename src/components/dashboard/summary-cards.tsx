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
    <div className="grid gap-2 md:grid-cols-4">
      {items.map((item) => (
        <Card key={item.label} className="p-4">
          <div className="text-xs tracking-wider text-white/50 uppercase">{item.label}</div>
          <div className="mt-2 text-xl font-medium text-white">{item.value}</div>
        </Card>
      ))}
    </div>
  );
}
