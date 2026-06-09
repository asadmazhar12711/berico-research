import MotionReveal from "@/components/motion-reveal";
import { TrendingUp, BarChart2, Briefcase, Building2 } from "lucide-react";

const AREAS = [
  {
    icon: TrendingUp,
    label: "Investments",
    description:
      "Strategic allocation of family capital across equity, fixed income, and alternative assets — guided by long-term wealth preservation and growth objectives.",
  },
  {
    icon: BarChart2,
    label: "Finance",
    description:
      "Disciplined financial planning, reporting, and oversight ensuring the integrity and sustainability of family financial resources.",
  },
  {
    icon: Briefcase,
    label: "Consulting",
    description:
      "Seasoned strategic advisory drawing on decades of business operation, entrepreneurial success, and sector-specific expertise.",
  },
  {
    icon: Building2,
    label: "Family Office Management",
    description:
      "Holistic governance and management of family office activities — coordinating investments, advisory, compliance, and family legacy planning.",
  },
];

export default function FocusAreas() {
  return (
    <section
      aria-labelledby="focus-areas-heading"
      className="section-padding bg-[var(--surface)]"
    >
      <div className="container-content">
        {/* Header */}
        <MotionReveal className="max-w-xl mb-16">
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-12 bg-[var(--accent)]" />
            <span className="font-body text-xs tracking-[0.25em] uppercase text-[var(--accent)] font-medium">
              Focus Areas
            </span>
          </div>
          <h2
            id="focus-areas-heading"
            className="font-heading text-[clamp(1.875rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.01em] text-[var(--text-primary)]"
          >
            What we do,
            <br />
            and how we do it
          </h2>
        </MotionReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {AREAS.map((area, i) => {
            const Icon = area.icon;
            return (
              <MotionReveal key={area.label} delay={0.1 * i}>
                <div className="group flex flex-col gap-6 p-8 border border-[var(--border)] hover:border-[var(--accent)] bg-[var(--surface)] hover:bg-[var(--background)] transition-all duration-500 h-full">
                  <div
                    className="w-12 h-12 border border-[var(--border)] group-hover:border-[var(--accent)] flex items-center justify-center transition-all duration-500"
                    aria-hidden="true"
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.25}
                      className="text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors duration-500"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-[var(--text-primary)] mb-3">
                      {area.label}
                    </h3>
                    <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed font-light">
                      {area.description}
                    </p>
                  </div>
                </div>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
