import Link from "next/link";
import { Phone, Mail, SquarePen } from "lucide-react";
import {
  CONTACT_MAILTO,
  CONTACT_PHONE_TEL,
  CONTACT_WHATSAPP,
} from "@/lib/contact";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.359.101 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.582 0 11.94-5.359 11.944-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const ACTIONS = [
  {
    type: "internal" as const,
    href: "/contact",
    label: "Contact form",
    icon: SquarePen,
  },
  {
    type: "external" as const,
    href: CONTACT_WHATSAPP,
    label: "WhatsApp",
    icon: WhatsAppIcon,
  },
  {
    type: "tel" as const,
    href: CONTACT_PHONE_TEL,
    label: "Call us",
    icon: Phone,
  },
  {
    type: "tel" as const,
    href: CONTACT_MAILTO,
    label: "Email us",
    icon: Mail,
  },
];

export default function FloatingContactActions() {
  return (
    <nav
      className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50"
      aria-label="Quick contact actions"
    >
      <ul className="flex items-center gap-2 sm:gap-3 border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 shadow-lg">
        {ACTIONS.map(({ type, href, label, icon: Icon }) => {
          const inner = (
            <>
              <Icon
                className="h-7 w-7"
                size={28}
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-[var(--text-primary)] px-2 py-1 text-xs font-medium text-[var(--background)] opacity-0 shadow transition-opacity duration-200 group-hover:opacity-100">
                {label}
              </span>
            </>
          );

          const className =
            "group relative flex h-14 w-14 items-center justify-center rounded-xl text-[var(--accent)] transition-colors duration-200 hover:bg-[var(--accent)] hover:text-white focus-visible:bg-[var(--accent)] focus-visible:text-white";

          return (
            <li key={label}>
              {type === "internal" ? (
                <Link href={href} aria-label={label} className={className}>
                  {inner}
                </Link>
              ) : (
                <a
                  href={href}
                  aria-label={label}
                  target={type === "external" ? "_blank" : undefined}
                  rel={type === "external" ? "noopener noreferrer" : undefined}
                  className={className}
                >
                  {inner}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
