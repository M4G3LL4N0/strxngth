import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <div className="text-lg font-semibold text-white">Strxngth</div>
          <p className="mt-2 max-w-md text-sm text-white/60">
            AI-powered training, nutrition, and execution built around real consistency.
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm text-white/60">
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>
          <Link href="/onboarding" className="transition hover:text-white">
            Onboarding
          </Link>
          <Link href="/dashboard" className="transition hover:text-white">
            Dashboard
          </Link>
          <Link href="/sign-in" className="transition hover:text-white">
            Sign in
          </Link>
        </div>
      </div>
    </footer>
  );
}
