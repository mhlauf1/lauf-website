"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface PageTransitionContextValue {
  navigateTo: (href: string) => void;
  isTransitioning: boolean;
}

const PageTransitionContext = createContext<PageTransitionContextValue>({
  navigateTo: () => {},
  isTransitioning: false,
});

export function usePageTransition() {
  return useContext(PageTransitionContext);
}

export function useTransitionReady() {
  const { isTransitioning } = useContext(PageTransitionContext);
  const [ready, setReady] = useState(!isTransitioning);

  useEffect(() => {
    if (!isTransitioning && !ready) {
      setReady(true);
    }
  }, [isTransitioning, ready]);

  return ready;
}

export default function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isNavigatingRef = useRef(false);
  const initialPathRef = useRef(pathname);

  const navigateTo = useCallback(
    (href: string) => {
      if (isNavigatingRef.current) return;
      if (href === pathname) return;

      isNavigatingRef.current = true;
      setIsTransitioning(true);

      const overlay = overlayRef.current;
      if (!overlay) return;

      // Fade to black, swap page, fade back
      gsap.fromTo(
        overlay,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.25,
          ease: "power2.inOut",
          onComplete: () => {
            window.scrollTo({ top: 0, behavior: "instant" });
            router.push(href);
          },
        }
      );
    },
    [pathname, router]
  );

  // On pathname change: fade out the overlay
  useEffect(() => {
    if (pathname === initialPathRef.current && !isNavigatingRef.current) return;
    initialPathRef.current = pathname;

    if (!isNavigatingRef.current) return;

    const overlay = overlayRef.current;
    if (!overlay) return;

    window.scrollTo({ top: 0, behavior: "instant" });

    // Brief hold, then fade out
    gsap.to(overlay, {
      opacity: 0,
      duration: 0.25,
      delay: 0.05,
      ease: "power2.inOut",
      onComplete: () => {
        isNavigatingRef.current = false;
        setIsTransitioning(false);
        // Refresh ScrollTrigger so it recalculates positions after route change
        ScrollTrigger.refresh();
      },
    });
  }, [pathname]);

  return (
    <PageTransitionContext.Provider value={{ navigateTo, isTransitioning }}>
      {children}
      <div
        ref={overlayRef}
        className="pointer-events-none fixed inset-0 z-[9998] bg-background"
        style={{ opacity: 0 }}
      />
    </PageTransitionContext.Provider>
  );
}
