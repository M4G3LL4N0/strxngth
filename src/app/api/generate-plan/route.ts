import { NextResponse } from "next/server";
import { z } from "zod";
import { openai } from "@/lib/openai";
import { buildPlanPrompt } from "@/lib/prompts";
import type { GeneratedPlan } from "@/lib/types";

const onboardingSchema = z.object({
  name: z.string(),
  age: z.string(),
  sex: z.string(),
  height: z.string(),
  weight: z.string(),
  bodyType: z.string(),
  goal: z.string(),
  activityLevel: z.string(),
  dietType: z.string(),
  allergies: z.string(),
  injuries: z.string(),
  workoutConsistency: z.string(),
  workoutLocation: z.string(),
  availableDays: z.string(),
  coachingTone: z.string(),
  medicalNotes: z.string(),
  supplements: z.string(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = onboardingSchema.parse(body);

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
    const plan = JSON.parse(raw) as GeneratedPlan;

    return NextResponse.json({ ok: true, plan });
  } catch (error) {
    console.error("generate-plan error", error);
    return NextResponse.json(
      {
        ok: false,
        error: "Failed to generate plan",
      },
      { status: 500 },
    );
  }
}
