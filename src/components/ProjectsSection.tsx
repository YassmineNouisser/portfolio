"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects, type Project } from "@/data/portfolio-data";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import PhoneMockup from "./PhoneMockup";
import BrowserMockup from "./BrowserMockup";
import ProjectModal from "./ProjectModal";
import { FiArrowUpRight } from "react-icons/fi";

function PhoneFan({ project }: { project: Project }) {
  const left = project.screens[1] || project.screens[0];
  const center = project.screens[0];
  const right = project.screens[2] || project.screens[0];
  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        initial={{ rotate: 0, x: 60, opacity: 0 }}
        whileInView={{ rotate: 14, x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="absolute z-0 translate-x-[100px] translate-y-6"
      >
        <PhoneMockup src={right} alt={`${project.title} right`} width={210} height={440} />
      </motion.div>
      <motion.div
        initial={{ rotate: 0, x: -60, opacity: 0 }}
        whileInView={{ rotate: -14, x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="absolute z-10 -translate-x-[100px] translate-y-10"
      >
        <PhoneMockup src={left} alt={`${project.title} left`} width={210} height={440} />
      </motion.div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.35 }}
        className="relative z-20"
      >
        <PhoneMockup src={center} alt={`${project.title} main`} width={230} height={480} />
      </motion.div>
    </div>
  );
}

function BrowserStack({ project }: { project: Project }) {
  const back = project.screens[1] || project.screens[0];
  const front = project.screens[0];
  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        initial={{ rotate: 0, y: 30, x: 60, opacity: 0 }}
        whileInView={{ rotate: 6, y: -28, x: 50, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="absolute z-0"
      >
        <BrowserMockup src={back} alt={`${project.title} back`} width={420} />
      </motion.div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.35 }}
        className="relative z-10"
      >
        <BrowserMockup src={front} alt={`${project.title} front`} width={460} />
      </motion.div>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.23, 1, 0.32, 1] }}
      className="group relative block w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0a1226] via-[#0a0d1c] to-[#050810] text-left shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)] transition hover:-translate-y-1 hover:shadow-[0_30px_80px_-20px_rgba(43,89,255,0.35)]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 35%, rgba(43,89,255,0.22), transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <span className="absolute left-5 top-5 z-20 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/55 px-3.5 py-1.5 font-mono text-[10px] tracking-[0.2em] text-white/85 backdrop-blur">
        <span className="h-2 w-2 rounded-full bg-blue shadow-[0_0_10px_rgba(43,89,255,0.7)]" />
        NOUVEAU · {project.year}
      </span>

      <span className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-navy opacity-0 transition group-hover:opacity-100">
        <FiArrowUpRight />
      </span>

      <div className="relative z-10 flex h-[460px] items-center justify-center pt-10 sm:h-[520px]">
        {project.device === "phone" ? (
          <PhoneFan project={project} />
        ) : (
          <BrowserStack project={project} />
        )}
      </div>

      <div className="relative z-10 flex flex-col gap-3 border-t border-white/5 bg-black/30 p-6 backdrop-blur-sm sm:p-7">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white">
              {project.title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-white/65">
              {project.description}
            </p>
          </div>
          <span className="shrink-0 font-mono text-[10px] tracking-[0.25em] text-white/40">
            0{index + 1} / 0{projects.length}
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-0.5 font-mono text-[10px] text-white/80"
            >
              {t}
            </span>
          ))}
          <span className="ml-auto inline-flex items-center gap-1 font-mono text-[10px] text-blue">
            View {project.screens.length} screens →
          </span>
        </div>
      </div>
    </motion.button>
  );
}

export default function ProjectsSection() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <SectionWrapper id="projects" className="section-white">
      <SectionHeading label="Projects" title="Selected" titleAccent="Work" />

      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard
            key={p.slug}
            project={p}
            index={i}
            onOpen={() => setActive(p)}
          />
        ))}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </SectionWrapper>
  );
}