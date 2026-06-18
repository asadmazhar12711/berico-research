"use client";

import { useEffect } from "react";

/** Publishes measured fixed header height to --site-header-height on :root */
export function useSiteHeaderHeight(headerId = "site-header") {
  useEffect(() => {
    const header = document.getElementById(headerId);
    if (!header) return;

    const sync = () => {
      document.documentElement.style.setProperty(
        "--site-header-height",
        `${header.offsetHeight}px`
      );
    };

    sync();
    const observer = new ResizeObserver(sync);
    observer.observe(header);
    window.addEventListener("resize", sync);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", sync);
    };
  }, [headerId]);
}
