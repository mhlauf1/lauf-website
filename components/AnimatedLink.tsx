"use client";

import TransitionLink from "./TransitionLink";
import { cn } from "@/lib/utils";

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export default function AnimatedLink({
  href,
  children,
  className,
  external,
}: AnimatedLinkProps) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn("link-underline", className)}
      >
        {children}
      </a>
    );
  }

  return (
    <TransitionLink href={href} className={cn("link-underline", className)}>
      {children}
    </TransitionLink>
  );
}
