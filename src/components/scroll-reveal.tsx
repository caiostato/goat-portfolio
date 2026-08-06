"use client";

import { useEffect } from "react";

/**
 * Trigger point for every `.reveal` element.
 *
 * A bottom margin of -20% shrinks the observer's viewport by a fifth from the
 * bottom, so an element counts as visible once its top edge has scrolled past
 * 80% of the viewport height. Concretely, on a 900px window that is 720px from
 * the top. The element is comfortably on screen when it starts moving instead
 * of finishing its animation while still below the fold.
 */
const TRIGGER_ROOT_MARGIN = "0px 0px -20% 0px";

/**
 * Reveals elements on scroll.
 *
 * The `data-reveal="on"` attribute this depends on is set by a blocking script
 * in the document head, before first paint, so nothing is painted and then
 * hidden. This effect only wires up the observer, and marks each element once.
 */
export function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    if (root.dataset.reveal !== "on") return;

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal"),
    );
    if (targets.length === 0) return;

    // No IntersectionObserver (very old browsers): show everything rather
    // than leaving the page blank.
    if (typeof IntersectionObserver === "undefined") {
      for (const target of targets) target.setAttribute("data-revealed", "");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-revealed", "");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: TRIGGER_ROOT_MARGIN, threshold: 0 },
    );

    for (const target of targets) observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return null;
}
