import { useEffect } from "react";

// Cubic ease-in-out: slow → fast → slow
function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function smoothScrollTo(targetY: number, duration = 900) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  if (Math.abs(distance) < 1) return;
  let startTime: number | null = null;

  function step(timestamp: number) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + distance * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

export function useEasedScroll() {
  useEffect(() => {
    const HEADER_OFFSET = 112; // matches scroll-mt-28 (7rem)

    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href") ?? "";

      // Extract hash from "#section" or "/#section"
      let hash = "";
      if (href.startsWith("#")) {
        hash = href.slice(1);
      } else if (href.includes("/#")) {
        hash = href.split("/#")[1];
      }

      if (!hash) return;

      const el = document.getElementById(hash);
      if (!el) return;

      e.preventDefault();

      const targetY =
        el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;

      smoothScrollTo(targetY, 900);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
}
