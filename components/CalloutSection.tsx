"use client";

import TransitionLink from "./TransitionLink";
import type { CaseStudySection } from "@/data/projects";

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export default function CalloutSection({
  section,
}: {
  section: CaseStudySection;
}) {
  if (!section.callout) return null;

  const { text, linkText, linkHref, links } = section.callout;

  return (
    <div className="cs-section border-t border-border py-12">
      <p className="max-w-2xl text-foreground-secondary leading-relaxed">
        {text}
      </p>
      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
        {links ? (
          links.map((link, i) => (
            <TransitionLink
              key={i}
              href={link.linkHref}
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:opacity-70 transition-opacity"
            >
              {link.linkText}
              <ArrowIcon />
            </TransitionLink>
          ))
        ) : (
          <TransitionLink
            href={linkHref}
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:opacity-70 transition-opacity"
          >
            {linkText}
            <ArrowIcon />
          </TransitionLink>
        )}
      </div>
    </div>
  );
}
