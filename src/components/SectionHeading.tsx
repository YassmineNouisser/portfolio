"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  titleAccent?: string;
  center?: boolean;
}

export default function SectionHeading({ label, title, titleAccent, center = true }: SectionHeadingProps) {
  return (
    <div className={`mb-16 sm:mb-20 ${center ? "text-center" : ""}`}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 mb-4 justify-center"
      >
        <span className="w-2 h-2 rounded-full bg-blue" />
        <span className="text-xs sm:text-sm font-[family-name:var(--font-mono)] text-blue font-medium uppercase tracking-[0.2em]">
          {label}
        </span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] text-navy tracking-tight"
      >
        {title}{" "}
        {titleAccent && <span className="gradient-text">{titleAccent}</span>}
      </motion.h2>
    </div>
  );
}
