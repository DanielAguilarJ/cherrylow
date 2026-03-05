"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle, Tag, ArrowRight } from "lucide-react";

const designs = [
  {
    src: "/designs/design-01.png",
    title: "Lowrider Clásico Negro",
    description: "Diseño completo para carrocería estilo lowrider clásico, acabado en negro mate con detalles cromados.",
    tag: "Carrocería Completa",
  },
  {
    src: "/designs/design-02.png",
    title: "Carbon & Chrome Edition",
    description: "Arte custom con texturas de carbono y detalles cromados. Ideal para capós, spoilers y paneles laterales.",
    tag: "Detallado Premium",
  },
  {
    src: "/designs/design-03.png",
    title: "Full Wrap Street Art",
    description: "Envoltura total de vehículo con arte urbano exclusivo. Cada diseño es único e irrepetible.",
    tag: "Wrap Total",
  },
  {
    src: "/designs/design-04.jpg",
    title: "Urban Stance Edition",
    description: "Diseño orientado a la cultura stance con paleta de colores urbana y tipografía custom.",
    tag: "Cultura Stance",
  },
  {
    src: "/designs/design-05.png",
    title: "Tribal Custom Flow",
    description: "Patrones tribales adaptados a la silueta de tu vehículo. Arte que sigue las líneas del chassis.",
    tag: "Arte Tribal",
  },
  {
    src: "/designs/design-06.png",
    title: "Old School Flames",
    description: "Llamas clásicas estilo old school con degradado personalizado. El clásico del custom automotriz.",
    tag: "Clásico Old School",
  },
  {
    src: "/designs/design-07.png",
    title: "Night Rider Dark Custom",
    description: "Diseño cargado en tonos oscuros con detalles que brillan bajo luz UV. Identidad única de noche.",
    tag: "Dark Edition",
  },
  {
    src: "/designs/design-08.jpg",
    title: "Street Fighter Grafiti",
    description: "Arte graffiti profesional fusionado con la forma de tu auto. Carácter urbano en cada trazo.",
    tag: "Graffiti Art",
  },
];

const WA_NUMBER = "524493091644";

function buildWALink(title: string) {
  const msg = encodeURIComponent(
    `Hola! Me interesa el diseño personalizado "${title}" para mi auto. ¿Me pueden dar una cotización?`
  );
  return `https://wa.me/${WA_NUMBER}?text=${msg}`;
}

export default function CustomDesigns() {
  return (
    <section id="disenos" className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink-light/30 to-ink" />
      <div className="absolute top-1/4 -left-56 w-[500px] h-[500px] bg-cherry/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-56 w-[400px] h-[400px] bg-cherry/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="font-[family-name:var(--font-dancing-script)] text-cherry text-xl sm:text-2xl mb-2">
            Arte sobre ruedas
          </p>
          <h2 className="font-[family-name:var(--font-permanent-marker)] text-4xl sm:text-5xl lg:text-6xl text-white tracking-wider">
            DISEÑOS PERSONALIZADOS
          </h2>
          <div className="mt-6 mx-auto w-24 h-1 bg-gradient-to-r from-cherry to-cherry-dark rounded-full" />
          <p className="mt-6 text-smoke/50 max-w-2xl mx-auto text-lg">
            Cada diseño es único. Llevamos tu visión al metal — cotiza el tuyo hoy.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {designs.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative flex flex-col rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden hover:border-cherry/40 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />

                {/* Tag badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cherry/80 text-white backdrop-blur-sm border border-cherry/40">
                    <Tag className="w-3 h-3" />
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5 gap-3">
                <h3 className="text-white font-bold text-base leading-snug group-hover:text-cherry transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-smoke/50 text-sm leading-relaxed flex-1">
                  {item.description}
                </p>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-2 border-t border-white/5 mt-1">
                  <span className="font-[family-name:var(--font-permanent-marker)] text-xl text-cherry">
                    Cotizar
                  </span>
                  <a
                    href={buildWALink(item.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-smoke/40 hover:text-cherry transition-colors duration-300"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    Pedir
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                  </a>
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-t from-cherry/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-smoke/40 mb-5 text-sm">
            ¿Tienes una idea diferente? Cuéntanos — hacemos realidad cualquier visión.
          </p>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hola! Quiero un diseño personalizado para mi auto. ¿Me pueden ayudar con ideas y cotización?")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-cherry text-white font-bold uppercase tracking-widest text-sm hover:bg-cherry-dark transition-colors duration-300 shadow-lg shadow-cherry/20"
          >
            <MessageCircle className="w-4 h-4" />
            Solicitar Cotización
          </a>
        </motion.div>
      </div>
    </section>
  );
}
