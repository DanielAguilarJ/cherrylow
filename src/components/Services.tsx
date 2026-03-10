"use client";

import { motion } from "framer-motion";
import { Paintbrush, Sparkles, Wrench, ArrowRight, MessageCircle } from "lucide-react";

const services = [
  {
    icon: Paintbrush,
    title: "Pintura",
    description:
      "Pintura de calipers y rines. Dale ese toque personalizado a los detalles que más se notan en tu auto.",
    tag: "Pintura Custom",
    waMessage:
      "Hola!%20Me%20interesa%20el%20servicio%20de%20pintura%20de%20calipers%20y%20rines.%20%C2%BFMe%20pueden%20dar%20informaci%C3%B3n%20y%20cotizaci%C3%B3n%3F",
  },
  {
    icon: Sparkles,
    title: "Detailing",
    description:
      "Lavado de interiores y exteriores, pulido y encerado. Tu auto como recién salido de la agencia.",
    tag: "Detailing",
    waMessage:
      "Hola!%20Me%20interesa%20el%20servicio%20de%20detailing%20(lavado%2Fpulido%2Fencerado).%20%C2%BFQu%C3%A9%20paquetes%20manejan%3F",
  },
  {
    icon: Wrench,
    title: "Mantenimiento",
    description:
      "Afinaciones y cambios de balatas. Mantenimiento básico y confiable para tu vehículo.",
    tag: "Taller",
    waMessage:
      "Hola!%20Me%20interesa%20el%20servicio%20de%20mantenimiento%20(afinaci%C3%B3n%2Fbalatas).%20%C2%BFCu%C3%A1les%20son%20los%20precios%3F",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="relative py-20 sm:py-28 lg:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink-light/50 to-ink light:from-[#F9F9F9] light:via-gray-50 light:to-[#F9F9F9]" />

      {/* Decorative cherry orbs */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-cherry/5 rounded-full blur-[150px]" />
      <div className="absolute top-1/3 -right-48 w-80 h-80 bg-cherry/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-cherry/5 rounded-full blur-[100px]" />

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
            Tu auto en las mejores manos
          </p>
          <h2 className="font-[family-name:var(--font-permanent-marker)] text-4xl sm:text-5xl lg:text-6xl text-white light:text-ink tracking-wider">
            DETAILING &amp; TALLER
          </h2>
          <div className="mt-6 mx-auto w-24 h-1 bg-gradient-to-r from-cherry to-cherry-dark rounded-full" />
          <p className="mx-auto mt-6 max-w-2xl text-base text-smoke/50 light:text-ink/60 sm:text-lg">
            Detailing automotriz y mantenimiento mecánico en Aguascalientes. Cuidamos cada detalle de tu auto.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group relative"
            >
              <a
                href={`https://wa.me/524493091644?text=${service.waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative h-full p-6 sm:p-8 rounded-2xl border border-white/5 light:border-ink/10 bg-white/[0.02] light:bg-ink/[0.03] backdrop-blur-sm hover:border-cherry/30 hover:bg-white/[0.05] light:hover:bg-ink/[0.05] transition-all duration-500 cursor-pointer"
              >
                {/* Tag */}
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border bg-cherry/10 text-cherry border-cherry/20">
                  {service.tag}
                </span>

                {/* Icon in cherry circle */}
                <div className="mt-6 mb-4 w-16 h-16 rounded-full bg-cherry/20 flex items-center justify-center transition-colors duration-300 group-hover:bg-cherry/30">
                  <service.icon
                    className="w-8 h-8 text-cherry group-hover:scale-110 transition-transform duration-300"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white light:text-ink mb-3 group-hover:text-cherry transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-smoke/50 light:text-ink/60 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* CTA */}
                <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-2">
                  <span className="font-[family-name:var(--font-permanent-marker)] text-xl sm:text-2xl text-cherry">
                    Cotizar
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-smoke/40 light:text-ink/50 group-hover:text-cherry transition-colors duration-300">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>

                {/* Hover glow */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-cherry/0 via-cherry/5 to-cherry/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
