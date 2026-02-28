"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const navLinks = [
  { href: "/", label: "Work" },
  { href: "/about", label: "About" },
];

function getActiveHref(pathname: string) {
  if (pathname.startsWith("/work") || pathname === "/") return "/";
  if (pathname.startsWith("/about")) return "/about";
  return "/";
}

export default function Nav() {
  const pathname = usePathname();
  const activeHref = getActiveHref(pathname);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-4 sm:px-12">
        {/* Left — Logo + subtitle */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="font-mono text-[12px]  tracking-wide uppercase"
            onClick={() => setMobileOpen(false)}
          >
            Lauf Studio
          </Link>
          <span className="hidden font-mono text-[10px] tracking-wide text-foreground-secondary uppercase sm:block">
            Design + Development
          </span>
        </div>

        {/* Center — Nav links (desktop) */}
        <div className="relative hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative py-1 font-mono text-[11px] tracking-wide uppercase transition-colors duration-200 hover:text-foreground ${
                activeHref === link.href
                  ? "text-accent"
                  : "text-foreground-secondary"
              }`}
            >
              {link.label}
              {activeHref === link.href && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-px bg-accent"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Right — Contact button (desktop) + hamburger (mobile) */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden rounded-full border border-foreground/30 px-4 py-1.5 font-mono text-[11px] tracking-wide uppercase transition-colors duration-200 hover:bg-foreground hover:text-background md:block"
          >
            Contact
          </Link>

          {/* Hamburger */}
          <button
            className="relative flex h-6 w-6 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="block h-px w-5 bg-foreground"
              animate={
                mobileOpen ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-px w-5 bg-foreground"
              animate={
                mobileOpen ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden border-t border-border md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6 sm:px-12">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-mono text-xs tracking-wide text-foreground-secondary uppercase transition-colors hover:text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="font-mono text-xs tracking-wide text-foreground-secondary uppercase transition-colors hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
