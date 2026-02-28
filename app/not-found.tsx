import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center pb-32 pt-32">
      <div className="px-6 sm:px-12">
        <p className="text-sm text-foreground-secondary">404</p>
        <h1 className="mt-2 text-3xl font-medium tracking-tight sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 text-foreground-secondary">
          The page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>
        <Link
          href="/"
          className="link-underline mt-8 inline-block font-medium"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
