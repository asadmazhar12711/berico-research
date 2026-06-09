import MotionReveal from "@/components/motion-reveal";

export default function WhoWeAre() {
  const pillars = [
    {
      label: "Family Investment",
      description:
        "Strategic management of family assets through disciplined, long-horizon investment philosophy.",
    },
    {
      label: "Financial Stewardship",
      description:
        "Diligent oversight of family finances with a commitment to preservation and responsible growth.",
    },
    {
      label: "Consulting Expertise",
      description:
        "Advisory services grounded in decades of operational and business experience.",
    },
    {
      label: "Long-term Perspective",
      description:
        "Decisions made not for short-term gain, but for generational value and enduring legacy.",
    },
  ];

  return (
    <section
      aria-labelledby="who-we-are-heading"
      className="section-padding bg-[var(--surface)]"
    >
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: text */}
          <div>
            <MotionReveal delay={0}>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-[var(--accent)]" />
                <span className="font-body text-xs tracking-[0.25em] uppercase text-[var(--accent)] font-medium">
                  Who We Are
                </span>
              </div>
            </MotionReveal>

            <MotionReveal delay={0.1}>
              <h2
                id="who-we-are-heading"
                className="font-heading text-[clamp(1.875rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.01em] text-[var(--text-primary)] mb-6"
              >
                A legacy of integrity,
                <br />
                built over generations
              </h2>
            </MotionReveal>

            <MotionReveal delay={0.2}>
              <p className="font-body text-base md:text-lg text-[var(--text-secondary)] leading-relaxed mb-6 font-light">
                BeriCo Research is a family investment, finance, and consulting firm with deep roots
                in business, industry, and entrepreneurial enterprise. Founded on principles of
                prudence, integrity, and long-term thinking, we manage family capital and provide
                strategic counsel with discretion and care.
              </p>
            </MotionReveal>

            <MotionReveal delay={0.3}>
              <p className="font-body text-base text-[var(--text-secondary)] leading-relaxed font-light">
                Our approach combines generational business acumen with disciplined financial
                stewardship — allowing us to serve as trusted advisors and stewards for family
                assets and strategic interests.
              </p>
            </MotionReveal>
          </div>

          {/* Right: pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[var(--border)]">
            {pillars.map((pillar, i) => (
              <MotionReveal key={pillar.label} delay={0.1 * i}>
                <div className="bg-[var(--surface)] p-8 hover:bg-[var(--background)] transition-colors duration-300 group">
                  <div className="w-8 h-px bg-[var(--accent)] mb-6 group-hover:w-12 transition-all duration-500" />
                  <h3 className="font-heading text-lg font-semibold text-[var(--text-primary)] mb-3">
                    {pillar.label}
                  </h3>
                  <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
