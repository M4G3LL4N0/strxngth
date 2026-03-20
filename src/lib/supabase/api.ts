import { supabase } from './client'
import { Profile, Plan } from './types'

export async function saveProfile(profile: Omit<Profile, 'id'|'created_at'>) {
  const { data, error } = await supabase
    .from('profiles')
    .insert(profile)
    .select()
    .single()

  if (error) console.error('Error saving profile:', error)
  return data
}

export async function savePlan(plan: Omit<Plan, 'id'|'created_at'>) {
  const { data, error } = await supabase
    .from('plans')
    .insert(plan)
    .select()
    .single()

  if (error) console.error('Error saving plan:', error)
  return data
}

export async function getLatestPlan(userId: string) {
  const { data, error } = await supabase
    .from('plans')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(1)
    .single()

  if (error) console.error('Error getting plan:', error)
  return data
}
