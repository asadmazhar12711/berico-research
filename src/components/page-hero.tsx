"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section
      aria-label={`${eyebrow} hero`}
      className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-[var(--background)] border-b border-[var(--border)] overflow-hidden"
    >
      {/* Background decoration */}
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
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-[var(--accent)]" />
            <span className="font-body text-xs tracking-[0.25em] uppercase text-[var(--accent)] font-medium">
              {eyebrow}
            </span>
          </div>
          <h1 className="font-heading text-[clamp(2rem,5vw,4rem)] font-semibold leading-tight tracking-[-0.02em] text-[var(--text-primary)] max-w-3xl mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="font-body text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-xl font-light">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
