"use client";

import { useEffect, useState } from "react";

function LocalTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "America/Chicago",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }),
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  return (
    <span className="font-mono text-xs tabular-nums text-foreground-secondary">
      {time} CST
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="border-t mb-4 border-border">
      <div className="px-6 py-8 sm:px-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {/* Left — Copyright */}
          <div>
            <p className="font-mono text-[11px] tracking-wider uppercase">
              Lauf Studio
            </p>
            <p className="mt-2 text-sm text-foreground-secondary">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Center — Location + Time */}
          <div>
            <p className="text-sm text-foreground-secondary">
              Madison, Wisconsin
            </p>
            <div className="mt-2">
              <LocalTime />
            </div>
          </div>

          {/* Right — Links */}
          <div className="flex flex-col gap-2 sm:items-end">
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-sm text-foreground-secondary transition-colors hover:text-foreground"
            >
              X / Twitter
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-sm text-foreground-secondary transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
            <a
              href="/privacy"
              className="link-underline text-sm text-foreground-secondary transition-colors hover:text-foreground"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
