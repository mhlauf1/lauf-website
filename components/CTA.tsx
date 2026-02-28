export default function CTA() {
  return (
    <section className="py-24 sm:py-32">
      <div className="px-6 sm:px-12">
        <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
          Let&apos;s build something
        </h2>
        <p className="mt-4 text-lg text-foreground-secondary">
          Have a project in mind? We&apos;d love to hear about it.
        </p>
        <a
          href="mailto:hello@lauf.co"
          className="link-underline mt-8 inline-flex items-center gap-2 text-lg font-medium"
        >
          hello@lauf.co &rarr;
        </a>
      </div>
    </section>
  );
}
