import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/supabase/actions";
import { supabase } from "@/lib/supabase/client";

export default async function SignInPage({
  searchParams,
}: {
  searchParams: { success?: string; error?: string };
}) {
  const user = await getCurrentUser();
  if (user) redirect("/dashboard");

  async function handleSignIn(formData: FormData) {
    "use server";
    const email = formData.get("email") as string;
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard`,
      },
    });

    if (error) {
      return redirect("/sign-in?error=" + encodeURIComponent(error.message));
    }
    return redirect("/sign-in?success=true");
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

        {searchParams.success && (
          <div className="mb-6 rounded-xl bg-green-900/50 p-4 text-green-400">
            Check your email for a magic link!
          </div>
        )}

        {searchParams.error && (
          <div className="mb-6 rounded-xl bg-red-900/50 p-4 text-red-400">
            {searchParams.error}
          </div>
        )}

        <form action={handleSignIn} className="space-y-4">
          <Input
            name="email"
            type="email"
            placeholder="Email address"
            required
          />
          <Button type="submit" className="w-full">
            Continue with Email
          </Button>
        </form>
      </div>
    </main>
  );
}
