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
      className="relative pt-[var(--site-header-height,10.5rem)] pb-16 lg:pt-36 lg:pb-28 bg-[var(--background)] border-b border-[var(--border)] overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden [contain:paint]"
        aria-hidden="true"
      >
        <div className="page-grid-pattern absolute inset-0 text-[var(--text-primary)]" />
        <div
          className="absolute top-0 right-0 h-[640px] w-[640px] rounded-full opacity-[0.07]"
          style={{
            background: "radial-gradient(circle, var(--accent) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="container-content relative z-10">
        <div className="page-hero-intro section-intro max-w-3xl mx-auto">
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
          <h1 className="font-heading text-[clamp(2rem,5vw,4rem)] font-semibold leading-tight tracking-[-0.02em] text-[var(--text-primary)] mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="font-body text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-xl mx-auto font-light">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
