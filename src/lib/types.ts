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
export type CoachingTone = "drill_sergeant" | "supportive" | "balanced" | "elite_coach";

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

export interface DbPlan {
  id: string;
  user_id: string;
  name: string;
  summary: string;
  workouts: string[];
  duration_weeks: number;
  checklist: string[];
  nutrition: object;
  created_at: string;
  updated_at: string;
}
