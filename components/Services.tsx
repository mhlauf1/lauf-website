"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const services = [
  {
    number: "01",
    title: "Design",
    description:
      "We work together to shape how your online presense looks, feels, and communicates. From visual identity to interface design, every system built to scale.",
    tags: [
      "Web & Mobile Design",
      "UI/UX Design",
      "Brand Identity",
      "Design Systems",
      "Art Direction",
      "Motion Design",
    ],
  },
  {
    number: "02",
    title: "Development",
    description:
      "We build fast, accessible websites and applications using modern frameworks. Clean code, thoughtful architecture, and performance you can measure.",
    tags: [
      "Websites & Apps",
      "Next.js",
      "React",
      "Full-Stack",
      "Applications",
      "CMS Integration",
      "Email Systems",
    ],
  },
  {
    number: "03",
    title: "Strategy & Systems",
    description:
      "We help companies replace outdated websites, email systems, and tools with modern solutions that perform better, look better, and save real time and money.",
    tags: ["Positioning", "Content Strategy", "Digital Roadmaps", "Consulting"],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll(".service-card");

    gsap.set(cards, { opacity: 0, y: 50 });

    const anims = Array.from(cards).map((card) =>
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        },
      ),
    );

    return () => {
      anims.forEach((a) => {
        a.scrollTrigger?.kill();
        a.kill();
      });
    };
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-10 sm:py-12">
      <div className="px-6 sm:px-12">
        {/* Section header */}
        <div className="mb-8 md:mb-10">
          <p className="font-mono text-[11px] tracking-wider text-foreground-secondary uppercase">
            What we do
          </p>
          <h2 className="mt-2 md:mt-3 max-w-2xl text-4xl tracking-tight sm:text-5xl">
            Services
          </h2>
          <p className="mt-4 max-w-xl text-lg text-foreground-secondary">
            We adapt our approach to each client, to deliver value in every
            project.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.number}
              className="service-card rounded-2xl border border-border bg-background p-8"
            >
              <span className="font-mono text-sm text-foreground-secondary">
                {service.number}
              </span>
              <h3 className="mt-4 font-sans text-2xl font-medium tracking-tight">
                {service.title}
              </h3>
              <p className="mt-4 leading-relaxed text-foreground-secondary">
                {service.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-3 py-1 font-mono text-[10px] tracking-wider text-foreground-secondary uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
