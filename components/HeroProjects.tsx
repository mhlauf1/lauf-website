"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import TransitionLink from "./TransitionLink";
import { gsap } from "@/lib/gsap";
import { useTransitionReady } from "./PageTransitionProvider";
import { getSortedProjects } from "@/data/projects";

const projects = getSortedProjects().slice(0, 4);
const CARD_W = 230;
const CARD_H = 170;
const PEEK = 35;
const GAP = 16; // px gap between marquee cards

export default function HeroProjects() {
  const stackRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  const ready = useTransitionReady();

  // Desktop stacked fan animation
  useEffect(() => {
    if (!ready || hasAnimated.current || !stackRef.current) return;

    hasAnimated.current = true;
    const cards = stackRef.current.querySelectorAll(".hero-thumb");

    gsap.to(cards, {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 0.5,
      stagger: 0.08,
      ease: "power2.out",
    });

    gsap.to(stackRef.current, {
      y: -10,
      duration: 4,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: 0.6,
    });
  }, [ready]);

  // Mobile infinite marquee
  useEffect(() => {
    if (!ready || !trackRef.current || !marqueeRef.current) return;

    // Measure one set of cards (first half of duplicated list)
    const cards = trackRef.current.querySelectorAll<HTMLElement>(".marquee-card");
    const oneSetCount = projects.length;
    let oneSetWidth = 0;
    for (let i = 0; i < oneSetCount; i++) {
      oneSetWidth += cards[i].offsetWidth + GAP;
    }

    // Fade in the marquee
    gsap.fromTo(
      marqueeRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6, delay: 0.3, ease: "power2.out" },
    );

    // Infinite scroll: animate x from 0 to -oneSetWidth, then seamlessly loop
    gsap.fromTo(
      trackRef.current,
      { x: 0 },
      {
        x: -oneSetWidth,
        duration: 45,
        ease: "none",
        repeat: -1,
      },
    );
  }, [ready]);

  const handleMouseEnter = () => {
    if (!stackRef.current) return;
    const cards = stackRef.current.querySelectorAll<HTMLElement>(".hero-thumb");
    cards.forEach((card, i) => {
      gsap.to(card, {
        y: -(projects.length - 1 - i) * PEEK,
        rotation: 0,
        duration: 0.4,
        ease: "power2.out",
        overwrite: true,
      });
      const label = card.querySelector(".card-label");
      if (label)
        gsap.to(label, {
          opacity: 1,
          duration: 0.3,
          delay: 0.1,
          overwrite: true,
        });
    });
  };

  const handleMouseLeave = () => {
    if (!stackRef.current) return;
    const cards = stackRef.current.querySelectorAll<HTMLElement>(".hero-thumb");
    cards.forEach((card, i) => {
      gsap.to(card, {
        y: i * 14,
        rotation: -3 + i * 2.5,
        duration: 0.35,
        ease: "power2.inOut",
        overwrite: true,
      });
      const label = card.querySelector(".card-label");
      if (label) gsap.to(label, { opacity: 0, duration: 0.2, overwrite: true });
    });
  };

  // Duplicate projects for seamless loop
  const marqueeItems = [...projects, ...projects];

  return (
    <>
      {/* Mobile — infinite horizontal marquee */}
      <div
        ref={marqueeRef}
        className="absolute inset-x-0 bottom-16 overflow-hidden opacity-0 lg:hidden"
      >
        <div
          ref={trackRef}
          className="flex w-max"
          style={{ gap: GAP }}
        >
          {marqueeItems.map((project, i) => (
            <TransitionLink
              key={`${project.slug}-${i}`}
              href={`/work/${project.slug}`}
              aria-label={`View ${project.client} project`}
              className="marquee-card relative block flex-shrink-0 overflow-hidden rounded-xl shadow-lg"
              style={{ width: "57vw", aspectRatio: "4 / 3" }}
            >
              <Image
                src={project.thumbnail}
                alt={project.client}
                fill
                className="object-cover"
                sizes="57vw"
              />
              <span className="absolute inset-x-0 bottom-0 flex items-end bg-gradient-to-t from-black/60 to-transparent px-3 pb-2.5 pt-8 font-mono text-[10px] tracking-wider text-white/90 uppercase">
                {project.client}
              </span>
            </TransitionLink>
          ))}
        </div>
      </div>

      {/* Desktop — stacked fan */}
      <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
        <div
          ref={stackRef}
          className="pointer-events-auto absolute bottom-12 right-12"
          style={{ width: 400, height: 260 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {projects.map((project, i) => (
            <TransitionLink
              key={project.slug}
              href={`/work/${project.slug}`}
              aria-label={`View ${project.client} project`}
              className="hero-thumb absolute overflow-hidden rounded-xl shadow-xl transition-shadow hover:shadow-2xl"
              style={{
                width: CARD_W,
                height: CARD_H,
                left: i * 48,
                top: i * 14,
                transform: `rotate(${-3 + i * 2.5}deg) translateX(30px) scale(0.9)`,
                opacity: 0,
                zIndex: i,
              }}
            >
              <Image
                src={project.thumbnail}
                alt={project.client}
                fill
                className="object-cover"
                sizes="230px"
              />
              <span className="card-label pointer-events-none absolute inset-x-0 bottom-0 flex items-end bg-gradient-to-t from-black/70 to-transparent px-3 pb-2 pt-8 font-mono text-[10px] tracking-wider text-white uppercase opacity-0">
                {project.client}
              </span>
            </TransitionLink>
          ))}
        </div>
      </div>
    </>
  );
}
