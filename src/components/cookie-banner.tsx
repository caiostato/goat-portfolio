"use client";

import { useSyncExternalStore, useState, useEffect } from "react";
import Link from "next/link";
import { X, ShieldCheck } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { CookieBannerDictionary } from "@/dictionaries/types";
import { cn } from "@/lib/utils";

const CONSENT_STORAGE_KEY = "caio_consent_analytics";
const OPEN_EVENT = "caio_open_cookie_banner";
const CONSENT_CHANGE_EVENT = "caio_consent_change";

type ConsentValue = "granted" | "denied" | null;

/**
 * Triggers reopening of the cookie and telemetry preferences banner
 * from anywhere in the application (e.g. footer links, privacy page).
 */
export function openCookiePreferences() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(OPEN_EVENT));
  }
}

function subscribeConsent(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const handler = () => callback();
  window.addEventListener("storage", handler);
  window.addEventListener(CONSENT_CHANGE_EVENT, handler);
  return () => {
    window.removeEventListener("storage", handler);
    window.removeEventListener(CONSENT_CHANGE_EVENT, handler);
  };
}

function getConsentSnapshot(): ConsentValue {
  try {
    const val = localStorage.getItem(CONSENT_STORAGE_KEY);
    return val === "granted" || val === "denied" ? val : null;
  } catch {
    return null;
  }
}

function getConsentServerSnapshot(): ConsentValue {
  return null;
}

const emptySubscribe = () => () => {};

function useHasMounted(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export interface CookieBannerProps {
  lang: Locale;
  dict: CookieBannerDictionary;
  children?: React.ReactNode;
}

export function CookieBanner({ lang, dict, children }: CookieBannerProps) {
  const mounted = useHasMounted();
  const consent = useSyncExternalStore(
    subscribeConsent,
    getConsentSnapshot,
    getConsentServerSnapshot
  );

  const [dismissed, setDismissed] = useState(false);
  const [forceOpen, setForceOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Show banner on first user engagement (scroll, touch, key) or 3.5s fallback
    if (typeof window === "undefined") return;

    let timer: ReturnType<typeof setTimeout> | null = null;

    const triggerReady = () => {
      setIsReady(true);
      cleanup();
    };

    const cleanup = () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener("scroll", triggerReady);
      window.removeEventListener("pointerdown", triggerReady);
      window.removeEventListener("keydown", triggerReady);
    };

    window.addEventListener("scroll", triggerReady, {
      passive: true,
      once: true,
    });
    window.addEventListener("pointerdown", triggerReady, {
      passive: true,
      once: true,
    });
    window.addEventListener("keydown", triggerReady, {
      passive: true,
      once: true,
    });
    timer = setTimeout(triggerReady, 3500);

    return cleanup;
  }, []);

  const saveConsent = (value: "granted" | "denied") => {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, value);
    } catch {
      // storage unavailable
    }
    window.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT));
    setForceOpen(false);
    setDismissed(false);
  };

  const handleAccept = () => {
    saveConsent("granted");
  };

  const handleDecline = () => {
    saveConsent("denied");
  };

  const handleClose = () => {
    setDismissed(true);
    setForceOpen(false);
  };

  useEffect(() => {
    const handleOpen = () => {
      setDismissed(false);
      setForceOpen(true);
    };

    window.addEventListener(OPEN_EVENT, handleOpen);
    return () => {
      window.removeEventListener(OPEN_EVENT, handleOpen);
    };
  }, []);

  useEffect(() => {
    if (!forceOpen && (consent !== null || dismissed)) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [forceOpen, consent, dismissed]);

  // Safe SSR/hydration gate: do not render anything on initial server pass
  if (!mounted) {
    return null;
  }

  // The banner is visible if:
  // 1. User clicked "Cookie Settings" (forceOpen is true)
  // 2. No choice has been made yet (consent is null), not dismissed, and idle window reached
  const isBannerVisible =
    forceOpen || (isReady && consent === null && !dismissed);
  const privacyHref = lang === "en-us" ? "/en-us/privacy" : "/privacy";

  return (
    <>
      {/* Conditionally mount Analytics only when consent is granted */}
      {consent === "granted" && children}

      {isBannerVisible && (
        <aside
          role="region"
          aria-labelledby="cookie-banner-title"
          aria-live="polite"
          className="fixed bottom-4 inset-x-4 z-50 mx-auto max-w-xl animate-in fade-in duration-300 sm:bottom-6"
        >
          <div className="relative overflow-hidden rounded-2xl border border-border-strong bg-card/95 p-5 shadow-2xl backdrop-blur-md sm:p-6">
            {/* Top accent line */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand to-transparent opacity-80"
            />

            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md border border-brand/40 bg-brand/10 text-brand">
                  <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span className="type-label text-[11px] font-semibold text-brand">
                  {dict.badge}
                </span>
              </div>

              <button
                type="button"
                onClick={handleClose}
                aria-label={
                  lang === "pt-br"
                    ? "Fechar aviso de preferências"
                    : "Dismiss preferences banner"
                }
                className="rounded-lg p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground cursor-pointer"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-2.5">
              <h3
                id="cookie-banner-title"
                className="type-h3 text-base font-bold text-foreground"
              >
                {dict.title}
              </h3>
              <p className="type-body mt-1.5 text-xs text-muted-foreground leading-relaxed">
                {dict.message}
              </p>
            </div>

            <div className="mt-4 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href={privacyHref}
                onClick={handleClose}
                className="type-mono text-[11px] text-muted-foreground underline-offset-4 transition-colors hover:text-brand hover:underline"
              >
                {dict.learnMore} →
              </Link>

              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  type="button"
                  onClick={handleDecline}
                  className={cn(
                    "rounded-lg border border-border bg-background/80 px-3.5 py-1.5",
                    "type-label text-[11px] font-semibold text-muted-foreground transition-colors cursor-pointer",
                    "hover:bg-muted hover:text-foreground active:scale-[0.98]"
                  )}
                >
                  {dict.decline}
                </button>

                <button
                  type="button"
                  onClick={handleAccept}
                  className={cn(
                    "rounded-lg bg-brand px-4 py-1.5",
                    "type-label text-[11px] font-bold text-brand-foreground shadow-sm transition-[background-color,transform] cursor-pointer",
                    "hover:bg-brand-strong active:scale-[0.98]"
                  )}
                >
                  {dict.accept}
                </button>
              </div>
            </div>
          </div>
        </aside>
      )}
    </>
  );
}
