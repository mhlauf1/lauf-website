import ImagePlaceholder from "./ImagePlaceholder";
import CalloutSection from "./CalloutSection";
import type { Project, CaseStudySection } from "@/data/projects";

function Section({
  label,
  children,
  stickyLabel,
}: {
  label: string;
  children: React.ReactNode;
  stickyLabel?: boolean;
}) {
  return (
    <div className="cs-section grid grid-cols-1 gap-4 py-12 sm:grid-cols-[200px_1fr] sm:gap-12">
      <h2
        className={`text-sm font-medium text-foreground-secondary ${stickyLabel ? "sm:sticky sm:top-32 sm:self-start" : ""}`}
      >
        {label}
      </h2>
      <div>{children}</div>
    </div>
  );
}

/* ── Section renderers for the new sections system ── */

function TextSection({ section }: { section: CaseStudySection }) {
  return (
    <Section label={section.label}>
      {section.paragraphs?.map((p, i) => (
        <p key={i} className="max-w-2xl text-lg leading-relaxed">
          {p}
        </p>
      ))}
    </Section>
  );
}

function RichSection({
  section,
  gradient,
}: {
  section: CaseStudySection;
  gradient: string;
}) {
  return (
    <Section label={section.label} stickyLabel>
      <div className="space-y-12">
        {section.subsections?.map((sub, i) => (
          <div key={i}>
            <h3 className="mb-4 text-base font-semibold">{sub.heading}</h3>
            {sub.paragraphs.map((p, j) => (
              <p
                key={j}
                className="mb-4 max-w-2xl leading-relaxed text-foreground-secondary"
              >
                {p}
              </p>
            ))}
            {sub.image && (
              <div className="cs-grid-image mt-6">
                <ImagePlaceholder
                  aspectRatio={sub.image.aspectRatio || "16/9"}
                  label={sub.image.alt}
                  gradient={gradient}
                  src={sub.image.src}
                  alt={sub.image.alt}
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

function GallerySection({
  section,
  gradient,
}: {
  section: CaseStudySection;
  gradient: string;
}) {
  return (
    <div className="cs-section grid grid-cols-1 gap-4 py-12 sm:grid-cols-2">
      {section.images?.map((img, i) => (
        <div
          key={i}
          className={`cs-grid-image ${img.layout === "full" ? "sm:col-span-2" : ""}`}
        >
          <ImagePlaceholder
            aspectRatio={img.aspectRatio || "4/3"}
            label={img.alt}
            gradient={gradient}
            src={img.src}
            alt={img.alt}
            sizes={
              img.layout === "full"
                ? "100vw"
                : "(max-width: 768px) 100vw, 50vw"
            }
          />
        </div>
      ))}
    </div>
  );
}

function ResultsSection({ section }: { section: CaseStudySection }) {
  return (
    <Section label={section.label}>
      <ul className="max-w-2xl space-y-2">
        {section.items?.map((item, i) => (
          <li key={i} className="text-foreground-secondary">
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}

function TestimonialSection({ section }: { section: CaseStudySection }) {
  if (!section.testimonial) return null;
  return (
    <Section label={section.label}>
      <blockquote className="max-w-2xl border-l-2 border-foreground pl-6">
        <p className="text-lg italic leading-relaxed">
          &ldquo;{section.testimonial.quote}&rdquo;
        </p>
        <footer className="mt-4 text-sm text-foreground-secondary">
          {section.testimonial.author}, {section.testimonial.role}
        </footer>
      </blockquote>
    </Section>
  );
}

/* ── Section router ── */

function SectionRenderer({
  section,
  gradient,
}: {
  section: CaseStudySection;
  gradient: string;
}) {
  switch (section.type) {
    case "text":
      return <TextSection section={section} />;
    case "rich":
      return <RichSection section={section} gradient={gradient} />;
    case "gallery":
      return <GallerySection section={section} gradient={gradient} />;
    case "results":
      return <ResultsSection section={section} />;
    case "testimonial":
      return <TestimonialSection section={section} />;
    case "callout":
      return <CalloutSection section={section} />;
    default:
      return null;
  }
}

/* ── Main component ── */

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

      {project.sections ? (
        /* ── New flexible sections layout ── */
        <div className="mt-16 divide-y divide-border sm:mt-24">
          {project.sections.map((section, i) => (
            <SectionRenderer
              key={i}
              section={section}
              gradient={project.gradient}
            />
          ))}
        </div>
      ) : (
        /* ── Legacy hardcoded layout ── */
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
      )}
    </div>
  );
}
