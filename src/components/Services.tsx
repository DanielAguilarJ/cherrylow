"use client";

import { motion } from "framer-motion";
import { Camera, Shirt, Car, Palette, ArrowRight, MessageCircle } from "lucide-react";

const services = [
  {
    icon: Shirt,
    title: "Camisetas Personalizadas",
    description:
      "Sublimación de alta calidad en camisetas y sudaderas. Tu diseño, tu estilo, tu marca personal.",
    price: "$380 MXN",
    tag: "Sublimación",
    color: "cherry" as const,
    waMessage:
      "Hola!%20Me%20interesa%20una%20camiseta%20personalizada%20por%20sublimaci%C3%B3n.%20%C2%BFQu%C3%A9%20opciones%20tienen%20y%20c%C3%B3mo%20es%20el%20proceso%3F",
  },
  {
    icon: Camera,
    title: "Sesiones de Foto",
    description:
      "Sesiones fotográficas profesionales para tu auto. Capturamos la esencia de tu máquina con estilo urbano.",
    price: "Cotizar",
    tag: "Photography",
    color: "white" as const,
    waMessage:
      "Hola!%20Quiero%20cotizar%20una%20sesi%C3%B3n%20de%20fotos%20para%20mi%20auto.%20%C2%BFCu%C3%A1les%20son%20los%20paquetes%20y%20precios%3F",
  },
  {
    icon: Car,
    title: "Video Automotriz",
    description:
      "Producción de video profesional para tu auto. Rollings, showcases y contenido para redes sociales.",
    price: "Cotizar",
    tag: "Video",
    color: "leaf" as const,
    waMessage:
      "Hola!%20Me%20interesa%20un%20video%20automotriz%20profesional.%20%C2%BFQu%C3%A9%20paquetes%20manejan%20y%20qu%C3%A9%20incluye%3F",
  },
  {
    icon: Palette,
    title: "Diseños Personalizados",
    description:
      "Creamos diseños únicos para tu ropa o para plasmar en tu auto. Arte urbano con identidad propia.",
    price: "Cotizar",
    tag: "Custom",
    color: "cherry" as const,
    waMessage:
      "Hola!%20Quiero%20un%20dise%C3%B1o%20personalizado%20para%20mi%20proyecto.%20%C2%BFMe%20pueden%20ayudar%20con%20ideas%20y%20cotizaci%C3%B3n%3F",
  },
];

const colorMap = {
  cherry: "bg-cherry/10 text-cherry border-cherry/20",
  white: "bg-white/10 text-white border-white/20",
  leaf: "bg-leaf-light/10 text-leaf-light border-leaf-light/20",
} as const;

const iconColorMap = {
  cherry: "text-cherry",
  white: "text-white",
  leaf: "text-leaf-light",
} as const;

const iconBgMap = {
  cherry: "bg-cherry/10 group-hover:bg-cherry/20",
  white: "bg-white/10 group-hover:bg-white/15",
  leaf: "bg-leaf-light/10 group-hover:bg-leaf-light/20",
} as const;

export default function Services() {
  return (
    <section id="servicios" className="relative py-28 sm:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink-light/50 to-ink" />

      {/* Decorative orbs */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-cherry/5 rounded-full blur-[150px]" />
      <div className="absolute top-1/3 -right-48 w-80 h-80 bg-leaf/5 rounded-full blur-[120px]" />

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
            Lo que hacemos
          </p>
          <h2 className="font-[family-name:var(--font-permanent-marker)] text-4xl sm:text-5xl lg:text-6xl text-white tracking-wider">
            NUESTROS SERVICIOS
          </h2>
          <div className="mt-6 mx-auto w-24 h-1 bg-gradient-to-r from-cherry to-cherry-dark rounded-full" />
          <p className="mt-6 text-smoke/50 max-w-2xl mx-auto text-lg">
            Desde ropa personalizada hasta contenido visual profesional para tu auto.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
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
                className="block relative h-full p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-cherry/30 hover:bg-white/[0.05] transition-all duration-500 cursor-pointer"
              >
                {/* Tag */}
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${colorMap[service.color]}`}
                >
                  {service.tag}
                </span>

                {/* Icon */}
                <div className={`mt-6 mb-4 w-14 h-14 rounded-xl ${iconBgMap[service.color]} flex items-center justify-center transition-colors duration-300`}>
                  <service.icon
                    className={`w-7 h-7 ${iconColorMap[service.color]} group-hover:scale-110 transition-transform duration-300`}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cherry transition-colors duration-300">{service.title}</h3>
                <p className="text-smoke/50 leading-relaxed mb-6">{service.description}</p>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <span className="font-[family-name:var(--font-permanent-marker)] text-2xl text-cherry">
                    {service.price}
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-smoke/40 group-hover:text-cherry transition-colors duration-300">
                    <MessageCircle className="w-4 h-4" />
                    Cotizar
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
