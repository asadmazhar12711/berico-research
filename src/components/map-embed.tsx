"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";

interface MapEmbedProps {
  src: string;
  title: string;
  caption?: string;
  /** Height / sizing classes for the container, e.g. "h-64" or "h-[480px]". */
  className?: string;
}

/**
 * Click-to-load map facade. The heavy Google Maps iframe boots its own JS and
 * blocks the main thread for a second or two when it loads — which makes
 * scrolling stutter as you reach it. Rendering a lightweight placeholder and
 * only mounting the iframe on click keeps the iframe out of the scroll path,
 * so scrolling stays smooth.
 */
export default function MapEmbed({
  src,
  title,
  caption,
  className = "",
}: MapEmbedProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden border border-[var(--border)] ${className}`}
    >
      {loaded ? (
        <iframe
          title={title}
          src={src}
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
          aria-label={title}
        />
      ) : (
        <button
          type="button"
          onClick={() => setLoaded(true)}
          aria-label={`Load interactive map${caption ? ` — ${caption}` : ""}`}
          className="group absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-3 bg-[var(--background)] transition-colors duration-300 hover:bg-[var(--surface)]"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent)] text-white shadow-md transition-transform duration-300 group-hover:scale-110">
            <MapPin size={22} strokeWidth={1.75} aria-hidden="true" />
          </span>
          <span className="font-body text-sm font-medium text-[var(--text-primary)]">
            View interactive map
          </span>
          {caption && (
            <span className="font-body text-xs text-[var(--text-secondary)]">
              {caption}
            </span>
          )}
        </button>
      )}

      {loaded && caption && (
        <div className="pointer-events-none absolute bottom-4 left-4 bg-[var(--surface)] px-4 py-3 border border-[var(--border)]">
          <div className="flex items-center gap-2">
            <MapPin size={14} strokeWidth={1.5} className="text-[var(--accent)]" />
            <span className="font-body text-xs font-medium text-[var(--text-primary)]">
              {caption}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
