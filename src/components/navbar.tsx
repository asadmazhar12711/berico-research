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

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // normalise pathname — trailingSlash:true adds "/" so strip it
  const currentPath = pathname.replace(/\/$/, "") || "/";

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[var(--background)]/95 backdrop-blur-md border-b border-[var(--border)] shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container-content">
          {/* Desktop: 3-column grid so logo is truly centred */}
          <nav
            aria-label="Main navigation"
            className="hidden lg:grid grid-cols-[1fr_auto_1fr] gap-6 items-center h-24 md:h-28"
          >
            {/* Left nav links */}
            <ul className="flex items-center gap-6 justify-end" role="list">
              {LEFT_LINKS.map(({ href, label }) => {
                const isActive = currentPath === href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`font-body text-base font-medium tracking-wide transition-all duration-200 px-3 py-1.5 ${
                        isActive
                          ? "bg-[var(--accent)] text-white"
                          : "text-[var(--text-secondary)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent)]"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Center: Logo */}
            <Link href="/" aria-label="BeriCo Research LLP — Home" className="flex flex-col items-center justify-center gap-1">
              <Image
                src="/logo.png"
                alt="BeriCo Research LLP"
                width={220}
                height={80}
                className="h-16 md:h-20 w-auto object-contain"
                priority
              />
              <span className="font-body text-[11px] tracking-[0.2em] uppercase text-[var(--text-secondary)] font-medium whitespace-nowrap">
                Building Wealth for Generations
              </span>
            </Link>

            {/* Right nav links */}
            <ul className="flex items-center gap-6 justify-start" role="list">
              {RIGHT_LINKS.map(({ href, label }) => {
                const isActive = currentPath === href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`font-body text-base font-medium tracking-wide transition-all duration-200 px-3 py-1.5 ${
                        isActive
                          ? "bg-[var(--accent)] text-white"
                          : "text-[var(--text-secondary)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent)]"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
              <li className="ml-2">
                <ThemeToggle />
              </li>
            </ul>
          </nav>

          {/* Mobile: hamburger | centered logo | theme toggle */}
          <div className="lg:hidden flex items-center justify-between h-24">
            <button
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="w-10 h-10 flex items-center justify-center text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors duration-300"
            >
              {mobileOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
            </button>

            <Link href="/" aria-label="BeriCo Research LLP — Home" className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
              <Image
                src="/logo.png"
                alt="BeriCo Research LLP"
                width={160}
                height={60}
                className="h-14 w-auto object-contain"
                priority
              />
              <span className="font-body text-[10px] tracking-[0.18em] uppercase text-[var(--text-secondary)] font-medium whitespace-nowrap">
                Building Wealth for Generations
              </span>
            </Link>

            <ThemeToggle />
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
            className="fixed inset-0 z-40 bg-[var(--background)] flex flex-col pt-24 lg:hidden"
          >
            <div className="container-content flex flex-col flex-1 py-8">
              <ul className="flex flex-col gap-1" role="list">
                {ALL_LINKS.map(({ href, label }, i) => {
                  const isActive = pathname === href;
                  return (
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
                  );
                })}
              </ul>

              {/* Theme toggle inside drawer */}
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
