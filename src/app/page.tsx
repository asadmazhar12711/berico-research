import type { Metadata } from "next";
import HeroSection from "@/components/sections/hero";
import WhoWeAre from "@/components/sections/who-we-are";
import LeadershipPreview from "@/components/sections/leadership-preview";
import FocusAreas from "@/components/sections/focus-areas";
import LegacyTimeline from "@/components/sections/legacy-timeline";
import OfficeLocation from "@/components/sections/office-location";
import ContactSection from "@/components/sections/contact-section";

export const metadata: Metadata = {
  title: "BERICO Research LLP | Family Investment, Finance & Consulting",
  description:
    "A private family office focused on long-term value creation, strategic advisory, and responsible capital stewardship.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhoWeAre />
      <LeadershipPreview />
      <FocusAreas />
      <LegacyTimeline />
      <OfficeLocation />
      <ContactSection />
    </>
  );
}
