import type { Metadata } from "next";
import MotionReveal from "@/components/motion-reveal";
import PageHero from "@/components/page-hero";
import { TrendingUp, BarChart2, Briefcase, Building2, Shield, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
      "BERICO Research LLP offers family office management, financial consulting, strategic advisory, business consulting, family office management, and investment stewardship.",
};

const SERVICES = [
  {
    icon: TrendingUp,
    title: "Family Offices",
    description:
      "We manage the family's investment portfolio with a disciplined, long-horizon philosophy. Our approach focuses on capital preservation, consistent growth, and strategic allocation across diversified asset classes — including equities, fixed income, and carefully selected alternatives.",
    points: [
      "Portfolio strategy and asset allocation",
      "Stock market investment management",
      "Long-term capital deployment",
      "Risk management and portfolio oversight",
    ],
  },
  {
    icon: BarChart2,
    title: "Financial Consulting",
    description:
      "Drawing on decades of hands-on business and financial management, we provide informed financial guidance that is grounded in real-world experience. Our consulting engagements are characterised by clarity, candour, and a focus on sustainable outcomes.",
    points: [
      "Financial planning and forecasting",
      "Cash flow and treasury management",
      "Business financial structure advisory",
      "Investment due diligence support",
    ],
  },
  {
    icon: Briefcase,
    title: "Strategic Advisory",
    description:
      "Our strategic advisory services draw on over 30 years of business building, operational management, and sector-specific expertise. We provide counsel that is rooted in practicality and oriented toward lasting results.",
    points: [
      "Business strategy and growth advisory",
      "Operational improvement",
      "Partnership and enterprise structuring",
      "Family governance and succession planning",
    ],
  },
  {
    icon: Search,
    title: "Business Consulting",
    description:
      "We assist family-owned businesses and closely held enterprises with the operational and structural challenges unique to their context. Our perspective is informed by our own founding and management of successful business ventures.",
    points: [
      "Business model review and optimisation",
      "Operational systems and processes",
      "Vendor and supply chain strategy",
      "Market positioning and growth planning",
    ],
  },
  {
    icon: Building2,
    title: "Family Office Management",
    description:
      "BERICO Research LLP provides comprehensive family office management services — coordinating investment activities, financial reporting, compliance oversight, and long-term legacy planning in a structured, professional framework.",
    points: [
      "Family office governance and structure",
      "Consolidated financial reporting",
      "Regulatory and compliance oversight",
      "Multi-generational wealth planning",
    ],
  },
  {
    icon: Shield,
    title: "Investment Stewardship",
    description:
      "Responsible stewardship of capital is central to our philosophy. We go beyond simple returns to consider the long-term sustainability, quality, and integrity of every investment decision — ensuring that capital is deployed with care and conviction.",
    points: [
      "Responsible investment principles",
      "ESG-aligned investment consideration",
      "Capital preservation frameworks",
      "Long-term portfolio monitoring",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="What we offer"
        subtitle="A focused range of family office, financial, and advisory services — delivered with the care and discretion of a private family office."
      />

      {/* Services Grid */}
      <section aria-labelledby="services-heading" className="section-padding bg-[var(--background)]">
        <div className="container-content">
          <h2 id="services-heading" className="sr-only">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              return (
                <MotionReveal key={service.title} delay={0.07 * (i % 3)}>
                  <article className="group bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-500 p-10 flex flex-col h-full">
                    {/* Icon */}
                    <div
                      className="w-14 h-14 border border-[var(--border)] group-hover:border-[var(--accent)] flex items-center justify-center mb-8 transition-all duration-500"
                      aria-hidden="true"
                    >
                      <Icon
                        size={22}
                        strokeWidth={1.25}
                        className="text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors duration-500"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-xl font-semibold text-[var(--text-primary)] mb-4">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed font-light mb-8">
                      {service.description}
                    </p>

                    {/* Points */}
                    <ul className="flex flex-col gap-3 mt-auto" role="list">
                      {service.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-3">
                          <div className="w-px h-4 bg-[var(--accent)] shrink-0 mt-1" aria-hidden="true" />
                          <span className="font-body text-xs text-[var(--text-secondary)] leading-relaxed">
                            {pt}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Disclaimer note */}
      <section className="py-12 bg-[var(--surface)] border-t border-[var(--border)]">
        <div className="container-content">
          <MotionReveal>
            <div className="max-w-2xl mx-auto text-center">
              <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed italic">
                BERICO Research LLP is a Family Office, Finance &amp; Consulting firm.
                We do not advise the general public and do not solicit investments or finance from the public.
                All services are conducted on a private, family basis.
              </p>
            </div>
          </MotionReveal>
        </div>
      </section>
    </>
  );
}
