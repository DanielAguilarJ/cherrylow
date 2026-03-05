"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heroImages = [
  { src: "/hero-1.jpg", alt: "Cherry Low Streetwear" },
  { src: "/hero-2.jpg", alt: "Cherry Low Automotive" },
  { src: "/hero-3.jpg", alt: "Cherry Low Photography" },
];

const SLIDE_DURATION = 7000;
const WIPE_DURATION = 1.6;

// Each image drifts in a unique direction during display (Ken Burns + parallax drift)
const driftConfigs = [
  { fromX: "-2%", toX: "2%", fromY: "-1%", toY: "1%" },
  { fromX: "2%", toX: "-2%", fromY: "1%", toY: "-1%" },
  { fromX: "-1%", toX: "1%", fromY: "2%", toY: "-2%" },
];

const WA_CATALOG =
  "https://wa.me/524493091644?text=Hola!%20Me%20interesa%20ver%20el%20cat%C3%A1logo%20de%20Cherry%20Low.%20%C2%BFQu%C3%A9%20productos%20tienen%20disponibles%3F";
const WA_QUOTE =
  "https://wa.me/524493091644?text=Hola!%20Vi%20su%20p%C3%A1gina%20y%20me%20interesa%20cotizar%20un%20servicio%20de%20Cherry%20Low.%20%C2%BFMe%20pueden%20ayudar%3F";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    setProgressKey((k) => k + 1);
  }, []);

  useEffect(() => {
    timeoutRef.current = setTimeout(nextSlide, SLIDE_DURATION);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex, nextSlide]);

  // Preload next image
  useEffect(() => {
    const nextIdx = (currentIndex + 1) % heroImages.length;
    const img = new Image();
    img.src = heroImages[nextIdx].src;
  }, [currentIndex]);

  const drift = driftConfigs[currentIndex % driftConfigs.length];

  return (
    <section
      id="inicio"
      className="relative h-screen w-full overflow-hidden bg-ink"
    >
      {/* ═══ PARALLAX SLIDESHOW ═══ */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          className="absolute inset-0 will-change-transform"
          /* Clip-path wipe: reveals from left to right like a curtain */
          initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
          animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          exit={{ opacity: 0 }}
          transition={{
            clipPath: {
              duration: WIPE_DURATION,
              ease: [0.77, 0, 0.175, 1], // dramatic ease-in-out
            },
            opacity: { duration: 0.8, delay: 0.3 },
          }}
        >
          {/* Image with parallax counter-movement + Ken Burns drift */}
          <motion.div
            className="absolute inset-[-15%] bg-cover bg-center will-change-transform"
            style={{
              backgroundImage: `url(${heroImages[currentIndex].src})`,
            }}
            initial={{
              scale: 1.25,
              x: "-6%",
            }}
            animate={{
              scale: 1.05,
              x: drift.toX,
              y: drift.toY,
            }}
            transition={{
              scale: {
                duration: (SLIDE_DURATION / 1000) + WIPE_DURATION,
                ease: [0.25, 0.46, 0.45, 0.94],
              },
              x: {
                duration: SLIDE_DURATION / 1000,
                ease: "easeInOut",
              },
              y: {
                duration: SLIDE_DURATION / 1000,
                ease: "easeInOut",
              },
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* ═══ OVERLAY LAYERS (create depth) ═══ */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/40 to-ink/90 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-ink/50 z-[1]" />

      {/* Animated accent orbs - midground layer */}
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-cherry/10 rounded-full blur-[150px] z-[2]"
      />
      <motion.div
        animate={{ x: [0, -15, 0], y: [0, 20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 -right-32 w-80 h-80 bg-cherry/8 rounded-full blur-[120px] z-[2]"
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] z-[2]"
        style={{
          backgroundImage: `linear-gradient(rgba(220,38,38,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.4) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* ═══ CONTENT (foreground - static for parallax depth) ═══ */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-[family-name:var(--font-dancing-script)] text-cherry text-2xl sm:text-3xl lg:text-4xl mb-4 glow-cherry-text"
            >
              Aférrate a tus sueños
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-[family-name:var(--font-permanent-marker)] text-6xl sm:text-8xl lg:text-9xl text-white leading-[0.9] tracking-wide"
            >
              <span className="block">CHERRY</span>
              <span className="block text-gradient-cherry">LOW!</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-6 text-lg sm:text-xl text-smoke/80 max-w-xl leading-relaxed"
            >
              Streetwear personalizado, fotografía y video automotriz.
              <span className="text-cherry font-semibold"> Aguascalientes</span>{" "}
              y envíos a todo México.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <a
                href={WA_CATALOG}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-cherry text-white font-bold uppercase tracking-wider rounded-full overflow-hidden transition-all duration-300 hover:scale-105 glow-cherry text-center"
              >
                <span className="relative z-10">Ver Catálogo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cherry-dark to-cherry opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href={WA_QUOTE}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 border-2 border-white/30 text-white font-bold uppercase tracking-wider rounded-full hover:bg-cherry/10 hover:border-cherry transition-all duration-300 backdrop-blur-sm text-center"
              >
                Cotizar Ahora
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.0 }}
              className="mt-14 flex gap-8"
            >
              <div>
                <p className="font-[family-name:var(--font-permanent-marker)] text-3xl sm:text-4xl text-cherry">
                  $380
                </p>
                <p className="text-xs sm:text-sm text-ash uppercase tracking-wider">
                  Sublimación
                </p>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <p className="font-[family-name:var(--font-permanent-marker)] text-3xl sm:text-4xl text-white">
                  MX
                </p>
                <p className="text-xs sm:text-sm text-ash uppercase tracking-wider">
                  Envío Nacional
                </p>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <p className="font-[family-name:var(--font-permanent-marker)] text-3xl sm:text-4xl text-leaf-light">
                  AGS
                </p>
                <p className="text-xs sm:text-sm text-ash uppercase tracking-wider">
                  Base
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ═══ SLIDE PROGRESS BAR ═══ */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/5 z-20">
        <motion.div
          key={progressKey}
          className="h-full bg-gradient-to-r from-cherry to-cherry-light"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: SLIDE_DURATION / 1000,
            ease: "linear",
          }}
        />
      </div>

      {/* ═══ SLIDE INDICATORS ═══ */}
      <div className="absolute bottom-24 sm:bottom-16 right-8 z-10 flex flex-col gap-2">
        {heroImages.map((_, index) => (
          <div
            key={index}
            className={`h-8 w-1 rounded-full transition-all duration-700 ${
              index === currentIndex
                ? "bg-cherry scale-y-100"
                : "bg-white/20 scale-y-75"
            }`}
          />
        ))}
      </div>

      {/* ═══ SCROLL INDICATOR ═══ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-ash uppercase tracking-widest">
            Scroll
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-cherry"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-ink to-transparent z-[3]" />
    </section>
  );
}
