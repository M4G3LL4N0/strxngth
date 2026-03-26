"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { getCurrentUser, signOut } from "@/lib/supabase/actions"

export function Navbar() {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const checkAuth = async () => {
      const user = await getCurrentUser()
      setUser(user)
    }
    
    checkAuth()
  }, [])

  const handleSignOut = async () => {
    await signOut()
    setUser(null)
    window.location.href = '/'
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-black/90 backdrop-blur-lg">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <div className="flex items-center space-x-12">
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight text-white"
          >
            Strxngth
          </Link>
          <div className="hidden items-center space-x-8 md:flex">
            <Link
              href="/#features"
              className="text-sm font-medium text-white/80 hover:text-white transition-all duration-200"
            >
              System
            </Link>
            <Link
              href="/#how-it-works"
              className="text-sm font-medium text-white/80 hover:text-white transition-all duration-200"
            >
              How It Works
            </Link>
            {user && (
              <Link
                href="/dashboard"
                className="text-sm font-medium text-white/80 hover:text-white transition-all duration-200"
              >
                Dashboard
              </Link>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <Link
                href="/dashboard"
                className="text-sm font-medium text-white hover:text-white/80 transition-all duration-200"
              >
                Dashboard
              </Link>
              <Button 
                variant="ghost" 
                onClick={handleSignOut}
                className="text-sm"
              >
                Sign out
              </Button>
            </>
          ) : (
            <Link
              href="/sign-in"
              className="text-sm font-medium text-white/80 hover:text-white transition-all duration-200"
            >
              Sign in
            </Link>
          )}
          <Link href="/onboarding">
            <Button variant="primary" className="hidden sm:flex">
              Build Your Plan
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
