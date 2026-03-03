"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import type { Project } from "@/data/projects";
import MinnesotaManufacturing from "./MinnesotaManufacturing";

export default function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    const el = cardRef.current;

    const isDesktop = window.innerWidth >= 768;
    const isFirstRow = index < 2;

    // First 2 cards on desktop: animate in with the hero instead of on scroll
    if (isDesktop && isFirstRow) {
      const anim = gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        delay: 0.7 + index * 0.1,
      });
      return () => anim.kill();
    }

    const anim = gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      delay: index % 2 === 0 ? 0 : 0.1,
      scrollTrigger: {
        trigger: el,
        start: isDesktop ? "top 85%" : "top 98%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, [index]);

  // Intersection Observer: play/pause video when in/out of viewport
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const bgImage = project.videoBg || project.thumbnail;

  return (
    <a
      ref={cardRef}
      href={project.url || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="group block cursor-pointer"
      style={{ opacity: 0, transform: "translateY(30px)" }}
    >
      <div className="relative aspect-16/9 overflow-hidden rounded-lg">
        {project.slug === "mn-manufacturing-recruiting" ? (
          <MinnesotaManufacturing compact />
        ) : project.video ? (
          <>
            <Image
              src={bgImage}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={90}
            />
            <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
              <video
                ref={videoRef}
                src={project.video}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full rounded-lg object-cover shadow-xl"
              />
            </div>
          </>
        ) : (
          <>
            <Image
              src={project.thumbnail}
              alt={project.client}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={90}
            />
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/5" />
          </>
        )}
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="font-sans text-xl md:text-2xl  tracking-tight">
            {project.client}
          </p>
          <p className="text-foreground-secondary/80 text-base md:text-lg">
            {project.title}
          </p>
        </div>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="mt-1 shrink-0 text-foreground-secondary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
        >
          <path d="M7 17L17 7M17 7H7M17 7v10" />
        </svg>
      </div>

      <div className="mt-2 flex flex-wrap gap-1.5">
        {project.scope.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] md:text-[11px] tracking-wider text-foreground-secondary uppercase"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}
