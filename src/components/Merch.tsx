"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  MessageCircle,
  Tag,
  ShoppingBag,
  Car,
  Gift,
} from "lucide-react";

/* ═══════════════════════════════════════════════
   DATA – Catálogo en existencia
   ═══════════════════════════════════════════════ */
const catalogItems = [
  {
    title: "Takata Harness",
    category: "T-Shirt",
    description:
      "Diseño icónico del arnés Takata en color verde. Personalización DTF full print sobre camiseta blanca.",
    price: "$380",
    image: "/tshirt-takata.jpg",
    waMessage:
      "Hola!%20Me%20interesa%20la%20Playera%20Takata%20Harness.%20%C2%BFTienen%20disponible%20y%20en%20qu%C3%A9%20tallas%3F",
  },
  {
    title: "K-Series Engine",
    category: "T-Shirt",
    description:
      "El motor K-Series ilustrado en detalle. Para los que saben lo que hay debajo del cofre.",
    price: "$380",
    image: "/tshirt-engine.jpg",
    waMessage:
      "Hola!%20Me%20interesa%20la%20Playera%20K-Series%20Engine.%20%C2%BFTienen%20disponible%20y%20en%20qu%C3%A9%20tallas%3F",
  },
  {
    title: "Work Hard Dream Big",
    category: "T-Shirt",
    description:
      "Rin Work Meister con el mensaje que define la cultura: Work Hard, Dream Big.",
    price: "$380",
    image: "/tshirt-workhard.jpg",
    waMessage:
      "Hola!%20Me%20interesa%20la%20Playera%20Work%20Hard%20Dream%20Big.%20%C2%BFTienen%20disponible%20y%20en%20qu%C3%A9%20tallas%3F",
  },
  {
    title: "Cherry Wheels",
    category: "T-Shirt",
    description:
      "El logo Cherry Low reinterpretado con rines y frenos rojos. Diseño signature de la marca.",
    price: "$380",
    image: "/tshirt-cherry-wheels.jpg",
    waMessage:
      "Hola!%20Me%20interesa%20la%20Playera%20Cherry%20Wheels.%20%C2%BFTienen%20disponible%20y%20en%20qu%C3%A9%20tallas%3F",
  },
  {
    title: "Rim Pop",
    category: "T-Shirt",
    description:
      "Rin derretido como paleta rosa. Arte callejero y cultura automotriz en una sola pieza.",
    price: "$380",
    image: "/tshirt-rim-pop.jpg",
    waMessage:
      "Hola!%20Me%20interesa%20la%20Playera%20Rim%20Pop.%20%C2%BFTienen%20disponible%20y%20en%20qu%C3%A9%20tallas%3F",
  },
  {
    title: "Coilover Pop",
    category: "T-Shirt",
    description:
      "Coilover rojo como paleta de mango. El stance tiene otro sabor.",
    price: "$380",
    image: "/tshirt-coilover-pop.jpg",
    waMessage:
      "Hola!%20Me%20interesa%20la%20Playera%20Coilover%20Pop.%20%C2%BFTienen%20disponible%20y%20en%20qu%C3%A9%20tallas%3F",
  },
];

/* ═══════════════════════════════════════════════
   DATA – Diseños personalizados
   ═══════════════════════════════════════════════ */
