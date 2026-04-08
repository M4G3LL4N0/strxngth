"use client";

import { useState } from "react";
import Link from "next/link";
import { signInWithOtp } from "@/lib/supabase/actions";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail) {
      setError("Email is required.");
      setLoading(false);
      return;
    }

    const result = await signInWithOtp(normalizedEmail);

    if (result.error) {
      setError(result.error);
      setLoading(false);
      return;
    }

    setSuccess(true);
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white md:px-10">
      <div className="mx-auto max-w-md">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.24em] text-white/45">
            Strxngth
          </p>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Sign in
          </h1>

          <p className="mt-3 text-sm leading-6 text-white/65">
            Enter your email and we’ll send you a secure sign-in link.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-white/80"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-white/30"
              />
            </div>

            {error ? (
              <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                {error}
              </div>
            ) : null}

            {success ? (
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
                Check your email for your sign-in link.
              </div>
            ) : null}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black transition hover:bg-white/95 active:bg-white/90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Sending link..." : "Send sign-in link"}
            </button>
          </form>

          <div className="mt-6">
            <Link
              href="/"
              className="text-sm text-white/60 transition hover:text-white"
            >
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
