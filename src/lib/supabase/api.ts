import { supabase } from './client'
import { Profile, Plan, UserSession } from './types'

export async function initializeUser(): Promise<string> {
  const userId = crypto.randomUUID()
  const { data, error } = await supabase
    .from('user_sessions')
    .insert({ id: userId })
    .select()
    .single()

  if (error) console.error('Error initializing user:', error)
  return userId
}

export async function saveProfile(profile: Omit<Profile, 'id'|'created_at'|'updated_at'>) {
  const { data, error } = await supabase
    .from('profiles')
    .insert(profile)
    .select()
    .single()

  if (error) console.error('Error saving profile:', error)
  return data
}

export async function savePlan(plan: Omit<Plan, 'id'|'created_at'|'updated_at'>) {
  const { data, error } = await supabase
    .from('plans')
    .insert(plan)
    .select()
    .single()

  if (error) console.error('Error saving plan:', error)
  return data
}

export async function getLatestPlan(userId: string): Promise<Plan | null> {
  const { data, error } = await supabase
    .from('plans')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(1)
    .single()

  if (error) {
    console.error('Error getting plan:', error)
    return null
  }
  return data
}

export async function getUserProfile(userId: string): Promise<Profile | null> {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('user_id', userId)
    .single()

  if (error) {
    console.error('Error getting profile:', error)
    return null
  }
  return data
}
