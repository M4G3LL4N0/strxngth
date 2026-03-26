import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[var(--border-radius)] border border-white/5 bg-white/[0.02] backdrop-blur-sm",
        "transition-all hover:border-white/10 hover:bg-white/[0.03]",
        className,
      )}
      {...props}
    />
  );
}
