"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current && currentY > 200) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!navRef.current) return;
    gsap.to(navRef.current, {
      y: hidden ? 100 : 0,
      duration: 0.4,
      ease: "power2.out",
    });
  }, [hidden]);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      ref={navRef}
      className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
    >
      <div className="flex items-center gap-1 rounded-full bg-foreground/95 px-2 py-2 shadow-2xl backdrop-blur-md">
        <a
          href="/"
          className="px-4 py-2 font-mono text-[11px] tracking-wider text-background/60 uppercase transition-colors hover:text-background"
        >
          Lauf
        </a>

        <div className="mx-1 h-4 w-px bg-background/10" />

        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => scrollTo(e, link.href)}
            className="rounded-full px-4 py-2 font-mono text-[11px] tracking-wider text-background/60 uppercase transition-colors hover:bg-background/10 hover:text-background"
          >
            {link.label}
          </a>
        ))}

        <div className="mx-1 h-4 w-px bg-background/10" />

        <a
          href="mailto:hello@lauf.co"
          className="rounded-full bg-accent px-4 py-2 font-mono text-[11px] tracking-wider text-white uppercase transition-colors hover:bg-accent-hover"
        >
          Get in touch
        </a>
      </div>
    </nav>
  );
}
