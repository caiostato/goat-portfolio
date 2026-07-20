"use client";

import { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";
import type { Dictionary } from "@/dictionaries/types";

const EMAIL = "caio.stato@hotmail.com";

export function ConnectSection({ dict }: { dict: Dictionary["connect"] }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  async function handleSendEmail(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    window.location.href = `mailto:${EMAIL}`;
  }

  return (
    <section id="connect">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
        <h2 className="text-balance font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {dict.heading}
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-pretty leading-relaxed text-muted-foreground">
          {dict.body}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={handleSendEmail}
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform scale-100 hover:scale-100 cursor-pointer hover:text-primary-foreground/50 duration-200"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {dict.emailCta}
          </button>

          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent cursor-pointer duration-200 "
          >
            {copied ? (
              <Check className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Copy className="h-4 w-4" aria-hidden="true" />
            )}
            {copied ? dict.copiedCta : dict.copyCta}
          </button>
        </div>
      </div>
    </section>
  );
}
