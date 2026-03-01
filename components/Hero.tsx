import { services } from "@/data/services";

const MARQUEE_WORDS = [
  "Design Systems",
  "Brand Identity",
  "Next.js",
  "React",
  "UI/UX",
  "Typography",
  "Motion Design",
  "Full-Stack",
  "Tailwind CSS",
  "Visual Systems",
  "Web Performance",
  "Component Libraries",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-[20vh] md:pt-[35vh]">
      <div
        className="absolute inset-x-0 top-[15%] md:top-[30%] z-0 -rotate-2 pointer-events-none"
        aria-hidden="true"
      >
        <div className="bg-yellow-500 py-3 -mx-[10vw] overflow-hidden">
          <div className="flex w-max animate-marquee whitespace-nowrap">
            {[0, 1].map((i) => (
              <span key={i} className="flex items-center">
                {MARQUEE_WORDS.map((word) => (
                  <span key={`${i}-${word}`} className="flex items-center">
                    <span className="font-mono text-[11px] tracking-widest uppercase text-black/90">
                      {word}
                    </span>
                    <span className="mx-4 font-mono text-[11px] text-white/30">
                      ·
                    </span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-20 px-6 sm:px-12">
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-[1fr_1fr]">
          <h1 className="text-4xl font-light leading-[1.15] max-w-[24ch] tracking-tight sm:text-5xl lg:text-[3.5rem]">
            Design, code, and systems for{" "}
            <em className="font-light italic">companies in motion.</em>
          </h1>

          <div className="border-t border-border">
            {services.map((service) => (
              <div
                key={service.category}
                className="grid grid-cols-[40px_1fr_2fr] gap-4 border-b border-border py-3 text-sm"
              >
                <span className="text-foreground-secondary">
                  {service.category}
                </span>
                <span className="font-medium">{service.title}</span>
                <span className="text-foreground-secondary">
                  {service.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
