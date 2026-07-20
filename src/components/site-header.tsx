import { locales, localeLabels, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/dictionaries/types";

export function SiteHeader({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary["nav"];
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-mono text-sm font-bold tracking-widest text-foreground"
        >
          CAIO STATO
        </a>

        <nav
          aria-label={dict.ariaLabel}
          className="hidden items-center gap-8 md:flex"
        >
          {dict.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 font-mono text-xs text-muted-foreground">
            {locales.map((locale, index) => (
              <span key={locale} className="flex items-center gap-1">
                {index > 0 && <span aria-hidden="true">/</span>}
                <a
                  href={`/${locale}`}
                  aria-current={locale === lang ? "page" : undefined}
                  className={
                    locale === lang
                      ? "text-foreground"
                      : "transition-colors hover:text-foreground"
                  }
                >
                  {localeLabels[locale]}
                </a>
              </span>
            ))}
          </div>

          <a
            href="#connect"
            className="text-sm font-medium text-foreground transition-colors hover:text-accent"
          >
            {dict.contact}
          </a>
        </div>
      </div>
    </header>
  );
}
