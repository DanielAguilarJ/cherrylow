"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

const navLinks = [
  { name: "Merch", href: "#merch" },
  { name: "Foto y Video", href: "#multimedia" },
  { name: "Servicios", href: "#servicios" },
];

const WA_LINK =
  "https://wa.me/524493091644?text=Hola!%20Me%20interesa%20cotizar%20un%20servicio%20de%20Cherry%20Low%20(ropa%2Ffoto%2Fvideo).%20%C2%BFPodr%C3%ADan%20darme%20informaci%C3%B3n%3F";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink/95 backdrop-blur-xl border-b border-cherry/10 shadow-lg shadow-black/20"
          : "bg-gradient-to-b from-ink/50 to-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="relative">
              <Image
                src="/logo-photography.png"
                alt="Cherry Low"
                width={44}
                height={44}
                className="rounded-full ring-2 ring-cherry/30 group-hover:ring-cherry/60 transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-cherry/0 group-hover:bg-cherry/10 transition-colors duration-300" />
            </div>
            <span className="font-[family-name:var(--font-permanent-marker)] text-lg text-white tracking-wider group-hover:text-cherry transition-colors duration-300">
              CHERRY LOW
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-smoke/70 hover:text-white transition-colors duration-300 uppercase tracking-widest group rounded-lg hover:bg-white/5"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-cherry transition-all duration-300 group-hover:w-3/4 rounded-full" />
              </a>
            ))}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-6 inline-flex items-center gap-2 px-6 py-2.5 bg-cherry text-white text-sm font-bold uppercase tracking-wider rounded-full hover:bg-cherry-dark transition-all duration-300 hover:scale-105 glow-cherry"
            >
              <MessageCircle className="w-4 h-4" />
              Cotizar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-7 h-0.5 bg-white transition-colors"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-7 h-0.5 bg-cherry"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-7 h-0.5 bg-white transition-colors"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-ink/98 backdrop-blur-xl border-t border-cherry/10"
          >
            <div className="px-6 py-8 space-y-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 py-2 text-lg font-medium text-smoke/80 hover:text-cherry transition-colors uppercase tracking-widest"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cherry/40" />
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full mt-4 px-6 py-3.5 bg-cherry text-white font-bold uppercase tracking-wider rounded-full hover:bg-cherry-dark transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Cotizar Ahora
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
