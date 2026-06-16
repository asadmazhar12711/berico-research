import type { Metadata } from "next";
import Image from "next/image";
import MotionReveal from "@/components/motion-reveal";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about BERICO Research LLP — a family office founded on decades of business, industry, and entrepreneurial enterprise. Meet the Mittal family.",
};

const TEAM = [
  {
    name: "Manish Mohanlal Mittal",
    title: "Principal · Investments & Strategic Management",
    initials: "MM",
    photo: "/male.jpeg",
    photoPosition: "50% 20%",
    sections: [
      {
        heading: "Education & Early Experience",
        body: "Manish Mohanlal Mittal is a Commerce Graduate from the prestigious H.R. College of Commerce and Economics, Mumbai University. During his formative years, he was actively involved in the traditional family business of cloth manufacturing and trading, gaining foundational experience in commerce and operations.",
      },
      {
        heading: "Shail Foods & Harbilas Beriwala Tenets LLP",
        body: "Manish founded Shail Foods & Packaging Pvt Ltd in Goa — a bread and bakery unit initially under the Modern franchise, now operating under the proprietary Melbon brand. The company supplies Goa markets, five-star hotels, and defence institutions. He also founded Harbilas Beriwala Tenets LLP to manage family investments and stock market activities.",
      },
      {
        heading: "Strategic Leadership",
        body: "With over 30 years of business experience spanning manufacturing, trading, and investment management, Manish brings deep operational knowledge and strategic financial insight to BERICO Research LLP. His long-term perspective informs the family's capital allocation and advisory philosophy.",
      },
    ],
  },
  {
    name: "Pooja Manish Mittal",
    title: "Partner · Business Operations & Family Office",
    initials: "PM",
    photo: "/female1.jpeg",
    photoPosition: "50% 20%",
    sections: [
      {
        heading: "Entrepreneurship & Business",
        body: "Pooja Manish Mittal is a devoted businesswoman and entrepreneur with a distinguished record of building and sustaining family enterprise. She is a Founder Promoter and Shareholder in Shail Foods & Packaging Pvt Ltd, a family-owned company established in Goa in 1997.",
      },
      {
        heading: "Shail Foods & Packaging",
        body: "Under Pooja's stewardship, Shail Foods has grown from a local bread and bakery manufacturer — erstwhile operating under the Modern brand, now the Melbon brand — to supply products across Goa markets, leading five-star hotels, and as a dedicated supplier to the Indian Navy Goa and Indian Army Goa.",
      },
      {
        heading: "Family Office",
        body: "Pooja is also a Partner in Harbilas Beriwala Tenets LLP, the family office responsible for managing stock market investments and overall family finances. Her operational discipline and financial acumen are central to the family's investment activities.",
      },
    ],
  },
  {
    name: "Kritika Mittal",
    title: "Partner · Design & Creative Strategy",
    initials: "KM",
    photo: "/female2.jpeg",
    photoPosition: "50% 20%",
    sections: [
      {
        heading: "Education & Early Career",
        body: "Kritika Mittal is an Interior Design graduate from Pearl Academy, New Delhi — one of India's foremost design institutions. She began her professional journey as an intern with Essentia Environments, Gurgaon, where her talent and dedication were quickly recognised.",
      },
      {
        heading: "Professional Growth",
        body: "Promoted to lead a team of 12 designers as Senior Executive Designer, Kritika worked on a portfolio of ultra-luxury residential and commercial projects. Her work is defined by meticulous attention to detail, spatial intelligence, and a commitment to client-centric design.",
      },
      {
        heading: "Studio Unnamedd",
        body: "Kritika co-founded Studio Unnamedd with her husband Mr Rahul Nanda, with whom she shares a long-standing creative and professional bond. The studio has completed numerous projects across Delhi NCR, Mumbai, and Goa, with several ongoing commissions in New Delhi, Gurgaon, Mumbai, and Goa.",
      },
      {
        heading: "Harbilas Beriwala Tenets LLP",
        body: "Kritika is also a Partner in Harbilas Beriwala Tenets LLP, the family office entity through which the family manages its stock market Investments and broader financial affairs.",
      },
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A family built on enterprise, integrity & long-term thinking"
        subtitle="BERICO Research LLP is the investment, finance, and consulting arm of a family with deep roots in Indian business and industry."
      />

      {/* Family intro */}
      <section className="section-padding bg-[var(--surface)]">
        <div className="container-content">
          <div className="max-w-3xl mx-auto text-center">
            <MotionReveal>
              <div className="divider mx-auto mb-8" />
              <p className="font-body text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed font-light">
                Founded by the Mittal family, BERICO Research LLP draws on decades of entrepreneurial
                experience in food manufacturing, business operations, and strategic financial management.
                Our approach is grounded in the belief that prudent stewardship, disciplined investing,
                and thoughtful advisory create enduring value across generations.
              </p>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* Team bios */}
      <section aria-labelledby="team-heading" className="section-padding bg-[var(--background)]">
        <div className="container-content">
          <MotionReveal className="mb-20">
            <div className="flex items-center gap-4 mb-5">
              <div className="h-px w-12 bg-[var(--accent)]" />
              <span className="font-body text-xs tracking-[0.25em] uppercase text-[var(--accent)] font-medium">
                The Family
              </span>
            </div>
            <h2
              id="team-heading"
              className="font-heading text-[clamp(1.875rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.01em] text-[var(--text-primary)]"
            >
              The people of BERICO Research LLP
            </h2>
          </MotionReveal>

          <div className="space-y-24">
            {TEAM.map((member, mi) => (
              <MotionReveal key={member.name} delay={0.05 * mi}>
                <article className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-20">
                  {/* Sidebar */}
                  <div className="flex flex-col items-start">
                    <div
                      className="w-44 h-44 rounded-full overflow-hidden border-2 border-[var(--border)] mb-6"
                      aria-hidden="true"
                    >
                      {member.photo ? (
                        <Image
                          src={member.photo}
                          alt={member.name}
                          width={176}
                          height={176}
                          className="w-full h-full object-cover"
                          style={{ objectPosition: member.photoPosition }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: "var(--surface)" }}>
                          <span className="font-heading text-2xl font-semibold text-[var(--accent)]">
                            {member.initials}
                          </span>
                        </div>
                      )}
                    </div>
                    <h3 className="font-heading text-2xl font-semibold text-[var(--text-primary)] mb-2">
                      {member.name}
                    </h3>
                    <p className="font-body text-xs uppercase tracking-[0.15em] text-[var(--accent)] font-medium">
                      {member.title}
                    </p>
                    <div className="h-px w-12 bg-[var(--accent)] mt-6" />
                  </div>

                  {/* Content */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {member.sections.map((section, si) => (
                      <MotionReveal key={section.heading} delay={0.08 * si} className={si === 2 ? "md:col-span-2" : ""}>
                        <div className="border-t border-[var(--border)] pt-6">
                          <h4 className="font-body text-xs uppercase tracking-[0.18em] font-semibold text-[var(--text-secondary)] mb-4">
                            {section.heading}
                          </h4>
                          <p className="font-body text-base text-[var(--text-secondary)] leading-relaxed font-light">
                            {section.body}
                          </p>
                        </div>
                      </MotionReveal>
                    ))}
                  </div>
                </article>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section aria-labelledby="values-heading" className="section-padding bg-[var(--surface)]">
        <div className="container-content">
          <MotionReveal className="max-w-xl mb-16">
            <div className="flex items-center gap-4 mb-5">
              <div className="h-px w-12 bg-[var(--accent)]" />
              <span className="font-body text-xs tracking-[0.25em] uppercase text-[var(--accent)] font-medium">
                Our Values
              </span>
            </div>
            <h2
              id="values-heading"
              className="font-heading text-[clamp(1.875rem,4vw,3rem)] font-semibold leading-tight text-[var(--text-primary)]"
            >
              Principles we live by
            </h2>
          </MotionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Integrity", desc: "Every decision is guided by honesty, transparency, and ethical conduct." },
              { title: "Prudence", desc: "Careful, considered judgement applied to every aspect of financial stewardship." },
              { title: "Legacy", desc: "Building for future generations, not short-term metrics." },
              { title: "Discretion", desc: "Private, confident handling of all family and advisory matters." },
              { title: "Excellence", desc: "A commitment to the highest standards in everything we do." },
              { title: "Stewardship", desc: "Responsible custodianship of capital, relationships, and reputation." },
            ].map((v, i) => (
              <MotionReveal key={v.title} delay={0.07 * i}>
                <div className="border border-[var(--border)] p-8 hover:border-[var(--accent)] transition-colors duration-300 group">
                  <div className="w-8 h-px bg-[var(--accent)] mb-5 group-hover:w-16 transition-all duration-500" />
                  <h3 className="font-heading text-xl font-semibold text-[var(--text-primary)] mb-3">
                    {v.title}
                  </h3>
                  <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed font-light">
                    {v.desc}
                  </p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
