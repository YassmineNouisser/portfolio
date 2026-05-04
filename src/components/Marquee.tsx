"use client";

import type { IconType } from "react-icons";
import {
  SiPython,
  SiNextdotjs,
  SiReact,
  SiDjango,
  SiThreedotjs,
  SiTypescript,
  SiNodedotjs,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiPhp,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
  SiGit,
  SiCplusplus,
  SiSqlite,
  SiSupabase,
  SiFigma,
  SiJupyter,
  SiTensorflow,
} from "react-icons/si";

const iconMap: Record<string, { Icon: IconType; color: string }> = {
  Python:       { Icon: SiPython,        color: "#3776AB" },
  "Next.js":    { Icon: SiNextdotjs,     color: "#1b1b2f" },
  React:        { Icon: SiReact,         color: "#61DAFB" },
  Django:       { Icon: SiDjango,        color: "#092E20" },
  "Three.js":   { Icon: SiThreedotjs,    color: "#1b1b2f" },
  TypeScript:   { Icon: SiTypescript,    color: "#3178C6" },
  "Node.js":    { Icon: SiNodedotjs,     color: "#5FA04E" },
  JavaScript:   { Icon: SiJavascript,    color: "#F7DF1E" },
  HTML:         { Icon: SiHtml5,         color: "#E34F26" },
  CSS:          { Icon: SiCss,           color: "#1572B6" },
  PHP:          { Icon: SiPhp,           color: "#777BB4" },
  MySQL:        { Icon: SiMysql,         color: "#4479A1" },
  PostgreSQL:   { Icon: SiPostgresql,    color: "#4169E1" },
  Tailwind:     { Icon: SiTailwindcss,   color: "#06B6D4" },
  Git:          { Icon: SiGit,           color: "#F05032" },
  "C/C++":      { Icon: SiCplusplus,     color: "#00599C" },
  "C++":        { Icon: SiCplusplus,     color: "#00599C" },
  SQLite:       { Icon: SiSqlite,        color: "#003B57" },
  Supabase:     { Icon: SiSupabase,      color: "#3ECF8E" },
  Figma:        { Icon: SiFigma,         color: "#F24E1E" },
  Jupyter:      { Icon: SiJupyter,       color: "#F37626" },
  TensorFlow:   { Icon: SiTensorflow,    color: "#FF6F00" },
};

interface MarqueeProps {
  items: string[];
  reverse?: boolean;
  speed?: number;
  variant?: "ghost" | "stack";
}

export default function Marquee({
  items,
  reverse = false,
  speed = 35,
  variant = "ghost",
}: MarqueeProps) {
  const sequence = [...items, ...items];
  const animation = `marquee-scroll${reverse ? "-reverse" : ""} ${speed}s linear infinite`;

  if (variant === "stack") {
    return (
      <>
        <style>{marqueeKeyframes}</style>
        <div className="overflow-hidden py-8 select-none [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <div
            className="flex w-max items-center gap-4 hover:[animation-play-state:paused]"
            style={{ animation, willChange: "transform" }}
          >
            {sequence.map((item, idx) => {
              const entry = iconMap[item];
              const isLogo = !!entry;
              return (
                <div
                  key={`${item}-${idx}`}
                  aria-hidden={idx >= items.length}
                  className={
                    isLogo
                      ? "flex shrink-0 items-center gap-3 rounded-full border border-border-light bg-white px-5 py-2.5 shadow-[var(--shadow-soft)]"
                      : "flex shrink-0 items-center gap-3 rounded-full border border-blue/15 bg-blue-bg px-5 py-2.5"
                  }
                >
                  {isLogo && entry ? (
                    <>
                      <entry.Icon className="text-2xl" style={{ color: entry.color }} />
                      <span className="text-sm font-semibold text-navy whitespace-nowrap">
                        {item}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="h-1.5 w-1.5 rounded-full bg-blue" />
                      <span className="text-sm font-semibold text-navy whitespace-nowrap font-[family-name:var(--font-heading)] uppercase tracking-wider">
                        {item}
                      </span>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{marqueeKeyframes}</style>
      <div className="overflow-hidden py-8 select-none [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div
          className="flex w-max hover:[animation-play-state:paused]"
          style={{ animation, willChange: "transform" }}
        >
          {sequence.map((item, idx) => (
            <span
              key={`${item}-${idx}`}
              aria-hidden={idx >= items.length}
              className="shrink-0 px-6 text-5xl sm:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-heading)] text-navy/[0.07] uppercase tracking-wider whitespace-nowrap"
            >
              {item} <span className="text-blue/30">·</span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

const marqueeKeyframes = `
@keyframes marquee-scroll {
  from { transform: translate3d(0, 0, 0); }
  to   { transform: translate3d(-50%, 0, 0); }
}
@keyframes marquee-scroll-reverse {
  from { transform: translate3d(-50%, 0, 0); }
  to   { transform: translate3d(0, 0, 0); }
}
`;
