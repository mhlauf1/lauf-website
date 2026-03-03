import type { Metadata } from "next";
import PageAnimator from "@/components/PageAnimator";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Lauf Studio. Based in Madison, Wisconsin.",
};

export default function ContactPage() {
  return (
    <PageAnimator>
      <section className="pb-8 pt-32 sm:pb-12 sm:pt-44">
        <div className="px-6 sm:px-12">
          <h1 className="page-heading text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
            Let&apos;s work together
          </h1>
          <p className="page-subheading mt-6 max-w-lg text-lg text-foreground-secondary">
            Have a project in mind? We&apos;re always open to discussing new
            work, partnerships, and creative ideas.
          </p>

          <div className="page-content mt-16">
            <p className="text-sm text-foreground-secondary">Email</p>
            <a
              href="mailto:michael@lauf.co"
              className="link-underline mt-2 inline-block text-2xl font-medium sm:text-3xl"
            >
              michael@lauf.co
            </a>
          </div>

          <div className="page-section mt-16 flex gap-8">
            <div>
              <p className="text-sm text-foreground-secondary">Social</p>
              <div className="mt-2 flex gap-6">
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline font-medium"
                >
                  X / Twitter
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline font-medium"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="page-section mt-16">
            <p className="text-sm text-foreground-secondary">Location</p>
            <p className="mt-2 font-medium">Based in Madison, Wisconsin</p>
          </div>
        </div>
      </section>
    </PageAnimator>
  );
}
