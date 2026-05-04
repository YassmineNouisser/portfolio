"use client";

import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Marquee from "@/components/Marquee";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />

      <main>
        <HeroSection />

        <Marquee
          items={[
            "Machine Learning",
            "Deep Learning",
            "LLMs & NLP",
            "Computer Vision",
            "AI Engineering",
            "Data Science",
            "RAG",
            "Prompt Engineering",
          ]}
        />

        <Marquee
          variant="stack"
          speed={45}
          reverse
          items={[
            "Python",
            "JavaScript",
            "TypeScript",
            "C/C++",
            "PHP",
            "MySQL",
            "PostgreSQL",
            "HTML",
            "CSS",
            "React",
            "Next.js",
            "Node.js",
            "Django",
            "Three.js",
            "TensorFlow",
            "Git",
          ]}
        />

        <AboutSection />

        <div className="section-divider" />

        <SkillsSection />

        <ExperienceSection />

        <div className="section-divider" />

        <ProjectsSection />

        <Marquee items={["Innovation", "Creativity", "Problem Solving", "AI Solutions", "Web Development"]} />

        <CertificationsSection />

        <div className="section-divider" />

        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
