"use client";

import Link from "next/link";
import MotionReveal from "@/components/motion-reveal";
import { ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      aria-labelledby="contact-cta-heading"
      className="section-padding bg-[var(--background)]"
    >
      <div className="container-content">
        <div className="border border-[var(--border)] p-12 md:p-20 flex flex-col md:flex-row md:items-center justify-between gap-10 relative overflow-hidden">
          {/* Subtle bg pattern */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            aria-hidden="true"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, var(--accent) 0, var(--accent) 1px, transparent 0, transparent 50%)",
              backgroundSize: "24px 24px",
            }}
          />

          <MotionReveal className="relative z-10 max-w-xl">
            <div className="flex items-center gap-4 mb-5">
              <div className="h-px w-12 bg-[var(--accent)]" />
              <span className="font-body text-xs tracking-[0.25em] uppercase text-[var(--accent)] font-medium">
                Get in Touch
              </span>
            </div>
            <h2
              id="contact-cta-heading"
              className="font-heading text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-tight text-[var(--text-primary)] mb-4"
            >
              Begin a conversation
              with our team
            </h2>
            <p className="font-body text-base text-[var(--text-secondary)] leading-relaxed font-light">
              For enquiries, introductions, or further information about BERICO Research LLP,
              we welcome your correspondence.
            </p>
          </MotionReveal>

          <MotionReveal delay={0.2} direction="right" className="relative z-10 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[var(--accent)] text-white font-body text-sm font-medium tracking-wide hover:opacity-90 transition-opacity duration-300 group whitespace-nowrap"
              aria-label="Contact BERICO Research LLP"
            >
              Contact Us
              <ArrowRight
                size={16}
                strokeWidth={1.5}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
