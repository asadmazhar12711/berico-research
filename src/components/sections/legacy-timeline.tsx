"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TIMELINE_ENTRIES = [
  {
    year: "1997",
    title: "Foundation",
    description:
      "Shail Foods & Packaging Pvt Ltd established in Goa — a bread and bakery manufacturing unit, initially under the Modern brand.",
  },
  {
    year: "2000s",
    title: "Growth Across Goa",
    description:
      "Expanded distribution throughout Goa markets, supplying leading five-star hotels, Indian Navy Goa, and Indian Army Goa.",
  },
  {
    year: "2010s",
    title: "Institutional Supply Network",
    description:
      "Strengthened institutional relationships and supply network. Transitioned to the Melbon brand identity with sustained operations.",
  },
  {
    year: "Ongoing",
    title: "Family Office Activities",
    description:
      "Parallel development of family investment portfolio — active management of equity, market, and strategic business interests.",
  },
  {
    year: "Formation",
    title: "Family Office Formation",
    description:
      "Establishment of Harbilas Beriwala Tenets LLP, formalising the family office structure for managing investments and finances.",
  },
  {
    year: "Present",
    title: "BERICO Research LLP",
    description:
      "Launch of BERICO Research LLP as the professional face of the family's investment, finance, and consulting activities.",
  },
];

function TimelineEntry({
  entry,
  index,
  isLast,
}: {
  entry: (typeof TIMELINE_ENTRIES)[0];
  index: number;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative grid grid-cols-[1fr_auto_1fr] gap-8 items-start">
      {/* Left content */}
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.05 * index, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`text-right ${isEven ? "block" : "invisible"}`}
        aria-hidden={!isEven}
      >
        <div className="inline-block bg-[var(--surface)] border border-[var(--border)] p-6 hover:border-[var(--accent)] transition-colors duration-300 group">
          <p className="font-heading text-2xl font-semibold text-[var(--accent)] mb-2">
            {entry.year}
          </p>
          <h3 className="font-heading text-lg font-semibold text-[var(--text-primary)] mb-2">
            {entry.title}
          </h3>
          <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed font-light max-w-xs ml-auto">
            {entry.description}
          </p>
        </div>
      </motion.div>

      {/* Center dot */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.05 * index + 0.1, ease: "backOut" }}
          className="w-4 h-4 rounded-full border-2 border-[var(--accent)] bg-[var(--background)] z-10 relative"
          aria-hidden="true"
        />
        {!isLast && (
          <div className="w-px flex-1 min-h-[60px] mt-2 bg-[var(--border)]" aria-hidden="true" />
        )}
      </div>

      {/* Right content */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.05 * index, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`text-left ${!isEven ? "block" : "invisible"}`}
        aria-hidden={isEven}
      >
        <div className="inline-block bg-[var(--surface)] border border-[var(--border)] p-6 hover:border-[var(--accent)] transition-colors duration-300 group">
          <p className="font-heading text-2xl font-semibold text-[var(--accent)] mb-2">
            {entry.year}
          </p>
          <h3 className="font-heading text-lg font-semibold text-[var(--text-primary)] mb-2">
            {entry.title}
          </h3>
          <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed font-light max-w-xs">
            {entry.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

// Mobile version
function MobileTimeline() {
  return (
    <div className="space-y-0">
      {TIMELINE_ENTRIES.map((entry, i) => {
        const isLast = i === TIMELINE_ENTRIES.length - 1;
        return (
          <MobileTimelineEntry key={entry.year + entry.title} entry={entry} index={i} isLast={isLast} />
        );
      })}
    </div>
  );
}

function MobileTimelineEntry({
  entry,
  index,
  isLast,
}: {
  entry: (typeof TIMELINE_ENTRIES)[0];
  index: number;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="flex gap-6">
      {/* Line */}
      <div className="flex flex-col items-center pt-1.5 shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.05 * index, ease: "backOut" }}
          className="w-3 h-3 rounded-full border-2 border-[var(--accent)] bg-[var(--background)] shrink-0"
          aria-hidden="true"
        />
        {!isLast && <div className="w-px flex-1 min-h-[40px] mt-2 bg-[var(--border)]" aria-hidden="true" />}
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.05 * index, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="pb-10"
      >
        <p className="font-heading text-xl font-semibold text-[var(--accent)] mb-1">
          {entry.year}
        </p>
        <h3 className="font-heading text-lg font-semibold text-[var(--text-primary)] mb-2">
          {entry.title}
        </h3>
        <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed font-light">
          {entry.description}
        </p>
      </motion.div>
    </div>
  );
}

export default function LegacyTimeline() {
  return (
    <section
      aria-labelledby="timeline-heading"
      className="section-padding bg-[var(--background)]"
    >
      <div className="container-content">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-12 bg-[var(--accent)]" />
            <span className="font-body text-xs tracking-[0.25em] uppercase text-[var(--accent)] font-medium">
              Our Legacy
            </span>
            <div className="h-px w-12 bg-[var(--accent)]" />
          </div>
          <h2
            id="timeline-heading"
            className="font-heading text-[clamp(1.875rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.01em] text-[var(--text-primary)]"
          >
            A heritage of enterprise
          </h2>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block space-y-8">
          {TIMELINE_ENTRIES.map((entry, i) => (
            <TimelineEntry
              key={entry.year + entry.title}
              entry={entry}
              index={i}
              isLast={i === TIMELINE_ENTRIES.length - 1}
            />
          ))}
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden">
          <MobileTimeline />
        </div>
      </div>
    </section>
  );
}
