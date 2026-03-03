import type { Metadata } from "next";
import Image from "next/image";
import CTA from "@/components/CTA";
import PageAnimator from "@/components/PageAnimator";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export const metadata: Metadata = {
  title: "About",
  description:
    "Lauf is a design and development studio founded by Michael and Clare Laufersweiler, based in Madison, Wisconsin.",
};

export default function AboutPage() {
  return (
    <PageAnimator>
      <section className="pb-16 pt-32 sm:pb-24 sm:pt-44">
        <div className="px-6 sm:px-12">
          <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-2">
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="page-heading max-w-3xl text-3xl font-medium leading-[1.2] tracking-tight sm:text-4xl lg:text-5xl">
                  A husband-and-wife studio built on doing good work for good
                  people.
                </h1>
                <p className="page-subheading mt-4 max-w-2xl text-lg leading-relaxed text-foreground-secondary">
                  We work with business, founders, and firms to create websites
                  that build trust, attract opportunities, and support long-term
                  growth.
                </p>
              </div>
              <div className="page-content mt-8 hidden lg:block">
                <TestimonialCarousel />
              </div>
            </div>

            <div className="page-content grid grid-cols-2 gap-4">
              <div>
                <div className="relative mb-4 aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/images/projects/mike.png"
                    alt="Michael Laufersweiler"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 className="text-xl font-medium">Michael Laufersweiler</h2>
                <p className="mt-1 text-sm text-foreground-secondary">
                  Design & Development
                </p>
              </div>
              <div>
                <div className="relative mb-4 aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/images/projects/clare.png"
                    alt="Clare Laufersweiler"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 className="text-xl font-medium">Clare Laufersweiler</h2>
                <p className="mt-1 text-sm text-foreground-secondary">
                  Strategy & Operations
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:hidden">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="px-6 sm:px-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-[200px_1fr] sm:gap-12">
            <h2 className="page-section-early text-sm font-medium text-foreground-secondary">
              How we work
            </h2>
            <div className="page-section-early max-w-xl">
              <p className="text-lg leading-relaxed">
                Every project gets our full attention. No junior handoffs, no
                account managers in between, you work directly with us. We keep
                our client list small on purpose so we can give each project the
                focus it deserves.
              </p>
              <p className="mt-6 leading-relaxed text-foreground-secondary">
                Based in Madison, Wisconsin, we work with clients across the
                country. Whether it&apos;s a new website, a system migration, or
                a full rebrand, we bring the same level of care to everything we
                take on.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </PageAnimator>
  );
}
