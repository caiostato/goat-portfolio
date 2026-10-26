"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";

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
      <div className="reveal flex flex-col items-center gap-6 rounded-3xl border border-border-strong bg-card/60 px-6 py-12 text-center shadow-[0_24px_60px_oklch(0_0_0/0.4)] sm:px-12 sm:py-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3.5 py-1.5">
          <span
            aria-hidden="true"
            className="h-2 w-2 rounded-full bg-brand"
          />
          <span className="type-mono text-xs text-foreground-subtle">
            {EMAIL}
          </span>
        </div>

        <h2 className="type-display text-balance text-foreground">
          {dict.heading}
        </h2>

        <p className="type-lead max-w-lg text-pretty text-muted-foreground">
          {dict.body}
        </p>

        <div className="mt-2 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-brand-foreground shadow-[0_8px_24px_-4px_oklch(0.686_0.206_34.8/0.4)] transition-[background-color,transform,box-shadow] duration-150 ease-out hover:bg-brand-strong hover:shadow-[0_12px_28px_-4px_oklch(0.686_0.206_34.8/0.5)] active:translate-y-px sm:w-auto motion-reduce:transform-none"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {dict.emailCta}
          </a>

          <button
            type="button"
            onClick={handleCopy}
            aria-live="polite"
            className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-border-strong bg-card-elevated/85 px-6 py-3.5 text-sm font-medium text-foreground transition-[color,background-color,border-color,transform] duration-150 ease-out hover:border-brand-border hover:bg-card-elevated active:translate-y-px sm:w-auto motion-reduce:transform-none"
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

        <div className="mt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-border pt-6">
          <a
            href="https://linkedin.com/in/caiostato"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 font-mono text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <span>LinkedIn</span>
            <ArrowUpRight
              className="h-3.5 w-3.5 text-brand transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>

          <a
            href="https://github.com/caiostato"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 font-mono text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <span>GitHub</span>
            <ArrowUpRight
              className="h-3.5 w-3.5 text-brand transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </Section>
  );
}
