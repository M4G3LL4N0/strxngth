export type Profile = {
  id: string
  name: string
  email: string
  age: number
  weight: number
  height: number
  fitness_level: string
  goals: string[]
  created_at: string
}

export type Plan = {
  id: string
  user_id: string 
  name: string
  workouts: string[]
  duration_weeks: number
  created_at: string
}
