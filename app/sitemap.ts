import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = projects.map((project) => ({
    url: `https://lauf.co/work/${project.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: "https://lauf.co", lastModified: new Date() },
    { url: "https://lauf.co/about", lastModified: new Date() },
    { url: "https://lauf.co/contact", lastModified: new Date() },
    ...projectRoutes,
  ];
}
