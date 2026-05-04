"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { skillCategories } from "@/data/portfolio-data";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import {
  FiCode, FiCpu, FiLayers, FiGlobe, FiDatabase, FiTool, FiZap, FiUsers, FiMessageCircle,
} from "react-icons/fi";
import {
  SiPython, SiJavascript, SiNextdotjs, SiReact, SiDjango, SiTensorflow, SiPostgresql, SiGit,
} from "react-icons/si";

const iconByTitle: Record<string, IconType> = {
  "Programming": FiCode,
  "AI & Data Science": FiCpu,
  "Frameworks": FiLayers,
  "Databases": FiDatabase,
  "Web & 3D": FiGlobe,
  "Tools & DevOps": FiTool,
  "Marketing & Content": FiZap,
  "Soft Skills": FiUsers,
  "Languages": FiMessageCircle,
};

const coreStack: { label: string; Icon: IconType; color: string }[] = [
  { label: "Python", Icon: SiPython, color: "#3776AB" },
  { label: "JavaScript", Icon: SiJavascript, color: "#E9B200" },
  { label: "Next.js", Icon: SiNextdotjs, color: "#0a0a0a" },
  { label: "React", Icon: SiReact, color: "#149ECA" },
  { label: "Django", Icon: SiDjango, color: "#0C4B33" },
  { label: "TensorFlow", Icon: SiTensorflow, color: "#FF6F00" },
  { label: "PostgreSQL", Icon: SiPostgresql, color: "#316192" },
  { label: "Git", Icon: SiGit, color: "#F05032" },
];

export default function SkillsSection() {
  const total = skillCategories.length;

  return (
    <SectionWrapper id="skills" className="section-light">
      <SectionHeading label="Skills" title="My" titleAccent="Expertise" />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-base sm:text-lg text-text-muted max-w-2xl mx-auto -mt-10 sm:-mt-12 mb-12 px-4"
      >
        A multidisciplinary toolkit spanning{" "}
        <span className="text-navy font-medium">AI engineering</span>,{" "}
        <span className="text-navy font-medium">full-stack development</span>{" "}
        and the business side of shipping real products.
      </motion.p>

      <div className="mb-16 sm:mb-20 mx-auto max-w-5xl px-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 px-5 sm:px-8 py-6 sm:py-7 rounded-3xl bg-white/80 backdrop-blur-sm border border-border-light/70 shadow-[0_24px_70px_-32px_rgba(43,89,255,0.28)]"
        >
          <span className="w-full sm:w-auto text-center sm:text-left text-[11px] font-[family-name:var(--font-mono)] text-blue/80 tracking-[0.22em] uppercase sm:pr-4 sm:border-r sm:border-border-light/70">
            Core Stack
          </span>
          {coreStack.map((item, idx) => {
            const Icon = item.Icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + idx * 0.05 }}
                whileHover={{ y: -3 }}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white border border-border-light/70 shadow-[0_4px_14px_-6px_rgba(27,27,47,0.1)] hover:shadow-[0_12px_28px_-12px_rgba(43,89,255,0.4)] hover:border-blue/30 transition-all duration-300"
              >
                <Icon className="text-base shrink-0" style={{ color: item.color }} />
                <span className="text-sm font-medium text-navy">{item.label}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="absolute -inset-x-6 -inset-y-4 -z-10 rounded-[40px] bg-gradient-to-b from-white via-white to-blue-bg/40 shadow-[0_30px_120px_-40px_rgba(43,89,255,0.25)] border border-white/60" />

        <div className="divide-y divide-border-light/70 px-6 sm:px-10 lg:px-14 py-6 sm:py-10">
          {skillCategories.map((category, catIdx) => {
            const Icon = iconByTitle[category.title] || FiCode;
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
