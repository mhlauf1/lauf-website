"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

type CursorState = "default" | "link" | "case-study";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const stateRef = useRef<CursorState>("default");

  useEffect(() => {
    const hasCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    setIsTouchDevice(hasCoarsePointer);
    if (hasCoarsePointer || !cursorRef.current) return;

    const cursor = cursorRef.current;
    const pos = { x: -100, y: -100 };

    const moveCursor = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      gsap.to(cursor, {
        x: pos.x,
        y: pos.y,
        duration: 0.15,
        ease: "power2.out",
        overwrite: true,
      });
    };

    const updateState = (state: CursorState) => {
      if (stateRef.current === state) return;
      stateRef.current = state;

      const isCaseStudy = state === "case-study";
      const isLink = state === "link";

      gsap.to(cursor, {
        width: isCaseStudy ? 160 : isLink ? 48 : 12,
        height: isCaseStudy ? 44 : isLink ? 48 : 12,
        backgroundColor: isCaseStudy
          ? "rgba(17,17,17,0.9)"
          : isLink
            ? "rgba(17,17,17,0.15)"
            : "#ff4500",
        duration: 0.25,
        ease: "power2.out",
      });

      if (labelRef.current) {
        gsap.to(labelRef.current, {
          opacity: isCaseStudy ? 1 : 0,
          scale: isCaseStudy ? 1 : 0.8,
          duration: 0.15,
        });
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("[data-cursor='case-study']")) {
        updateState("case-study");
      } else if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']")
      ) {
        updateState("link");
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
        updateState("default");
      }
    };

    const handleLeave = () => gsap.to(cursor, { opacity: 0, duration: 0.15 });
    const handleEnter = () => gsap.to(cursor, { opacity: 1, duration: 0.15 });

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    document.documentElement.addEventListener("mouseleave", handleLeave);
    document.documentElement.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
      document.documentElement.removeEventListener("mouseenter", handleEnter);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] flex items-center justify-center rounded-full opacity-0"
      style={{
        width: 12,
        height: 12,
        backgroundColor: "#ff4500",
        transform: "translate(-50%, -50%)",
      }}
    >
      <span
        ref={labelRef}
        className="flex items-center gap-1.5 text-[11px] font-medium tracking-widest text-white uppercase opacity-0"
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
      </span>
    </div>
  );
}
