import type { Metadata } from "next";
import Image from "next/image";
import MotionReveal from "@/components/motion-reveal";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Meet the leadership of BeriCo Research LLP — Manish Mohanlal Mittal, Pooja Manish Mittal, and Kritika Mittal — the family behind the firm.",
};

const LEADERS = [
  {
    name: "Manish Mohanlal Mittal",
    title: "Principal · Investments & Strategic Management",
    initials: "MM",
    photo: "/male.jpeg",
    photoPosition: "50% 20%",
    tagline: "30 years of enterprise — from commerce to capital",
    biography: [
      "Manish Mohanlal Mittal is a seasoned businessman with <span class=\"hl\">over 30 years of experience spanning manufacturing, trading, and investment management</span>. A Commerce Graduate from the <span class=\"hl\">prestigious H.R. College of Commerce and Economics, Mumbai University</span>, he combined rigorous academic training with early hands-on immersion in the traditional family business of cloth manufacturing and trading.",
      "In 1997, Manish founded Shail Foods &amp; Packaging Pvt Ltd in Goa — establishing a bread and bakery manufacturing unit initially under the Modern franchise, now operating under the Melbon brand. Over the years, the company has grown into a <span class=\"hl\">dependable supplier to institutional customers including leading five-star hotels and defence establishments</span>. Manish's operational acumen and business relationships have been central to the company's longevity and reputation.",
      "Recognising the importance of structured investment management, Manish also founded Harbilas Beriwala Tenets LLP — a family office vehicle through which the family manages its stock market investments and financial affairs. His philosophy is rooted in <span class=\"hl\">long-term value creation, disciplined capital allocation, and the preservation of family wealth across generations</span>.",
    ],
    achievements: [
      "Commerce Graduate, H.R. College of Commerce & Economics, Mumbai University",
      "Founder, Shail Foods & Packaging Pvt Ltd (est. 1997)",
      "Founder, Harbilas Beriwala Tenets LLP",
      "30+ years in business operations and strategic management",
      "Active investor in stock markets and family capital allocation",
    ],
  },
  {
    name: "Pooja Manish Mittal",
    title: "Partner · Business Operations & Family Office",
    initials: "PM",
    photo: "/female1.jpeg",
    photoPosition: "50% 20%",
    tagline: "Building enterprise, sustaining family — since 1997",
    biography: [
      "Pooja Manish Mittal is an accomplished businesswoman whose entrepreneurial journey began <span class=\"hl\">over two decades ago</span> when she co-founded Shail Foods &amp; Packaging Pvt Ltd in Goa. As Founder Promoter and Shareholder, she has been instrumental in building the company from inception into a trusted manufacturer and supplier in the food and bakery sector.",
      "Under Pooja's stewardship, Shail Foods has grown its operations significantly — supplying a wide range of bread and bakery products across Goa markets under the Melbon brand (formerly Modern). The company holds the distinction of being a <span class=\"hl\">dedicated supplier to leading five-star hotels, the Indian Navy Goa, and the Indian Army Goa</span>, reflecting the trust and reliability it has established over decades.",
      "Pooja is also a Partner in Harbilas Beriwala Tenets LLP, the family office entity through which the family manages its stock market investments and broader financial affairs. Her <span class=\"hl\">operational discipline, commercial instinct, and commitment to family values</span> are central to both the business and the family office's success.",
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
    name: "Kritika Mittal",
    title: "Partner · Design & Creative Strategy",
    initials: "KM",
    photo: "/female2.jpeg",
    photoPosition: "50% 20%",
    tagline: "Creating spaces that speak — from academy to studio",
    biography: [
      "Kritika Mittal is a graduate of Pearl Academy, New Delhi — <span class=\"hl\">one of India's premier institutions for design education</span> — where she developed a refined sensibility for space, material, and human experience. Her formal training laid the foundation for a career characterised by <span class=\"hl\">creative rigour and exceptional execution</span>.",
      "She began her professional journey at Essentia Environments, Gurgaon, where she <span class=\"hl\">quickly advanced from intern to Senior Executive Designer</span>, leading a <span class=\"hl\">team of 12 designers</span> across a portfolio of <span class=\"hl\">ultra-luxury residential and commercial projects</span>. Her work earned recognition for its thoughtful spatial planning, bespoke material specification, and meticulous project delivery.",
      "Driven by entrepreneurial ambition, Kritika co-founded Studio Unnamedd alongside her husband, Mr Rahul Nanda — a creative collaboration forged during their years at Pearl Academy. The studio has since completed <span class=\"hl\">numerous high-end projects across Delhi NCR, Mumbai, and Goa</span>, with multiple ongoing commissions across these markets.",
      "Kritika is also a Partner in Harbilas Beriwala Tenets LLP, the family office entity through which the family manages its stock market Investments and broader financial affairs.",
    ],
    achievements: [
      "Interior Design Graduate, Pearl Academy, New Delhi",
      "Senior Executive Designer, Essentia Environments — Team lead of 12",
      "Ultra-luxury residential and commercial project portfolio",
      "Co-founder, Studio Unnamedd",
      "Active project presence across Delhi NCR, Mumbai & Goa",
      "Partner, Harbilas Beriwala Tenets LLP",
    ],
  },
];

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="The family behind BeriCo Research LLP"
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
                      className="w-52 h-52 rounded-full overflow-hidden border-2 border-[var(--border)] mb-8"
                      aria-hidden="true"
                    >
                      {leader.photo ? (
                        <Image
                          src={leader.photo}
                          alt={leader.name}
                          width={208}
                          height={208}
                          className="w-full h-full object-cover"
                          style={{ objectPosition: leader.photoPosition }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: "var(--surface)" }}>
                          <span className="font-heading text-3xl font-semibold text-[var(--accent)]">
                            {leader.initials}
                          </span>
                        </div>
                      )}
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
                        <p
                          className="font-body text-base md:text-lg text-[var(--text-secondary)] leading-relaxed font-light"
                          dangerouslySetInnerHTML={{ __html: para }}
                        />
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
