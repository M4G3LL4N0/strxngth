import { getSupabaseBrowserClient } from './client'
import type { Database } from '@/lib/database.types'
import type { OnboardingData, GeneratedPlan, SyncResult } from '@/lib/types'

export async function getCurrentUser() {
  const supabase = getSupabaseBrowserClient()
  const { data: { user }, error } = await supabase.auth.getUser()
  
  if (error) {
    console.error('Error getting user:', error)
    return null
  }
  return user
}

export async function signInWithOtp(email: string) {
  const supabase = getSupabaseBrowserClient()
  const { data, error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard`
    }
  })
  
  return { data, error }
}

export async function syncLocalDataIfAuthenticated() {
  const user = await getCurrentUser()
  if (!user) return null
  
  const localPlan = localStorage.getItem('strxngth_plan')
  const localProfile = localStorage.getItem('strxngth_profile')
  
  if (localPlan && localProfile) {
    try {
      const plan = JSON.parse(localPlan)
      const profile = JSON.parse(localProfile)
      
      // Upsert profile first
      await upsertProfile(profile)
      
      // Create plan if doesn't exist
      const { data: existingPlan } = await getLatestPlan()
      if (!existingPlan) {
        await createPlan(plan)
      }
      
      // Clear local storage
      localStorage.removeItem('strxngth_plan')
      localStorage.removeItem('strxngth_profile')
      
      return { success: true }
    } catch (error) {
      console.error('Error syncing local data:', error)
      return { success: false, error }
    }
  }
  
  return null
}

export async function getProfile(): Promise<SyncResult> {
  const user = await getCurrentUser()
  if (!user) return { success: false }

  const supabase = getSupabaseBrowserClient()
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('user_id', user.id)
    .maybeSingle()

  if (error) {
    console.error('Error getting profile:', error)
    return { success: false, error: error.message }
  }

  return { success: true, profile: data }
}

export async function upsertProfile(formData: OnboardingData): Promise<SyncResult> {
  const user = await getCurrentUser()
  if (!user) return { success: false }

  const supabase = getSupabaseBrowserClient()
  const { data, error } = await supabase
    .from('profiles')
    .upsert({
      user_id: user.id,
      name: formData.name,
      age: formData.age,
      sex: formData.sex,
      height: formData.height,
      weight: formData.weight,
      body_type: formData.bodyType,
      goal: formData.goal,
      activity_level: formData.activityLevel,
      diet_type: formData.dietType,
      allergies: formData.allergies,
      injuries: formData.injuries,
      workout_consistency: formData.workoutConsistency,
      workout_location: formData.workoutLocation,
      available_days: formData.availableDays,
      coaching_tone: formData.coachingTone,
      medical_notes: formData.medicalNotes,
      supplements: formData.supplements,
      updated_at: new Date().toISOString()
    })
    .select()
    .single()

  if (error) {
    console.error('Error upserting profile:', error)
    return { success: false, error: error.message }
  }

  return { success: true, profile: data }
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("Error signing out:", error);
    throw error;
  }
}

export async function getSession() {
  const { data, error } = await supabase.auth.getSession();
  if (error) {
    console.error("Error getting session:", error);
    throw error;
  }
  return data.session;
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
