"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio-data";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { FiBriefcase, FiCalendar, FiArrowUpRight } from "react-icons/fi";

const accent = {
  dot: "#2b59ff",
  soft: "rgba(43,89,255,0.08)",
  ring: "rgba(43,89,255,0.20)",
};

export default function ExperienceSection() {
  const total = experiences.length;

  return (
    <SectionWrapper id="experience" className="section-white">
      <SectionHeading label="Roadmap" title="My Professional" titleAccent="Journey" />

      <div className="relative mx-auto max-w-6xl">
        <div
          aria-hidden
          className="pointer-events-none absolute left-6 sm:left-8 lg:left-1/2 top-0 bottom-0 w-px lg:-translate-x-1/2"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(43,89,255,0.35) 8%, rgba(27,27,47,0.25) 50%, rgba(43,89,255,0.35) 92%, transparent 100%)",
          }}
        />

        <div className="absolute left-6 sm:left-8 lg:left-1/2 -top-2 -translate-x-1/2">
          <div className="w-3 h-3 rounded-full bg-blue shadow-[0_0_0_6px_rgba(43,89,255,0.12)]" />
        </div>
        <div className="absolute left-6 sm:left-8 lg:left-1/2 -bottom-2 -translate-x-1/2">
          <div className="w-3 h-3 rounded-full bg-navy shadow-[0_0_0_6px_rgba(27,27,47,0.10)]" />
        </div>

        <div className="space-y-14 lg:space-y-20 py-6">
          {experiences.map((exp, idx) => {
            const isRight = idx % 2 === 1;
            const number = String(idx + 1).padStart(2, "0");

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.23, 1, 0.32, 1] }}
                className="relative"
              >
                <div className="absolute left-6 sm:left-8 lg:left-1/2 top-8 -translate-x-1/2 z-10">
                  <span
                    className="absolute inset-0 -m-2 rounded-full animate-pulse"
                    style={{ background: accent.soft }}
                  />
                  <div
                    className="relative w-5 h-5 rounded-full bg-white border-2 flex items-center justify-center shadow-[0_4px_16px_-4px_rgba(27,27,47,0.2)]"
                    style={{ borderColor: accent.dot }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ background: accent.dot }} />
                  </div>
                </div>

                <div
                  className={`pl-16 sm:pl-20 lg:pl-0 lg:grid lg:grid-cols-2 lg:gap-16 ${
                    isRight ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className={`hidden lg:flex ${isRight ? "lg:justify-start lg:pl-10" : "lg:justify-end lg:pr-10"}`}>
                    <div className="flex flex-col gap-3 max-w-xs pt-6">
                      <span className="text-xs font-[family-name:var(--font-mono)] tracking-[0.2em] text-text-muted">
                        {number} <span className="text-text-muted/50">/ {String(total).padStart(2, "0")}</span>
                      </span>
                      <div
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full self-start border`}
                        style={{ background: accent.soft, borderColor: accent.ring, color: accent.dot }}
                      >
                        <FiCalendar className="text-sm" />
                        <span className="text-xs font-semibold font-[family-name:var(--font-mono)] whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-sm text-text-muted leading-relaxed">
                        {exp.type || ""}
                      </p>
                    </div>
                  </div>

                  <div className={isRight ? "lg:pr-10" : "lg:pl-10"}>
                    <div
                      className="relative rounded-3xl bg-white border border-border-light p-7 sm:p-9 transition-all duration-500 hover:-translate-y-1 hover:border-transparent overflow-hidden"
                      style={{
                        boxShadow: "0 20px 60px -30px rgba(27,27,47,0.18), 0 4px 16px -8px rgba(43,89,255,0.06)",
                      }}
                    >
                      <div
                        aria-hidden
                        className="absolute inset-x-0 top-0 h-px"
                        style={{
                          background: `linear-gradient(90deg, transparent, ${accent.dot}, transparent)`,
                        }}
                      />
                      <div
                        aria-hidden
                        className="absolute -top-20 -right-20 w-48 h-48 rounded-full opacity-50 blur-3xl"
                        style={{ background: accent.soft }}
                      />

                      <div className="relative">
                        <div className="lg:hidden flex items-center gap-3 mb-5">
                          <span className="text-[11px] font-[family-name:var(--font-mono)] tracking-[0.2em] text-text-muted">
                            {number}
                          </span>
                          <div
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border"
                            style={{ background: accent.soft, borderColor: accent.ring, color: accent.dot }}
                          >
                            <FiCalendar className="text-xs" />
                            <span className="text-[11px] font-semibold font-[family-name:var(--font-mono)] whitespace-nowrap">
                              {exp.period}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-start justify-between gap-4 mb-6">
                          <div className="flex items-center gap-4 min-w-0">
                            <div
                              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 border"
                              style={{ background: accent.soft, borderColor: accent.ring }}
                            >
                              <FiBriefcase className="text-xl" style={{ color: accent.dot }} />
                            </div>
                            <div className="min-w-0">
                              <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-navy leading-tight tracking-tight">
                                {exp.company}
                              </h3>
                              {exp.type && (
                                <p className="text-sm text-text-muted mt-1 lg:hidden">{exp.type}</p>
                              )}
                            </div>
                          </div>
                          <FiArrowUpRight
                            className="text-xl text-text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-1"
                            style={{ color: accent.dot }}
                          />
                        </div>

                        <div className="mb-6">
                          <span
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border"
                            style={{ background: accent.soft, borderColor: accent.ring, color: accent.dot }}
                          >
                            <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent.dot }} />
                            {exp.role}
                          </span>
                        </div>

                        <ul className="space-y-3.5">
                          {exp.points.map((point, pIdx) => (
                            <motion.li
                              key={pIdx}
                              initial={{ opacity: 0, x: -8 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: 0.2 + pIdx * 0.06 }}
                              className="flex items-start gap-3"
                            >
                              <span
                                className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{ background: accent.dot }}
                              />
                              <p className="text-[15px] text-text-secondary leading-relaxed">
                                {point}
                              </p>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
