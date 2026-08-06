import Image from "next/image";

import { cn } from "@/lib/utils";
import type { Project } from "@/dictionaries/types";

/** Strips protocol and trailing slash so the chrome reads like an address bar. */
function displayUrl(href: string) {
  try {
    const url = new URL(href);
    return `${url.hostname}${url.pathname === "/" ? "" : url.pathname}`;
  } catch {
    return href.replace(/^https?:\/\//, "").replace(/\/$/, "");
  }
}

/**
 * A framed preview of a live site. The chrome is what makes it read as
 * "a site you can go to" rather than a decorative screenshot, and the address
 * bar carries the destination so the link target is visible before the click.
 *
 * Without an image it falls back to a typographic panel rather than inventing
 * a fake interface out of divs.
 */
export function SitePreview({
  project,
  priority = false,
  sizes,
  className,
}: {
  project: Project;
  priority?: boolean;
  sizes: string;
  className?: string;
}) {
  const url = project.href ? displayUrl(project.href) : null;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-card-elevated",
        "transition-[border-color,box-shadow] duration-200 ease-out",
        "group-hover:border-brand-border group-hover:shadow-[0_16px_48px_-24px_var(--brand)]",
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-border px-3 py-2.5">
        <span className="flex shrink-0 gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
        </span>

        {url ? (
          <span className="type-mono min-w-0 flex-1 truncate rounded-md bg-background/60 px-2.5 py-1 text-xs text-muted-foreground">
            {url}
          </span>
        ) : (
          <span className="type-mono min-w-0 flex-1 truncate px-1 text-xs text-muted-foreground">
            {project.title}
          </span>
        )}
      </div>

      {project.image ? (
        <div className="relative aspect-16/10 bg-muted">
          <Image
            src={project.image}
            alt={project.imageAlt ?? project.title}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover object-top transition-transform duration-200 ease-out group-hover:scale-[1.02] motion-reduce:transform-none motion-reduce:transition-none"
          />
        </div>
      ) : (
        <PreviewFallback project={project} />
      )}
    </div>
  );
}

/**
 * No screenshot yet. The headline metric stands in for the visual so the frame
 * still carries weight instead of showing an empty grey box.
 */
function PreviewFallback({ project }: { project: Project }) {
  const headline = project.metrics[0];

  return (
    <div className="flex aspect-16/10 flex-col justify-center gap-3 bg-[radial-gradient(120%_120%_at_15%_0%,var(--brand-subtle),transparent_58%)] px-8">
      {headline ? (
        <>
          <span className="type-metric text-brand">{headline.value}</span>
          <span className="type-label max-w-[22ch] text-muted-foreground">
            {headline.label}
          </span>
        </>
      ) : (
        <span className="type-h3 text-balance text-foreground-subtle">
          {project.title}
        </span>
      )}
    </div>
  );
}
