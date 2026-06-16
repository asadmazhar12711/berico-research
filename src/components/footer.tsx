import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/leadership", label: "Leadership" },
  { href: "/contact", label: "Contact" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer role="contentinfo" className="bg-[var(--surface)] border-t border-[var(--border)]">
      <div className="container-content py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex flex-col items-start mb-4">
              <div className="relative w-fit">
                <Image
                  src="/logo.png"
                  alt="BERICO Research"
                  width={160}
                  height={56}
                  className="h-14 w-auto object-contain"
                />
                <span className="block font-body text-[12px] font-semibold tracking-[0.22em] uppercase mt-0 w-[82%] mx-auto text-center" style={{ color: "#629edd" }}>
                  Research
                </span>
              </div>
            </Link>
            <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed max-w-xs mt-3">
              A private family office focused on long-term value creation, strategic advisory,
              and responsible capital stewardship.
            </p>
            <p className="font-body text-xs text-[var(--text-secondary)] mt-6 leading-relaxed italic max-w-xs">
              We are a Family Investment, Finance &amp; Consulting firm. We do not advise the general public
              and do not solicit investments or finance from the public.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-body text-xs font-semibold tracking-[0.18em] uppercase text-[var(--text-secondary)] mb-6">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-body text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-body text-xs font-semibold tracking-[0.18em] uppercase text-[var(--text-secondary)] mb-6">
              Contact
            </h3>
            <ul className="flex flex-col gap-4" role="list">
              <li className="flex items-start gap-3">
                <MapPin size={14} strokeWidth={1.5} className="text-[var(--accent)] mt-0.5 shrink-0" />
                <address className="font-body text-sm text-[var(--text-secondary)] not-italic leading-relaxed">
                  A-436, 4th Floor, VentureX,<br />
                  Sector-67, Landmark Cyber Park,<br />
                  Gurgaon, Haryana – 122102
                </address>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} strokeWidth={1.5} className="text-[var(--accent)] shrink-0" />
                <a
                  href="tel:+919650510232"
                  className="font-body text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300"
                >
                  +91 96505 10232
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} strokeWidth={1.5} className="text-[var(--accent)] shrink-0" />
                <a
                  href="mailto:bericoresearch@gmail.com"
                  className="font-body text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300 break-all"
                >
                  bericoresearch@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-[var(--text-secondary)]">
            &copy; {year} BERICO Research. All rights reserved.
          </p>
          <p className="font-body text-xs text-[var(--text-secondary)]">
            Family Investment · Finance · Consulting
          </p>
        </div>
      </div>
    </footer>
  );
}
