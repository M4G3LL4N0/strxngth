import { supabase } from './client'
import type { OnboardingData, GeneratedPlan } from '@/lib/types'

export async function getCurrentUser() {
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

export async function upsertProfile(profile: OnboardingData) {
  const user = await getCurrentUser()
  if (!user) throw new Error('Not authenticated')

  const { data, error } = await supabase
    .from('profiles')
    .upsert({
      user_id: user.id,
      ...profile,
      updated_at: new Date().toISOString()
    })
    .select()
    .single()

  return { data, error }
}

export async function createPlan(plan: GeneratedPlan) {
  const user = await getCurrentUser()
  if (!user) throw new Error('Not authenticated')

  const { data, error } = await supabase
    .from('plans')
    .insert({
      user_id: user.id,
      name: 'Primary Plan',
      summary: plan.summary,
      workouts: plan.workoutPlan.split,
      duration_weeks: 12, // Default duration
      checklist: plan.checklist,
      nutrition: plan.nutritionPlan
    })
    .select()
    .single()

  return { data, error }
}

export async function getLatestPlan() {
  const user = await getCurrentUser()
  if (!user) throw new Error('Not authenticated')

  const { data, error } = await supabase
    .from('plans')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })
    .limit(1)
    .single()

  return { data, error }
}

export async function getProfile() {
  const user = await getCurrentUser()
  if (!user) throw new Error('Not authenticated')

  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('user_id', user.id)
    .maybeSingle()

  return { data, error }
}
