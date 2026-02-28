import { services } from "@/data/services";

export default function Hero() {
  return (
    <section className="pt-[20vh] md:pt-[35vh]">
      <div className="px-6 sm:px-12">
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
