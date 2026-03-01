"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValue } from "motion/react";

type CursorState = "default" | "link" | "case-study";

export default function CustomCursor() {
  const [state, setState] = useState<CursorState>("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const pathname = usePathname();

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Reset cursor state on route change
  useEffect(() => {
    setState("default");
  }, [pathname]);

  useEffect(() => {
    const hasCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    setIsTouchDevice(hasCoarsePointer);
    if (hasCoarsePointer) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const caseStudy = target.closest("[data-cursor='case-study']");
      if (caseStudy) {
        setState("case-study");
        return;
      }
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']")
      ) {
        setState("link");
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("[data-cursor='case-study']") ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']")
      ) {
        setState("default");
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouchDevice) return null;

  const isCaseStudy = state === "case-study";
  const isLink = state === "link";

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] flex items-center justify-center"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: isCaseStudy ? 160 : isLink ? 48 : 12,
        height: isCaseStudy ? 44 : isLink ? 48 : 12,
        borderRadius: 999,
        opacity: isVisible ? 1 : 0,
        backgroundColor: isCaseStudy
          ? "rgba(17, 17, 17, 0.9)"
          : isLink
            ? "rgba(17, 17, 17, 0.15)"
            : "#eab308",
      }}
      transition={{
        width: { type: "spring", stiffness: 300, damping: 25 },
        height: { type: "spring", stiffness: 300, damping: 25 },
        opacity: { duration: 0.15 },
        backgroundColor: { duration: 0.15 },
      }}
    >
      <AnimatePresence>
        {isCaseStudy && (
          <motion.span
            className="flex items-center gap-1.5 text-[11px] font-medium tracking-widest text-white uppercase"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            View
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
