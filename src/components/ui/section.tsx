import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/*
 * Every section used to share one shell — same width, same padding, same
 * divider — which flattened the whole page into a single note. Rhythm and
 * width are variants now, so a section's weight is a deliberate choice.
 */
const sectionVariants = cva("relative", {
  variants: {
    rhythm: {
      hero: "pt-16 pb-20 md:pt-24 md:pb-28 lg:pb-36",
      loud: "py-24 md:py-32 lg:py-40",
      standard: "py-20 md:py-24",
      quiet: "py-16 md:py-20",
    },
    surface: {
      none: "",
      raised: "bg-card/40",
      hairline: "border-t border-border",
    },
  },
  defaultVariants: { rhythm: "standard", surface: "none" },
});

const containerVariants = cva("mx-auto w-full px-6 md:px-8", {
  variants: {
    width: {
      narrow: "max-w-3xl",
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

/*
 * Shared section opener. The heading carries the section on its own: a numbered
 * eyebrow above every one of them ("01", "02"...) only tells the reader what
 * they can already count, and repeated across a page it reads as template.
 */
export function SectionHeader({
  heading,
  description,
  className,
}: {
  heading: string;
  description?: string;
  className?: string;
}) {
  return (
    <header className={cn("reveal mb-12 md:mb-16", className)}>
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
