"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Project } from "@/data/projects";

interface ProjectNavProps {
  prev: Project | null;
  next: Project | null;
}

export default function ProjectNav({ prev, next }: ProjectNavProps) {
  return (
    <nav className="border-t border-border">
      <div className="grid grid-cols-2 px-6 sm:px-12">
        {prev ? (
          <Link href={`/work/${prev.slug}`} className="group py-12 pr-4">
            <motion.div
              whileHover={{ x: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <span className="text-sm text-foreground-secondary">
                Previous
              </span>
              <p className="mt-1 font-medium transition-colors group-hover:text-accent-hover">
                {prev.client}
              </p>
            </motion.div>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/work/${next.slug}`}
            className="group border-l border-border py-12 pl-4 text-right"
          >
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <span className="text-sm text-foreground-secondary">Next</span>
              <p className="mt-1 font-medium transition-colors group-hover:text-accent-hover">
                {next.client}
              </p>
            </motion.div>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </nav>
  );
}
