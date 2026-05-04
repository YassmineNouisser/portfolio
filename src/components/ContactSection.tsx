"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio-data";
import { FiMail, FiPhone, FiMapPin, FiSend, FiArrowUpRight, FiClock, FiCheck } from "react-icons/fi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const projectTypes = [
  "AI / ML Project",
  "Web Development",
  "Mobile App",
  "Full-Stack Solution",
  "Other",
];

const socials = [
  { icon: FaLinkedinIn, href: personalInfo.linkedin, label: "LinkedIn", handle: "yassmine-nouisser" },
  { icon: FaGithub, href: personalInfo.github, label: "GitHub", handle: "yassmine-nouisser" },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: projectTypes[0],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
    setFormData({ name: "", email: "", projectType: projectTypes[0], message: "" });
  };

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-navy" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(43,89,255,0.30),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(43,89,255,0.20),transparent_55%)]" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue/15 blur-[100px]"
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue/10 blur-[100px]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-start gap-6 mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-blue opacity-75 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-blue" />
            </span>
            <span className="text-[11px] font-[family-name:var(--font-mono)] tracking-[0.2em] uppercase text-white/70">
              Available for projects
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between w-full gap-6">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-heading)] text-white tracking-tight leading-[1.05]">
              Let&apos;s build
              <br />
              <span className="text-white/40">
                something exceptional
              </span>
            </h2>
            <p className="text-white/50 text-base lg:text-right max-w-md leading-relaxed">
              I&apos;m always open to discussing AI projects, web platforms, or any ambitious idea you want to bring to life.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm p-7 sm:p-8">
              <p className="text-xs font-[family-name:var(--font-mono)] tracking-[0.2em] uppercase text-white/40 mb-6">
                Direct contact
              </p>

              <div className="space-y-1">
                {[
                  { icon: FiMail, label: "Email", text: personalInfo.email, href: `mailto:${personalInfo.email}` },
                  { icon: FiPhone, label: "Phone", text: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, "")}` },
                  { icon: FiMapPin, label: "Location", text: personalInfo.location, href: null },
                ].map((item, i) => {
                  const inner = (
                    <>
                      <div className="flex items-center gap-4 min-w-0">
                        <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue/20 group-hover:border-blue/40 transition-all duration-300">
                          <item.icon className="text-white/70 group-hover:text-white text-base transition-colors" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] font-[family-name:var(--font-mono)] tracking-[0.2em] uppercase text-white/40 mb-0.5">
                            {item.label}
                          </p>
                          <p className="text-white text-sm font-medium truncate">{item.text}</p>
                        </div>
                      </div>
                      {item.href && (
                        <FiArrowUpRight className="text-white/30 group-hover:text-white text-lg flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                      )}
                    </>
                  );

                  return item.href ? (
                    <a
                      key={i}
                      href={item.href}
                      className="group flex items-center justify-between gap-4 py-3.5 border-b border-white/5 last:border-b-0"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={i} className="group flex items-center justify-between gap-4 py-3.5 border-b border-white/5 last:border-b-0">
                      {inner}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm p-7 sm:p-8">
              <p className="text-xs font-[family-name:var(--font-mono)] tracking-[0.2em] uppercase text-white/40 mb-6">
                Find me online
              </p>

              <div className="space-y-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 px-4 py-3 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <s.icon className="text-white/80 text-lg" />
                      <div>
                        <p className="text-white text-sm font-medium">{s.label}</p>
                        <p className="text-white/40 text-xs">@{s.handle}</p>
                      </div>
                    </div>
                    <FiArrowUpRight className="text-white/30 group-hover:text-white text-lg group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-blue/10 border border-blue/20 backdrop-blur-sm p-6 flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0">
                <FiClock className="text-white text-base" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">Response within 24 hours</p>
                <p className="text-white/50 text-xs mt-0.5">Mon — Fri · GMT+1 (Tunis)</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="relative rounded-3xl bg-white p-8 sm:p-10 lg:p-12 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.5)]"
            >
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue to-transparent"
              />

              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-navy">
                    Send a message
                  </h3>
                  <p className="text-text-muted text-sm mt-1">
                    Fill the form and I&apos;ll get back to you shortly.
                  </p>
                </div>
                <span className="hidden sm:inline-flex text-[10px] font-[family-name:var(--font-mono)] tracking-[0.2em] uppercase text-text-muted">
                  01 / Form
                </span>
              </div>

              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FloatingInput
                    id="name"
                    label="Full name"
                    type="text"
                    value={formData.name}
                    onChange={(v) => setFormData({ ...formData, name: v })}
                    required
                  />
                  <FloatingInput
                    id="email"
                    label="Email address"
                    type="email"
                    value={formData.email}
                    onChange={(v) => setFormData({ ...formData, email: v })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-navy uppercase tracking-[0.15em] mb-3">
                    Project type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => {
                      const active = formData.projectType === type;
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-200 ${
                            active
                              ? "bg-blue text-white border-blue shadow-[0_4px_12px_-4px_rgba(43,89,255,0.4)]"
                              : "bg-white text-text-secondary border-border-light hover:border-blue/40 hover:text-blue"
                          }`}
                        >
                          {active && <FiCheck className="inline mr-1.5 -mt-0.5" />}
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <FloatingTextarea
                  id="message"
                  label="Tell me about your project"
                  value={formData.message}
                  onChange={(v) => setFormData({ ...formData, message: v })}
                  required
                />

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="group w-full py-4 rounded-2xl font-semibold text-white bg-blue hover:bg-blue-dark transition-colors duration-300 shadow-[0_10px_30px_-10px_rgba(43,89,255,0.5)] flex items-center justify-center gap-2.5 text-sm"
                >
                  {submitted ? (
                    <>
                      <FiCheck className="text-lg" /> Message sent — talk soon!
                    </>
                  ) : (
                    <>
                      <FiSend className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      Send message
                    </>
                  )}
                </motion.button>

                <p className="text-center text-xs text-text-muted pt-1">
                  By sending this message, you agree to be contacted at the email provided.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface FloatingInputProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}

