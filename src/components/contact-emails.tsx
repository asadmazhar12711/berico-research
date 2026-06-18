import { CONTACT_EMAILS, contactMailto } from "@/lib/contact";

interface ContactEmailsProps {
  className?: string;
  linkClassName?: string;
}

export default function ContactEmails({
  className = "flex flex-col gap-1",
  linkClassName = "font-body text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300",
}: ContactEmailsProps) {
  return (
    <span className={className}>
      {CONTACT_EMAILS.map((email) => (
        <a
          key={email}
          href={contactMailto(email)}
          className={`${linkClassName} break-all`}
        >
          {email}
        </a>
      ))}
    </span>
  );
}
