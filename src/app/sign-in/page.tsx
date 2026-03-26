"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { signInWithOtp } from '@/lib/supabase/actions'

export default function SignInPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    
    const { error } = await signInWithOtp(email)
    
    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      setSuccess(true)
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white md:px-10">
      <div className="mx-auto max-w-md">
        <div className="mb-10">
          <div className="text-sm uppercase tracking-[0.2em] text-white/40">
            Strxngth
          </div>
          <h1 className="mt-4 text-4xl font-semibold md:text-6xl">
            Welcome back.
          </h1>
          <p className="mt-4 text-white/70">
            Enter your email to access your personalized system.
          </p>
        </div>

        {success && (
          <div className="mb-6 rounded-xl bg-green-900/50 p-4 text-green-400">
            Check your email for your sign-in link.
          </div>
        )}

        {error && (
          <div className="mb-6 rounded-xl bg-red-900/50 p-4 text-red-400">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button 
            type="submit" 
            className="w-full"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Continue with Email'}
          </Button>
        </form>
      </div>
    </main>
  )
}
