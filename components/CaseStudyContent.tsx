import ImagePlaceholder from "./ImagePlaceholder";
import type { Project } from "@/data/projects";

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="cs-section grid grid-cols-1 gap-4 py-12 sm:grid-cols-[200px_1fr] sm:gap-12">
      <h2 className="text-sm font-medium text-foreground-secondary">
        {label}
      </h2>
      <div>{children}</div>
    </div>
  );
}

export default function CaseStudyContent({ project }: { project: Project }) {
  return (
    <div className="px-6 sm:px-12">
      <div className="cs-hero-image">
        <ImagePlaceholder
          aspectRatio="16/9"
          label={`${project.client} — Hero`}
          className="w-full"
          gradient={project.gradient}
          src={project.heroImage}
          alt={project.client}
          sizes="100vw"
        />
      </div>

      <div className="mt-16 divide-y divide-border sm:mt-24">
        {project.overview && (
          <Section label="Overview">
            <p className="max-w-2xl text-lg leading-relaxed">
              {project.overview}
            </p>
          </Section>
        )}

        {project.challenge && (
          <Section label="Challenge">
            <p className="max-w-2xl leading-relaxed text-foreground-secondary">
              {project.challenge}
            </p>
          </Section>
        )}

        {project.approach && (
          <Section label="Approach">
            <p className="max-w-2xl leading-relaxed text-foreground-secondary">
              {project.approach}
            </p>
          </Section>
        )}

        {project.images.length > 0 && (
          <div className="cs-section grid grid-cols-1 gap-4 py-12 sm:grid-cols-2">
            {project.images.map((img, i) => (
              <div key={i} className="cs-grid-image">
                <ImagePlaceholder
                  aspectRatio="4/3"
                  label={`${project.client} — ${i + 1}`}
                  gradient={project.gradient}
                />
              </div>
            ))}
          </div>
        )}

        {project.results.length > 0 && (
          <Section label="Results">
            <ul className="max-w-2xl space-y-2">
              {project.results.map((result, i) => (
                <li key={i} className="text-foreground-secondary">
                  {result}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {project.testimonial && (
          <Section label="Testimonial">
            <blockquote className="max-w-2xl border-l-2 border-foreground pl-6">
              <p className="text-lg italic leading-relaxed">
                &ldquo;{project.testimonial.quote}&rdquo;
              </p>
              <footer className="mt-4 text-sm text-foreground-secondary">
                {project.testimonial.author}, {project.testimonial.role}
              </footer>
            </blockquote>
          </Section>
        )}
      </div>
    </div>
  );
}
