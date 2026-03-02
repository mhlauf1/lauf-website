"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import HeroProjects from "./HeroProjects";
import CursorLabels from "./CursorLabels";

function useMadisonTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString("en-US", {
        timeZone: "America/Chicago",
        hour: "numeric",
        minute: "2-digit",
      });
      setTime(formatted);
    };

    update();
    const id = setInterval(update, 10_000);
    return () => clearInterval(id);
  }, []);

  return time;
}

const serviceLabels = ["Design", "Development", "Systems", "Strategy"];

const rotatingPhrases = ["stand out.", "ship faster.", "scale."];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const madisonTime = useMadisonTime();
  const phraseRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const isAnimating = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Entrance animation
  useEffect(() => {
    if (!sectionRef.current) return;

    const topbar = sectionRef.current.querySelector(".hero-topbar");
    const badge = sectionRef.current.querySelector(".hero-badge");
    const headline = sectionRef.current.querySelector(".hero-headline");
    const subtitle = sectionRef.current.querySelector(".hero-subtitle");
    const cta = sectionRef.current.querySelector(".hero-cta");
    const labels = sectionRef.current.querySelector(".hero-labels");

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(topbar, { opacity: 0, y: -10, duration: 0.6 })
      .from(badge, { opacity: 0, y: 20, duration: 0.6 }, "-=0.3")
      .from(headline, { opacity: 0, y: 50, duration: 1 }, "-=0.3")
      .from(subtitle, { opacity: 0, y: 30, duration: 0.8 }, "-=0.5")
      .from(cta, { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")
      .from(labels, { opacity: 0, duration: 0.6 }, "-=0.3");
  }, []);

  // Start interval after entrance animation
  useEffect(() => {
    const delay = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => {
          const next = (prev + 1) % rotatingPhrases.length;
          return next;
        });
      }, 4000);
    }, 2000);

    return () => {
      clearTimeout(delay);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Run GSAP animation when activeIndex changes (skip initial mount)
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

      tl.to(currentSpan, {
        y: "-100%",
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      }).fromTo(
        nextSpan,
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.5, ease: "power2.inOut" },
        "-=0.25",
      );
    }

    prevIndex.current = activeIndex;
  }, [activeIndex]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden pb-24 pt-[18vh]"
    >
      {/* Top bar: logo + location */}
      <div className="hero-topbar absolute top-6 left-6 right-6 z-20 flex items-center justify-between sm:left-12 sm:right-12">
        <Image
          src="/images/projects/L-logo.png"
          alt="Lauf"
          width={38}
          height={38}
          className="rounded-sm"
          unoptimized
        />
        <span className="font-mono text-[11px] tracking-wider text-foreground-secondary uppercase">
          Madison WI — {madisonTime}
        </span>
      </div>

      <div className="relative z-10 px-6 sm:px-12">
        <div className="hero-badge mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 px-4 py-1.5 font-mono text-[10px] tracking-wider text-accent uppercase">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            Now booking for Q2 2026
          </span>
        </div>

        <h1 className="hero-headline max-w-[18ch] text-5xl leading-none tracking-tight sm:text-6xl lg:text-[5.5rem]">
          Design, code, and systems that{" "}
          <span className="relative inline-block overflow-hidden align-bottom">
            {/* Invisible sizer — sets width to widest phrase */}
            <em className="invisible italic">ship faster.</em>
            {rotatingPhrases.map((phrase, i) => (
              <em
                key={phrase}
                ref={(el) => {
                  phraseRefs.current[i] = el;
                }}
                className="absolute inset-x-0 top-0 italic"
                style={{
                  opacity: i === 0 ? 1 : 0,
                  transform: i === 0 ? "translateY(0%)" : "translateY(100%)",
                }}
              >
                {phrase}
              </em>
            ))}
          </span>
        </h1>

        <p className="hero-subtitle mt-8 max-w-xl text-lg leading-relaxed text-foreground-secondary">
          Websites and applications built with modern frameworks. Brand
          identity, visual systems, and digital experiences.
        </p>

        <div className="hero-cta mt-10 flex flex-wrap items-center gap-4">
          <a
            href="mailto:hello@lauf.co"
            className="inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 font-mono text-[11px] tracking-wider text-background uppercase transition-colors hover:bg-foreground/80"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="opacity-60"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            Get in touch
          </a>
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#work")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 font-mono text-[11px] tracking-wider uppercase transition-colors hover:bg-foreground hover:text-background"
          >
            View Work
          </a>
        </div>

        <div className="hero-labels mt-16 flex flex-wrap gap-3">
          {serviceLabels.map((label) => (
            <span
              key={label}
              className="rounded-full border border-border px-4 py-1.5 font-mono text-[10px] tracking-wider text-foreground-secondary uppercase"
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      <HeroProjects />
      <CursorLabels activeIndex={activeIndex} />
    </section>
  );
}
