import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/lib/database.types'

let client: ReturnType<typeof createClient<Database>> | null = null

export function getSupabaseBrowserClient() {
  if (!client) {
    client = createClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        db: { schema: 'strxngth' },
        auth: {
          flowType: 'pkce',
          autoRefreshToken: false,
          detectSessionInUrl: false,
          persistSession: true
        }
      }
    )
  }
  return client
}
