export const personalInfo = {
  name: "Yassmine Nouisser",
  title: "AI Engineering Student · Full-Stack Web & AI Developer",
  bio: "AI Engineering Student · LLMs, ML & DL · Full-Stack Web & AI Developer · Developing Smart AI-Powered Solutions",
  location: "Tunis, Tunisie",
  email: "nouisseryassmine@gmail.com",
  phone: "(+216) 25 983 383",
  linkedin: "https://www.linkedin.com/in/yassmine-nouisser-a50aba288/",
};

export const heroTitles = [
  "AI Engineering Student",
  "Full-Stack Developer",
  "AI & LLM Enthusiast",
  "Co-founder & Entrepreneur",
];

export const aboutText = `I am a 3rd-year AI Engineering student at ESPRIT, passionate about building intelligent digital solutions. Skilled in Machine Learning, Deep Learning, LLMs and Full-Stack Web Development, I enjoy transforming innovative ideas into practical applications. Co-founder of two tech ventures — a digital marketing & IT agency and a software development company — I combine strong technical expertise with entrepreneurial drive. With hands-on experience in developing AI-powered systems, smart applications and accessible voice-based solutions, I am constantly exploring new technologies to solve real-world problems, optimize processes and create meaningful impact.`;

export const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "C/C++", "JavaScript", "PHP", "SQL", "HTML/CSS"],
  },
  {
    title: "AI & Data Science",
    skills: ["Machine Learning", "Deep Learning", "LLMs", "NLP", "Computer Vision", "BI", "RAG"],
  },
  {
    title: "Frameworks",
    skills: ["Django", "Next.js", "React", "Node.js", "Qt", "SDL"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "SQLite", "phpMyAdmin", "Supabase"],
  },
  {
    title: "Web & 3D",
    skills: ["Animated 3D Website Creation", "Three.js", "Responsive Design", "SEO"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git/GitHub", "Jupyter Notebook", "Figma", "VS Code"],
  },
  {
    title: "Marketing & Content",
    skills: [
      "Digital Marketing",
      "Marketing Strategy",
      "Branding",
      "Social Media Management",
      "Video Making",
      "Video Editing",
      "Content Creation",
      "Copywriting",
      "Business Development",
      "Client Acquisition",
    ],
  },
  {
    title: "Soft Skills",
    skills: ["Communication", "Leadership", "Teamwork", "Problem Solving"],
  },
  {
    title: "Languages",
    skills: ["Arabic (Native)", "French (B2)", "English (B1)", "Spanish (A2)"],
  },
];

export const experiences = [
  {
    company: "OY Creative Agency",
    role: "Co-founder & Full-Stack Developer",
    type: "Digital Marketing & IT Solutions",
    period: "Fév. 2026 – Présent",
    points: [
      "Co-founded and lead a digital communication and IT agency",
      "Designed and developed the agency showcase website with Next.js (React, SSR, SEO-optimized)",
      "Manage a diverse client portfolio: digital strategy, branding, custom web development and sponsoring",
    ],
  },
  {
    company: "iDeep",
    role: "Developer & Marketing / Business Development Manager",
    type: "Software Development Company",
    period: "Août 2025 – Présent",
    points: [
      "Develop custom web and mobile applications for diverse clients",
      "Define and execute marketing strategy to grow brand awareness",
      "Manage social media presence and lead client acquisition",
    ],
  },
  {
    company: "ESPRIT Student Committee",
    role: "Communications Manager",
    type: "",
    period: "Sep. 2024 – Juin 2025",
    points: [
      "Led the communications department for 1 year, supervising 4 sub-teams",
      "Previously served as Social Media Manager (3 months)",
    ],
  },
  {
    company: "Tunisie Telecom",
    role: "Telecommunications Intern",
    type: "",
    period: "Été 2024",
    points: [
      "Hands-on internship in telecommunications infrastructure and network administration",
    ],
  },
];

export const education = [
  {
    school: "ESPRIT",
    degree: "Engineering Degree, Artificial Intelligence",
    detail: "3rd year in progress",
    period: "Sep. 2023 – Présent",
    description:
      "Specialization in Machine Learning, Deep Learning, LLMs, NLP and Full-Stack Development",
  },
  {
    school: "Lycée Okba Ibn Nefaa",
    degree: "Scientific Baccalaureate, With Honors (Mention Bien)",
    detail: "",
    period: "Sep. 2022 – Juin 2023",
    description: "",
  },
];

