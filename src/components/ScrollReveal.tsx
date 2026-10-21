"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    __revealReady?: boolean;
  }
}

const DURATION_MS = 1000;

/**
 * Elements opt in with `data-reveal="up"`, an optional `data-delay` (ms) and an optional
 * `data-delay-from` (minimum viewport width in px for the delay to apply).
 */
export function ScrollReveal() {
  useEffect(() => {
    window.__revealReady = true;
    if (!document.documentElement.classList.contains("reveal")) return;

    const timers: number[] = [];
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          io.unobserve(el);

          const minWidth = Number(el.dataset.delayFrom ?? 0);
          const delay = window.innerWidth >= minWidth ? Number(el.dataset.delay ?? 0) : 0;

          el.style.setProperty("--reveal-delay", `${delay}ms`);
          el.dataset.revealed = "in";
          // Once finished, hand transitions back to the element's own hover styles.
          timers.push(
            window.setTimeout(() => {
              el.dataset.revealed = "done";
            }, delay + DURATION_MS + 50),
          );
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );

    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  return null;
}
