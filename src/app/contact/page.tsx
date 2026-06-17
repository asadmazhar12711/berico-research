import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import ContactForm from "@/components/contact-form";
import MotionReveal from "@/components/motion-reveal";
import MapEmbed from "@/components/map-embed";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import {
  CONTACT_EMAIL,
  CONTACT_MAILTO,
  CONTACT_MAPS_URL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  CONTACT_WHATSAPP,
} from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact BeriCo Research LLP — a family office, finance and consulting firm in Gurgaon. Reach us by phone, email, or visit our office at VentureX, Sector-67.",
};

const CONTACT_ITEMS = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Message us on WhatsApp",
    href: CONTACT_WHATSAPP,
    external: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: CONTACT_PHONE_DISPLAY,
    href: CONTACT_PHONE_TEL,
  },
  {
    icon: Mail,
    label: "Email",
    value: CONTACT_EMAIL,
    href: CONTACT_MAILTO,
  },
  {
    icon: MapPin,
    label: "Address",
    value: "A-436, 4th Floor, VentureX, Sector-67, Landmark Cyber Park, Gurgaon, Haryana – 122102",
    href: CONTACT_MAPS_URL,
    external: true,
  },
  {
    icon: Clock,
    label: "Availability",
    value: "By appointment. Please write to us to schedule a conversation.",
    href: CONTACT_MAILTO,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Begin a conversation"
        subtitle="We welcome correspondence from those interested in learning more about BeriCo Research LLP."
      />

      <section aria-labelledby="contact-details" className="section-padding bg-[var(--background)]">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Contact info */}
            <div className="w-full min-w-0 contact-info-col">
              <MotionReveal className="mb-12 section-intro">
                <h2
                  id="contact-details"
                  className="font-heading text-2xl font-semibold text-[var(--text-primary)] mb-4"
                >
                  Get in touch
                </h2>
                <p className="font-body text-base text-[var(--text-secondary)] leading-relaxed font-light">
                  For enquiries, introductions, or further information, we welcome your correspondence with{" "}
                  <span className="hl">strict confidentiality</span>.
                  Please use the details below or complete the contact form.
                </p>
              </MotionReveal>

              <div className="flex flex-col gap-8 items-center lg:items-start contact-details w-full max-w-md mx-auto lg:mx-0 lg:max-w-none">
                {CONTACT_ITEMS.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <MotionReveal key={item.label} delay={0.08 * i}>
                      <div className="flex mobile-icon-stack gap-5 group w-full max-w-sm md:max-w-none">
                        <div className="w-12 h-12 border border-[var(--border)] flex items-center justify-center shrink-0 group-hover:border-[var(--accent)] transition-colors duration-300">
                          <Icon size={18} strokeWidth={1.25} className="text-[var(--accent)]" />
                        </div>
                        <div>
                          <p className="font-body text-xs uppercase tracking-[0.15em] text-[var(--text-secondary)] font-medium mb-1">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              target={"external" in item && item.external ? "_blank" : undefined}
                              rel={"external" in item && item.external ? "noopener noreferrer" : undefined}
                              className="font-body text-sm text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors duration-300 leading-relaxed"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="font-body text-sm text-[var(--text-primary)] leading-relaxed">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    </MotionReveal>
                  );
                })}
              </div>

              {/* Map */}
              <MotionReveal delay={0.3} className="mt-12">
                <MapEmbed
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.7!2d77.0631!3d28.4089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23d46b3a3d05%3A0x1234567890abcdef!2sVentureX%2C%20Sector%2067%2C%20Gurugram!5e0!3m2!1sen!2sin!4v1686000000000!5m2!1sen!2sin"
                  title="BeriCo Research office — VentureX, Sector 67, Gurgaon"
                  className="h-64"
                />
              </MotionReveal>
            </div>

            {/* Contact form */}
            <MotionReveal delay={0.1} direction="right" className="w-full min-w-0">
              <ContactForm />
            </MotionReveal>
          </div>
        </div>
      </section>
    </>
  );
}
