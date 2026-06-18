"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./theme-toggle";
import { motion, AnimatePresence } from "framer-motion";

const LEFT_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
];

const RIGHT_LINKS = [
  { href: "/leadership", label: "Leadership" },
  { href: "/contact", label: "Contact" },
  { href: "/disclaimer", label: "Disclaimer" },
];

const ALL_LINKS = [...LEFT_LINKS, ...RIGHT_LINKS];

const linkClass = (isActive: boolean) =>
  `font-body text-base font-medium tracking-wide transition-all duration-200 px-3 py-1.5 whitespace-nowrap ${
    isActive
      ? "bg-[var(--accent)] text-white"
      : "text-[var(--text-secondary)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent)]"
  }`;

function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="BeriCo Research LLP — Home"
      className={`flex flex-col items-center justify-center gap-1 shrink-0 min-w-0 px-1 py-1 lg:px-2 lg:py-0.5 ${className}`}
    >
      <Image
        src="/logo.png"
        alt="BeriCo Research LLP"
        width={320}
        height={115}
        className="h-[5.5rem] w-auto max-w-full object-contain lg:h-24 xl:h-28"
        priority
      />
      <span className="font-body text-[9px] sm:text-[11px] tracking-[0.12em] sm:tracking-[0.2em] uppercase text-[var(--text-secondary)] font-medium text-center leading-tight max-w-full">
        Building Wealth for Generations
      </span>
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const currentPath = pathname.replace(/\/$/, "") || "/";

  return (
    <>
      <header
        role="banner"
        className="site-header fixed top-0 left-0 right-0 z-50 bg-[var(--background)] border-b border-[var(--border)]"
      >
        <div className="container-content relative">
          {/* Desktop theme toggle — outside nav grid */}
          <div
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-10"
            aria-label="Theme settings"
          >
            <ThemeToggle />
          </div>

          {/* Desktop: logo locked to true center; links in equal side columns */}
          <nav
            aria-label="Main navigation"
            className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center w-full py-3 xl:py-3.5 pr-14"
          >
            <ul className="flex items-center justify-end gap-2 xl:gap-3" role="list">
              {LEFT_LINKS.map(({ href, label }) => {
                const isActive = currentPath === href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={linkClass(isActive)}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <BrandLogo className="justify-self-center" />

            <ul className="flex items-center justify-start gap-2 xl:gap-3" role="list">
              {RIGHT_LINKS.map(({ href, label }) => {
                const isActive = currentPath === href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={linkClass(isActive)}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile: fixed side slots so theme toggle never clips */}
          <div className="lg:hidden flex items-center justify-between gap-2 py-3 w-full overflow-hidden">
            <button
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="w-10 h-10 shrink-0 flex items-center justify-center text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors duration-300"
            >
              {mobileOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
            </button>

            <BrandLogo className="flex-1 min-w-0 overflow-hidden" />

            <div className="w-10 h-10 shrink-0 flex items-center justify-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 bg-[var(--background)] flex flex-col pt-[8.5rem] lg:hidden"
          >
            <div className="container-content flex flex-col flex-1 py-8">
              <ul className="flex flex-col gap-1" role="list">
                {ALL_LINKS.map(({ href, label }, i) => (
                  <motion.li
                    key={href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.3 }}
                  >
                    <Link
                      href={href}
                      className={`flex items-center py-4 px-4 font-heading text-2xl font-medium border-b border-[var(--border)] transition-all duration-300 ${
                        currentPath === href
                          ? "bg-[var(--accent)] text-white border-[var(--accent)]"
                          : "text-[var(--text-primary)] hover:text-[var(--accent)]"
                      }`}
                      aria-current={currentPath === href ? "page" : undefined}
                    >
                      {label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto pt-8 flex items-center justify-between border-t border-[var(--border)]">
                <span className="font-body text-base text-[var(--text-secondary)] font-medium">
                  Switch Theme
                </span>
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
