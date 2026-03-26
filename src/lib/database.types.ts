import { SupabaseClient } from '@supabase/supabase-js'

export interface Database {
  strxngth: {
    profiles: {
      id: string
      user_id: string
      name: string
      age: string
      sex: string
      height: string
      weight: string
      body_type: string
      goal: string
      activity_level: string
      diet_type: string
      allergies: string
      injuries: string
      workout_consistency: string
      workout_location: string
      available_days: string
      coaching_tone: string
      medical_notes: string
      supplements: string
      created_at: string
      updated_at: string
    }
    plans: {
      id: string
      user_id: string
      profile_id: string | null
      summary: string
      workout_plan: {
        title: string
        frequency: string
        split: string[]
        notes: string[]
      }
      nutrition_plan: {
        calories: string
        protein: string
        carbs: string
        fats: string
        hydration: string
        mealTiming: string[]
        notes: string[]
      }
      checklist: string[]
      reminders: string[]
      coach_message: string
      created_at: string
      updated_at: string
    }
  }
}

export type SupabaseClientType = SupabaseClient<Database>
export type ProfileRecord = Database['strxngth']['profiles']
export type PlanRecord = Database['strxngth']['plans']
