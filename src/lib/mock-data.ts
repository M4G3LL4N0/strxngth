import { GeneratedPlan } from "@/lib/types";

export const mockPlan: GeneratedPlan = {
  summary:
    "You need a structured, high-protein performance plan focused on consistency, recovery, and progressive overload. Your first win is execution, not perfection.",
  workoutPlan: {
    title: "4-Day Strength + Hypertrophy Base",
    frequency: "4 days per week",
    split: [
      "Day 1: Upper Push",
      "Day 2: Lower Strength",
      "Day 3: Rest / Walk / Mobility",
      "Day 4: Upper Pull",
      "Day 5: Lower Hypertrophy + Core",
    ],
    notes: [
      "Focus on compound lifts first.",
      "Train 60–75 minutes.",
      "Track weights weekly.",
    ],
  },
  nutritionPlan: {
    calories: "2,350 kcal/day",
    protein: "190g/day",
    carbs: "210g/day",
    fats: "70g/day",
    hydration: "3.5L/day",
    mealTiming: [
      "Meal 1: high-protein breakfast within 90 minutes of waking",
      "Meal 2: protein + carbs 60–120 minutes pre-workout",
      "Meal 3: protein-heavy post-workout meal",
      "Meal 4: evening whole-food meal",
    ],
    notes: [
      "Prioritize protein consistency over perfect macros.",
      "Keep convenient protein options on hand.",
    ],
  },
  checklist: [
    "Hit protein target",
    "Complete workout or recovery walk",
    "Drink 3.5L water",
    "Sleep 7.5+ hours target",
    "Log energy and adherence",
  ],
  reminders: [
    "8:00 AM breakfast reminder",
    "5:30 PM workout reminder",
    "9:30 PM sleep wind-down reminder",
  ],
  coachMessage:
    "You do not need a perfect week. You need repeated wins. Hit your protein, train hard, and stack days.",
};
