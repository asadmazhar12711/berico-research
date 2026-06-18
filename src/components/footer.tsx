import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import ContactEmails from "@/components/contact-emails";
import {
  CONTACT_MAPS_URL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  CONTACT_WHATSAPP,
} from "@/lib/contact";

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
      <div className="container-content py-16 md:py-20 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand — centered on all breakpoints */}
          <div className="lg:col-span-2 flex flex-col items-center text-center">
            <Link href="/" className="inline-flex flex-col gap-2 mb-4 items-center">
              <Image
                src="/logo.png"
                alt="BeriCo Research LLP"
                width={260}
                height={92}
                className="h-24 w-auto max-w-[min(78vw,300px)] object-contain lg:h-[4.5rem] xl:h-20 lg:max-w-none"
              />
              <span className="font-body text-[0.6875rem] sm:text-xs tracking-[0.12em] sm:tracking-[0.2em] uppercase text-[var(--text-secondary)] font-medium whitespace-nowrap">
                Building Wealth for Generations
              </span>
            </Link>
            <p className="font-body text-base text-[var(--text-secondary)] leading-relaxed max-w-md mx-auto text-center mt-3">
              A private family office focused on{" "}
              <span className="hl">long-term value creation</span>, strategic advisory,
              and responsible capital stewardship.
            </p>
            <p className="font-body text-footer-disclaimer text-center text-[var(--text-secondary)] mt-6 italic max-w-md mx-auto">
              We are a Family Office, Finance &amp; Consulting firm. We do not advise the general public
              and do not solicit investments or finance from the public.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center footer-link-col">
            <h3 className="font-body text-sm font-semibold tracking-[0.18em] uppercase text-[var(--text-secondary)] mb-6">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3 items-center" role="list">
              {LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-body text-base text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center footer-link-col">
            <h3 className="font-body text-sm font-semibold tracking-[0.18em] uppercase text-[var(--text-secondary)] mb-6">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-6 md:gap-4 items-center w-full" role="list">
              <li className="flex mobile-icon-stack gap-3 max-w-xs md:max-w-none w-full">
                <MapPin size={16} strokeWidth={1.5} className="text-[var(--accent)] shrink-0" />
                <a
                  href={CONTACT_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-base text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300 not-italic leading-relaxed text-center lg:text-left"
                >
                  A-436, 4th Floor, VentureX,<br />
                  Sector-67, Landmark Cyber Park,<br />
                  Gurgaon, Haryana – 122102
                </a>
              </li>
              <li className="flex mobile-icon-stack gap-3 w-full">
                <MessageCircle size={16} strokeWidth={1.5} className="text-[var(--accent)] shrink-0" />
                <a
                  href={CONTACT_WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-base text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex mobile-icon-stack gap-3 w-full">
                <Phone size={16} strokeWidth={1.5} className="text-[var(--accent)] shrink-0" />
                <a
                  href={CONTACT_PHONE_TEL}
                  className="font-body text-base text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300"
                >
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex mobile-icon-stack gap-3 w-full">
                <Mail size={16} strokeWidth={1.5} className="text-[var(--accent)] shrink-0" />
                <ContactEmails
                  className="flex flex-col gap-1 items-center lg:items-start"
                  linkClassName="font-body text-base text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300"
                />
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--border)] flex flex-col items-center justify-center gap-4 text-center">
          <p className="font-body text-sm text-[var(--text-secondary)]">
            &copy; {year} BeriCo Research LLP. All rights reserved.
          </p>
          <p className="font-body text-sm text-[var(--text-secondary)]">
            Family Office · Finance · Consulting
          </p>
        </div>
      </div>
    </footer>
  );
}
