import Link from "next/link";
import type { Project } from "@/data/projects";

interface ProjectNavProps {
  prev: Project | null;
  next: Project | null;
}

export default function ProjectNav({ prev, next }: ProjectNavProps) {
  return (
    <nav className="border-t border-border">
      <div className="grid grid-cols-2 px-6 sm:px-12">
        {prev ? (
          <Link
            href={`/work/${prev.slug}`}
            className="group py-12 pr-4 transition-transform hover:-translate-x-1"
          >
            <span className="text-sm text-foreground-secondary">Previous</span>
            <p className="mt-1 font-medium transition-colors group-hover:text-accent">
              {prev.client}
            </p>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/work/${next.slug}`}
            className="group border-l border-border py-12 pl-4 text-right transition-transform hover:translate-x-1"
          >
            <span className="text-sm text-foreground-secondary">Next</span>
            <p className="mt-1 font-medium transition-colors group-hover:text-accent">
              {next.client}
            </p>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </nav>
  );
}
