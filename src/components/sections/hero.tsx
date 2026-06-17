import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionEyebrow from "@/components/section-eyebrow";

export default function HeroSection() {
  return (
    <section
      aria-label="Hero"
      className="relative flex min-h-screen flex-col overflow-x-hidden"
      style={{ backgroundColor: "var(--background)" }}
    >
      {/* Decorative background — CSS grid matches SVG look, paints once (no scroll lag) */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden [contain:paint]"
        aria-hidden="true"
      >
        <div className="hero-grid-pattern absolute inset-0 text-[var(--text-primary)]" />

        <div className="absolute -top-32 -right-32 h-[600px] w-[600px] rounded-full border border-[var(--accent)] opacity-[0.06]" />
        <div className="absolute -bottom-48 -left-48 h-[800px] w-[800px] rounded-full border border-[var(--accent)] opacity-[0.04]" />
        <div
          className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full opacity-[0.08]"
          style={{
            background:
              "radial-gradient(circle, var(--accent) 0%, transparent 65%)",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[var(--border)]" />
      </div>

      {/* Spacer matches fixed navbar height (taller on mobile — logo + tagline) */}
      <div aria-hidden="true" className="h-[7.5rem] shrink-0 lg:h-[6.75rem]" />

      {/* Content centered in the band between header bottom and scroll cue */}
      <div className="relative z-10 flex min-h-0 w-full flex-1 flex-col">
        <div className="container-content flex min-h-0 flex-1 items-center justify-center">
          <div className="hero-intro max-w-4xl mx-auto text-center section-intro">
            <div>
              <SectionEyebrow prominent>Gurgaon · Haryana · India</SectionEyebrow>
            </div>

            <h1 className="font-heading text-[clamp(2rem,6.5vw,5.5rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-[var(--text-primary)] mb-6 break-words">
              Family Office,{" "}
              <span className="text-[var(--accent)]">Finance</span> &amp; Consulting
            </h1>

            <p className="font-body text-lg md:text-xl text-justify-block text-balance text-[var(--text-secondary)] leading-relaxed max-w-xl mb-10 md:mb-12 font-light">
              A private family office focused on{" "}
              <span className="hl">long-term value creation</span>, strategic advisory,
              and responsible capital stewardship.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--accent)] text-white font-body text-base font-medium tracking-wide hover:opacity-90 transition-opacity duration-300 group"
                aria-label="Learn more about BeriCo Research LLP"
              >
                Learn More
                <ArrowRight
                  size={16}
                  strokeWidth={1.5}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-[var(--text-primary)] text-[var(--text-primary)] font-body text-base font-medium tracking-wide hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300"
                aria-label="Contact BeriCo Research LLP"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div
          className="scroll-cue flex shrink-0 flex-col items-center gap-2 pb-28 sm:pb-32"
          aria-hidden="true"
        >
          <span className="font-body text-sm tracking-[0.2em] uppercase text-[var(--text-secondary)]">
            Scroll
          </span>
          <div className="scroll-cue-line h-10 w-px bg-gradient-to-b from-[var(--accent)] to-transparent" />
        </div>
      </div>
    </section>
  );
}
