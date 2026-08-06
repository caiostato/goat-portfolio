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
        className="-mr-2 inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-foreground transition-colors hover:bg-muted md:hidden"
      >
        <Menu className="h-5 w-5" aria-hidden="true" />
      </Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Backdrop className="fixed inset-0 z-50 min-h-dvh bg-black/60 opacity-[calc(1-var(--drawer-swipe-progress))] backdrop-blur-sm transition-opacity duration-300 data-ending-style:opacity-0 data-starting-style:opacity-0" />

        <Drawer.Viewport className="fixed inset-0 z-50 flex items-end">
          <Drawer.Popup className="w-full translate-y-(--drawer-swipe-movement-y) rounded-t-3xl border-t border-border bg-card px-6 pt-3 pb-8 outline-none transition-transform duration-400 ease-[cubic-bezier(0.32,0.72,0,1)] data-ending-style:translate-y-full data-ending-style:duration-300 data-starting-style:translate-y-full data-swiping:select-none motion-reduce:transition-none">
            {/* Grab handle: the affordance that says this sheet can be flicked away. */}
            <div
              aria-hidden="true"
              className="mx-auto mb-5 h-1 w-10 rounded-full bg-border-strong"
            />

            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <Drawer.Title className="type-h3 text-foreground">
                  CAIO STATO
                </Drawer.Title>
                <Drawer.Description className="type-label mt-2 text-muted-foreground">
                  {localeLabels[lang]}
                </Drawer.Description>
              </div>

              <Drawer.Close
                aria-label={dict.menuClose}
                className="-mt-1 -mr-2 inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </Drawer.Close>
            </div>

            <Drawer.Content>
              <nav aria-label={dict.ariaLabel}>
                <ul className="flex flex-col gap-1">
                  {dict.items.map((item) => (
                    <li key={item.href} className="flex">
                      <Drawer.Close
                        nativeButton={false}
                        render={<a href={item.href} />}
                        className="flex h-12 w-full items-center rounded-xl px-4 text-base text-foreground transition-colors hover:bg-muted active:bg-muted"
                      >
                        {item.label}
                      </Drawer.Close>
                    </li>
                  ))}
                </ul>

                <Drawer.Close
                  nativeButton={false}
                  render={<a href="#connect" />}
                  className="mt-4 flex h-12 w-full items-center justify-center rounded-full bg-brand px-4 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand-strong"
                >
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
