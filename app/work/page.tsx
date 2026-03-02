import type { Metadata } from "next";
import { getSortedProjects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import CTA from "@/components/CTA";
import PageAnimator from "@/components/PageAnimator";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects from Lauf Studio — brand identity, web design, and development.",
};

export default function WorkPage() {
  const projects = getSortedProjects();

  return (
    <PageAnimator>
      <section className="pb-16 pt-32 sm:pb-24 sm:pt-44">
        <div className="px-6 sm:px-12">
          <p className="page-heading font-mono text-[11px] tracking-wider text-foreground-secondary uppercase">
            Selected Work
          </p>
          <h1 className="page-subheading mt-2 max-w-2xl text-4xl tracking-tight sm:text-5xl">
            Projects
          </h1>
          <p className="page-subheading mt-6 max-w-xl text-lg text-foreground-secondary">
            A selection of recent projects across brand identity, web design,
            and development.
          </p>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="page-content px-6 sm:px-12">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </PageAnimator>
  );
}
