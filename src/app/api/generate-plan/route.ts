import { NextResponse } from "next/server";
import { z } from "zod";
import { openai } from "@/lib/openai";
import { buildPlanPrompt } from "@/lib/prompts";
import type {
  GeneratedPlan,
  OnboardingData,
  BodyType,
  Goal,
  ActivityLevel,
  DietType,
  WorkoutLocation,
  CoachingTone,
} from "@/lib/types";

const bodyTypeSchema = z.enum(["ectomorph", "mesomorph", "endomorph", "unsure"]);
const goalSchema = z.enum([
  "fat_loss",
  "muscle_gain",
  "recomposition",
  "strength",
  "endurance",
  "general_health",
]);
const activityLevelSchema = z.enum(["low", "moderate", "high"]);
const dietTypeSchema = z.enum([
  "anything",
  "high_protein",
  "keto",
  "low_carb",
  "mediterranean",
  "vegetarian",
  "vegan",
]);
const workoutLocationSchema = z.enum(["gym", "home", "both"]);
const coachingToneSchema = z.enum([
  "drill_sergeant",
  "supportive",
  "balanced",
  "elite_coach",
]);

const onboardingSchema = z.object({
  name: z.string(),
  age: z.string(),
  sex: z.string(),
  height: z.string(),
  weight: z.string(),
  bodyType: bodyTypeSchema,
  goal: goalSchema,
  activityLevel: activityLevelSchema,
  dietType: dietTypeSchema,
  allergies: z.string(),
  injuries: z.string(),
  workoutConsistency: z.string(),
  workoutLocation: workoutLocationSchema,
  availableDays: z.string(),
  coachingTone: coachingToneSchema,
  medicalNotes: z.string(),
  supplements: z.string(),
});

function safeParsePlan(raw: string): GeneratedPlan | null {
  try {
    return JSON.parse(raw) as GeneratedPlan;
  } catch {
    const firstBrace = raw.indexOf("{");
    const lastBrace = raw.lastIndexOf("}");
    if (firstBrace >= 0 && lastBrace > firstBrace) {
      try {
        return JSON.parse(raw.slice(firstBrace, lastBrace + 1)) as GeneratedPlan;
      } catch {
        return null;
      }
    }
    return null;
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed: OnboardingData = onboardingSchema.parse(body) as OnboardingData;

    const completion = await openai.chat.completions.create({
      model: "gpt-5-mini",
      temperature: 0.7,
      messages: [
        {
          role: "system",
          content:
            "You are Strxngth, an elite but practical AI health optimization coach. Return valid JSON only.",
        },
        {
          role: "user",
          content: buildPlanPrompt(parsed),
        },
      ],
    });

    const raw = completion.choices[0]?.message?.content ?? "";
    const plan = safeParsePlan(raw);

    if (!plan) {
      return NextResponse.json(
        {
          ok: false,
          error: "Failed to parse generated plan",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, plan });
  } catch (error) {
    console.error("generate-plan error", error);
    return NextResponse.json(
      {
        ok: false,
        error: "Failed to generate plan",
      },
      { status: 500 }
    );
  }
}
