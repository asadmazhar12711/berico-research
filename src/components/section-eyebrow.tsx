interface SectionEyebrowProps {
  children: React.ReactNode;
  className?: string;
  /** @deprecated All eyebrows use symmetric centered layout */
  symmetric?: boolean;
  /** Larger on desktop — hero and key intros */
  prominent?: boolean;
}

export default function SectionEyebrow({
  children,
  className = "",
  prominent = false,
}: SectionEyebrowProps) {
  const label = (
    <span
      className={`font-body uppercase text-[var(--accent)] font-medium whitespace-nowrap ${
        prominent
          ? "text-xs sm:text-sm md:text-base tracking-[0.15em] md:tracking-[0.25em]"
          : "text-[0.6875rem] sm:text-xs tracking-[0.12em] sm:tracking-[0.25em]"
      }`}
    >
      {children}
    </span>
  );

  return (
    <div
      className={`flex items-center justify-center gap-3 sm:gap-4 mb-4 md:mb-5 ${className}`}
    >
      <div className="h-px w-6 sm:w-12 bg-[var(--accent)] shrink-0" aria-hidden="true" />
      {label}
      <div className="h-px w-6 sm:w-12 bg-[var(--accent)] shrink-0" aria-hidden="true" />
    </div>
  );
}
