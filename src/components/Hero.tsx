"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heroImages = [
  { src: "/tshirt-cherry-wheels.jpg", alt: "Cherry Low Merch" },
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
  { fromX: "1%", toX: "-1%", fromY: "-2%", toY: "2%" },
];

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
      className="relative min-h-[100svh] w-full overflow-hidden bg-ink light:bg-smoke"
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
        className="absolute left-1/2 top-20 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-cherry/10 blur-[110px] z-[2] sm:left-auto sm:top-1/4 sm:h-[500px] sm:w-[500px] sm:-translate-x-0 sm:-left-32 sm:blur-[150px]"
      />
      <motion.div
        animate={{ x: [0, -15, 0], y: [0, 20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-20 bottom-1/4 h-56 w-56 rounded-full bg-cherry/8 blur-[90px] z-[2] sm:-right-32 sm:h-80 sm:w-80 sm:blur-[120px]"
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
      <div className="relative z-10 flex min-h-[100svh] items-center pt-24 pb-16 sm:pb-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-center sm:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4 font-[family-name:var(--font-dancing-script)] text-2xl text-cherry glow-cherry-text sm:text-3xl lg:text-4xl"
            >
              Aférrate a tus sueños
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-[family-name:var(--font-permanent-marker)] text-[clamp(3.5rem,16vw,8rem)] lg:text-9xl text-white leading-[0.9] tracking-[0.04em] sm:tracking-wide"
            >
              <span className="block">CHERRY</span>
              <span className="block text-gradient-cherry">LOW!</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-smoke/80 sm:mx-0 sm:text-xl"
            >
              Streetwear personalizado, fotografía y video automotriz.
              <span className="text-cherry font-semibold"> Aguascalientes</span>{" "}
              y envíos a todo México.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4"
            >
              <a
                href="#merch"
                className="group relative w-full sm:w-auto px-6 sm:px-8 py-4 bg-cherry text-white text-sm sm:text-base font-bold uppercase tracking-[0.2em] rounded-full overflow-hidden transition-all duration-300 hover:scale-105 glow-cherry text-center"
              >
                <span className="relative z-10">Ver Playeras</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cherry-dark to-cherry opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href={WA_QUOTE}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto px-6 sm:px-8 py-4 border-2 border-white/30 text-white text-sm sm:text-base font-bold uppercase tracking-[0.18em] rounded-full hover:bg-cherry/10 hover:border-cherry transition-all duration-300 backdrop-blur-sm text-center"
              >
                Cotizar por WhatsApp
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.0 }}
              className="mt-12 grid max-w-xl grid-cols-1 gap-4 rounded-3xl border border-white/10 bg-black/15 p-5 backdrop-blur-sm sm:mt-14 sm:grid-cols-[auto_1px_auto_1px_auto] sm:items-stretch sm:gap-x-8 sm:gap-y-4 sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0 sm:backdrop-blur-0"
            >
              <div>
                <p className="font-[family-name:var(--font-permanent-marker)] text-3xl sm:text-4xl text-cherry">
                  $380
                </p>
                <p className="text-xs sm:text-sm text-ash uppercase tracking-wider">
                  Personalización DTF
                </p>
              </div>
              <div className="hidden sm:block w-px bg-white/10 self-stretch" />
              <div>
                <p className="font-[family-name:var(--font-permanent-marker)] text-3xl sm:text-4xl text-white">
                  MX
                </p>
                <p className="text-xs sm:text-sm text-ash uppercase tracking-wider">
                  Envío Nacional
                </p>
              </div>
              <div className="hidden sm:block w-px bg-white/10 self-stretch" />
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
      <div className="absolute bottom-24 right-4 z-10 hidden flex-col gap-2 sm:bottom-16 sm:right-8 sm:flex">
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
        className="absolute bottom-[max(1.5rem,env(safe-area-inset-bottom))] left-1/2 -translate-x-1/2 z-10 hidden sm:block"
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
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-ink light:from-[#F9F9F9] to-transparent z-[3]" />
    </section>
  );
}
