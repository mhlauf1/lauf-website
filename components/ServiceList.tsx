"use client";

import { motion } from "motion/react";
import StaggerChildren, { staggerItemVariants } from "./StaggerChildren";
import { services } from "@/data/services";

export default function ServiceList() {
  return (
    <section className="py-24 sm:py-32">
      <div className="px-6 sm:px-12">
        <StaggerChildren>
          <div className="border-t border-border">
            {services.map((service) => (
              <motion.div
                key={service.category}
                variants={staggerItemVariants}
                whileHover={{ x: 4, backgroundColor: "rgba(0,0,0,0.01)" }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 gap-4 border-b border-border py-6 sm:grid-cols-[80px_1fr_2fr] sm:items-center sm:gap-8"
              >
                <span className="text-sm text-foreground-secondary">
                  {service.category}
                </span>
                <span className="text-lg font-medium">{service.title}</span>
                <span className="text-foreground-secondary">
                  {service.description}
                </span>
              </motion.div>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </section>
  );
}
