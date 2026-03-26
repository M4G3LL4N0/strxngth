"use client";

import { useEffect, useState } from "react";
import { mockPlan } from "@/lib/mock-data";
import type { GeneratedPlan, OnboardingData } from "@/lib/types";
import { getLatestPlan } from "@/lib/supabase/actions";
import { SummaryCards } from "@/components/dashboard/summary-cards";
import { TodayPlan } from "@/components/dashboard/today-plan";
import { NutritionPanel } from "@/components/dashboard/nutrition-panel";
import { CoachPanel } from "@/components/dashboard/coach-panel";

type DbPlanRow = {
  summary: string | null;
  workout_plan: GeneratedPlan["workoutPlan"];
  nutrition_plan: GeneratedPlan["nutritionPlan"];
  checklist: GeneratedPlan["checklist"];
  reminders: GeneratedPlan["reminders"];
  coach_message: string | null;
};

function mapDbPlanToGeneratedPlan(plan: DbPlanRow): GeneratedPlan {
  return {
    summary: plan.summary ?? "",
    workoutPlan: plan.workout_plan,
    nutritionPlan: plan.nutrition_plan,
    checklist: Array.isArray(plan.checklist) ? plan.checklist : [],
    reminders: Array.isArray(plan.reminders) ? plan.reminders : [],
    coachMessage: plan.coach_message ?? "",
  };
}

export function DashboardShell() {
  const [plan, setPlan] = useState<GeneratedPlan>(mockPlan);
  const [profile, setProfile] = useState<OnboardingData | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const latestPlanResult = await getLatestPlan();

        if (latestPlanResult.data) {
          setPlan(mapDbPlanToGeneratedPlan(latestPlanResult.data as DbPlanRow));
        } else {
          const storedPlan = localStorage.getItem("strxngth_plan");
          if (storedPlan) {
            try {
              setPlan(JSON.parse(storedPlan) as GeneratedPlan);
            } catch {
              setPlan(mockPlan);
            }
          } else {
            setPlan(mockPlan);
          }
        }
      } catch {
        const storedPlan = localStorage.getItem("strxngth_plan");
        if (storedPlan) {
          try {
            setPlan(JSON.parse(storedPlan) as GeneratedPlan);
          } catch {
            setPlan(mockPlan);
          }
        } else {
          setPlan(mockPlan);
        }
      }

      try {
        const storedProfile = localStorage.getItem("strxngth_profile");
        if (storedProfile) {
          setProfile(JSON.parse(storedProfile) as OnboardingData);
        }
      } catch {
        setProfile(null);
      }
    }

    loadData();
  }, []);

  return (
    <div className="space-y-6">
      {profile ? (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-white/40">
            Profile Snapshot
          </p>
          <div className="mt-3 grid gap-3 md:grid-cols-4">
            <div>
              <p className="text-sm text-white/40">Goal</p>
              <p className="mt-1 text-white/85">{profile.goal}</p>
            </div>
            <div>
              <p className="text-sm text-white/40">Weight</p>
              <p className="mt-1 text-white/85">{profile.weight || "—"}</p>
            </div>
            <div>
              <p className="text-sm text-white/40">Height</p>
              <p className="mt-1 text-white/85">{profile.height || "—"}</p>
            </div>
            <div>
              <p className="text-sm text-white/40">Workout Location</p>
              <p className="mt-1 text-white/85">{profile.workoutLocation}</p>
            </div>
          </div>
        </div>
      ) : null}

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
    </div>
  );
}
