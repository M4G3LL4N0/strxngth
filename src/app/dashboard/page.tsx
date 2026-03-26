import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { getCurrentUser } from "@/lib/supabase/actions";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/sign-in");
  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <div className="text-sm uppercase tracking-[0.2em] text-white/40">Strxngth Dashboard</div>
          <h1 className="mt-4 text-4xl font-semibold md:text-6xl">Your system for today.</h1>
          <p className="mt-4 max-w-2xl text-white/70">
            Personalized training, nutrition targets, and reminders built around execution.
          </p>
        </div>
        <DashboardShell />
      </div>
    </main>
  );
}
