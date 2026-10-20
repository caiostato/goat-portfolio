"use client";

import { Drawer } from "@base-ui/react/drawer";
import { Menu, X } from "lucide-react";

import { localeLabels, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/dictionaries/types";

export function MobileNav({
  dict,
  lang,
}: {
  dict: Dictionary["nav"];
  lang: Locale;
}) {
  return (
    <Drawer.Root>
      <Drawer.Trigger
        aria-label={dict.menuOpen}
        className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-border bg-card/80 text-foreground transition-colors hover:border-brand-border hover:text-brand md:hidden"
      >
        <Menu className="h-4 w-4" aria-hidden="true" />
      </Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Backdrop className="fixed inset-0 z-50 min-h-dvh bg-black/70 opacity-[calc(1-var(--drawer-swipe-progress))] backdrop-blur-sm transition-opacity duration-300 data-ending-style:opacity-0 data-starting-style:opacity-0" />

        <Drawer.Viewport className="fixed inset-0 z-50 flex items-end">
          <Drawer.Popup className="w-full translate-y-(--drawer-swipe-movement-y) rounded-t-2xl border-t border-border-strong bg-card px-5 pt-3 pb-[max(2rem,env(safe-area-inset-bottom))] outline-none transition-transform duration-400 ease-[cubic-bezier(0.32,0.72,0,1)] data-ending-style:translate-y-full data-ending-style:duration-300 data-starting-style:translate-y-full data-swiping:select-none sm:px-6 motion-reduce:transition-none">
            <div
              aria-hidden="true"
              className="mx-auto mb-5 h-1 w-10 rounded-full bg-border-strong"
            />

            <div className="mb-5 flex items-start justify-between gap-4 border-b border-border pb-4">
              <div>
                <Drawer.Title className="flex items-center gap-2 font-mono text-xs font-bold tracking-[0.18em] text-foreground">
                  <span aria-hidden="true" className="h-2 w-2 bg-brand" />
                  CAIO STATO
                </Drawer.Title>
                <Drawer.Description className="type-label mt-2 text-muted-foreground">
                  SYS.LOCALE // {localeLabels[lang]}
                </Drawer.Description>
              </div>

              <Drawer.Close
                aria-label={dict.menuClose}
                className="-mt-1 -mr-1 inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-brand-border hover:text-foreground"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </Drawer.Close>
            </div>

            <Drawer.Content>
              <nav aria-label={dict.ariaLabel}>
                <ul className="divide-y divide-border rounded-xl border border-border bg-background/60">
                  {dict.items.map((item, idx) => (
                    <li key={item.href} className="flex">
                      <Drawer.Close
                        nativeButton={false}
                        render={<a href={item.href} />}
                        className="flex h-12 w-full items-center justify-between px-4 text-sm font-medium text-foreground transition-colors hover:bg-card-elevated hover:text-brand"
                      >
                        <span>{item.label}</span>
                        <span className="type-mono text-xs text-brand">
                          0{idx + 1}
                        </span>
                      </Drawer.Close>
                    </li>
                  ))}
                </ul>

                <Drawer.Close
                  nativeButton={false}
                  render={<a href="#connect" />}
                  className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand px-4 font-mono text-xs font-bold tracking-wider text-brand-foreground uppercase transition-colors hover:bg-brand-strong"
                >
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-brand-foreground"
                  />
                  {dict.contact}
                </Drawer.Close>
              </nav>
            </Drawer.Content>
          </Drawer.Popup>
        </Drawer.Viewport>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
