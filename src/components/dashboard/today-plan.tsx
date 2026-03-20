import { Card } from "@/components/ui/card";

export function TodayPlan({
  title,
  split,
  checklist,
}: {
  title: string;
  split: string[];
  checklist: string[];
}) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-white">Training plan</h2>
        <p className="mt-2 text-white/60">{title}</p>
        <ul className="mt-4 space-y-3 text-white/80">
          {split.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold text-white">Daily checklist</h2>
        <ul className="mt-4 space-y-3 text-white/80">
          {checklist.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
