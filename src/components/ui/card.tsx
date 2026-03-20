import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, hoverable, ...props }: HTMLAttributes<HTMLDivElement> & { hoverable?: boolean }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-sm",
        "transition-all duration-200",
        hoverable && "hover:border-white/20 hover:shadow-lg hover:shadow-white/5",
        className,
      )}
      {...props}
    />
  );
}
