"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { usePageTransition } from "./PageTransitionProvider";

type TransitionLinkProps = React.ComponentProps<typeof Link>;

const TransitionLink = forwardRef<HTMLAnchorElement, TransitionLinkProps>(
  function TransitionLink({ href, onClick, ...props }, ref) {
    const { navigateTo } = usePageTransition();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      onClick?.(e);
      navigateTo(typeof href === "string" ? href : href.toString());
    };

    return <Link ref={ref} href={href} onClick={handleClick} {...props} />;
  },
);

export default TransitionLink;
