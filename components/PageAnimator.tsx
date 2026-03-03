"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useTransitionReady } from "./PageTransitionProvider";

export default function PageAnimator({
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
      // Above-the-fold entrance timeline
      const tl = gsap.timeline({ delay: 0.15 });

      tl.to(".page-heading", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "expo.out",
      });

      tl.to(
        ".page-subheading",
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "expo.out",
        },
        "-=0.6"
      );

      tl.to(
        ".page-content",
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "expo.out",
        },
        "-=0.5"
      );

      const earlySections = container.querySelectorAll(".page-section-early");
      if (earlySections.length) {
        tl.to(
          earlySections,
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "expo.out",
            stagger: 0.12,
          },
          "-=0.3"
        );
      }

      // Below-fold scroll-triggered reveals
      const sections = container.querySelectorAll(".page-section");
      sections.forEach((section) => {
        gsap.to(section, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "expo.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    }, container);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [ready]);

  return <div ref={containerRef}>{children}</div>;
}
