import type { Project } from "@/data/projects";

export default function CaseStudyHeader({ project }: { project: Project }) {
  return (
    <header className="pb-16 pt-32 sm:pb-24 sm:pt-44">
      <div className="px-6 sm:px-12">
        <div className="flex flex-wrap gap-2">
          {project.scope.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-3 py-1 text-xs text-foreground-secondary"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="mt-6 text-3xl font-medium leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
          {project.title}
        </h1>

        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm text-foreground-secondary">
          <span>Client: {project.client}</span>
          <span>Year: {project.year}</span>
        </div>

        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm text-foreground-secondary transition-colors hover:text-foreground"
          >
            Visit Site <span aria-hidden="true">&rarr;</span>
          </a>
        )}
      </div>
    </header>
  );
}
