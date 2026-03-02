"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const cursors = [
  {
    text: "Need a rebrand",
    top: "20%",
    left: "54%",
  },
  {
    text: "Ready to launch",
    top: "50%",
    left: "60%",
  },
  {
    text: "Scaling up",
    top: "70%",
    left: "46%",
  },
];

function CursorArrow({ active }: { active: boolean }) {
  return (
    <svg
      width="18"
      height="22"
      viewBox="0 0 18 22"
      fill="none"
      className="-mb-1 transition-all duration-300"
    >
      <path
        d="M1.5 1L1.5 18.5L6.5 13.5L11.5 21L14.5 19.5L9.5 12L16.5 11L1.5 1Z"
        fill={active ? "var(--color-accent)" : "var(--color-foreground)"}
        stroke={active ? "var(--color-accent)" : "var(--color-foreground)"}
        strokeWidth="1.2"
        strokeLinejoin="round"
        className="transition-all duration-300"
      />
    </svg>
  );
}

export default function CursorLabels({ activeIndex }: { activeIndex: number }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const items = containerRef.current.querySelectorAll(".cursor-label");

    gsap.from(items, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out",
      delay: 1.4,
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 hidden lg:block"
    >
      {cursors.map((cursor, i) => {
        const active = i === activeIndex;
        return (
          <div
            key={cursor.text}
            className="cursor-label absolute flex flex-col items-start"
            style={{ top: cursor.top, left: cursor.left }}
          >
            <CursorArrow active={active} />
            <span
              className={`-mt-0.5 ml-3 whitespace-nowrap rounded-full px-3 py-1 text-[11px] font-medium tracking-wide transition-all duration-300 ${
                active
                  ? "bg-accent text-white"
                  : "bg-foreground text-background"
              }`}
            >
              {cursor.text}
            </span>
          </div>
        );
      })}
    </div>
  );
}
