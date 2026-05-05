"use client";

import { motion } from "framer-motion";
import { personalInfo, navLinks } from "@/data/portfolio-data";
import { FiArrowUpRight, FiArrowUp, FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const contactRows = [
  { icon: FiMail,   label: "Email",    value: personalInfo.email,    href: `mailto:${personalInfo.email}` },
  { icon: FiPhone,  label: "Phone",    value: personalInfo.phone,    href: `tel:${personalInfo.phone.replace(/\s/g, "")}` },
  { icon: FiMapPin, label: "Location", value: personalInfo.location, href: null },
] as const;

const socials = [
  { icon: FaLinkedinIn, label: "LinkedIn", href: personalInfo.linkedin },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#0a0d1f] text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(43,89,255,0.18), transparent 70%), radial-gradient(40% 40% at 100% 100%, rgba(124,58,237,0.18), transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-8 pt-24 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-12"
        >
          <div className="lg:col-span-5">
            <a href="#home" className="inline-flex items-center gap-3">
              <span className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-dot-blue" />
                <span className="h-2.5 w-2.5 rounded-full bg-dot-orange" />
                <span className="h-2.5 w-2.5 rounded-full bg-dot-green" />
              </span>
              <span className="font-[family-name:var(--font-heading)] text-2xl font-semibold tracking-tight">
                Yassmine&nbsp;Nouisser
              </span>
            </a>

            <p className="mt-6 max-w-md text-[15px] leading-7 text-white/55">
              AI Engineering Student · Full-Stack Web &amp; AI Developer.
              Crafting refined, intelligent products from Tunis.
            </p>

            <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-dot-green opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-dot-green" />
              </span>
              <span className="text-xs font-medium text-white/80">
                Available for new collaborations
              </span>
            </div>

            <div className="mt-8 flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white hover:text-navy"
                >
                  <Icon className="text-[15px]" />
                </a>
              ))}
              <a
                href={`mailto:${personalInfo.email}`}
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white px-5 py-2.5 text-sm font-semibold text-navy transition hover:-translate-y-0.5 hover:bg-blue hover:text-white"
              >
                Start a project
                <FiArrowUpRight className="transition group-hover:rotate-[20deg]" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="mb-5 text-[10px] font-mono uppercase tracking-[0.3em] text-white/40">
              ↳ Navigate
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white"
                  >
                    <span className="h-px w-4 bg-white/30 transition-all duration-300 group-hover:w-7 group-hover:bg-white" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="mb-5 text-[10px] font-mono uppercase tracking-[0.3em] text-white/40">
              ↳ Get in touch
            </p>
            <ul className="space-y-4">
              {contactRows.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white/70 transition group-hover:border-white/30 group-hover:bg-white/[0.08] group-hover:text-white">
                      <Icon className="text-[13px]" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[10px] font-mono uppercase tracking-[0.25em] text-white/35">
                        {label}
                      </span>
                      <span className="mt-1 block truncate text-sm font-medium text-white/85">
                        {value}
                      </span>
                    </span>
                    {href && (
                      <FiArrowUpRight className="shrink-0 text-white/30 transition group-hover:text-white" />
                    )}
                  </>
                );
                return (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        className="group flex items-center gap-3 rounded-xl border border-transparent px-1 py-1 transition hover:border-white/10 hover:bg-white/[0.03] hover:px-3"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-3 px-1 py-1">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.div>

        <div
          className="mt-16 h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)",
          }}
        />

        <div className="mt-8 flex flex-col items-start gap-4 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-[family-name:var(--font-heading)] tracking-wide">
            © {year} Yassmine Nouisser ·{" "}
            <span className="text-white/30">All rights reserved</span>
          </p>

          <p className="font-mono uppercase tracking-[0.25em] text-white/30">
            Crafted in Tunis · Next.js · Framer Motion
          </p>

          <a
            href="#home"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-white/70 transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white hover:text-navy"
          >
            Back to top
            <FiArrowUp className="transition group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
