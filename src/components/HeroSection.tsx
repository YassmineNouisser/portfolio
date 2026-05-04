"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { personalInfo, heroTitles, roles } from "@/data/portfolio-data";
import { FiArrowRight } from "react-icons/fi";

export default function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = heroTitles[titleIndex];
    const speed = isDeleting ? 25 : 50;

    if (!isDeleting && displayText === currentTitle) {
      const timeout = setTimeout(() => setIsDeleting(true), 2500);
      return () => clearTimeout(timeout);
    }
    if (isDeleting && displayText === "") {
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % heroTitles.length);
      }, speed);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentTitle.substring(0, displayText.length - 1)
          : currentTitle.substring(0, displayText.length + 1)
      );
    }, speed);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center section-light overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-[10%] w-72 h-72 bg-blue/[0.04] rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-blue/[0.03] rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Text */}
          <div>
            {/* Colored dots */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.9 }}
              className="flex gap-2 mb-8"
            >
              <span className="w-3 h-3 rounded-full bg-dot-blue" />
              <span className="w-3 h-3 rounded-full bg-dot-orange" />
              <span className="w-3 h-3 rounded-full bg-dot-green" />
            </motion.div>

            {/* Main heading */}
            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 2.0, ease: [0.23, 1, 0.32, 1] }}
                className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold font-[family-name:var(--font-heading)] leading-[1.05] text-navy"
              >
                Hi, I&apos;m
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-6">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 2.15, ease: [0.23, 1, 0.32, 1] }}
                className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold font-[family-name:var(--font-heading)] leading-[1.05]"
              >
                <span className="gradient-text">{personalInfo.name}</span>
              </motion.h1>
            </div>

            {/* Typing text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.4 }}
              className="h-8 mb-6"
            >
              <span className="text-base sm:text-lg font-[family-name:var(--font-mono)] text-blue font-medium">
                {displayText}
                <span className="inline-block w-0.5 h-5 bg-blue ml-1 animate-pulse" />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.6 }}
              className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-lg mb-7"
            >
              {personalInfo.bio}
            </motion.p>

            {/* Role badges */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.6, duration: 0.6 }}
              className="mb-10 flex flex-wrap gap-2"
              aria-label="Roles"
            >
              {roles.map((role, i) => (
                <li
                  key={role}
                  className="group inline-flex items-center gap-2 rounded-full border border-blue/15 bg-white px-3.5 py-1.5 text-xs font-medium text-navy shadow-soft transition hover:-translate-y-0.5 hover:border-blue/40 hover:text-blue"
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      i % 4 === 0
                        ? "bg-dot-blue"
                        : i % 4 === 1
                        ? "bg-dot-orange"
                        : i % 4 === 2
                        ? "bg-dot-green"
                        : "bg-blue"
                    }`}
                  />
                  {role}
                </li>
              ))}
            </motion.ul>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.7, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#projects" className="btn-primary">
                View Projects
                <FiArrowRight />
              </a>
              <a href="#contact" className="btn-secondary">
                Get in Touch
              </a>
            </motion.div>
          </div>

          {/* Right: Photo + Floating Icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2, ease: [0.23, 1, 0.32, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative frame behind */}
              <div className="absolute -top-4 -right-4 w-full h-full rounded-3xl border-2 border-blue/20" />
              <div className="absolute -bottom-4 -left-4 w-full h-full rounded-3xl bg-blue-bg" />

              {/* Photo card */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-[420px] rounded-3xl overflow-hidden shadow-soft-lg border border-border-light bg-white">
                <Image
                  src="/yassmine.png"
                  alt="Yassmine Nouisser"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 288px, 320px"
                  priority
                />

                {/* Bottom info overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white/90 to-transparent p-6 pt-12">
                  <p className="font-[family-name:var(--font-heading)] font-semibold text-navy text-lg">
                    {personalInfo.name}
                  </p>
                  <p className="text-sm text-blue font-medium">AI Engineer · ESPRIT</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="w-2 h-2 rounded-full bg-dot-green animate-pulse" />
                    <span className="text-xs text-text-muted">Available for work</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
