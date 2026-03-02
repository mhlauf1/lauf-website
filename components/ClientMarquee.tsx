const clients = [
  "Playbook",
  "Stoc Advisory",
  "Brady Digital",
  "Cadence Private Capital",
  "Embark Pet Services",
  "Hound Around Resort",
  "Body Biz",
  "MN Manufacturing",
  "Striano Electric",
];

export default function ClientMarquee() {
  const doubled = [...clients, ...clients];

  return (
    <section className="py-20 sm:py-28">
      <div className="px-6 sm:px-12">
        <p className="text-center text-sm text-foreground-secondary">
          Trusted by <span className="text-foreground">startups</span> and{" "}
          <span className="text-foreground">enterprises</span>
        </p>
      </div>

      <div className="relative mt-10 overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        <div className="flex animate-marquee items-center gap-12 whitespace-nowrap">
          {doubled.map((client, i) => (
            <span
              key={`${client}-${i}`}
              className="font-mono text-sm tracking-wider text-foreground-secondary/50 uppercase"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
