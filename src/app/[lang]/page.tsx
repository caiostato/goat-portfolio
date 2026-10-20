import { notFound } from "next/navigation";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { LiveSandboxSection } from "@/components/live-sandbox-section";
import { ExperienceSection } from "@/components/experience-section";
import { CapabilitiesSection } from "@/components/capabilities-section";
import { PhilosophySection } from "@/components/philosophy-section";
import { ConnectSection } from "@/components/connect-section";
import { SiteFooter } from "@/components/site-footer";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "./dictionaries";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <div className="min-h-dvh bg-background">
      <ScrollReveal />
      <SiteHeader lang={lang} dict={dict.nav} />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <HeroSection dict={dict.hero} />
        <ProjectsSection dict={dict.projects} />
        <LiveSandboxSection lang={lang} />
        <ExperienceSection dict={dict.experience} />
        <CapabilitiesSection
          dict={dict.capabilities}
          stackDict={dict.stack}
        />
        <PhilosophySection dict={dict.philosophy} />
        <ConnectSection dict={dict.connect} />
      </main>
      <SiteFooter dict={dict.footer} lang={lang} />
    </div>
  );
}
