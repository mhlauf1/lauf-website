"use client";

import { useState, useCallback, useRef, useEffect } from "react";

const testimonials = [
  {
    quote:
      "The personal attention, availability, and attention to detail made this a great all-around experience. We highly recommend Lauf for any website design or development services.",
    author: "Peter Mark",
    company: "Cadence Private Capital",
  },
  {
    quote:
      "Lauf delivered exceptional service throughout the entire process. We are thrilled with the end product, and we truly believe the new site has played a pivotal role in the continued growth and success of Brady Digital Consulting.",
    author: "Jack Brady",
    company: "Brady Digital Consulting",
  },
  {
    quote:
      "The site is not only beautiful and polished, but it also feels authentic to who we are as a company. We couldn\u2019t be happier with the experience and the end product. Mike and Clare are true pros, and we\u2019d recommend Lauf without hesitation to anyone looking to elevate their online presence.",
    author: "Vincent Striano",
    company: "Striano Electric",
  },
  {
    quote:
      "I\u2019d highly recommend Lauf and Michael to anyone looking for a new or upgraded website. He was fantastic to work with and was very responsive throughout the process. He transformed my run of the mill, self-made Wix website into a first class professional website. I couldn\u2019t be happier with the website he created for me!",
    author: "Adam Mott",
    company: "Minnesota Manufacturing Recruiting",
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
          className="grid h-8 w-8 place-items-center rounded-full bg-accent text-white transition-all hover:bg-accent-hover"
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
          className="grid h-8 w-8 place-items-center rounded-full bg-accent text-white transition-all hover:bg-accent-hover"
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
