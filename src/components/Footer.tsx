"use client";

import Image from "next/image";
import { Instagram, Facebook } from "lucide-react";

const WA_FOOTER =
  "https://wa.me/524493091644?text=Hola!%20Vi%20su%20p%C3%A1gina%20y%20quiero%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20Cherry%20Low.%20%C2%BFMe%20pueden%20ayudar%3F";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5">
      <div className="absolute inset-0 bg-ink-light/50" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo-tshirt.png"
                alt="Cherry Low"
                width={40}
                height={40}
                className="rounded-full ring-1 ring-cherry/20"
              />
              <span className="font-[family-name:var(--font-permanent-marker)] text-xl text-white tracking-wider">
                CHERRY LOW
              </span>
            </div>
            <p className="font-[family-name:var(--font-dancing-script)] text-cherry text-lg mb-4">
              Aférrate a tus sueños
            </p>
            <p className="text-sm text-smoke/40 leading-relaxed">
              Personalización de camisetas y sudaderas. Sesiones de fotografía y video automotriz.
              Aguascalientes, México.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4">
              Navegación
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Inicio", href: "#inicio" },
                { name: "Servicios", href: "#servicios" },
                { name: "Catálogo", href: "#catalogo" },
                { name: "Fotografía", href: "#fotografia" },
                { name: "Contacto", href: "#contacto" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-smoke/40 hover:text-cherry transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm text-smoke/40">
              <li>
                <a
                  href={WA_FOOTER}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cherry transition-colors"
                >
                  WhatsApp: 449 309 1644
                </a>
              </li>
              <li>
                <a
                  href="mailto:Coppeuta@gmail.com"
                  className="hover:text-cherry transition-colors"
                >
                  Coppeuta@gmail.com
                </a>
              </li>
              <li>Aguascalientes, México</li>
              <li className="pt-2 flex gap-4">
                <a
                  href="https://www.instagram.com/ek_cherrylow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-cherry transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/share/18Ywo79tNb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-cherry transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                  Facebook
                </a>
                <a
                  href="https://www.tiktok.com/@honda_cherryek?_r=1&_t=ZS-94RXBrH3g3O"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cherry transition-colors"
                >
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-smoke/30">
            &copy; {currentYear} Cherry Low Photography. Todos los derechos reservados.
          </p>
          <p className="text-xs text-smoke/30">
            Envíos a todo México
          </p>
        </div>
      </div>
    </footer>
  );
}
