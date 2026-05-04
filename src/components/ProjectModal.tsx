"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FiX, FiChevronLeft, FiChevronRight, FiGithub, FiExternalLink } from "react-icons/fi";
import type { Project } from "@/data/portfolio-data";

type Props = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  return (
    <AnimatePresence>
      {project && (
        <ProjectModalContent key={project.slug} project={project} onClose={onClose} />
      )}
    </AnimatePresence>
  );
}

function ProjectModalContent({ project, onClose }: { project: Project; onClose: () => void }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setActive((i) => Math.min(i + 1, project.screens.length - 1));
      if (e.key === "ArrowLeft") setActive((i) => Math.max(i - 1, 0));
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project.screens.length, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        className="relative grid max-h-[92vh] w-full max-w-6xl grid-cols-1 overflow-hidden rounded-3xl bg-white shadow-2xl lg:grid-cols-[1.4fr_1fr]"
        onClick={(e) => e.stopPropagation()}
      >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-navy shadow-soft backdrop-blur transition hover:bg-white"
            >
              <FiX />
            </button>

            <div className="relative flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-[#0a1020] via-[#0a0d18] to-[#050810] lg:aspect-auto lg:min-h-[520px]">
              <div
                className="pointer-events-none absolute inset-0 opacity-50"
                style={{
                  background:
                    "radial-gradient(60% 50% at 50% 40%, rgba(43,89,255,0.22), transparent 70%)",
                }}
              />
              <div
                className="pointer-events-none absolute inset-0 opacity-25"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />

              {project.device === "phone" ? (
                <div className="relative h-[420px] w-[240px] sm:h-[480px] sm:w-[260px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={project.screens[active]}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      className="absolute inset-0 overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.6)] ring-1 ring-white/10"
                    >
                      <Image
                        src={project.screens[active]}
                        alt={`${project.title} screen ${active + 1}`}
                        fill
                        sizes="(max-width: 640px) 240px, 280px"
                        quality={95}
                        className="object-cover"
                        priority
                      />
                      <span className="pointer-events-none absolute left-1/2 top-2 h-1.5 w-14 -translate-x-1/2 rounded-full bg-black/80" />
                    </motion.div>
                  </AnimatePresence>
                </div>
              ) : (
                <div className="relative w-[88%] max-w-[640px] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
                  <div className="flex items-center gap-2 border-b border-white/5 bg-zinc-950/80 px-4 py-2.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                    <span className="ml-3 hidden h-1.5 flex-1 max-w-[60%] rounded-full bg-white/10 sm:block" />
                  </div>
                  <div className="relative aspect-[16/10]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={project.screens[active]}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.25 }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={project.screens[active]}
                          alt={`${project.title} screen ${active + 1}`}
                          fill
                          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 640px"
                          quality={95}
                          className="object-cover object-top"
                          priority
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              )}

              {project.screens.length > 1 && (
                <>
                  <button
                    onClick={() => setActive((i) => Math.max(i - 1, 0))}
                    disabled={active === 0}
                    aria-label="Previous"
                    className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy shadow-soft backdrop-blur transition disabled:opacity-30 disabled:cursor-not-allowed hover:enabled:bg-white"
                  >
                    <FiChevronLeft />
                  </button>
                  <button
                    onClick={() =>
                      setActive((i) => Math.min(i + 1, project.screens.length - 1))
                    }
                    disabled={active === project.screens.length - 1}
                    aria-label="Next"
                    className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy shadow-soft backdrop-blur transition disabled:opacity-30 disabled:cursor-not-allowed hover:enabled:bg-white"
                  >
                    <FiChevronRight />
                  </button>
                </>
              )}

              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 font-mono text-[11px] tracking-widest text-white/80 backdrop-blur">
                {String(active + 1).padStart(2, "0")} / {String(project.screens.length).padStart(2, "0")}
              </span>
            </div>

            <div className="flex max-h-[92vh] flex-col overflow-y-auto p-7 sm:p-10">
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-blue">
                Project · {project.year}
              </span>
              <h3 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-navy sm:text-4xl">
                {project.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-text-secondary">
                {project.longDescription || project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-blue-bg px-3 py-1 font-mono text-[11px] text-blue"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {(project.github || project.demo) && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border-light px-4 py-2 text-xs font-medium text-text-secondary transition hover:border-blue hover:text-blue"
                    >
                      <FiGithub /> Source
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-blue px-4 py-2 text-xs font-medium text-white transition hover:bg-blue-dark"
                    >
                      <FiExternalLink /> Live demo
                    </a>
                  )}
                </div>
              )}

              <div className="mt-8 border-t border-border-light pt-6">
                <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-text-muted">
                  All screens · {project.screens.length}
                </p>
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                  {project.screens.map((s, i) => (
                    <button
                      key={s}
                      onClick={() => setActive(i)}
                      className={`relative aspect-[9/16] overflow-hidden rounded-lg border transition ${
                        active === i
                          ? "border-blue shadow-[0_0_0_3px_rgba(43,89,255,0.15)]"
                          : "border-border-light hover:border-blue/60"
                      }`}
                    >
                      <Image
                        src={s}
                        alt={`${project.title} thumb ${i + 1}`}
                        fill
                        sizes="120px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
      </motion.div>
    </motion.div>
  );
}
