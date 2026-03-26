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
  const [plan, setPlan] = useState<GeneratedPlan>(mockPlan);

  useEffect(() => {
    const stored = localStorage.getItem("strxngth_plan");
    if (stored) {
      try {
        setPlan(JSON.parse(stored));
      } catch {}
    }
  }, []);

  return (
    <div className="space-y-6">
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
