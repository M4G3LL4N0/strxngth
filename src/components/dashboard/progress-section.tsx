import { Card } from "@/components/ui/card";

export function ProgressSection() {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold text-white">Progress / Uploads</h2>
      <div className="mt-6 rounded-lg border border-dashed border-white/10 p-6 text-center">
        <p className="text-white/70">No progress tracked yet</p>
        <button className="mt-4 text-sm font-medium text-white underline">
          Upload Progress
        </button>
      </div>
    </Card>
  );
}
