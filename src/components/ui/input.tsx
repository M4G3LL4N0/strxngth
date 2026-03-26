import { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "w-full rounded-[var(--border-radius-sm)] border border-white/5 bg-white/2.5 px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/15",
        className,
      )}
      {...props}
    />
  );
}
