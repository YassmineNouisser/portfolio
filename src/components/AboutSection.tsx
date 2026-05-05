"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { aboutText } from "@/data/portfolio-data";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const stats = [
  { value: "18+", label: "Projects" },
  { value: "2", label: "Companies" },
  { value: "8+", label: "Certifications" },
  { value: "3rd", label: "Year at ESPRIT" },
];

export default function AboutSection() {
  return (
    <SectionWrapper id="about" className="section-white">
      <SectionHeading label="About Me" title="Get to" titleAccent="Know Me" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-soft-lg border border-border-light">
            <Image
              src="/yassmine.png"
              alt="Yassmine Nouisser"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="text-text-secondary text-base sm:text-[17px] leading-[1.9] mb-12">
            {aboutText}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="text-center p-5 rounded-2xl bg-bg border border-border-light"
              >
                <p className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-heading)] gradient-text">
                  {stat.value}
                </p>
                <p className="text-text-muted text-xs mt-1 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
