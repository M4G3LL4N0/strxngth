import { createClient } from '@supabase/supabase-js'

let client: ReturnType<typeof createClient> | null = null

export function getSupabaseBrowserClient() {
  if (!client) {
    client = createClient(
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
