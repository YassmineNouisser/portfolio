"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id: string;
  className?: string;
}

export default function SectionWrapper({ children, id, className = "" }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.8 }}
      className={`py-24 sm:py-32 lg:py-40 px-6 sm:px-8 ${className}`}
    >
      <div className="max-w-[1400px] mx-auto">{children}</div>
    </motion.section>
  );
}
