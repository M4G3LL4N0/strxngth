import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface ProgressProps {
  value: number;
  max: number;
  className?: string;
}

interface Metric {
  name: string;
  value: number;
  target: number;
  description: string;
  improvement: string;
  unit?: string;
}


interface FocusArea {
  category: string;
  focus: string;
  action: string;
}

const Progress: React.FC<ProgressProps> = ({ value, max, className }) => {
  return (
    <div className={className}>
      <div 
        className="h-2 bg-white/10 rounded-full"
        style={{ width: `${(value / max) * 100}%` }}
      />
    </div>
  );
};

const metrics: Metric[] = [
  { 
    name: "Training", 
    value: 80, 
    target: 90,
    description: "4/5 sessions completed",
    improvement: "Add one more session"
  },
  { 
    name: "Nutrition", 
    value: 86, 
    target: 85,
    description: "Met protein 6/7 days",
    improvement: "Maintain consistency"
  },
  { 
    name: "Recovery", 
    value: 72, 
    target: 80,
    description: "7.2h avg sleep",
    improvement: "Increase by 0.5h"
  }
];

const focusAreas: FocusArea[] = [
  {
    category: "Training",
    focus: "Progressive overload on compounds",
    action: "Increase weight by 2.5kg"
  },
  {
    category: "Nutrition", 
    focus: "Vegetable intake",
    action: "Add 1 serving at dinner"
  },
  {
    category: "Recovery",
    focus: "Post-workout stretching",
    action: "15 minutes daily"
  }
];

export function WeeklyReview() {
  return (
    <section className="mt-16">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Weekly Review</h2>
        <p className="mt-2 text-white/70">
          Your performance breakdown and adjusted recommendations
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="text-lg font-semibold">Performance Metrics</h3>
          <p className="mt-2 text-sm text-white/70">
            Tracked vs your personalized targets
          </p>
          <div className="mt-6 space-y-6">
            {metrics.map((metric) => (
              <div key={metric.name}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">{metric.name}</span>
                  <span className={`text-sm ${
                    metric.value >= metric.target ? 'text-green-400' : 'text-amber-400'
                  }`}>
                    {metric.value}% ({metric.value >= metric.target ? '✓' : '↓'})
                  </span>
                </div>
                <Progress 
                  value={metric.value} 
                  max={100}
                  className="h-2"
                />
                <div className="relative mt-1">
                  <div 
                    className="absolute top-0 h-0.5 bg-white/30"
                    style={{ width: `${metric.target}%` }}
                  />
                </div>
                <div className="mt-2 flex justify-between text-xs text-white/60">
                  <span>{metric.description}</span>
                  <span className="text-amber-300/80">{metric.improvement}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold">Optimization Plan</h3>
          <p className="mt-2 text-sm text-white/70">
            AI-adjusted focus areas for next week
          </p>
          <div className="mt-6 space-y-5">
            {focusAreas.map((area) => (
              <div key={area.category} className="rounded-lg bg-white/5 p-4">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-white/70" />
                  <span className="text-sm font-medium">{area.category}</span>
                </div>
                <p className="mt-2 text-sm text-white/80">
                  <span className="font-medium">Focus:</span> {area.focus}
                </p>
                <p className="mt-1 text-sm text-white/80">
                  <span className="font-medium">Action:</span> {area.action}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <Button variant="secondary">Adjust Plan</Button>
            <Button>Save & Continue</Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
