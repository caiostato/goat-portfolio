"use client";

import { SlidersHorizontal } from "lucide-react";
import { openCookiePreferences } from "@/components/cookie-banner";
import { cn } from "@/lib/utils";

export function ManageCookiesButton({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={openCookiePreferences}
      className={cn(
        "inline-flex items-center gap-2 rounded-lg border border-brand/50 bg-brand/10 px-4 py-2",
        "type-label text-xs font-semibold text-brand transition-[background-color,transform,color]",
        "hover:bg-brand hover:text-brand-foreground active:scale-[0.98] cursor-pointer",
        className
      )}
    >
      <SlidersHorizontal className="h-3.5 w-3.5" aria-hidden="true" />
      <span>{label}</span>
    </button>
  );
}
