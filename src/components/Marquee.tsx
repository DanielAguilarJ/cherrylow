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
    <div className="relative overflow-hidden border-y border-cherry/10 bg-cherry/5 py-3 sm:py-4">
      <div className="marquee-track">
        <span className="marquee-content whitespace-nowrap font-[family-name:var(--font-permanent-marker)] text-xs tracking-[0.18em] text-cherry/60 uppercase sm:text-base sm:tracking-[0.3em]">
          {content}&nbsp;&nbsp;{content}&nbsp;&nbsp;
        </span>
      </div>
    </div>
  );
}
