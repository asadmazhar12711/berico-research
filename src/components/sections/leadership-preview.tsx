import Link from "next/link";
import Image from "next/image";
import MotionReveal from "@/components/motion-reveal";
import SectionEyebrow from "@/components/section-eyebrow";
import { ArrowRight } from "lucide-react";

const LEADERS = [
  {
    name: "Manish Mohanlal Mittal",
    title: "Principal · Investments & Strategic Management",
    bio: (
      <>
        Commerce Graduate from H.R. College, University of Mumbai with{" "}
        <span className="hl">30+ years in business</span>. Founder of Shail Foods &amp; Packaging Pvt Ltd and Harbilas Beriwala Tenets LLP. Expert in operations and strategic financial management.
      </>
    ),
    initials: "MM",
    photo: "/male.jpeg",
    photoPosition: "50% 20%",
  },
  {
    name: "Pooja Manish Mittal",
    title: "Partner · Business Operations & Family Office",
    bio: (
      <>
        Founder Promoter &amp; Shareholder in Shail Foods &amp; Packaging Pvt Ltd since 1997. Partner at Harbilas Beriwala Tenets LLP. Managing{" "}
        <span className="hl">family investments and finances</span> across key institutional accounts.
      </>
    ),
    initials: "PM",
    photo: "/female1.jpeg",
    photoPosition: "50% 20%",
  },
  {
    name: "Kritika Mittal",
    title: "Partner · Design & Creative Strategy",
    bio: (
      <>
        Interior Designer graduate from Pearl Academy, New Delhi. Led a team of 12 designers at Essentia Environments and completed{" "}
        <span className="hl">ultra-luxury projects</span> across Delhi NCR, Mumbai, and Goa. Co-founder of Studio Unnamedd.
      </>
    ),
    initials: "KM",
    photo: "/female2.jpeg",
    photoPosition: "50% 20%",
  },
];

export default function LeadershipPreview() {
  return (
    <section
      aria-labelledby="leadership-preview-heading"
      className="section-padding bg-[var(--background)]"
    >
      <div className="container-content">
        {/* Header */}
        <MotionReveal className="flex flex-col items-center text-center gap-6 mb-16">
          <div className="section-intro">
            <SectionEyebrow>Leadership</SectionEyebrow>
            <h2
              id="leadership-preview-heading"
              className="font-heading text-[clamp(1.875rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.01em] text-[var(--text-primary)]"
            >
              The people behind
              <br />
              BeriCo Research LLP
            </h2>
          </div>
          <Link
            href="/leadership"
            className="inline-flex items-center gap-2 font-body text-sm font-medium text-[var(--accent)] hover:gap-3 transition-all duration-300 shrink-0"
            aria-label="View full leadership profiles"
          >
            Full Profiles
            <ArrowRight size={16} strokeWidth={1.5} />
          </Link>
        </MotionReveal>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LEADERS.map((leader, i) => (
            <MotionReveal key={leader.name} delay={0.1 * i}>
              <article className="group relative bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-500 p-10 flex flex-col feature-card">
                <div
                  className="w-36 h-36 rounded-full overflow-hidden mb-8 border-2 border-[var(--border)] group-hover:border-[var(--accent)] transition-colors duration-500 shrink-0"
                  aria-hidden="true"
                >
                  {leader.photo ? (
                    <Image
                      src={leader.photo}
                      alt={leader.name}
                      width={144}
                      height={144}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: leader.photoPosition }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: "var(--background)" }}>
                      <span className="font-heading text-xl font-semibold text-[var(--accent)]">
                        {leader.initials}
                      </span>
                    </div>
                  )}
                </div>

                {/* Name & title */}
                <div className="mb-6 w-full text-center card-head">
                  <h3 className="font-heading text-xl font-semibold text-[var(--text-primary)] mb-1">
                    {leader.name}
                  </h3>
                  <p className="font-body text-xs tracking-wide text-[var(--accent)] uppercase font-medium text-center">
                    {leader.title}
                  </p>
                </div>

                {/* Bio */}
                <p className="font-body text-sm leading-relaxed text-justify-block text-[var(--text-secondary)] font-light text-balance">
                  {leader.bio}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-[var(--accent)] group-hover:w-full transition-all duration-700" aria-hidden="true" />
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
