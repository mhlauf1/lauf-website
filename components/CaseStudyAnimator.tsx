"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useTransitionReady } from "./PageTransitionProvider";

export default function CaseStudyAnimator({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  const ready = useTransitionReady();

  useEffect(() => {
    if (!ready) return;
    if (hasAnimated.current) return;

    const container = containerRef.current;
    if (!container) return;

    hasAnimated.current = true;

    const ctx = gsap.context(() => {
      // Elements start hidden via CSS — GSAP animates them in

      // Fast top-to-bottom sweep
      const tl = gsap.timeline({ delay: 0.1, defaults: { ease: "expo.out" } });

      tl.to(".cs-tags", { x: 0, opacity: 1, duration: 0.5 })
        .to(".cs-title", { y: 0, opacity: 1, duration: 0.6 }, "-=0.4")
        .to(".cs-meta", { y: 0, opacity: 1, duration: 0.4 }, "-=0.45")
        .to(".cs-visit", { y: 0, opacity: 1, duration: 0.35 }, "-=0.3")
        .to(
          ".cs-hero-image",
          { clipPath: "inset(0% 0% 0% 0%)", duration: 0.8 },
          "-=0.3"
        );

      // Below-fold scroll-triggered reveals
      const sections = container.querySelectorAll(".cs-section");
      sections.forEach((section) => {
        gsap.to(section, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "expo.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      const gridImages = container.querySelectorAll(".cs-grid-image");
      gsap.to(gridImages, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "expo.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: gridImages[0],
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, container);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [ready]);

  return <div ref={containerRef}>{children}</div>;
}
