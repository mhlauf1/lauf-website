"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

const phrases = [
  "Start Your Job Search.",
  "Find Top Talent.",
  "Build Your Future.",
];

export default function MinnesotaManufacturing({
  compact = false,
}: {
  compact?: boolean;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const phraseRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const isAnimating = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const entranceTlRef = useRef<gsap.core.Timeline | null>(null);
  const breathingRef = useRef<gsap.core.Tween | null>(null);

  // Entrance animation
  useEffect(() => {
    if (!sectionRef.current) return;

    const icon = sectionRef.current.querySelector(".mn-icon");
    const headline = sectionRef.current.querySelector(".mn-headline");
    const subtitle = sectionRef.current.querySelector(".mn-subtitle");

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    entranceTlRef.current = tl;

    tl.fromTo(
      icon,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.5 },
    )
      .fromTo(
        headline,
        { opacity: 0, clipPath: "inset(0 0 100% 0)" },
        {
          opacity: 1,
          clipPath: "inset(0 0 0% 0)",
          duration: 0.5,
          ease: "power2.inOut",
        },
        "-=0.2",
      )
      .fromTo(
        subtitle,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.4 },
        "-=0.2",
      );

    // Ambient breathing on the Minnesota icon
    if (iconRef.current) {
      breathingRef.current = gsap.to(iconRef.current, {
        scale: 1.03,
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1,
      });
    }

    return () => {
      tl.kill();
      if (breathingRef.current) breathingRef.current.kill();
    };
  }, []);

  // Start cycling interval after entrance finishes
  useEffect(() => {
    const delay = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % phrases.length);
      }, 3000);
    }, 1200);

    return () => {
      clearTimeout(delay);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // GSAP clip-path transition on index change
  const prevIndex = useRef(0);
  useEffect(() => {
    if (prevIndex.current === activeIndex) return;

    const currentSpan = phraseRefs.current[prevIndex.current];
    const nextSpan = phraseRefs.current[activeIndex];

    if (currentSpan && nextSpan && !isAnimating.current) {
      isAnimating.current = true;

      const tl = gsap.timeline({
        onComplete: () => {
          isAnimating.current = false;
        },
      });

      // Wipe out current phrase (top-to-bottom)
      tl.to(currentSpan, {
        clipPath: "inset(100% 0 0 0)",
        duration: 0.4,
        ease: "power2.inOut",
      })
        // Wipe in next phrase (bottom-to-top)
        .fromTo(
          nextSpan,
          { clipPath: "inset(0 0 100% 0)" },
          { clipPath: "inset(0 0 0% 0)", duration: 0.4, ease: "power2.inOut" },
          "-=0.2",
        );
    }

    prevIndex.current = activeIndex;
  }, [activeIndex]);

  const Tag = compact ? "div" : "section";

  return (
    <Tag
      ref={sectionRef as React.RefObject<HTMLDivElement & HTMLElement>}
      className={
        compact
          ? "absolute inset-0 flex flex-col items-center justify-center bg-background border border-border rounded-lg"
          : "relative flex min-h-screen flex-col items-center justify-center px-6"
      }
      style={{ backgroundImage: "none" }}
    >
      {/* Minnesota state icon */}
      <div ref={iconRef} className={`mn-icon ${compact ? "mb-4" : "mb-10"}`}>
        <svg
          width={compact ? 28 : 40}
          height={compact ? 22 : 31}
          viewBox="0 0 100 78"
          fill="currentColor"
          className="text-foreground/25"
        >
          <path d="M68.5,35.2L64.8,35.7L64.8,43.5L57.3,48.1L57.1,50L60.2,51.8L58.7,53.8L58.1,60.9L76.1,70.8L79,77.3L10.2,77.3L10.2,53.7L4.9,49.6L8.5,46.8L8.3,40.1L5.6,35.8L4.9,23.3L0,5L27.3,5L27.3,0L29.9,0.1L31.6,1.2L33.3,8L34.7,8.8L44.5,9.9L45.1,11.4L55.8,10L60.1,12.4L62,12.3L63.8,15.3L68,13.5L74.4,17.6L84,15L85.1,17L93.1,16.7L96.6,18.3L100,18.1L85.3,23.1L67.5,34.1Z" />
        </svg>
      </div>

      {/* Cycling headline */}
      <div className="mn-headline text-center">
        <h1
          className={
            compact
              ? "font-serif text-2xl leading-tight tracking-tight sm:text-3xl lg:text-4xl"
              : "font-serif text-5xl leading-tight tracking-tight sm:text-6xl lg:text-7xl"
          }
        >
          <span className="relative inline-block overflow-hidden align-bottom">
            {/* Invisible sizer — widest phrase sets container width */}
            <span className="invisible">Start Your Job Search.</span>
            {phrases.map((phrase, i) => (
              <span
                key={phrase}
                ref={(el) => {
                  phraseRefs.current[i] = el;
                }}
                className="absolute inset-x-0 top-0"
                style={{
                  clipPath: i === 0 ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)",
                }}
              >
                {phrase}
              </span>
            ))}
          </span>
        </h1>
      </div>

      {/* Subtitle */}
      <p
        className={`mn-subtitle font-mono tracking-widest text-foreground-secondary uppercase ${
          compact ? "mt-4 text-[9px] sm:text-[10px]" : "mt-8 text-xs"
        }`}
      >
        Minnesota Manufacturing Recruiting
      </p>
    </Tag>
  );
}
