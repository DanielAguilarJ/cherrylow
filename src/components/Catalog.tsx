"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";

const catalogItems = [
  {
    title: "Camiseta Classic Cherry",
    category: "T-Shirt",
    description: "Sublimación full print con diseño Cherry Low signature.",
    price: "$380",
    gradient: "from-cherry/20 to-cherry-dark/20",
    waMessage:
      "Hola!%20Me%20interesa%20la%20Camiseta%20Classic%20Cherry.%20%C2%BFTienen%20disponible%20y%20en%20qu%C3%A9%20tallas%3F",
  },
  {
    title: "Sudadera Urban Cherry",
    category: "Hoodie",
    description: "Sudadera con capucha, diseño personalizado street style.",
    price: "$580",
    gradient: "from-ink-light to-cherry/10",
    waMessage:
      "Hola!%20Quiero%20cotizar%20la%20Sudadera%20Urban%20Cherry.%20%C2%BFQu%C3%A9%20tallas%20tienen%20y%20c%C3%B3mo%20es%20el%20env%C3%ADo%3F",
  },
  {
    title: "Camiseta Custom Auto",
    category: "T-Shirt",
    description: "Tu auto favorito plasmado en una camiseta de sublimación premium.",
    price: "$380",
    gradient: "from-leaf/10 to-ink-light",
    waMessage:
      "Hola!%20Quiero%20una%20Camiseta%20Custom%20con%20el%20dise%C3%B1o%20de%20mi%20auto.%20%C2%BFC%C3%B3mo%20funciona%20el%20proceso%3F",
  },
  {
    title: "Colección Personalizada",
    category: "Custom",
    description: "Diseño totalmente a tu medida. Tú eliges, nosotros creamos.",
    price: "Cotizar",
    gradient: "from-cherry/10 to-leaf/10",
    waMessage:
      "Hola!%20Me%20interesa%20una%20colecci%C3%B3n%20personalizada.%20%C2%BFPodemos%20platicar%20sobre%20el%20dise%C3%B1o%20y%20los%20precios%3F",
  },
  {
    title: "Pack Evento",
    category: "Bundle",
    description: "Paquete de camisetas para tu crew o evento automotriz.",
    price: "Cotizar",
    gradient: "from-ink-light to-cherry/20",
    waMessage:
      "Hola!%20Necesito%20un%20Pack%20de%20camisetas%20para%20un%20evento.%20%C2%BFQu%C3%A9%20precios%20manejan%20por%20mayoreo%20y%20cu%C3%A1nto%20tarda%3F",
  },
  {
    title: "Sudadera Cherry Signature",
    category: "Hoodie",
    description: "Edición especial con logo bordado y sublimación posterior.",
    price: "$650",
    gradient: "from-cherry-dark/20 to-ink-light",
    waMessage:
      "Hola!%20Me%20interesa%20la%20Sudadera%20Cherry%20Signature.%20%C2%BFTienen%20disponible%20y%20hacen%20env%C3%ADos%3F",
  },
];

const categoryColors: Record<string, string> = {
  "T-Shirt": "bg-cherry/10 text-cherry border-cherry/30",
  Hoodie: "bg-white/10 text-white border-white/30",
  Custom: "bg-leaf-light/10 text-leaf-light border-leaf-light/30",
  Bundle: "bg-cherry/10 text-cherry-light border-cherry-light/30",
};

export default function Catalog() {
  return (
    <section id="catalogo" className="relative py-28 sm:py-36">
      <div className="absolute inset-0 bg-ink" />

      {/* Red accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cherry/5 rounded-full blur-[150px]" />

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
            Streetwear con actitud
          </p>
          <h2 className="font-[family-name:var(--font-permanent-marker)] text-4xl sm:text-5xl lg:text-6xl text-white tracking-wider">
            CATÁLOGO
          </h2>
          <div className="mt-6 mx-auto w-24 h-1 bg-gradient-to-r from-cherry to-cherry-dark rounded-full" />
          <p className="mt-6 text-smoke/50 max-w-2xl mx-auto text-lg">
            Personalización de camisetas y sudaderas por sublimación. Desde{" "}
            <span className="text-cherry font-bold">$380 MXN</span>. Envíos a todo México.
          </p>
        </motion.div>

        {/* Logo display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-16"
        >
          <div className="relative w-40 h-40">
            <Image
              src="/logo-tshirt.png"
              alt="Cherry Low T-shirt"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Catalog grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {catalogItems.map((item, index) => (
            <motion.a
              key={item.title}
              href={`https://wa.me/524493091644?text=${item.waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group block"
            >
              <div className="relative h-full rounded-2xl border border-white/5 overflow-hidden hover:border-cherry/30 transition-all duration-500">
                {/* Preview area with gradient */}
                <div
                  className={`relative h-48 bg-gradient-to-br ${item.gradient} flex items-center justify-center`}
                >
                  <div className="text-center">
                    <ShirtIcon className="mx-auto text-white/20" size={item.category} />
                    <span
                      className={`inline-block mt-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${categoryColors[item.category]}`}
                    >
                      {item.category}
                    </span>
                  </div>
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
            href="https://wa.me/524493091644?text=Hola!%20Quiero%20cotizar%20una%20prenda%20personalizada%20con%20mi%20propio%20dise%C3%B1o.%20%C2%BFQu%C3%A9%20necesito%20enviarles%20y%20cu%C3%A1nto%20tarda%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 bg-cherry text-white font-bold uppercase tracking-wider rounded-full hover:bg-cherry-dark transition-all duration-300 glow-cherry hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Cotiza tu Diseño Personalizado
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ShirtIcon({ className, size }: { className?: string; size: string }) {
  const iconSize = size === "Bundle" ? 60 : 48;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={iconSize}
      height={iconSize}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
    </svg>
  );
}
