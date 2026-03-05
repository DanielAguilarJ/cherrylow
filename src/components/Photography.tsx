"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Camera, Video, Aperture, Focus, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Fotografía Automotriz",
    description: "Capturamos cada detalle de tu auto con técnicas profesionales de iluminación y composición.",
  },
  {
    icon: Video,
    title: "Video Profesional",
    description: "Rollings cinematográficos, showcases y contenido premium para tus redes sociales.",
  },
  {
    icon: Aperture,
    title: "Edición Premium",
    description: "Post-producción de alto nivel. Color grading, retoque y entrega en máxima calidad.",
  },
  {
    icon: Focus,
    title: "Sesiones Personalizadas",
    description: "Planeamos la sesión contigo: locación, hora dorada, ángulos y estilo visual.",
  },
];

const WA_SESSION =
  "https://wa.me/524493091644?text=Hola!%20Quiero%20cotizar%20una%20sesi%C3%B3n%20de%20fotos%20profesional%20para%20mi%20auto.%20%C2%BFCu%C3%A1les%20son%20los%20paquetes%20disponibles%20y%20qu%C3%A9%20incluyen%3F";

const WA_VIDEO =
  "https://wa.me/524493091644?text=Hola!%20Me%20interesa%20un%20video%20automotriz%20profesional%20(rolling%2Fshowcase).%20%C2%BFQu%C3%A9%20paquetes%20manejan%20y%20c%C3%B3mo%20es%20el%20proceso%3F";

export default function Photography() {
  return (
    <section id="fotografia" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink-light/30 to-ink" />

      {/* Decorative elements */}
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-cherry/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/3 -left-48 w-96 h-96 bg-leaf/10 rounded-full blur-[128px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="font-[family-name:var(--font-dancing-script)] text-cherry text-xl sm:text-2xl mb-2">
            Cherry Low Photography
          </p>
          <h2 className="font-[family-name:var(--font-permanent-marker)] text-4xl sm:text-5xl lg:text-6xl text-white tracking-wider">
            FOTO & VIDEO
          </h2>
          <div className="mt-6 mx-auto w-24 h-1 bg-gradient-to-r from-cherry to-cherry-dark rounded-full" />
        </motion.div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Logo + Description */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative mb-10">
              <div className="relative w-56 h-56 mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-cherry/10 rounded-full blur-[40px]" />
                <Image
                  src="/logo-photography.png"
                  alt="Cherry Low Photography"
                  fill
                  className="object-contain relative z-10"
                />
              </div>
            </div>

            <p className="text-lg text-smoke/70 leading-relaxed mb-6 text-center lg:text-left">
              En <span className="text-cherry font-bold">Cherry Low Photography</span> nos
              especializamos en capturar la esencia de tu auto. Desde sesiones estáticas hasta
              rollings cinematográficos, creamos contenido visual que hace destacar tu máquina.
            </p>

            <p className="text-smoke/50 leading-relaxed mb-8 text-center lg:text-left">
              Envíanos las fotos y videos de referencia por WhatsApp para cotizar tu sesión
              personalizada. Cada proyecto es único, justo como tu auto.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={WA_SESSION}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cherry text-white font-bold uppercase tracking-wider rounded-full hover:bg-cherry-dark transition-all duration-300 glow-cherry hover:scale-105"
              >
                <Camera className="w-5 h-5" />
                Cotizar Sesión
              </a>
              <a
                href={WA_VIDEO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-bold uppercase tracking-wider rounded-full hover:border-cherry/50 hover:bg-white/5 transition-all duration-300"
              >
                <Video className="w-5 h-5" />
                Cotizar Video
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
                <div className="flex gap-5 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-cherry/20 hover:bg-white/[0.04] transition-all duration-500">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cherry/10 flex items-center justify-center group-hover:bg-cherry/20 transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-cherry" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cherry transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-smoke/50 leading-relaxed">{feature.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white/0 group-hover:text-cherry/60 transition-all duration-300 flex-shrink-0 mt-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
