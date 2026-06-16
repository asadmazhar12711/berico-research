import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import ContactForm from "@/components/contact-form";
import MotionReveal from "@/components/motion-reveal";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact BERICO Research — a family investment, finance and consulting firm in Gurgaon. Reach us by phone, email, or visit our office at VentureX, Sector-67.",
};

const CONTACT_ITEMS = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 96505 10232",
    href: "tel:+919650510232",
  },
  {
    icon: Mail,
    label: "Email",
    value: "bericoresearch@gmail.com",
    href: "mailto:bericoresearch@gmail.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "A-436, 4th Floor, VentureX, Sector-67, Landmark Cyber Park, Gurgaon, Haryana – 122102",
    href: "https://maps.google.com/?q=VentureX+Sector+67+Gurgaon",
  },
  {
    icon: Clock,
    label: "Availability",
    value: "By appointment. Please write to us to schedule a conversation.",
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Begin a conversation"
        subtitle="We welcome correspondence from those interested in learning more about BERICO Research."
      />

      <section aria-labelledby="contact-details" className="section-padding bg-[var(--background)]">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact info */}
            <div>
              <MotionReveal className="mb-12">
                <h2
                  id="contact-details"
                  className="font-heading text-2xl font-semibold text-[var(--text-primary)] mb-4"
                >
                  Get in touch
                </h2>
                <p className="font-body text-base text-[var(--text-secondary)] leading-relaxed font-light">
                  For enquiries, introductions, or further information, we welcome your correspondence.
                  Please use the details below or complete the contact form.
                </p>
              </MotionReveal>

              <div className="flex flex-col gap-8">
                {CONTACT_ITEMS.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <MotionReveal key={item.label} delay={0.08 * i}>
                      <div className="flex items-start gap-5 group">
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
                              target={item.href.startsWith("http") ? "_blank" : undefined}
                              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
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
                <div className="relative h-64 border border-[var(--border)] overflow-hidden">
                  <iframe
                    title="BeriCo Research office — VentureX, Sector 67, Gurgaon"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.7!2d77.0631!3d28.4089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23d46b3a3d05%3A0x1234567890abcdef!2sVentureX%2C%20Sector%2067%2C%20Gurugram!5e0!3m2!1sen!2sin!4v1686000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale opacity-80 w-full h-full"
                    aria-label="Map of BeriCo Research office location"
                  />
                </div>
              </MotionReveal>
            </div>

            {/* Contact form */}
            <MotionReveal delay={0.1} direction="right">
              <ContactForm />
            </MotionReveal>
          </div>
        </div>
      </section>
    </>
  );
}
