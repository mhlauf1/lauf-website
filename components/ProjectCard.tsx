import Link from "next/link";
import ImagePlaceholder from "./ImagePlaceholder";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block"
      data-cursor="case-study"
    >
      <div className="relative overflow-hidden">
        <ImagePlaceholder
          aspectRatio="3/2"
          label={project.client}
          gradient={project.gradient}
          src={project.thumbnail}
          alt={project.client}
        />
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
      </div>
      <div className="mt-3 flex items-baseline justify-between gap-4">
        <h3 className="text-sm font-medium transition-colors group-hover:text-foreground">
          {project.title}
        </h3>
        <span className="shrink-0 text-xs tracking-wide text-foreground-secondary uppercase">
          {project.client} &middot; {project.scope[0]} {project.year}
        </span>
      </div>
    </Link>
  );
}
