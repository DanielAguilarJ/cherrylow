"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Camera, Film, Aperture, Focus, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Fotografía Automotriz",
    description:
      "Capturamos cada detalle de tu auto con técnicas profesionales de iluminación y composición.",
  },
  {
    icon: Film,
    title: "Creación de Videos, Shorts o Reels",
    description:
      "Creación de videos, shorts o reels para tus redes. Rollings cinematográficos, showcases y contenido que hace destacar tu auto.",
  },
  {
    icon: Aperture,
    title: "Edición Premium",
    description:
      "Post-producción de alto nivel. Color grading, retoque y entrega en máxima calidad.",
  },
  {
    icon: Focus,
    title: "Sesiones Personalizadas",
    description:
      "Planeamos la sesión contigo: locación, hora dorada, ángulos y estilo visual para tu auto.",
  },
];

const WA_SESSION =
  "https://wa.me/524493091644?text=Hola!%20Quiero%20cotizar%20una%20sesi%C3%B3n%20de%20fotos%20profesional%20para%20mi%20auto.%20%C2%BFCu%C3%A1les%20son%20los%20paquetes%20disponibles%20y%20qu%C3%A9%20incluyen%3F";

const WA_VIDEO =
  "https://wa.me/524493091644?text=Hola!%20Me%20interesa%20un%20video%2Fshort%2Freel%20para%20mi%20auto.%20%C2%BFQu%C3%A9%20paquetes%20manejan%20y%20c%C3%B3mo%20es%20el%20proceso%3F";

export default function Multimedia() {
  return (
    <section id="multimedia" className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink-light/30 to-ink light:from-[#F9F9F9] light:via-gray-50 light:to-[#F9F9F9]" />

      {/* Decorative cherry orbs (circles) */}
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-cherry/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/3 -left-48 w-96 h-96 bg-cherry/8 rounded-full blur-[128px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-cherry/5 rounded-full blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-20"
        >
          <p className="font-[family-name:var(--font-dancing-script)] text-cherry text-xl sm:text-2xl mb-2">
            Cherry Low Photography
          </p>
          <h2 className="font-[family-name:var(--font-permanent-marker)] text-4xl sm:text-5xl lg:text-6xl text-white light:text-ink tracking-wider">
            FOTOGRAFÍA Y VIDEOGRAFÍA
          </h2>
          <div className="mt-6 mx-auto w-24 h-1 bg-gradient-to-r from-cherry to-cherry-dark rounded-full" />
          <p className="mx-auto mt-6 max-w-2xl text-base text-smoke/50 light:text-ink/60 sm:text-lg">
            Sesiones de foto y video para tu auto. Creación de videos, shorts o reels para tus redes.
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Logo + Description */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative mb-10">
              <div className="relative w-40 h-40 sm:w-56 sm:h-56 mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-cherry/10 rounded-full blur-[40px]" />
                <Image
                  src="/logo-photography.png"
                  alt="Cherry Low Photography"
                  fill
                  className="object-contain relative z-10"
                />
              </div>
            </div>

            <p className="mb-6 text-base leading-relaxed text-smoke/70 light:text-ink/70 text-center sm:text-lg lg:text-left">
              En <span className="text-cherry font-bold">Cherry Low Photography</span> nos
              especializamos en capturar la esencia de tu auto. Desde sesiones estáticas hasta
              rollings cinematográficos, creamos contenido visual que hace destacar tu máquina.
            </p>

            <p className="text-smoke/50 light:text-ink/60 leading-relaxed mb-4 text-center lg:text-left">
              Creación de videos, shorts o reels para tus redes — hacemos sesiones completas para el auto del cliente. Contenido que impacta en Instagram, TikTok y YouTube.
            </p>

            <p className="text-smoke/50 light:text-ink/60 leading-relaxed mb-8 text-center lg:text-left">
              Envíanos las fotos y videos de referencia por WhatsApp para cotizar tu sesión
              personalizada. Cada proyecto es único, justo como tu auto.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center lg:justify-start">
              <a
                href={WA_SESSION}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-cherry text-white text-sm sm:text-base font-bold uppercase tracking-[0.18em] rounded-full hover:bg-cherry-dark transition-all duration-300 glow-cherry hover:scale-105"
              >
                <Camera className="w-5 h-5" />
                Cotizar Sesión de Foto
              </a>
              <a
                href={WA_VIDEO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 border-2 border-white/20 light:border-ink/25 text-white light:text-ink text-sm sm:text-base font-bold uppercase tracking-[0.16em] rounded-full hover:border-cherry/50 hover:bg-white/5 light:hover:bg-ink/5 transition-all duration-300"
              >
                <Film className="w-5 h-5" />
                Cotizar Video / Reel
              </a>
            </div>
          </motion.div>

          {/* Right - Features */}
          <div className="space-y-5">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="group"
              >
                <div className="flex flex-col gap-4 p-5 sm:flex-row sm:gap-5 sm:p-6 rounded-2xl border border-white/5 light:border-ink/10 bg-white/[0.02] light:bg-ink/[0.03] hover:border-cherry/20 hover:bg-white/[0.04] light:hover:bg-ink/[0.05] transition-all duration-500">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-cherry/20 group-hover:bg-cherry/30 transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-cherry" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white light:text-ink mb-1 group-hover:text-cherry transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-smoke/50 light:text-ink/60 leading-relaxed">{feature.description}</p>
                  </div>
                  <ArrowRight className="hidden sm:block w-5 h-5 text-white/0 group-hover:text-cherry/60 transition-all duration-300 flex-shrink-0 mt-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gallery hint */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 sm:mt-20 text-center"
        >
          <div className="inline-flex max-w-3xl flex-col items-center gap-3 rounded-3xl border border-cherry/20 bg-cherry/5 px-5 py-4 sm:flex-row sm:rounded-full sm:px-6 sm:py-3">
            <Camera className="w-4 h-4 text-cherry" />
            <p className="text-smoke/60 light:text-ink/60 text-sm">
              Hacemos sesiones completas de foto y video para el auto del cliente — cada sesión es única.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
