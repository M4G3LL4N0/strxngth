"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { upsertProfile, createPlan } from "@/lib/supabase/actions";
import type { OnboardingData, GeneratedPlan } from "@/lib/types";

const initialState: OnboardingData = {
  name: "",
  age: "",
  sex: "",
  height: "",
  weight: "",
  bodyType: "unsure",
  goal: "muscle_gain",
  activityLevel: "moderate",
  dietType: "high_protein",
  allergies: "",
  injuries: "",
  workoutConsistency: "",
  workoutLocation: "gym",
  availableDays: "",
  coachingTone: "elite_coach",
  medicalNotes: "",
  supplements: "",
};

export function OnboardingForm() {
  const [form, setForm] = useState<OnboardingData>(initialState);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function update<K extends keyof OnboardingData>(key: K, value: OnboardingData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function persistPlan(plan: GeneratedPlan) {
    try {
      const profileResult = await upsertProfile(form);
      const profileId = profileResult.data?.id ?? null;

      const planResult = await createPlan(plan, profileId);

      if (profileResult.error) {
        console.error("Profile save error:", profileResult.error);
      }

      if (planResult.error) {
        console.error("Plan save error:", planResult.error);
      }
    } catch (error) {
      console.error("Persist error:", error);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/generate-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data?.plan) {
        const plan = data.plan as GeneratedPlan;

        localStorage.setItem("strxngth_plan", JSON.stringify(plan));
        localStorage.setItem("strxngth_profile", JSON.stringify(form));

        await persistPlan(plan);
      }
    } catch (error) {
      console.error("Onboarding submit error:", error);
    } finally {
      setLoading(false);
      router.push("/dashboard");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <Input
          placeholder="Name"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
        />
        <Input
          placeholder="Age"
          value={form.age}
          onChange={(e) => update("age", e.target.value)}
        />
        <Input
          placeholder="Sex"
          value={form.sex}
          onChange={(e) => update("sex", e.target.value)}
        />
        <Input
          placeholder='Height (example: 5"11 or 180 cm)'
          value={form.height}
          onChange={(e) => update("height", e.target.value)}
        />
        <Input
          placeholder="Weight"
          value={form.weight}
          onChange={(e) => update("weight", e.target.value)}
        />

        <Select
          value={form.bodyType}
          onChange={(e) => update("bodyType", e.target.value as OnboardingData["bodyType"])}
        >
          <option value="unsure">Body type: Unsure</option>
          <option value="ectomorph">Ectomorph</option>
          <option value="mesomorph">Mesomorph</option>
          <option value="endomorph">Endomorph</option>
        </Select>

        <Select
          value={form.goal}
          onChange={(e) => update("goal", e.target.value as OnboardingData["goal"])}
        >
          <option value="fat_loss">Fat loss</option>
          <option value="muscle_gain">Muscle gain</option>
          <option value="recomposition">Recomposition</option>
          <option value="strength">Strength</option>
          <option value="endurance">Endurance</option>
          <option value="general_health">General health</option>
        </Select>

        <Select
          value={form.activityLevel}
          onChange={(e) =>
            update("activityLevel", e.target.value as OnboardingData["activityLevel"])
          }
        >
          <option value="low">Low activity</option>
          <option value="moderate">Moderate activity</option>
          <option value="high">High activity</option>
        </Select>

        <Select
          value={form.dietType}
          onChange={(e) => update("dietType", e.target.value as OnboardingData["dietType"])}
        >
          <option value="anything">Anything</option>
          <option value="high_protein">High protein</option>
          <option value="keto">Keto</option>
          <option value="low_carb">Low carb</option>
          <option value="mediterranean">Mediterranean</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
        </Select>

        <Select
          value={form.workoutLocation}
          onChange={(e) =>
            update("workoutLocation", e.target.value as OnboardingData["workoutLocation"])
          }
        >
          <option value="gym">Gym</option>
          <option value="home">Home</option>
          <option value="both">Both</option>
        </Select>

        <Select
          value={form.coachingTone}
          onChange={(e) =>
            update("coachingTone", e.target.value as OnboardingData["coachingTone"])
          }
        >
          <option value="elite_coach">Elite coach</option>
          <option value="balanced">Balanced</option>
          <option value="supportive">Supportive</option>
          <option value="drill_sergeant">Drill sergeant</option>
        </Select>
      </div>

      <Input
        placeholder="Available workout days (example: Mon Tue Thu Fri)"
        value={form.availableDays}
        onChange={(e) => update("availableDays", e.target.value)}
      />

      <Input
        placeholder="Current workout consistency issues"
        value={form.workoutConsistency}
        onChange={(e) => update("workoutConsistency", e.target.value)}
      />

      <Input
        placeholder="Current supplements"
        value={form.supplements}
        onChange={(e) => update("supplements", e.target.value)}
      />

      <Textarea
        placeholder="Allergies"
        value={form.allergies}
        onChange={(e) => update("allergies", e.target.value)}
        rows={3}
      />

      <Textarea
        placeholder="Injuries or movement limitations"
        value={form.injuries}
        onChange={(e) => update("injuries", e.target.value)}
        rows={3}
      />

      <Textarea
        placeholder="Medical notes or other context"
        value={form.medicalNotes}
        onChange={(e) => update("medicalNotes", e.target.value)}
        rows={4}
      />

      <Button type="submit" disabled={loading} className="mt-2">
        {loading ? "Building your plan..." : "Generate My Strxngth Plan"}
      </Button>
    </form>
  );
}