export type Project = {
  slug: string;
  title: string;
  year: string;
  description: string;
  longDescription?: string;
  tags: string[];
  screens: string[];
  device: "phone" | "browser";
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "bouzid",
    title: "Bouzid Bijouterie",
    year: "2026",
    description: "Animated 3D jewelry website with immersive product showcase",
    longDescription:
      "A high-end jewelry boutique site featuring real-time 3D product showcases, smooth scroll-driven animations and a refined editorial design.",
    tags: ["Three.js", "Next.js", "WebGL", "3D Animation"],
    device: "phone",
    screens: Array.from({ length: 8 }, (_, i) => `/projects/bouzid${i + 1}.png`),
    github: "#",
    demo: "#",
  },
  {
    slug: "getinshape",
    title: "Get In Shape",
    year: "2025",
    description: "Workout & coaching mobile experience for guided fitness",
    longDescription:
      "Mobile-first fitness companion. Guided workouts, daily streaks and personalized coaching, with a clean, focused UI tuned for repeat sessions.",
    tags: ["Mobile", "UI/UX", "Fitness"],
    device: "phone",
    screens: Array.from({ length: 9 }, (_, i) => `/projects/getinshape${i + 1}.png`),
    github: "#",
    demo: "#",
  },
  {
    slug: "maisonparfum",
    title: "Maison de Parfum",
    year: "2025",
    description: "Luxury perfume e-shop concept with editorial layout",
    longDescription:
      "Editorial e-commerce concept for a luxury perfume house. Long-form storytelling, refined motion design and a quiet, considered checkout flow.",
    tags: ["E-commerce", "Editorial", "Motion"],
    device: "phone",
    screens: Array.from({ length: 7 }, (_, i) => `/projects/maisonparfum${i + 1}.png`),
    github: "#",
    demo: "#",
  },
  {
    slug: "eatandfit",
    title: "Eat & Fit",
    year: "2026",
    description:
      "AI-powered personalized nutrition and fitness web app using LLMs and RAG",
    longDescription:
      "An intelligent nutrition & fitness companion. Users get personalized meal plans, workout routines and conversational coaching grounded in their own data via Retrieval-Augmented Generation.",
    tags: ["Python", "Django", "LLMs", "RAG"],
    device: "browser",
    screens: Array.from({ length: 11 }, (_, i) => `/projects/eatandfit${i + 1}.png`),
    github: "#",
    demo: "#",
  },
  {
    slug: "ideep",
    title: "iDeep",
    year: "2025",
    description:
      "Brand site for iDeep — software house where I lead development & marketing",
    longDescription:
      "Brand & showcase site for iDeep, a software studio shipping bespoke web and mobile apps. I serve as Developer and Marketing / Business Development Manager — crafting the site, the brand voice and the client acquisition strategy.",
    tags: ["Next.js", "Web Development", "Branding"],
    device: "browser",
    screens: Array.from({ length: 5 }, (_, i) => `/projects/ideep${i + 1}.png`),
    github: "#",
    demo: "#",
  },
  {
    slug: "gabest",
    title: "Gabest",
    year: "2025",
    description:
      "Commerce experience — product discovery flow with refined motion",
    longDescription:
      "A shopping platform focused on product discovery. Refined micro-interactions, a fast browse → cart loop and a personalized feed.",
    tags: ["E-commerce", "Web", "Motion"],
    device: "browser",
    screens: Array.from({ length: 8 }, (_, i) => `/projects/gabest${i + 1}.png`),
    github: "#",
    demo: "#",
  },
  {
    slug: "oycreative",
    title: "OY Creative Agency",
    year: "2026",
    description: "Showcase site for our digital marketing & IT studio",
    longDescription:
      "The web home of OY Creative — a digital marketing & IT studio I co-founded. Built with Next.js, fully SSR and SEO-optimized, with motion-led storytelling.",
    tags: ["Next.js", "React", "SSR", "SEO"],
    device: "browser",
    screens: Array.from({ length: 5 }, (_, i) => `/projects/oycreative${i + 1}.png`),
    github: "#",
    demo: "#",
  },
];

export const roles = [
  "Freelancer",
  "Co-founder",
  "Student",
  "Entrepreneur",
];

export const certifications = [
  {
    title: "Generative AI with Diffusion Models",
    issuer: "NVIDIA",
    year: "2025",
    image: "/certifs/nvidia-generative-ai.jpeg",
  },
  {
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA",
    year: "2025",
    image: "/certifs/nvidia-deep-learning.jpeg",
  },
  {
    title: "Premier Prix — Best Project, Bal des Projets",
    issuer: "ESPRIT",
    year: "2025",
    image: "/certifs/bal-projets-best-project.png",
  },
  {
    title: "First Place — Best Game, GD3",
    issuer: "ESPRIT",
    year: "2024",
    image: "/certifs/gd3-best-game.png",
  },
  {
    title: "C et C++ : au cœur de l'industrie — Participation",
    issuer: "ESPRIT",
    year: "2025",
    image: "/certifs/c-cpp-participation.jpeg",
  },
  {
    title: "C-ool Algorythm Coaching",
    issuer: "ESPRIT",
    year: "2025",
    image: "/certifs/c-ool-algo-coaching.jpg",
  },
  {
    title: "Event Participation",
    issuer: "ESPRIT",
    year: "2025",
    image: "/certifs/event-participation.png",
  },
  {
    title: "Attestation",
    issuer: "ESPRIT",
    year: "2024",
    image: "/certifs/attestation.png",
  },
  {
    title: "3rd Place — Interclasse",
    issuer: "ESPRIT",
    year: "2024",
    image: "/certifs/3rd-place-interclasse.png",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
