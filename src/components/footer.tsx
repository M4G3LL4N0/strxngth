export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/50 backdrop-blur-lg">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <div className="text-sm text-white/50">
          © {new Date().getFullYear()} Strxngth
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="/sign-in"
            className="text-sm font-medium text-white/80 hover:text-white transition-all duration-200"
          >
            Sign in
          </Link>
        </div>
      </div>
    </footer>
  )
}
