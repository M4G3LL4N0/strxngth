export type BodyType = "ectomorph" | "mesomorph" | "endomorph" | "unsure";

export type Goal =
  | "fat_loss"
  | "muscle_gain"
  | "recomposition"
  | "strength"
  | "endurance"
  | "general_health";

export type ActivityLevel = "low" | "moderate" | "high";

export type DietType =
  | "anything"
  | "high_protein"
  | "keto"
  | "low_carb"
  | "mediterranean"
  | "vegetarian"
  | "vegan";

export type WorkoutLocation = "gym" | "home" | "both";

export type CoachingTone =
  | "drill_sergeant"
  | "supportive"
  | "balanced"
  | "elite_coach";

export interface OnboardingData {
  name: string;
  age: string;
  sex: string;
  height: string;
  weight: string;
  bodyType: BodyType;
  goal: Goal;
  activityLevel: ActivityLevel;
  dietType: DietType;
  allergies: string;
  injuries: string;
  workoutConsistency: string;
  workoutLocation: WorkoutLocation;
  availableDays: string;
  coachingTone: CoachingTone;
  medicalNotes: string;
  supplements: string;
}

export interface GeneratedPlan {
  summary: string;
  workoutPlan: {
    title: string;
    frequency: string;
    split: string[];
    notes: string[];
  };
  nutritionPlan: {
    calories: string;
    protein: string;
    carbs: string;
    fats: string;
    hydration: string;
    mealTiming: string[];
    notes: string[];
  };
  checklist: string[];
  reminders: string[];
  coachMessage: string;
}

export interface ProfileRecord {
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
}

export interface PlanRecord {
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
}

export interface ApiResult {
  success: boolean;
  error?: string;
  profile?: ProfileRecord;
  plan?: PlanRecord;
}
