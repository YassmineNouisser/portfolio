"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/portfolio-data";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import {
  FiCode, FiCpu, FiLayers, FiGlobe, FiDatabase, FiTool, FiZap, FiUsers, FiMessageCircle,
} from "react-icons/fi";

const icons = [FiCode, FiCpu, FiLayers, FiGlobe, FiDatabase, FiTool, FiZap, FiUsers, FiMessageCircle];

export default function SkillsSection() {
  const total = skillCategories.length;

  return (
    <SectionWrapper id="skills" className="section-light">
      <SectionHeading label="Skills" title="My" titleAccent="Expertise" />

      <div className="relative mx-auto max-w-6xl">
        <div className="absolute -inset-x-6 -inset-y-4 -z-10 rounded-[40px] bg-gradient-to-b from-white via-white to-blue-bg/40 shadow-[0_30px_120px_-40px_rgba(43,89,255,0.25)] border border-white/60" />

        <div className="divide-y divide-border-light/70 px-6 sm:px-10 lg:px-14 py-6 sm:py-10">
          {skillCategories.map((category, catIdx) => {
            const Icon = icons[catIdx] || FiCode;
            const number = String(catIdx + 1).padStart(2, "0");

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: catIdx * 0.05, ease: [0.23, 1, 0.32, 1] }}
                className="group relative grid grid-cols-12 gap-6 lg:gap-10 py-8 sm:py-10"
              >
                <div className="col-span-12 lg:col-span-4 flex items-start gap-5">
                  <span className="text-xs font-[family-name:var(--font-mono)] text-blue/70 tracking-[0.2em] pt-2 select-none">
                    {number} <span className="text-text-muted/60">/ {String(total).padStart(2, "0")}</span>
                  </span>

                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue/20 via-blue/5 to-transparent blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative w-12 h-12 rounded-2xl bg-white border border-border-light flex items-center justify-center shadow-[0_4px_16px_-6px_rgba(43,89,255,0.25)] group-hover:border-blue/30 transition-colors duration-500">
                        <Icon className="text-blue text-lg" />
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-semibold font-[family-name:var(--font-heading)] text-navy tracking-tight leading-tight">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <div className="col-span-12 lg:col-span-8 flex flex-wrap gap-2.5 lg:items-center lg:pl-2">
                  {category.skills.map((skill, sIdx) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.15 + sIdx * 0.03 }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border-light text-sm font-medium text-text-secondary shadow-[0_2px_8px_-4px_rgba(27,27,47,0.08)] hover:border-blue/40 hover:text-navy hover:bg-blue-bg/40 hover:shadow-[0_6px_20px_-8px_rgba(43,89,255,0.35)] hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <span className="w-1 h-1 rounded-full bg-blue/60" />
                      {skill}
                    </motion.span>
                  ))}
                </div>

                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-6 lg:-translate-x-10" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
