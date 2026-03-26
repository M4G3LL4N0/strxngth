"use client";

import type { User } from "@supabase/supabase-js";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import type { OnboardingData, GeneratedPlan } from "@/lib/types";

type ActionResult<T> = {
  data: T | null;
  error: string | null;
};

type ProfileRow = {
  id: string;
  user_id: string;
  name: string | null;
  age: string | null;
  sex: string | null;
  height: string | null;
  weight: string | null;
  body_type: string | null;
  goal: string | null;
  activity_level: string | null;
  diet_type: string | null;
  allergies: string | null;
  injuries: string | null;
  workout_consistency: string | null;
  workout_location: string | null;
  available_days: string | null;
  coaching_tone: string | null;
  medical_notes: string | null;
  supplements: string | null;
  created_at?: string;
  updated_at?: string;
};

type PlanRow = {
  id: string;
  user_id: string;
  profile_id: string | null;
  summary: string | null;
  workout_plan: GeneratedPlan["workoutPlan"];
  nutrition_plan: GeneratedPlan["nutritionPlan"];
  checklist: GeneratedPlan["checklist"];
  reminders: GeneratedPlan["reminders"];
  coach_message: string | null;
  created_at?: string;
  updated_at?: string;
};

function mapProfileToRow(userId: string, profile: OnboardingData): Omit<ProfileRow, "id"> {
  return {
    user_id: userId,
    name: profile.name,
    age: profile.age,
    sex: profile.sex,
    height: profile.height,
    weight: profile.weight,
    body_type: profile.bodyType,
    goal: profile.goal,
    activity_level: profile.activityLevel,
    diet_type: profile.dietType,
    allergies: profile.allergies,
    injuries: profile.injuries,
    workout_consistency: profile.workoutConsistency,
    workout_location: profile.workoutLocation,
    available_days: profile.availableDays,
    coaching_tone: profile.coachingTone,
    medical_notes: profile.medicalNotes,
    supplements: profile.supplements,
  };
}

function mapPlanToRow(
  userId: string,
  plan: GeneratedPlan,
  profileId?: string | null,
): Omit<PlanRow, "id"> {
  return {
    user_id: userId,
    profile_id: profileId ?? null,
    summary: plan.summary,
    workout_plan: plan.workoutPlan,
    nutrition_plan: plan.nutritionPlan,
    checklist: plan.checklist,
    reminders: plan.reminders,
    coach_message: plan.coachMessage,
  };
}

export async function getCurrentUser(): Promise<User | null> {
  const supabase = getSupabaseBrowserClient();
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    console.error("getCurrentUser error:", error.message);
    return null;
  }

  return data.user ?? null;
}

export async function signInWithOtp(email: string): Promise<ActionResult<boolean>> {
  const supabase = getSupabaseBrowserClient();

  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo:
        typeof window !== "undefined" ? `${window.location.origin}/dashboard` : undefined,
    },
  });

  if (error) {
    return { data: null, error: error.message };
  }

  return { data: true, error: null };
}

export async function signOut(): Promise<ActionResult<boolean>> {
  const supabase = getSupabaseBrowserClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    return { data: null, error: error.message };
  }

  return { data: true, error: null };
}

export async function getProfile(): Promise<ActionResult<ProfileRow>> {
  const supabase = getSupabaseBrowserClient();
  const user = await getCurrentUser();

  if (!user) {
    return { data: null, error: null };
  }

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("user_id", user.id)
    .maybeSingle<ProfileRow>();

  if (error) {
    return { data: null, error: error.message };
  }

  return { data, error: null };
}

export async function upsertProfile(
  profile: OnboardingData,
): Promise<ActionResult<ProfileRow>> {
  const supabase = getSupabaseBrowserClient();
  const user = await getCurrentUser();

  if (!user) {
    return { data: null, error: "Not authenticated" };
  }

  const payload = mapProfileToRow(user.id, profile);

  const { data, error } = await supabase
    .from("profiles")
    .upsert(payload, { onConflict: "user_id" })
    .select("*")
    .single<ProfileRow>();

  if (error) {
    return { data: null, error: error.message };
  }

  return { data, error: null };
}

export async function createPlan(
  plan: GeneratedPlan,
  profileId?: string | null,
): Promise<ActionResult<PlanRow>> {
  const supabase = getSupabaseBrowserClient();
  const user = await getCurrentUser();

  if (!user) {
    return { data: null, error: "Not authenticated" };
  }

  const payload = mapPlanToRow(user.id, plan, profileId);

  const { data, error } = await supabase
    .from("plans")
    .insert(payload)
    .select("*")
    .single<PlanRow>();

  if (error) {
    return { data: null, error: error.message };
  }

  return { data, error: null };
}

export async function getLatestPlan(): Promise<ActionResult<PlanRow>> {
  const supabase = getSupabaseBrowserClient();
  const user = await getCurrentUser();

  if (!user) {
    return { data: null, error: null };
  }

  const { data, error } = await supabase
    .from("plans")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle<PlanRow>();

  if (error) {
    return { data: null, error: error.message };
  }

  return { data, error: null };
}

export async function syncLocalDataIfAuthenticated(): Promise<
  ActionResult<{ profile: ProfileRow | null; plan: PlanRow | null }>
> {
  const user = await getCurrentUser();

  if (!user) {
    return { data: null, error: null };
  }

  try {
    const profileRaw =
      typeof window !== "undefined" ? localStorage.getItem("strxngth_profile") : null;
    const planRaw =
      typeof window !== "undefined" ? localStorage.getItem("strxngth_plan") : null;

    let savedProfile: ProfileRow | null = null;
    let savedPlan: PlanRow | null = null;

    if (profileRaw) {
      const parsedProfile = JSON.parse(profileRaw) as OnboardingData;
      const profileResult = await upsertProfile(parsedProfile);
      if (profileResult.data) {
        savedProfile = profileResult.data;
      }
    }

    if (planRaw) {
      const parsedPlan = JSON.parse(planRaw) as GeneratedPlan;
      const planResult = await createPlan(parsedPlan, savedProfile?.id ?? null);
      if (planResult.data) {
        savedPlan = planResult.data;
      }
    }

    return {
      data: {
        profile: savedProfile,
        plan: savedPlan,
      },
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error.message : "Failed to sync local data",
    };
  }
}
