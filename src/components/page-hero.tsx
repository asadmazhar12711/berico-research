"use client";

import { motion } from "framer-motion";
import SectionEyebrow from "@/components/section-eyebrow";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section
      aria-label={`${eyebrow} hero`}
      className="relative pt-[6.5rem] pb-16 lg:pt-48 lg:pb-28 bg-[var(--background)] border-b border-[var(--border)] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full opacity-[0.035] dark:opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="page-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#page-grid)" />
        </svg>
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="container-content relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="section-intro max-w-3xl mx-auto"
        >
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
          <h1 className="font-heading text-[clamp(2rem,5vw,4rem)] font-semibold leading-tight tracking-[-0.02em] text-[var(--text-primary)] mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="font-body text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-xl mx-auto font-light">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
