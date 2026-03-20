import { Card } from "@/components/ui/card";

export function CoachPanel({
  summary,
  coachMessage,
  reminders,
}: {
  summary: string;
  coachMessage: string;
  reminders: string[];
}) {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold text-white">AI coach</h2>
      <p className="mt-4 text-white/70">{summary}</p>

      <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4 text-white/85">
        {coachMessage}
      </div>

      <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-white/40">
        Reminders
      </h3>
      <ul className="mt-3 space-y-3 text-white/70">
        {reminders.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </Card>
  );
}
