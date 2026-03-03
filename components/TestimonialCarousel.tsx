"use client";

import { useState, useCallback, useRef, useEffect } from "react";

const testimonials = [
  {
    quote:
      "Michael and Clare made the entire process effortless. They took our vision and turned it into something far better than we imagined.",
    author: "Jordan Brady",
    company: "Brady Digital Consulting",
  },
  {
    quote:
      "Working directly with the people building your site makes all the difference. No layers, no miscommunication — just great work.",
    author: "Ryan Cadence",
    company: "Cadence Private Capital",
  },
  {
    quote:
      "They understood our brand immediately and delivered a site that actually wins us business. Best investment we've made.",
    author: "Alex Stoc",
    company: "Stoc Advisory",
  },
  {
    quote:
      "Lauf brought a level of craft and attention we didn't expect. Every detail was considered.",
    author: "Sam Embark",
    company: "Embark Pet Services",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const go = useCallback(
    (dir: 1 | -1) => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      timeoutRef.current = setTimeout(() => {
        setCurrent(
          (c) => (c + dir + testimonials.length) % testimonials.length
        );
        setAnimating(false);
      }, 200);
    },
    [animating]
  );

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const t = testimonials[current];

  return (
    <div className="max-w-md">
      <div className="mb-5 flex gap-1.5">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`h-0.5 w-6 rounded-full transition-colors duration-300 ${
              i === current ? "bg-foreground" : "bg-foreground/15"
            }`}
          />
        ))}
      </div>

      <div
        className="transition-all duration-200 ease-out"
        style={{
          opacity: animating ? 0 : 1,
          transform: animating
            ? `translateY(${direction * 6}px)`
            : "translateY(0)",
        }}
      >
        <p className="text-base leading-relaxed">
          &ldquo;{t.quote}&rdquo;
        </p>
        <div className="mt-4 flex items-center gap-2">
          <span className="text-sm font-medium">{t.author}</span>
          <span className="text-foreground-secondary">&mdash;</span>
          <span className="text-sm text-foreground-secondary">
            {t.company}
          </span>
        </div>
      </div>

      <div className="mt-5 flex items-center gap-1">
        <button
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
          className="grid h-8 w-8 place-items-center rounded-full border border-foreground/10 text-foreground-secondary transition-all hover:border-foreground/30 hover:text-foreground"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 12L6 8L10 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          onClick={() => go(1)}
          aria-label="Next testimonial"
          className="grid h-8 w-8 place-items-center rounded-full border border-foreground/10 text-foreground-secondary transition-all hover:border-foreground/30 hover:text-foreground"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 4L10 8L6 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
