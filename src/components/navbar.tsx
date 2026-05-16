"use client";

import Link from "next/link";
import type { User } from "@supabase/supabase-js";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { getCurrentUser, signOut } from "@/lib/supabase/actions";

export function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const u = await getCurrentUser();
      setUser(u);
    };

    checkAuth();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleSignOut = async () => {
    await signOut();
    setUser(null);
    window.location.href = "/";
  };

  const links = (
    <>
      <Link
        href="/#features"
        className="text-sm font-medium text-white/75 transition hover:text-white"
        onClick={() => setOpen(false)}
      >
        System
      </Link>
      <Link
        href="/#how-it-works"
        className="text-sm font-medium text-white/75 transition hover:text-white"
        onClick={() => setOpen(false)}
      >
        How It Works
      </Link>
      {user ? (
        <Link
          href="/dashboard"
          className="text-sm font-medium text-white/75 transition hover:text-white"
          onClick={() => setOpen(false)}
        >
          Dashboard
        </Link>
      ) : null}
    </>
  );

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/55 backdrop-blur-xl backdrop-saturate-150 shadow-[0_1px_0_rgba(255,255,255,0.04)]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-lg font-semibold tracking-tight" onClick={() => setOpen(false)}>
            <span className="bg-gradient-to-r from-amber-100 via-white to-orange-100 bg-clip-text text-transparent">
              STRXNGTH
            </span>
          </Link>
          <div className="hidden items-center gap-8 md:flex">{links}</div>
        </div>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <Link href="/dashboard" className="hidden text-sm font-medium text-white/80 transition hover:text-white sm:inline">
                Dashboard
              </Link>
              <Button variant="ghost" onClick={handleSignOut} className="hidden text-sm sm:inline-flex">
                Sign out
              </Button>
            </>
          ) : (
            <Link href="/sign-in" className="hidden text-sm font-medium text-white/80 transition hover:text-white sm:inline">
              Sign in
            </Link>
          )}
          <Link href="/onboarding" className="hidden sm:block" onClick={() => setOpen(false)}>
            <Button variant="primary" className="text-sm">
              Build Your Plan
            </Button>
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-white transition hover:border-amber-300/30 hover:bg-white/[0.1] md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-slate-950/85 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
            <div className="flex flex-col gap-1 border-b border-white/10 pb-3">{links}</div>
            {user ? (
              <div className="flex flex-col gap-2 pt-3">
                <Link
                  href="/dashboard"
                  className="rounded-xl px-3 py-2 text-sm text-white/85 hover:bg-white/[0.06]"
                  onClick={() => setOpen(false)}
                >
                  Dashboard
                </Link>
                <Button variant="ghost" className="justify-start px-3" onClick={() => { setOpen(false); void handleSignOut(); }}>
                  Sign out
                </Button>
                <Link href="/onboarding" onClick={() => setOpen(false)}>
                  <Button variant="primary" className="w-full">
                    Build Your Plan
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-2 pt-3">
                <Link
                  href="/sign-in"
                  className="rounded-xl px-3 py-2 text-sm text-white/85 hover:bg-white/[0.06]"
                  onClick={() => setOpen(false)}
                >
                  Sign in
                </Link>
                <Link href="/onboarding" onClick={() => setOpen(false)}>
                  <Button variant="primary" className="w-full">
                    Build Your Plan
                  </Button>
                </Link>
              </div>
            )}
            <p className="px-3 pt-2 text-[11px] leading-relaxed text-white/45">
              Training plans are educational — consult a qualified coach or clinician before changing your program.
            </p>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
