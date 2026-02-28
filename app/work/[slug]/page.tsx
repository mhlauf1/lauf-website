import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, getProjectBySlug, getAdjacentProjects } from "@/data/projects";
import ScrollProgress from "@/components/ScrollProgress";
import CaseStudyHeader from "@/components/CaseStudyHeader";
import CaseStudyContent from "@/components/CaseStudyContent";
import ProjectNav from "@/components/ProjectNav";
import CTA from "@/components/CTA";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  return {
    title: `${project.client} — ${project.title}`,
    description: project.overview,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <>
      <ScrollProgress />
      <CaseStudyHeader project={project} />
      <CaseStudyContent project={project} />
      <CTA />
      <ProjectNav prev={prev} next={next} />
    </>
  );
}
