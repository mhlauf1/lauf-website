import type { Metadata } from "next";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CTA from "@/components/CTA";
import PageAnimator from "@/components/PageAnimator";

export const metadata: Metadata = {
  title: "About",
  description:
    "Lauf is a design studio founded by Michael and Clare Laufersweiler, based in Madison, Wisconsin.",
};

export default function AboutPage() {
  return (
    <PageAnimator>
      <section className="pb-16 pt-32 sm:pb-24 sm:pt-44">
        <div className="px-6 sm:px-12">
          <h1 className="page-heading max-w-3xl text-3xl font-medium leading-[1.2] tracking-tight sm:text-4xl lg:text-5xl">
            We believe great design is invisible — it just works.
          </h1>
          <p className="page-subheading mt-8 max-w-2xl text-lg leading-relaxed text-foreground-secondary">
            Lauf Studio is a small, intentional practice. We partner with
            companies who care about the details — the ones who know that how
            something feels is just as important as what it does.
          </p>
        </div>
      </section>

      <section className="page-content py-16 sm:py-24">
        <div className="px-6 sm:px-12">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            <div>
              <ImagePlaceholder
                aspectRatio="4/5"
                label="Michael Laufersweiler"
                className="mb-6"
                gradient="linear-gradient(145deg, #1a1a2e 0%, #2d2d44 40%, #4a4a6a 70%, #8888a8 100%)"
              />
              <h2 className="text-xl font-medium">Michael Laufersweiler</h2>
              <p className="mt-1 text-sm text-foreground-secondary">
                Design & Development
              </p>
              <p className="mt-4 leading-relaxed text-foreground-secondary">
                Michael leads design and development at Lauf. With a background
                spanning brand identity, product design, and front-end
                engineering, he brings a holistic perspective to every project.
                He believes the best digital experiences come from understanding
                both the craft and the code.
              </p>
            </div>
            <div>
              <ImagePlaceholder
                aspectRatio="4/5"
                label="Clare Laufersweiler"
                className="mb-6"
                gradient="linear-gradient(145deg, #2e1a1a 0%, #44302d 40%, #6a5a4a 70%, #a89888 100%)"
              />
              <h2 className="text-xl font-medium">Clare Laufersweiler</h2>
              <p className="mt-1 text-sm text-foreground-secondary">
                Strategy & Operations
              </p>
              <p className="mt-4 leading-relaxed text-foreground-secondary">
                Clare drives strategy and client relationships at Lauf. Her
                background in business strategy and communications ensures that
                every project is grounded in real business objectives. She
                bridges the gap between creative vision and measurable outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section py-16 sm:py-24">
        <div className="px-6 sm:px-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-[200px_1fr] sm:gap-12">
            <h2 className="text-sm font-medium text-foreground-secondary">
              Why it matters
            </h2>
            <div className="max-w-2xl">
              <p className="text-lg leading-relaxed">
                In a world of templates and shortcuts, we choose to do things
                differently. Every project gets our full attention — no junior
                handoffs, no autopilot. We work with a small number of clients
                at a time so we can give each one the focus they deserve.
              </p>
              <p className="mt-6 leading-relaxed text-foreground-secondary">
                Based in Madison, Wisconsin, we work with clients across the
                country. Whether it&apos;s a brand refresh, a new website, or a
                comprehensive design system, we approach every engagement with
                the same care and rigor.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </PageAnimator>
  );
}
