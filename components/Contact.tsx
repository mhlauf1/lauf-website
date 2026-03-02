"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const items = sectionRef.current.querySelectorAll(".contact-reveal");

    const anim = gsap.from(items, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-24 sm:py-40">
      <div className="px-6 sm:px-12">
        <h2 className="contact-reveal max-w-3xl text-4xl tracking-tight sm:text-5xl lg:text-6xl">
          Great design begins with a conversation.{" "}
          <em className="italic text-foreground-secondary">Start one today.</em>
        </h2>

        <div className="contact-reveal mt-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 px-4 py-1.5 font-mono text-[10px] tracking-wider text-accent uppercase">
            <span className="inline-block h-2 w-2 rounded-full bg-accent animate-pulse" />
            Now booking for Q2 2026
          </span>
        </div>

        <div className="contact-reveal mt-12 flex flex-wrap gap-4">
          <a
            href="mailto:hello@lauf.co"
            className="inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 font-mono text-[11px] tracking-wider text-background uppercase transition-colors hover:bg-foreground/80"
          >
            Let&apos;s Talk
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="mailto:hello@lauf.co"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-8 py-4 font-mono text-[11px] tracking-wider uppercase transition-colors hover:bg-foreground hover:text-background"
          >
            Send a message
          </a>
        </div>

        <p className="contact-reveal mt-8 text-sm text-foreground-secondary">
          hello@lauf.co
        </p>
      </div>
    </section>
  );
}
