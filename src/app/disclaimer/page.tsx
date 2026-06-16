import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import MotionReveal from "@/components/motion-reveal";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Important disclaimer from BERICO Research. We are a Family Investment, Finance & Consulting firm. We do not advise the general public or solicit investments.",
};

export default function DisclaimerPage() {
  return (
    <>
      <PageHero
        eyebrow="Disclaimer"
        title="Important notice"
        subtitle="Please read the following information carefully before using this website."
      />

      <section aria-labelledby="disclaimer-content" className="section-padding bg-[var(--background)]">
        <div className="container-content">
          <div className="max-w-3xl mx-auto">
            {/* Primary disclaimer */}
            <MotionReveal>
              <div className="border border-[var(--accent)] p-10 md:p-14 mb-16 relative">
                <div
                  className="absolute top-0 left-0 w-full h-1 bg-[var(--accent)]"
                  aria-hidden="true"
                />
                <div className="flex items-start gap-5">
                  <ShieldCheck
                    size={32}
                    strokeWidth={1.25}
                    className="text-[var(--accent)] shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <div>
                    <h2
                      id="disclaimer-content"
                      className="font-heading text-2xl font-semibold text-[var(--text-primary)] mb-4"
                    >
                      Nature of Business
                    </h2>
                    <p className="font-body text-lg text-[var(--text-primary)] leading-relaxed font-light">
                      We are a Family Investment, Finance &amp; Consulting firm.
                    </p>
                    <p className="font-body text-lg text-[var(--text-primary)] leading-relaxed font-light mt-3">
                      We do not advise the general public and do not solicit investments or
                      finance from the public.
                    </p>
                  </div>
                </div>
              </div>
            </MotionReveal>

            {/* Detailed clauses */}
            <MotionReveal delay={0.1}>
              <div className="flex flex-col gap-10">
                {[
                  {
                    heading: "Informational Purpose",
                    body: "This website is provided for informational purposes only. The content published on this website does not constitute investment advice, financial advice, legal advice, or any other form of professional advisory guidance. Nothing on this website should be construed as an offer, solicitation, or recommendation to buy or sell any financial instrument or security.",
                  },
                  {
                    heading: "Private Family Office",
                    body: "BERICO Research operates exclusively as a private family investment, finance and consulting entity. All activities are conducted on behalf of, and for the benefit of, the family and its associated entities. We do not offer services to, solicit funds from, or enter into investment relationships with third parties, members of the public, or outside investors.",
                  },
                  {
                    heading: "No Regulatory Solicitation",
                    body: "BERICO Research is not a registered investment advisor, broker-dealer, portfolio manager, or financial institution under any applicable regulatory framework. The information contained herein is not intended to form the basis of any investment or financial decision by any third party.",
                  },
                  {
                    heading: "Accuracy of Information",
                    body: "While we endeavour to ensure the accuracy and currency of information published on this website, BERICO Research makes no representations or warranties — express or implied — regarding the completeness, accuracy, or reliability of any information herein. We reserve the right to modify, update, or remove content at any time without notice.",
                  },
                  {
                    heading: "External Links",
                    body: "This website may contain links to third-party websites for reference purposes. BERICO Research does not endorse, control, or assume responsibility for the content or practices of any linked website.",
                  },
                  {
                    heading: "Contact",
                    body: "If you have any questions regarding this disclaimer or the nature of our operations, please contact us at bericoresearch@gmail.com.",
                  },
                ].map((clause, i) => (
                  <MotionReveal key={clause.heading} delay={0.06 * i}>
                    <div className="border-t border-[var(--border)] pt-8">
                      <h3 className="font-body text-xs uppercase tracking-[0.18em] font-semibold text-[var(--accent)] mb-4">
                        {clause.heading}
                      </h3>
                      <p className="font-body text-base text-[var(--text-secondary)] leading-relaxed font-light">
                        {clause.body}
                      </p>
                    </div>
                  </MotionReveal>
                ))}
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>
    </>
  );
}
