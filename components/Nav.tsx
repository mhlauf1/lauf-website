"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "@/lib/gsap";
import TransitionLink from "./TransitionLink";

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

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const madisonTime = useMadisonTime();
  const lastScrollY = useRef(0);

  // Listen for hamburger tap from TopBar
  useEffect(() => {
    const handler = () => {
      // Force a fresh open even if already true
      setMenuOpen(false);
      requestAnimationFrame(() => setMenuOpen(true));
    };
    window.addEventListener("open-mobile-nav", handler);
    return () => window.removeEventListener("open-mobile-nav", handler);
  }, []);

  // Scroll hide/show for desktop pill bar
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

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Slide panel in/out
  useEffect(() => {
    if (!panelRef.current || !backdropRef.current) return;

    // Kill any in-flight tweens so animations never conflict
    gsap.killTweensOf(panelRef.current);
    gsap.killTweensOf(backdropRef.current);

    if (menuOpen) {
      gsap.set(backdropRef.current, { display: "block", opacity: 0 });
      gsap.set(panelRef.current, { x: "100%" });
      gsap.to(backdropRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(panelRef.current, {
        x: 0,
        duration: 0.4,
        ease: "power3.out",
      });
    } else {
      gsap.to(panelRef.current, {
        x: "100%",
        duration: 0.3,
        ease: "power2.in",
      });
      gsap.to(backdropRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          if (backdropRef.current) {
            gsap.set(backdropRef.current, { display: "none" });
          }
        },
      });
    }
  }, [menuOpen]);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <>
      {/* ── Desktop pill bar (md+) ── */}
      <nav
        ref={navRef}
        className="fixed bottom-6 left-0 right-0 z-50 hidden justify-center px-4 md:flex"
      >
        <div className="flex items-center gap-1 rounded-full bg-foreground/95 py-1.5 px-1.5 shadow-2xl backdrop-blur-md">
          {navLinks.map((link) => (
            <TransitionLink
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 font-mono text-[11px] tracking-wider text-background/80 uppercase transition-colors hover:bg-background/10 hover:text-background"
            >
              {link.label}
            </TransitionLink>
          ))}

          <div className="mx-0.5 h-4 w-px bg-background/10" />

          <TransitionLink
            href="/contact"
            className="whitespace-nowrap rounded-full bg-accent px-5 py-2.5 font-mono text-[11px] tracking-wider text-white uppercase transition-colors hover:bg-accent-hover"
          >
            Get in touch
          </TransitionLink>
        </div>
      </nav>

      {/* ── Mobile backdrop ── */}
      <div
        ref={backdropRef}
        onClick={closeMenu}
        className="fixed inset-0 z-50 bg-foreground/50 backdrop-blur-sm md:hidden"
        style={{ display: "none", opacity: 0 }}
      />

      {/* ── Mobile slide-in panel ── */}
      <div
        ref={panelRef}
        className="fixed top-0 right-0 bottom-0 z-60 flex w-72 translate-x-full flex-col bg-foreground shadow-2xl md:hidden"
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button
            onClick={closeMenu}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10"
            aria-label="Close menu"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="text-background"
            >
              <path
                d="M1 1L15 15M15 1L1 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-1 flex-col gap-1 px-6 pt-4">
          {navLinks.map((link) => (
            <TransitionLink
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="py-3 text-lg text-background/80 transition-colors hover:text-background"
            >
              {link.label}
            </TransitionLink>
          ))}
        </nav>

        {/* Bottom section */}
        <div className="px-6 pb-6">
          <span className="mb-4 block font-mono text-[11px] tracking-wider text-background/40">
            Madison WI — {madisonTime}
          </span>
          <TransitionLink
            href="/contact"
            onClick={closeMenu}
            className="block rounded-full bg-accent px-6 py-3 text-center font-mono text-xs tracking-wider text-white uppercase transition-colors hover:bg-accent-hover"
          >
            Get in touch
          </TransitionLink>
        </div>
      </div>
    </>
  );
}
