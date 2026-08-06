import type { Dictionary } from "@/dictionaries/types";

export function SiteFooter({ dict }: { dict: Dictionary["footer"] }) {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row md:px-8">
        <span className="type-label text-sm font-bold text-foreground">
          CAIO STATO
        </span>

        <nav aria-label={dict.ariaLabel} className="flex items-center gap-6">
          {dict.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="type-label text-muted-foreground transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <span className="type-label text-muted-foreground">
          {dict.copyright}
        </span>
      </div>
    </footer>
  );
}
