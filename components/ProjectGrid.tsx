import ProjectCard from "./ProjectCard";
import { getSortedProjects } from "@/data/projects";

export default function ProjectGrid() {
  const projects = getSortedProjects();

  return (
    <section className="py-10 sm:py-12">
      <div className="px-6 sm:px-12">
        <div className="grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
