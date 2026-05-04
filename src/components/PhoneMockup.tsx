import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

export default function PhoneMockup({
  src,
  alt,
  width = 240,
  height = 500,
  priority,
}: Props) {
  return (
    <div
      className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.55),0_0_30px_-10px_rgba(43,89,255,0.25)] ring-1 ring-white/5"
      style={{ width, height }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={`${width}px`}
        quality={95}
        className="object-cover"
        priority={priority}
      />
      <span className="pointer-events-none absolute left-1/2 top-2 h-1.5 w-14 -translate-x-1/2 rounded-full bg-black/80" />
    </div>
  );
}
