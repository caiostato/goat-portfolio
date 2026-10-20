"use client";

import Link from "next/link";
import { openCookiePreferences } from "@/components/cookie-banner";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/dictionaries/types";

export function SiteFooter({
  dict,
  lang = "pt-br",
}: {
  dict: Dictionary["footer"];
  lang?: Locale;
}) {
  const homeHref = lang === "en-us" ? "/en-us" : "/";
  const privacyHref = lang === "en-us" ? "/en-us/privacy" : "/privacy";

  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row md:px-8">
        <Link
          href={homeHref}
          className="group flex items-center gap-2.5 text-foreground transition-colors hover:text-brand"
        >
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-brand transition-transform duration-200 group-hover:scale-125"
          />
          <span className="type-label text-sm font-bold">
            CAIO STATO
          </span>
        </Link>

        <nav
          aria-label={dict.ariaLabel}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-center"
        >
          {dict.links.map((link) => {
            const resolvedHref = link.href.startsWith("#")
              ? `${homeHref}${link.href}`
              : link.href;

            return (
              <a
                key={link.label}
                href={resolvedHref}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="type-label text-muted-foreground transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            );
          })}

          <Link
            href={privacyHref}
            className="type-label text-muted-foreground transition-colors hover:text-brand"
          >
            {dict.privacy}
          </Link>

          <button
            type="button"
            onClick={openCookiePreferences}
            className="type-label cursor-pointer border-0 bg-transparent p-0 text-muted-foreground transition-colors hover:text-brand"
          >
            {dict.cookieSettings}
          </button>
        </nav>

        <span className="type-label text-muted-foreground">
          {dict.copyright}
        </span>
      </div>
    </footer>
  );
}
