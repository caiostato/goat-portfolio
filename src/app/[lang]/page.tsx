import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
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
    <div className="min-h-screen bg-background">
      <SiteHeader lang={lang} dict={dict.nav} />
      <main>
        <HeroSection dict={dict.hero} />
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
