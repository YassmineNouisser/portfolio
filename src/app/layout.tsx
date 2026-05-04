import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yassmine Nouisser | AI Engineering Student & Full-Stack Developer",
  description:
    "Portfolio of Yassmine Nouisser — AI Engineering Student at ESPRIT, Full-Stack Web & AI Developer, Co-founder & Entrepreneur.",
  keywords: [
    "Yassmine Nouisser", "AI Engineer", "Full-Stack Developer",
    "Machine Learning", "Deep Learning", "LLMs", "Portfolio", "ESPRIT",
  ],
  openGraph: {
    title: "Yassmine Nouisser | AI Engineering Student & Full-Stack Developer",
    description: "Portfolio of Yassmine Nouisser — AI Engineering Student, Full-Stack Web & AI Developer.",
    type: "website",
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-bg text-text antialiased">{children}</body>
    </html>
  );
}
