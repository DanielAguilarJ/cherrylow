"use client";

const items = [
  "STREETWEAR",
  "SUBLIMACIÓN",
  "FOTOGRAFÍA",
  "VIDEO AUTOMOTRIZ",
  "DISEÑO PERSONALIZADO",
  "AGUASCALIENTES",
  "ENVÍOS A TODO MÉXICO",
  "CAMISETAS",
  "SUDADERAS",
  "ROLLING SHOTS",
];

export default function Marquee() {
  const content = items.map((item) => `${item} ✦`).join("  ");

  return (
    <div className="relative py-4 bg-cherry/5 border-y border-cherry/10 overflow-hidden">
      <div className="marquee-track">
        <span className="marquee-content font-[family-name:var(--font-permanent-marker)] text-sm sm:text-base tracking-[0.3em] text-cherry/60 uppercase whitespace-nowrap">
          {content}&nbsp;&nbsp;{content}&nbsp;&nbsp;
        </span>
      </div>
    </div>
  );
}
