import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  width?: number;
  priority?: boolean;
};

export default function BrowserMockup({
  src,
  alt,
  width = 540,
  priority,
}: Props) {
  const headerHeight = 32;
  const aspectHeight = Math.round((width / 16) * 10);
  const totalHeight = headerHeight + aspectHeight;

  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.65),0_0_40px_-12px_rgba(43,89,255,0.3)] ring-1 ring-white/5"
      style={{ width, height: totalHeight }}
    >
      <div
        className="flex items-center gap-2 border-b border-white/5 bg-zinc-950/80 px-4"
        style={{ height: headerHeight }}
      >
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-3 hidden h-1.5 flex-1 max-w-[60%] rounded-full bg-white/10 sm:block" />
      </div>
      <div className="relative" style={{ height: aspectHeight }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={`${width}px`}
          quality={95}
          className="object-cover object-top"
          priority={priority}
        />
      </div>
    </div>
  );
}
