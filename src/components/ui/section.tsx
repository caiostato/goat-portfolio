import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/*
 * Clean, breathable section layout.
 *
 * Uses generous vertical whitespace (`rhythm`) and subtle top dividers
 * without enclosing the entire viewport in heavy outer box borders.
 */
const sectionVariants = cva("relative", {
  variants: {
    rhythm: {
      hero: "pt-10 pb-16 sm:pt-12 sm:pb-20 md:pt-20 md:pb-28",
      loud: "py-16 sm:py-24 md:py-32",
      standard: "py-14 sm:py-20 md:py-28",
      quiet: "py-12 sm:py-14 md:py-20",
    },
    surface: {
      none: "bg-background",
      raised: "border-t border-border bg-surface-contrast",
      hairline: "border-t border-border bg-background",
    },
  },
  defaultVariants: { rhythm: "standard", surface: "hairline" },
});

const containerVariants = cva("mx-auto w-full px-5 sm:px-6 md:px-8", {
  variants: {
    width: {
      narrow: "max-w-4xl",
      default: "max-w-6xl",
      wide: "max-w-7xl",
    },
  },
  defaultVariants: { width: "default" },
});

type SectionProps = React.ComponentProps<"section"> &
  VariantProps<typeof sectionVariants> &
  VariantProps<typeof containerVariants>;

export function Section({
  className,
  containerClassName,
  rhythm,
  surface,
  width,
  children,
  ...props
}: SectionProps & { containerClassName?: string }) {
  return (
    <section
      className={cn(sectionVariants({ rhythm, surface }), className)}
      {...props}
    >
      <div className={cn(containerVariants({ width }), containerClassName)}>
        {children}
      </div>
    </section>
  );
}

/**
 * Clean, lightweight section header with a subtle Signal Orange index eyebrow.
 */
export function SectionHeader({
  index,
  code,
  heading,
  description,
  className,
}: {
  index?: string;
  code?: string;
  heading: string;
  description?: string;
  metaRight?: string;
  className?: string;
}) {
  return (
    <header className={cn("reveal mb-10 sm:mb-14 md:mb-18", className)}>
      {(index || code) && (
        <div className="mb-4 flex items-center gap-2.5">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-brand"
          />
          <span className="type-label text-brand">
            {index && code ? `${index} / ${code}` : (code ?? index)}
          </span>
        </div>
      )}

      <h2 className="type-h2 max-w-2xl text-balance text-foreground">
        {heading}
      </h2>

      {description ? (
        <p className="type-lead mt-4 max-w-xl text-pretty text-muted-foreground">
          {description}
        </p>
      ) : null}
    </header>
  );
}
