import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Button({
  className,
  variant = "primary",
  size = "default",
  isLoading = false,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "lg" | "sm";
  isLoading?: boolean;
}) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-xl font-medium transition-all",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
        "disabled:opacity-50 disabled:pointer-events-none",
        variant === "primary" && "bg-white text-black hover:bg-white/90",
        variant === "secondary" && "border border-white/20 bg-white/10 text-white hover:bg-white/20",
        variant === "ghost" && "text-white hover:bg-white/10",
        size === "default" && "text-sm px-4 py-2.5",
        size === "lg" && "text-sm px-6 py-3.5",
        size === "sm" && "text-xs px-3 py-2",
        className,
      )}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : (
        props.children
      )}
    </button>
  );
}
