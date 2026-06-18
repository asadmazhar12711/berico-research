import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionEyebrow from "@/components/section-eyebrow";

export default function HeroSection() {
  return (
    <section
      aria-label="Hero"
      className="hero-section relative flex min-h-[100dvh] flex-col overflow-x-hidden pt-[var(--site-header-height,11.5rem)]"
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

      {/* Content sits strictly below measured header height */}
      <div className="relative z-10 flex min-h-0 w-full flex-1 flex-col">
        <div className="hero-content-panel container-content flex min-h-0 flex-1 justify-center">
          <div className="hero-intro max-w-4xl mx-auto w-full text-center section-intro">
            <div>
              <SectionEyebrow prominent>Gurgaon · Haryana · India</SectionEyebrow>
            </div>

            <h1 className="font-heading text-[clamp(1.75rem,5vw+0.75rem,5.5rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-[var(--text-primary)] mb-4 sm:mb-6 break-words">
              Family Office,
              <br className="sm:hidden" aria-hidden="true" />
              <span className="sm:ml-1">
                <span className="text-[var(--accent)]">Finance</span>{" "}&amp; Consulting
              </span>
            </h1>

            <p className="font-body text-[clamp(0.9375rem,2.2vw+0.5rem,1.25rem)] text-justify-block text-balance text-[var(--text-secondary)] leading-relaxed max-w-xl mb-6 sm:mb-10 md:mb-12 font-light">
              A private family office focused on{" "}
              <span className="hl">long-term value creation</span>, strategic advisory,
              and responsible capital stewardship.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Link
                href="/about"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-[var(--accent)] text-white font-body text-sm sm:text-base font-medium tracking-wide hover:opacity-90 transition-opacity duration-300 group"
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
                className="inline-flex w-full sm:w-auto items-center justify-center px-6 py-3 sm:px-8 sm:py-4 border border-[var(--text-primary)] text-[var(--text-primary)] font-body text-sm sm:text-base font-medium tracking-wide hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300"
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
