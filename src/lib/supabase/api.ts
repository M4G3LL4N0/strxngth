"use client";

import { getSupabaseBrowserClient } from "./client";

export type Profile = {
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

export type Plan = {
  id: string;
  user_id: string;
  profile_id: string | null;
  summary: string | null;
  workout_plan: unknown;
  nutrition_plan: unknown;
  checklist: unknown;
  reminders: unknown;
  coach_message: string | null;
  created_at?: string;
  updated_at?: string;
};

export type UserSession = {
  userId: string | null;
  email: string | null;
};

export async function initializeUser(): Promise<string | null> {
  const supabase = getSupabaseBrowserClient();
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    console.error("initializeUser error:", error.message);
    return null;
  }

  return data.user?.id ?? null;
}

export async function getUserSession(): Promise<UserSession> {
  const supabase = getSupabaseBrowserClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data.user) {
    return {
      userId: null,
      email: null,
    };
  }

  return {
    userId: data.user.id,
    email: data.user.email ?? null,
  };
}

export async function getProfile(): Promise<Profile | null> {
  const supabase = getSupabaseBrowserClient();
  const { data: userData, error: userError } = await supabase.auth.getUser();

  if (userError || !userData.user) {
    return null;
  }

  const table = (supabase as any).from("profiles");
  const { data, error } = await table
    .select("*")
    .eq("user_id", userData.user.id)
    .maybeSingle();

  if (error) {
    console.error("getProfile error:", error.message);
    return null;
  }

  return (data as Profile | null) ?? null;
}

export async function getLatestPlan(): Promise<Plan | null> {
  const supabase = getSupabaseBrowserClient();
  const { data: userData, error: userError } = await supabase.auth.getUser();

  if (userError || !userData.user) {
    return null;
  }

  const table = (supabase as any).from("plans");
  const { data, error } = await table
    .select("*")
    .eq("user_id", userData.user.id)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) {
    console.error("getLatestPlan error:", error.message);
    return null;
  }

  return (data as Plan | null) ?? null;
}
