import { notFound } from "next/navigation";
import { IntroCurtain } from "@/components/intro-curtain";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { StatsStrip } from "@/components/stats-strip";
import { ProjectsSection } from "@/components/projects-section";
import { ExperienceSection } from "@/components/experience-section";
import { CapabilitiesSection } from "@/components/capabilities-section";
import { StackSection } from "@/components/stack-section";
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
      <IntroCurtain />
      <ScrollReveal />
      <SiteHeader lang={lang} dict={dict.nav} />
      <main>
        <HeroSection dict={dict.hero} />
        <StatsStrip dict={dict.hero.stats} />
        <ProjectsSection dict={dict.projects} />
        <ExperienceSection dict={dict.experience} />
        <CapabilitiesSection dict={dict.capabilities} />
        <StackSection dict={dict.stack} />
        <PhilosophySection dict={dict.philosophy} />
        <ConnectSection dict={dict.connect} />
      </main>
      <SiteFooter dict={dict.footer} />
    </div>
  );
}
