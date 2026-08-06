const WORDMARK = "CAIO STATO";

/**
 * The opening sequence. Server-rendered and driven entirely by CSS, so it
 * costs no JavaScript and cannot leave the page stuck behind a curtain if a
 * bundle fails to load: the animation ends in `visibility: hidden` either way.
 *
 * It is decorative, so the whole thing is hidden from assistive tech. The real
 * wordmark lives in the header.
 */
export function IntroCurtain() {
  return (
    <div className="intro" aria-hidden="true">
      <div className="intro-panel intro-panel-top" />
      <div className="intro-panel intro-panel-bottom" />

      {/*
        The rule sits inside .intro-mark so it leaves with the wordmark. As a
        sibling it kept its own timeline and stayed on screen after the curtain
        had already handed the page over.
      */}
      <div className="intro-mark flex flex-col items-center gap-4">
        <div className="intro-word type-display text-foreground">
          {[...WORDMARK].map((char, index) => (
            <span
              key={`${char}-${index}`}
              className="intro-letter"
              style={{ "--letter-index": index } as React.CSSProperties}
            >
              <span>{char === " " ? " " : char}</span>
            </span>
          ))}
        </div>

        <span className="intro-rule h-px w-full bg-brand" />
      </div>
    </div>
  );
}
