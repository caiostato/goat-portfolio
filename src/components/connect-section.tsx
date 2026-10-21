"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy, Mail } from "lucide-react";

import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/dictionaries/types";

const EMAIL = "caiobnstato@gmail.com";

export function ConnectSection({ dict }: { dict: Dictionary["connect"] }) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
      return;
    }

    setCopied(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setCopied(false), 2000);
  }

  return (
    <Section
      id="connect"
      rhythm="loud"
      width="narrow"
      className="overflow-hidden"
    >
      <div className="reveal flex flex-col items-center gap-6 text-center">
        <h2 className="type-display text-balance text-foreground">
          {dict.heading}
        </h2>

        <p className="type-lead max-w-lg text-pretty text-muted-foreground">
          {dict.body}
        </p>

        <div className="mt-2 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground transition-[background-color,transform] duration-150 ease-out hover:bg-brand-strong active:translate-y-px sm:w-auto motion-reduce:transform-none"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {dict.emailCta}
          </a>

          <button
            type="button"
            onClick={handleCopy}
            aria-live="polite"
            className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-highlight/40 bg-highlight/10 px-6 py-3.5 text-sm font-medium text-highlight transition-[color,background-color,border-color,transform] duration-150 ease-out hover:border-highlight hover:bg-highlight hover:text-highlight-foreground active:translate-y-px sm:w-auto motion-reduce:transform-none"
          >
            <span className="relative inline-flex h-4 w-4 shrink-0">
              <Copy
                aria-hidden="true"
                className={cn(
                  "absolute inset-0 h-4 w-4 transition-[opacity,transform] duration-150 ease-out motion-reduce:transition-none",
                  copied ? "scale-90 opacity-0" : "scale-100 opacity-100",
                )}
              />
              <Check
                aria-hidden="true"
                className={cn(
                  "absolute inset-0 h-4 w-4 text-brand transition-[opacity,transform] duration-150 ease-out motion-reduce:transition-none",
                  copied ? "scale-100 opacity-100" : "scale-90 opacity-0",
                )}
              />
            </span>
            {copied ? dict.copiedCta : dict.copyCta}
          </button>
        </div>
      </div>
    </Section>
  );
}
