import ProjectCard from "./ProjectCard";
import { getSortedProjects } from "@/data/projects";

export default function ProjectGrid() {
  const projects = getSortedProjects();

  return (
    <section id="work" className="py-16 sm:py-16">
      <div className="px-6 sm:px-12">
        {/* Section header */}
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="font-mono text-[11px] tracking-wider text-foreground-secondary uppercase">
              Selected works
            </p>
          </div>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
