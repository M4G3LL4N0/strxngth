import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-black/90 backdrop-blur-lg">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <div className="flex items-center space-x-12">
          <Link href="/" className="text-xl font-semibold tracking-tight text-white">
            Strxngth
          </Link>
          <div className="hidden items-center space-x-8 md:flex">
            <Link href="/#features" className="text-sm font-medium text-white/80 hover:text-white transition-all duration-200">
              System
            </Link>
            <Link href="/#how-it-works" className="text-sm font-medium text-white/80 hover:text-white transition-all duration-200">
              How It Works
            </Link>
            <Link href="/dashboard" className="text-sm font-medium text-white/80 hover:text-white transition-all duration-200">
              Dashboard
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/dashboard" className="text-sm font-medium text-white/80 hover:text-white transition-all duration-200">
            Login
          </Link>
          <Link href="/onboarding">
            <Button variant="primary" className="hidden sm:flex">
              Build Your Plan
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