function FloatingInput({ id, label, type, value, onChange, required }: FloatingInputProps) {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder=" "
        className="peer w-full px-5 pt-6 pb-2.5 rounded-2xl bg-[#F5F7FF] border border-transparent text-navy text-sm focus:outline-none focus:border-blue focus:ring-4 focus:ring-blue/10 transition-all"
      />
      <label
        htmlFor={id}
        className="absolute left-5 top-2 text-[10px] font-semibold text-text-muted uppercase tracking-[0.15em] transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-xs peer-placeholder-shown:font-medium peer-placeholder-shown:tracking-normal peer-placeholder-shown:uppercase-none peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-[10px] peer-focus:font-semibold peer-focus:text-blue peer-focus:tracking-[0.15em] peer-focus:uppercase pointer-events-none"
      >
        {label}
      </label>
    </div>
  );
}

interface FloatingTextareaProps {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}

function FloatingTextarea({ id, label, value, onChange, required }: FloatingTextareaProps) {
  return (
    <div className="relative">
      <textarea
        id={id}
        rows={5}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder=" "
        className="peer w-full px-5 pt-7 pb-3 rounded-2xl bg-[#F5F7FF] border border-transparent text-navy text-sm focus:outline-none focus:border-blue focus:ring-4 focus:ring-blue/10 transition-all resize-none"
      />
      <label
        htmlFor={id}
        className="absolute left-5 top-2 text-[10px] font-semibold text-text-muted uppercase tracking-[0.15em] transition-all duration-200 peer-placeholder-shown:top-6 peer-placeholder-shown:text-xs peer-placeholder-shown:font-medium peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-[10px] peer-focus:font-semibold peer-focus:text-blue peer-focus:tracking-[0.15em] peer-focus:uppercase pointer-events-none"
      >
        {label}
      </label>
    </div>
  );
}
