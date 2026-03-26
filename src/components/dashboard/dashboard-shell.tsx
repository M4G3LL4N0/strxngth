"use client";

import { useEffect, useState } from "react";
import { mockPlan } from "@/lib/mock-data";
import type { GeneratedPlan } from "@/lib/types";
import { SummaryCards } from "@/components/dashboard/summary-cards";
import { TodayPlan } from "@/components/dashboard/today-plan";
import { NutritionPanel } from "@/components/dashboard/nutrition-panel";
import { CoachPanel } from "@/components/dashboard/coach-panel";
import { ProgressSection } from "@/components/dashboard/progress-section";

export function DashboardShell() {
  const [plan, setPlan] = useState<GeneratedPlan | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("strxngth_plan");
    if (stored) {
      try {
        setPlan(JSON.parse(stored));
      } catch {}
    }
  }, []);

  if (!plan) {
    return (
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Card key={i} className="p-5">
              <div className="h-6 w-24 animate-pulse rounded bg-white/10" />
              <div className="mt-3 h-8 w-16 animate-pulse rounded bg-white/10" />
            </Card>
          ))}
        </div>
        {/* Add more skeleton loading states */}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <SummaryCards
        calories={plan.nutritionPlan.calories}
        protein={plan.nutritionPlan.protein}
        hydration={plan.nutritionPlan.hydration}
        frequency={plan.workoutPlan.frequency}
      />

      <TodayPlan
        title={plan.workoutPlan.title}
        split={plan.workoutPlan.split}
        checklist={plan.checklist}
      />

      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <NutritionPanel
          mealTiming={plan.nutritionPlan.mealTiming}
          notes={plan.nutritionPlan.notes}
        />
        <CoachPanel
          summary={plan.summary}
          coachMessage={plan.coachMessage}
          reminders={plan.reminders}
        />
      </div>

      <ProgressSection />
    </div>
  );
}
