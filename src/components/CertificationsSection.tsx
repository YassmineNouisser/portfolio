"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/portfolio-data";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import Image from "next/image";
import { FiAward, FiStar } from "react-icons/fi";

export default function CertificationsSection() {
  return (
    <SectionWrapper id="certifications" className="section-light">
      <SectionHeading label="Achievements" title="Certifications &" titleAccent="Awards" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {certifications.map((cert, idx) => {
          const isAward =
            cert.title.includes("First Place") ||
            cert.title.includes("Premier Prix") ||
            cert.title.includes("Best");

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden bg-white border border-border-light hover:border-blue/20 transition-all duration-500 hover:shadow-[0_16px_48px_rgba(43,89,255,0.1)]">
                {/* Certificate image area */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-blue-bg to-bg">
                  {cert.image ? (
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      quality={92}
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-blue-bg">
                        {isAward ? (
                          <FiStar className="text-blue text-2xl" />
                        ) : (
                          <FiAward className="text-blue text-2xl" />
                        )}
                      </div>
                      <span className="text-xs font-[family-name:var(--font-mono)] text-text-muted">{cert.issuer}</span>
                    </div>
                  )}

                  {/* Hover overlay */}
                  {(cert.image || "pdf" in cert) && (
                    <div className="absolute inset-0 bg-navy/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                      <span className="text-white text-sm font-medium px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/20">
                        View Certificate
                      </span>
                    </div>
                  )}

                  {/* Year badge */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-[family-name:var(--font-mono)] font-semibold text-navy shadow-sm">
                    {cert.year}
                  </div>

                  {/* Award badge */}
                  {isAward && (
                    <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                      <FiStar className="text-blue text-[11px]" />
                      Award
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-[15px] font-semibold text-navy leading-snug mb-2 line-clamp-2 group-hover:text-blue transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-text-secondary">{cert.issuer}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
