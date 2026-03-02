import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import Services from "@/components/Services";
import ClientMarquee from "@/components/ClientMarquee";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectGrid />
      <Services />
      <ClientMarquee />
      <Contact />
    </>
  );
}
