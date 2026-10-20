import type { Metadata } from "next";
import { Space_Grotesk, Geist, JetBrains_Mono } from "next/font/google";
import "@/app/globals.css";
import { NotFoundView } from "@/components/not-found-view";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "404 — Página não encontrada | Caio Stato",
  description: "Página não encontrada / Page not found",
};

export default function RootNotFound() {
  return (
    <div
      className={`dark bg-background text-foreground font-sans antialiased min-h-dvh flex items-center justify-center p-6 ${geist.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <main id="main-content" tabIndex={-1} className="relative flex w-full items-center justify-center outline-none">
        <NotFoundView />
      </main>
    </div>
  );
}
