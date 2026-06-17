import MotionReveal from "@/components/motion-reveal";
import SectionEyebrow from "@/components/section-eyebrow";

export default function WhoWeAre() {
  const pillars = [
    {
      label: "Family Office",
      description: (
        <>
          Strategic management of family assets through disciplined,{" "}
          <span className="hl">long-horizon investment philosophy</span>.
        </>
      ),
    },
    {
      label: "Financial Stewardship",
      description: (
        <>
          Diligent oversight of family finances with a commitment to{" "}
          <span className="hl">preservation and responsible growth</span>.
        </>
      ),
    },
    {
      label: "Consulting Expertise",
      description: (
        <>
          Advisory services grounded in{" "}
          <span className="hl">decades of operational and business experience</span>.
        </>
      ),
    },
    {
      label: "Long-term Perspective",
      description: (
        <>
          Decisions made not for short-term gain, but for{" "}
          <span className="hl">generational value and enduring legacy</span>.
        </>
      ),
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
          <div className="section-intro">
            <MotionReveal delay={0}>
              <SectionEyebrow>Who We Are</SectionEyebrow>
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
              <p className="font-body text-base md:text-lg text-justify-block text-[var(--text-secondary)] leading-relaxed mb-6 font-light">
                BeriCo Research LLP is a family office, finance, and consulting firm with deep roots in business, industry, and entrepreneurial enterprise.
                Founded on principles of{" "}
                <span className="hl">prudence, integrity, and long-term thinking</span>, we manage family capital and provide
                strategic counsel with discretion and care.
              </p>
            </MotionReveal>

            <MotionReveal delay={0.3}>
              <p className="font-body text-base text-justify-block text-[var(--text-secondary)] leading-relaxed font-light">
                Our approach combines generational business acumen with{" "}
                <span className="hl">disciplined financial stewardship</span> — allowing us to serve as trusted
                advisors and stewards for family assets and strategic interests.
              </p>
            </MotionReveal>
          </div>

          {/* Right: pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[var(--border)]">
            {pillars.map((pillar, i) => (
              <MotionReveal key={pillar.label} delay={0.1 * i}>
                <div className="bg-[var(--surface)] p-6 sm:p-8 hover:bg-[var(--background)] transition-colors duration-300 group feature-card flex flex-col">
                  <div className="w-8 h-px bg-[var(--accent)] mb-6 group-hover:w-12 transition-all duration-500 mx-auto" />
                  <h3 className="font-heading text-lg font-semibold text-[var(--text-primary)] mb-3">
                    {pillar.label}
                  </h3>
                  <p className="font-body text-pillar-desc text-justify-block text-[var(--text-secondary)] font-light">
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
