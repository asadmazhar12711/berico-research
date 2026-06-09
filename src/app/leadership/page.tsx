import type { Metadata } from "next";
import MotionReveal from "@/components/motion-reveal";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Meet the leadership of BeriCo Research — Kritika Mittal, Pooja Manish Mittal, and Manish Mohanlal Mittal — the family behind the firm.",
};

const LEADERS = [
  {
    name: "Kritika Mittal",
    title: "Partner · Design & Creative Strategy",
    initials: "KM",
    tagline: "Creating spaces that speak — from academy to studio",
    biography: [
      "Kritika Mittal is a graduate of Pearl Academy, New Delhi — one of India's premier institutions for design education — where she developed a refined sensibility for space, material, and human experience. Her formal training laid the foundation for a career characterised by creative rigour and exceptional execution.",
      "She began her professional journey at Essentia Environments, Gurgaon, where she quickly advanced from intern to Senior Executive Designer, leading a team of 12 designers across a portfolio of ultra-luxury residential and commercial projects. Her work earned recognition for its thoughtful spatial planning, bespoke material specification, and meticulous project delivery.",
      "Driven by entrepreneurial ambition, Kritika co-founded Studio Unnamedd alongside her husband, Mr Rahul Nanda — a creative collaboration forged during their years at Pearl Academy. The studio has since completed numerous high-end projects across Delhi NCR, Mumbai, and Goa, with multiple ongoing commissions across these markets.",
    ],
    achievements: [
      "Interior Design Graduate, Pearl Academy, New Delhi",
      "Senior Executive Designer, Essentia Environments — Team lead of 12",
      "Ultra-luxury residential and commercial project portfolio",
      "Co-founder, Studio Unnamedd",
      "Active project presence across Delhi NCR, Mumbai & Goa",
    ],
  },
  {
    name: "Pooja Manish Mittal",
    title: "Partner · Business Operations & Family Office",
    initials: "PM",
    tagline: "Building enterprise, sustaining family — since 1997",
    biography: [
      "Pooja Manish Mittal is an accomplished businesswoman whose entrepreneurial journey began over two decades ago when she co-founded Shail Foods & Packaging Pvt Ltd in Goa. As Founder Promoter and Shareholder, she has been instrumental in building the company from inception into a trusted manufacturer and supplier in the food and bakery sector.",
      "Under Pooja's stewardship, Shail Foods has grown its operations significantly — supplying a wide range of bread and bakery products across Goa markets under the Melbon brand (formerly Modern). The company holds the distinction of being a dedicated supplier to leading five-star hotels, the Indian Navy Goa, and the Indian Army Goa, reflecting the trust and reliability it has established over decades.",
      "Pooja is also a Partner in Harbilas Beriwala Tenets LLP, the family office entity through which the family manages its stock market investments and broader financial affairs. Her operational discipline, commercial instinct, and commitment to family values are central to both the business and the family office's success.",
    ],
    achievements: [
      "Founder Promoter & Shareholder, Shail Foods & Packaging Pvt Ltd (est. 1997)",
      "Melbon brand — bread and bakery supply across Goa",
      "Institutional supplier to leading five-star hotels",
      "Dedicated supplier to Indian Navy Goa & Indian Army Goa",
      "Partner, Harbilas Beriwala Tenets LLP",
    ],
  },
  {
    name: "Manish Mohanlal Mittal",
    title: "Principal · Investments & Strategic Management",
    initials: "MM",
    tagline: "30 years of enterprise — from commerce to capital",
    biography: [
      "Manish Mohanlal Mittal is a seasoned businessman with over 30 years of experience spanning manufacturing, trading, and investment management. A Commerce Graduate from the prestigious H.R. College of Commerce and Economics, Mumbai University, he combined rigorous academic training with early hands-on immersion in the traditional family business of cloth manufacturing and trading.",
      "In 1997, Manish founded Shail Foods & Packaging Pvt Ltd in Goa — establishing a bread and bakery manufacturing unit initially under the Modern franchise, now operating under the Melbon brand. Over the years, the company has grown into a dependable supplier to institutional customers including leading five-star hotels and defence establishments. Manish's operational acumen and business relationships have been central to the company's longevity and reputation.",
      "Recognising the importance of structured investment management, Manish also founded Harbilas Beriwala Tenets LLP — a family office vehicle through which the family manages its stock market investments and financial affairs. His philosophy is rooted in long-term value creation, disciplined capital allocation, and the preservation of family wealth across generations.",
    ],
    achievements: [
      "Commerce Graduate, H.R. College of Commerce & Economics, Mumbai University",
      "Founder, Shail Foods & Packaging Pvt Ltd (est. 1997)",
      "Founder, Harbilas Beriwala Tenets LLP",
      "30+ years in business operations and strategic management",
      "Active investor in stock markets and family capital allocation",
    ],
  },
];

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="The family behind BeriCo Research"
        subtitle="Three principals. Decades of combined experience. A shared commitment to building lasting value."
      />

      {/* Leaders */}
      <section aria-labelledby="leaders-heading" className="section-padding bg-[var(--background)]">
        <div className="container-content">
          <h2 id="leaders-heading" className="sr-only">Our Leadership</h2>
          <div className="space-y-32">
            {LEADERS.map((leader, li) => (
              <MotionReveal key={leader.name} delay={0}>
                <article className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
                  {/* Left: profile */}
                  <div>
                    {/* Avatar */}
                    <div
                      className="w-32 h-32 rounded-full border border-[var(--border)] flex items-center justify-center mb-8"
                      style={{ backgroundColor: "var(--surface)" }}
                      aria-hidden="true"
                    >
                      <span className="font-heading text-3xl font-semibold text-[var(--accent)]">
                        {leader.initials}
                      </span>
                    </div>

                    {/* Name */}
                    <h3 className="font-heading text-3xl font-semibold text-[var(--text-primary)] mb-2">
                      {leader.name}
                    </h3>
                    <p className="font-body text-xs uppercase tracking-[0.18em] text-[var(--accent)] font-medium mb-4">
                      {leader.title}
                    </p>
                    <p className="font-body text-sm text-[var(--text-secondary)] italic font-light leading-relaxed mb-8">
                      &ldquo;{leader.tagline}&rdquo;
                    </p>

                    <div className="h-px bg-[var(--border)] mb-8" />

                    {/* Achievements */}
                    <div>
                      <h4 className="font-body text-xs uppercase tracking-[0.18em] font-semibold text-[var(--text-secondary)] mb-5">
                        Key Highlights
                      </h4>
                      <ul className="flex flex-col gap-3" role="list">
                        {leader.achievements.map((ach) => (
                          <li key={ach} className="flex items-start gap-3">
                            <div className="w-px h-4 bg-[var(--accent)] shrink-0 mt-1" aria-hidden="true" />
                            <span className="font-body text-xs text-[var(--text-secondary)] leading-relaxed">
                              {ach}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right: biography */}
                  <div className="flex flex-col gap-8">
                    {leader.biography.map((para, pi) => (
                      <MotionReveal key={pi} delay={0.08 * pi}>
                        <p className="font-body text-base md:text-lg text-[var(--text-secondary)] leading-relaxed font-light">
                          {para}
                        </p>
                      </MotionReveal>
                    ))}
                  </div>
                </article>

                {li < LEADERS.length - 1 && (
                  <div className="h-px bg-[var(--border)] mt-20" aria-hidden="true" />
                )}
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
