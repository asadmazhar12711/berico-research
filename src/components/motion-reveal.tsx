"use client";

import { useRef, useEffect, useState, ReactNode } from "react";

interface MotionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  once?: boolean;
}

/**
 * CSS-driven reveal on scroll. Avoids Framer Motion's JS animation loop
 * during scroll, which was causing main-thread stalls when sections entered
 * view (especially as the hero heading passed the fixed header).
 */
export default function MotionReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
}: MotionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { rootMargin: "-60px 0px", threshold: 0.08 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const directionClass =
    direction === "left"
      ? "reveal-from-left"
      : direction === "right"
        ? "reveal-from-right"
        : direction === "none"
          ? "reveal-fade"
          : "reveal-from-up";

  return (
    <div
      ref={ref}
      className={`reveal ${directionClass}${visible ? " reveal-visible" : ""}${className ? ` ${className}` : ""}`}
      style={visible && delay > 0 ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
