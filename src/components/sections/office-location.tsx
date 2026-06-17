import MotionReveal from "@/components/motion-reveal";
import SectionEyebrow from "@/components/section-eyebrow";
import MapEmbed from "@/components/map-embed";
import { Phone, Mail, Building2, MessageCircle } from "lucide-react";
import {
  CONTACT_EMAIL,
  CONTACT_MAILTO,
  CONTACT_MAPS_URL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  CONTACT_WHATSAPP,
} from "@/lib/contact";

export default function OfficeLocation() {
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.7!2d77.0631!3d28.4089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23d46b3a3d05%3A0x1234567890abcdef!2sVentureX%2C%20Sector%2067%2C%20Gurugram!5e0!3m2!1sen!2sin!4v1686000000000!5m2!1sen!2sin";

  return (
    <section
      aria-labelledby="location-heading"
      className="section-padding bg-[var(--surface)]"
    >
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Info */}
          <div className="section-intro">
            <MotionReveal>
              <SectionEyebrow>Contact Us</SectionEyebrow>
            </MotionReveal>

            <MotionReveal delay={0.1}>
              <h2
                id="location-heading"
                className="font-heading text-[clamp(1.875rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.01em] text-[var(--text-primary)] mb-8"
              >
                Office Address
              </h2>
            </MotionReveal>

            <MotionReveal delay={0.2}>
              <div className="flex flex-col gap-8 items-center md:items-center contact-details w-full max-w-sm md:max-w-md mx-auto">
                <div className="flex mobile-icon-stack gap-4 group w-full max-w-sm md:max-w-none">
                  <div className="w-10 h-10 border border-[var(--border)] flex items-center justify-center shrink-0 group-hover:border-[var(--accent)] transition-colors duration-300">
                    <Building2 size={18} strokeWidth={1.25} className="text-[var(--accent)]" />
                  </div>
                  <div>
                    <p className="font-body text-xs uppercase tracking-[0.15em] text-[var(--text-secondary)] font-medium mb-1">
                      Office
                    </p>
                    <p className="font-body text-sm text-[var(--text-primary)] font-medium">VentureX</p>
                    <a
                      href={CONTACT_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300 not-italic leading-relaxed mt-1 block"
                    >
                      A-436, 4th Floor<br />
                      Sector-67, Landmark Cyber Park<br />
                      Gurgaon, Haryana – 122102
                    </a>
                  </div>
                </div>

                <div className="flex mobile-icon-stack gap-4 group w-full max-w-sm md:max-w-none">
                  <div className="w-10 h-10 border border-[var(--border)] flex items-center justify-center shrink-0 group-hover:border-[var(--accent)] transition-colors duration-300">
                    <MessageCircle size={18} strokeWidth={1.25} className="text-[var(--accent)]" />
                  </div>
                  <div>
                    <p className="font-body text-xs uppercase tracking-[0.15em] text-[var(--text-secondary)] font-medium mb-1">
                      WhatsApp
                    </p>
                    <a
                      href={CONTACT_WHATSAPP}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors duration-300"
                    >
                      Message us on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex mobile-icon-stack gap-4 group w-full max-w-sm md:max-w-none">
                  <div className="w-10 h-10 border border-[var(--border)] flex items-center justify-center shrink-0 group-hover:border-[var(--accent)] transition-colors duration-300">
                    <Phone size={18} strokeWidth={1.25} className="text-[var(--accent)]" />
                  </div>
                  <div>
                    <p className="font-body text-xs uppercase tracking-[0.15em] text-[var(--text-secondary)] font-medium mb-1">
                      Phone
                    </p>
                    <a
                      href={CONTACT_PHONE_TEL}
                      className="font-body text-sm text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors duration-300"
                    >
                      {CONTACT_PHONE_DISPLAY}
                    </a>
                  </div>
                </div>

                <div className="flex mobile-icon-stack gap-4 group w-full max-w-sm md:max-w-none">
                  <div className="w-10 h-10 border border-[var(--border)] flex items-center justify-center shrink-0 group-hover:border-[var(--accent)] transition-colors duration-300">
                    <Mail size={18} strokeWidth={1.25} className="text-[var(--accent)]" />
                  </div>
                  <div>
                    <p className="font-body text-xs uppercase tracking-[0.15em] text-[var(--text-secondary)] font-medium mb-1">
                      Email
                    </p>
                    <a
                      href={CONTACT_MAILTO}
                      className="font-body text-sm text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors duration-300"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>
              </div>
            </MotionReveal>
          </div>

          {/* Map */}
          <MotionReveal delay={0.2} direction="right">
            <MapEmbed
              src={mapSrc}
              title="BeriCo Research office location — VentureX, Sector 67, Gurgaon"
              caption="VentureX, Sector-67, Gurgaon"
              className="h-[400px] lg:h-[480px]"
            />
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
