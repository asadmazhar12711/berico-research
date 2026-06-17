import { MessageCircle, Phone, Mail } from "lucide-react";
import {
  CONTACT_MAILTO,
  CONTACT_PHONE_TEL,
  CONTACT_WHATSAPP,
} from "@/lib/contact";

const ACTIONS = [
  {
    href: CONTACT_WHATSAPP,
    label: "Contact us on WhatsApp",
    icon: MessageCircle,
    external: true,
  },
  {
    href: CONTACT_PHONE_TEL,
    label: "Call BeriCo Research",
    icon: Phone,
    external: false,
  },
  {
    href: CONTACT_MAILTO,
    label: "Email BeriCo Research",
    icon: Mail,
    external: false,
  },
] as const;

export default function FloatingContactActions() {
  return (
    <div
      className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col gap-2"
      aria-label="Quick contact actions"
    >
      {ACTIONS.map(({ href, label, icon: Icon, external }) => (
        <a
          key={label}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          aria-label={label}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--accent)] text-white shadow-md hover:opacity-90 transition-opacity duration-300"
        >
          <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
