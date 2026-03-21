import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center space-x-10">
          <Link href="/" className="text-lg font-semibold tracking-tight text-white">
            Strxngth
          </Link>
          <div className="hidden items-center space-x-6 md:flex">
            <Link href="/#features" className="text-sm font-medium text-white/70 hover:text-white transition-all">
              System
            </Link>
            <Link href="/onboarding" className="text-sm font-medium text-white/70 hover:text-white transition-all">
              Start
            </Link>
            <Link href="/dashboard" className="text-sm font-medium text-white/70 hover:text-white transition-all">
              Dashboard
            </Link>
          </div>
        </div>
        <Link href="/onboarding">
          <Button variant="primary" className="hidden sm:flex">
            Build Your Plan
          </Button>
        </Link>
      </div>
    </nav>
  );
}
