export default function CTA() {
  return (
    <section className="py-24 sm:py-32">
      <div className="px-6 sm:px-12">
        <h2 className="max-w-2xl text-3xl tracking-tight sm:text-4xl">
          Have a project in mind?
        </h2>
        <p className="mt-4 text-lg text-foreground-secondary">
          We&apos;d love to hear about it. Let&apos;s talk.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:hello@lauf.co"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-mono text-[11px] tracking-wider text-background uppercase transition-colors hover:bg-foreground/80"
          >
            Get in touch
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