const designs = [
  {
    src: "/designs/design-01.png",
    title: "Lowrider Clásico Negro",
    description:
      "Diseño completo para carrocería estilo lowrider clásico, acabado en negro mate con detalles cromados.",
    tag: "Carrocería Completa",
  },
  {
    src: "/designs/design-02.png",
    title: "Carbon & Chrome Edition",
    description:
      "Arte custom con texturas de carbono y detalles cromados. Ideal para capós, spoilers y paneles laterales.",
    tag: "Detallado Premium",
  },
  {
    src: "/designs/design-03.png",
    title: "Full Wrap Street Art",
    description:
      "Envoltura total de vehículo con arte urbano exclusivo. Cada diseño es único e irrepetible.",
    tag: "Wrap Total",
  },
  {
    src: "/designs/design-04.jpg",
    title: "Urban Stance Edition",
    description:
      "Diseño orientado a la cultura stance con paleta de colores urbana y tipografía custom.",
    tag: "Cultura Stance",
  },
  {
    src: "/designs/design-05.png",
    title: "Tribal Custom Flow",
    description:
      "Patrones tribales adaptados a la silueta de tu vehículo. Arte que sigue las líneas del chassis.",
    tag: "Arte Tribal",
  },
  {
    src: "/designs/design-06.png",
    title: "Old School Flames",
    description:
      "Llamas clásicas estilo old school con degradado personalizado. El clásico del custom automotriz.",
    tag: "Clásico Old School",
  },
  {
    src: "/designs/design-07.png",
    title: "Night Rider Dark Custom",
    description:
      "Diseño cargado en tonos oscuros con detalles que brillan bajo luz UV. Identidad única de noche.",
    tag: "Dark Edition",
  },
  {
    src: "/designs/design-08.jpg",
    title: "Street Fighter Grafiti",
    description:
      "Arte graffiti profesional fusionado con la forma de tu auto. Carácter urbano en cada trazo.",
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

const categoryColors: Record<string, string> = {
  "T-Shirt": "bg-cherry/10 text-cherry border-cherry/30",
  Hoodie: "bg-white/10 text-white border-white/30",
  Custom: "bg-leaf-light/10 text-leaf-light border-leaf-light/30",
  Bundle: "bg-cherry/10 text-cherry-light border-cherry-light/30",
};

/* ═══════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════ */
type MerchTab = "catalogo" | "personalizado";

export default function Merch() {
  const [tab, setTab] = useState<MerchTab>("catalogo");

  return (
    <section id="merch" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-ink" />

      {/* Cherry decorative orbs (circles) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cherry/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-40 w-[400px] h-[400px] bg-cherry/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-[350px] h-[350px] bg-cherry/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="font-[family-name:var(--font-dancing-script)] text-cherry text-xl sm:text-2xl mb-2">
            Streetwear con actitud
          </p>
          <h2 className="font-[family-name:var(--font-permanent-marker)] text-4xl sm:text-5xl lg:text-6xl text-white tracking-wider">
            MERCH
          </h2>
          <div className="mt-6 mx-auto w-24 h-1 bg-gradient-to-r from-cherry to-cherry-dark rounded-full" />
          <p className="mt-6 text-smoke/50 max-w-2xl mx-auto text-lg">
            Personalización DTF de camisetas y sudaderas. Desde{" "}
            <span className="text-cherry font-bold">$380 MXN</span>. Envíos a
            todo México.
          </p>
        </motion.div>

        {/* ── Gift Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <div className="relative mx-auto max-w-3xl rounded-2xl border border-cherry/30 bg-gradient-to-r from-cherry/10 via-cherry/5 to-cherry/10 p-5 sm:p-6 overflow-hidden">
            {/* Background orb */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-cherry/10 rounded-full blur-[50px] pointer-events-none" />
            <div className="relative flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cherry/20 flex items-center justify-center">
                <Gift className="w-6 h-6 text-cherry" />
              </div>
              <p className="text-smoke/80 text-sm sm:text-base leading-relaxed">
                <span className="text-cherry font-bold">¡Incluido con tu playera!</span>{" "}
                Todas nuestras playeras incluyen un empaque especial con stickers
                en relieve y un llavero impreso en 3D exclusivo de Cherry Low.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Tab Switcher ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <button
            onClick={() => setTab("catalogo")}
            className={`group flex items-center justify-center gap-3 px-10 py-5 rounded-2xl border-2 text-lg font-bold uppercase tracking-wider transition-all duration-300 ${
              tab === "catalogo"
                ? "bg-cherry text-white border-cherry glow-cherry scale-[1.02]"
                : "bg-white/[0.03] text-smoke/60 border-white/10 hover:border-cherry/40 hover:text-white"
            }`}
          >
            <ShoppingBag className="w-6 h-6" />
            Catálogo en Existencia
          </button>
          <button
            onClick={() => setTab("personalizado")}
            className={`group flex items-center justify-center gap-3 px-10 py-5 rounded-2xl border-2 text-lg font-bold uppercase tracking-wider transition-all duration-300 ${
              tab === "personalizado"
                ? "bg-cherry text-white border-cherry glow-cherry scale-[1.02]"
                : "bg-white/[0.03] text-smoke/60 border-white/10 hover:border-cherry/40 hover:text-white"
            }`}
          >
            <Car className="w-6 h-6" />
            Diseño Personalizado (Tu Auto)
          </button>
        </motion.div>

        {/* ── Tab Content ── */}
        <AnimatePresence mode="wait">
          {tab === "catalogo" ? (
            <motion.div
              key="catalogo"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Catalog grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {catalogItems.map((item, index) => (
                  <motion.a
                    key={item.title}
                    href={`https://wa.me/${WA_NUMBER}?text=${item.waMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group block"
                  >
                    <div className="relative h-full rounded-2xl border border-white/5 overflow-hidden hover:border-cherry/30 transition-all duration-500">
                      {/* Product image */}
                      <div className="relative h-64 bg-black overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Category badge */}
                        <span
                          className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${categoryColors[item.category]}`}
                        >
                          {item.category}
                        </span>
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-cherry/0 group-hover:bg-cherry/10 transition-colors duration-500 flex items-center justify-center">
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-flex items-center gap-2 px-5 py-2 bg-cherry text-white text-sm font-bold uppercase tracking-wider rounded-full">
                            <MessageCircle className="w-4 h-4" />
                            Ordenar
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 bg-white/[0.02]">
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cherry transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-sm text-smoke/50 mb-4 leading-relaxed">
                          {item.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="font-[family-name:var(--font-permanent-marker)] text-xl text-cherry">
                            {item.price}
                          </span>
                          <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-smoke/40 group-hover:text-cherry transition-colors duration-300">
                            Pedir por WhatsApp
                            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-16 text-center"
              >
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hola! Quiero cotizar una prenda personalizada con mi propio diseño. ¿Qué necesito enviarles y cuánto tarda?")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-10 py-4 bg-cherry text-white font-bold uppercase tracking-wider rounded-full hover:bg-cherry-dark transition-all duration-300 glow-cherry hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  Cotiza tu Diseño Personalizado
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="personalizado"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Header for custom tab */}
              <div className="text-center mb-12">
                <p className="font-[family-name:var(--font-dancing-script)] text-cherry text-xl sm:text-2xl mb-2">
                  Arte sobre ruedas
                </p>
                <h3 className="font-[family-name:var(--font-permanent-marker)] text-3xl sm:text-4xl text-white tracking-wider mb-4">
                  DISEÑOS PERSONALIZADOS
                </h3>
                <p className="text-smoke/50 max-w-2xl mx-auto text-lg">
                  Cada diseño es único. Llevamos tu visión al metal — cotiza el
                  tuyo hoy.
                </p>
              </div>

              {/* Designs grid */}
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
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
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
                  ¿Tienes una idea diferente? Cuéntanos — hacemos realidad
                  cualquier visión.
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
