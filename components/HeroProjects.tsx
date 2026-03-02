"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { getSortedProjects } from "@/data/projects";

const projects = getSortedProjects().slice(0, 4);
const CARD_W = 230;
const CARD_H = 170;
const PEEK = 35;

export default function HeroProjects() {
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!stackRef.current) return;
    const cards = stackRef.current.querySelectorAll(".hero-thumb");

    gsap.from(cards, {
      opacity: 0,
      x: 30,
      scale: 0.9,
      duration: 0.7,
      stagger: 0.12,
      ease: "power2.out",
      delay: 0.8,
    });

    gsap.to(stackRef.current, {
      y: -10,
      duration: 4,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: 1.5,
    });
  }, []);

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

  return (
    <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
      <div
        ref={stackRef}
        className="pointer-events-auto absolute bottom-12 right-12"
        style={{ width: 400, height: 260 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {projects.map((project, i) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            aria-label={`View ${project.client} project`}
            className="hero-thumb absolute overflow-hidden rounded-xl shadow-xl transition-shadow hover:shadow-2xl"
            style={{
              width: CARD_W,
              height: CARD_H,
              left: i * 48,
              top: i * 14,
              transform: `rotate(${-3 + i * 2.5}deg)`,
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
          </Link>
        ))}
      </div>
    </div>
  );
}
