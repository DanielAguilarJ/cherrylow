"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";

const catalogItems = [
  {
    title: "Takata Harness",
    category: "T-Shirt",
    description: "Diseño icónico del arnés Takata en color verde. Sublimación full print sobre camiseta blanca.",
    price: "$380",
    image: "/tshirt-takata.jpg",
    waMessage:
      "Hola!%20Me%20interesa%20la%20Playera%20Takata%20Harness.%20%C2%BFTienen%20disponible%20y%20en%20qu%C3%A9%20tallas%3F",
  },
  {
    title: "K-Series Engine",
    category: "T-Shirt",
    description: "El motor K-Series ilustrado en detalle. Para los que saben lo que hay debajo del cofre.",
    price: "$380",
    image: "/tshirt-engine.jpg",
    waMessage:
      "Hola!%20Me%20interesa%20la%20Playera%20K-Series%20Engine.%20%C2%BFTienen%20disponible%20y%20en%20qu%C3%A9%20tallas%3F",
  },
  {
    title: "Work Hard Dream Big",
    category: "T-Shirt",
    description: "Rin Work Meister con el mensaje que define la cultura: Work Hard, Dream Big.",
    price: "$380",
    image: "/tshirt-workhard.jpg",
    waMessage:
      "Hola!%20Me%20interesa%20la%20Playera%20Work%20Hard%20Dream%20Big.%20%C2%BFTienen%20disponible%20y%20en%20qu%C3%A9%20tallas%3F",
  },
  {
    title: "Cherry Wheels",
    category: "T-Shirt",
    description: "El logo Cherry Low reinterpretado con rines y frenos rojos. Diseño signature de la marca.",
    price: "$380",
    image: "/tshirt-cherry-wheels.jpg",
    waMessage:
      "Hola!%20Me%20interesa%20la%20Playera%20Cherry%20Wheels.%20%C2%BFTienen%20disponible%20y%20en%20qu%C3%A9%20tallas%3F",
  },
  {
    title: "Rim Pop",
    category: "T-Shirt",
    description: "Rin derretido como paleta rosa. Arte callejero y cultura automotriz en una sola pieza.",
    price: "$380",
    image: "/tshirt-rim-pop.jpg",
    waMessage:
      "Hola!%20Me%20interesa%20la%20Playera%20Rim%20Pop.%20%C2%BFTienen%20disponible%20y%20en%20qu%C3%A9%20tallas%3F",
  },
  {
    title: "Coilover Pop",
    category: "T-Shirt",
    description: "Coilover rojo como paleta de mango. El stance tiene otro sabor.",
    price: "$380",
    image: "/tshirt-coilover-pop.jpg",
    waMessage:
      "Hola!%20Me%20interesa%20la%20Playera%20Coilover%20Pop.%20%C2%BFTienen%20disponible%20y%20en%20qu%C3%A9%20tallas%3F",
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
