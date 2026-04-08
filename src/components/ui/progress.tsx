import { cn } from "@/lib/utils";

interface ProgressProps {
  className?: string;
  value: number;
  max?: number;
}

export function Progress({
  className,
  value,
  max = 100,
  ...props
}: ProgressProps & React.HTMLAttributes<HTMLDivElement>) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div
      className={cn(
        "h-2 w-full overflow-hidden rounded-full bg-white/5",
        className
      )}
      {...props}
    >
      <div
        className="h-full rounded-full bg-white transition-all duration-300"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
