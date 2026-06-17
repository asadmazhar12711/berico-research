import Link from "next/link";
import type { Metadata } from "next";
import SectionEyebrow from "@/components/section-eyebrow";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--background)] px-6 text-center">
      <SectionEyebrow symmetric className="justify-center mb-8">
        404
      </SectionEyebrow>
      <h1 className="font-heading text-[clamp(2rem,5vw,4rem)] font-semibold text-[var(--text-primary)] mb-4 leading-tight">
        Page not found
      </h1>
      <p className="font-body text-base text-[var(--text-secondary)] max-w-sm mb-10 font-light leading-relaxed">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center px-8 py-4 bg-[var(--accent)] text-white font-body text-sm font-medium tracking-wide hover:opacity-90 transition-opacity duration-300"
      >
        Return Home
      </Link>
    </div>
  );
}
