"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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

export default function TopBar() {
  const madisonTime = useMadisonTime();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-background/70 px-6 py-4 backdrop-blur-sm sm:px-12">
      <TransitionLink href="/">
        <Image
          src="/images/projects/L-logo.png"
          alt="Lauf"
          width={38}
          height={38}
          className="rounded-sm"
          unoptimized
        />
      </TransitionLink>

      {/* Desktop: Madison time */}
      <span className="hidden font-mono text-[11px] tracking-wider text-foreground-secondary uppercase md:block">
        Madison WI — {madisonTime}
      </span>

      {/* Mobile: Hamburger button */}
      <button
        onClick={() => window.dispatchEvent(new CustomEvent("open-mobile-nav"))}
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        aria-label="Open menu"
      >
        <span className="block h-px w-5 bg-foreground" />
        <span className="block h-px w-5 bg-foreground" />
      </button>
    </div>
  );
}
