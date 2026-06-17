"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionEyebrow from "@/components/section-eyebrow";

export default function HeroSection() {
  return (
    <section
      aria-label="Hero"
      className="relative min-h-screen flex items-center justify-center overflow-x-hidden"
      style={{ backgroundColor: "var(--background)" }}
    >
      {/* Abstract luxury background */}
      <div className="absolute inset-0" aria-hidden="true">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.035] dark:opacity-[0.06]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        <div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full border border-[var(--accent)] opacity-[0.06]"
        />
        <div
          className="absolute -bottom-48 -left-48 w-[800px] h-[800px] rounded-full border border-[var(--accent)] opacity-[0.04]"
        />
        <div
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full opacity-[0.06]"
          style={{
            background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[var(--border)]" />
      </div>

      <div className="container-content relative z-10 pt-[6.5rem] pb-20 lg:pt-44 lg:pb-28">
        <div className="max-w-4xl mx-auto text-center section-intro">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <SectionEyebrow prominent>Gurgaon · Haryana · India</SectionEyebrow>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-heading text-[clamp(2rem,6.5vw,5.5rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-[var(--text-primary)] mb-6 break-words"
          >
            Family Office,{" "}
            <span className="text-[var(--accent)]">Finance</span> &amp; Consulting
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-body text-lg md:text-xl text-justify-block text-balance text-[var(--text-secondary)] leading-relaxed max-w-xl mb-10 md:mb-12 font-light"
          >
            A private family office focused on{" "}
            <span className="hl">long-term value creation</span>, strategic advisory,
            and responsible capital stewardship.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
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
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="font-body text-sm tracking-[0.2em] uppercase text-[var(--text-secondary)]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-[var(--accent)] to-transparent"
        />
      </motion.div>
    </section>
  );
}
