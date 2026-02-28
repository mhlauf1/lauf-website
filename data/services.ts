export interface Service {
  category: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    category: "01",
    title: "Design",
    description:
      "Brand identity, visual systems, and digital experiences.",
  },
  {
    category: "02",
    title: "Development",
    description:
      "Websites and applications built with modern frameworks.",
  },
  {
    category: "03",
    title: "Systems",
    description:
      "Component libraries and documentation that scale.",
  },
  {
    category: "04",
    title: "Strategy",
    description:
      "Positioning, content strategy, and digital roadmaps.",
  },
];
