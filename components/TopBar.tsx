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
    <div className="fixed top-6 left-6 right-6 z-50 flex items-center justify-between sm:left-12 sm:right-12">
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

      <span className="font-mono text-[11px] tracking-wider text-foreground-secondary uppercase">
        Madison WI — {madisonTime}
      </span>
    </div>
  );
}
