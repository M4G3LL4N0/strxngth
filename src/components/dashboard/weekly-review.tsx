import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function WeeklyReview() {
  return (
    <section className="mt-16">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Weekly Review</h2>
        <p className="mt-2 text-white/70">
          Reflect on your progress and plan for the week ahead
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="text-lg font-semibold">Progress Highlights</h3>
          <p className="mt-3 text-white/70">
            Your key wins and areas for improvement this week
          </p>
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between rounded-lg bg-white/5 p-3">
              <div>
                <p className="text-sm font-medium">Training Consistency</p>
                <p className="text-sm text-white/70">4/5 sessions completed</p>
              </div>
              <div className="text-sm text-white/70">80%</div>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-white/5 p-3">
              <div>
                <p className="text-sm font-medium">Protein Targets</p>
                <p className="text-sm text-white/70">Met 6/7 days</p>
              </div>
              <div className="text-sm text-white/70">86%</div>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-white/5 p-3">
              <div>
                <p className="text-sm font-medium">Sleep Quality</p>
                <p className="text-sm text-white/70">Average 7.2 hours</p>
              </div>
              <div className="text-sm text-white/70">Good</div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold">Next Week Focus</h3>
          <p className="mt-3 text-white/70">
            Set your priorities for the upcoming week
          </p>
          <div className="mt-6 space-y-4">
            <div className="rounded-lg bg-white/5 p-3">
              <p className="text-sm font-medium">Training Focus</p>
              <p className="mt-1 text-sm text-white/70">
                Maintain progressive overload on compound lifts
              </p>
            </div>
            <div className="rounded-lg bg-white/5 p-3">
              <p className="text-sm font-medium">Nutrition Focus</p>
              <p className="mt-1 text-sm text-white/70">
                Increase vegetable intake at dinner
              </p>
            </div>
            <div className="rounded-lg bg-white/5 p-3">
              <p className="text-sm font-medium">Recovery Focus</p>
              <p className="mt-1 text-sm text-white/70">
                Add 15 minutes of stretching post-workout
              </p>
            </div>
          </div>
          <Button className="mt-6 w-full" variant="secondary">
            Adjust Focus Areas
          </Button>
        </Card>
      </div>
    </section>
  );
}
