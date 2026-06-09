import MotionReveal from "@/components/motion-reveal";
import { MapPin, Phone, Mail, Building2 } from "lucide-react";

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
          <div>
            <MotionReveal>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-[var(--accent)]" />
                <span className="font-body text-xs tracking-[0.25em] uppercase text-[var(--accent)] font-medium">
                  Our Office
                </span>
              </div>
            </MotionReveal>

            <MotionReveal delay={0.1}>
              <h2
                id="location-heading"
                className="font-heading text-[clamp(1.875rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.01em] text-[var(--text-primary)] mb-8"
              >
                Located in the heart
                <br />
                of Gurgaon
              </h2>
            </MotionReveal>

            <MotionReveal delay={0.2}>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-5 group">
                  <div className="w-10 h-10 border border-[var(--border)] flex items-center justify-center shrink-0 group-hover:border-[var(--accent)] transition-colors duration-300">
                    <Building2 size={18} strokeWidth={1.25} className="text-[var(--accent)]" />
                  </div>
                  <div>
                    <p className="font-body text-xs uppercase tracking-[0.15em] text-[var(--text-secondary)] font-medium mb-1">
                      Office
                    </p>
                    <p className="font-body text-sm text-[var(--text-primary)] font-medium">VentureX</p>
                    <address className="font-body text-sm text-[var(--text-secondary)] not-italic leading-relaxed mt-1">
                      A-436, 4th Floor<br />
                      Sector-67, Landmark Cyber Park<br />
                      Gurgaon, Haryana – 122102
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-10 h-10 border border-[var(--border)] flex items-center justify-center shrink-0 group-hover:border-[var(--accent)] transition-colors duration-300">
                    <Phone size={18} strokeWidth={1.25} className="text-[var(--accent)]" />
                  </div>
                  <div>
                    <p className="font-body text-xs uppercase tracking-[0.15em] text-[var(--text-secondary)] font-medium mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:+919650510232"
                      className="font-body text-sm text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors duration-300"
                    >
                      +91 96505 10232
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-10 h-10 border border-[var(--border)] flex items-center justify-center shrink-0 group-hover:border-[var(--accent)] transition-colors duration-300">
                    <Mail size={18} strokeWidth={1.25} className="text-[var(--accent)]" />
                  </div>
                  <div>
                    <p className="font-body text-xs uppercase tracking-[0.15em] text-[var(--text-secondary)] font-medium mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:bericoresearch@gmail.com"
                      className="font-body text-sm text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors duration-300"
                    >
                      bericoresearch@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </MotionReveal>
          </div>

          {/* Map */}
          <MotionReveal delay={0.2} direction="right">
            <div className="relative h-[400px] lg:h-[480px] border border-[var(--border)] overflow-hidden">
              <iframe
                title="BeriCo Research office location — VentureX, Sector 67, Gurgaon"
                src={mapSrc}
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-700 w-full h-full"
                aria-label="Map showing BeriCo Research office at VentureX, Sector 67, Gurgaon"
              />
              {/* Overlay label */}
              <div className="absolute bottom-4 left-4 bg-[var(--surface)]/95 backdrop-blur-sm px-4 py-3 border border-[var(--border)]">
                <div className="flex items-center gap-2">
                  <MapPin size={14} strokeWidth={1.5} className="text-[var(--accent)]" />
                  <span className="font-body text-xs font-medium text-[var(--text-primary)]">
                    VentureX, Sector-67, Gurgaon
                  </span>
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
