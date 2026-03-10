"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Facebook, ArrowRight } from "lucide-react";

const WA_GENERAL =
  "https://wa.me/524493091644?text=Hola!%20Quiero%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20Cherry%20Low.%20%C2%BFMe%20pueden%20ayudar%3F";

const WA_CONTACT =
  "https://wa.me/524493091644?text=Hola!%20Quiero%20cotizar%20un%20servicio%20de%20Cherry%20Low%20(ropa%20personalizada%2Ffotograf%C3%ADa%2Fvideo).%20%C2%BFMe%20pueden%20dar%20informaci%C3%B3n%3F";

const socialLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    handle: "@ek_cherrylow",
    href: "https://www.instagram.com/ek_cherrylow",
    color: "hover:text-pink-500 hover:border-pink-500/30",
  },
  {
    icon: Facebook,
    label: "Facebook",
    handle: "Cherry Low",
    href: "https://www.facebook.com/share/18Ywo79tNb/",
    color: "hover:text-blue-500 hover:border-blue-500/30",
  },
  {
    icon: TikTokIcon,
    label: "TikTok",
    handle: "@ek_cherrylow",
    href: "https://www.tiktok.com/@honda_cherryek?_r=1&_t=ZS-94RXBrH3g3O",
    color: "hover:text-white hover:border-white/30",
  },
];

const contactInfo = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: "449 309 1644",
    href: WA_GENERAL,
  },
  {
    icon: Mail,
    label: "Email",
    value: "Coppeuta@gmail.com",
    href: "mailto:Coppeuta@gmail.com",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Av. Aguascalientes Sur #123, Col. Centro, Aguascalientes, Ags. CP 20000",
    href: "https://maps.google.com/?q=Aguascalientes,Mexico",
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="relative py-20 sm:py-28 lg:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-ink to-ink-light/50 light:from-[#F9F9F9] light:to-gray-50" />

      {/* Red accent - cherry orbs */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cherry/5 rounded-full blur-[150px]" />
      <div className="absolute top-1/4 -right-40 w-80 h-80 bg-cherry/8 rounded-full blur-[120px]" />

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
            Hablemos
          </p>
          <h2 className="font-[family-name:var(--font-permanent-marker)] text-4xl sm:text-5xl lg:text-6xl text-white light:text-ink tracking-wider">
            CONTACTO
          </h2>
          <div className="mt-6 mx-auto w-24 h-1 bg-gradient-to-r from-cherry to-cherry-dark rounded-full" />
          <p className="mx-auto mt-6 max-w-xl text-base text-smoke/50 light:text-ink/60 sm:text-lg">
            Mándanos mensaje por WhatsApp para cotizar. Fotos, videos, ropa personalizada — lo que necesites.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left - Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") || item.href.startsWith("mailto") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-white/5 light:border-ink/10 bg-white/[0.02] light:bg-ink/[0.03] hover:border-cherry/30 hover:bg-white/[0.05] light:hover:bg-ink/[0.05] transition-all duration-500 group"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-cherry/10 group-hover:bg-cherry/20 transition-colors">
                    <item.icon className="w-5 h-5 text-cherry" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-ash light:text-ink/50 uppercase tracking-wider">{item.label}</p>
                    <p className="break-words text-sm sm:text-base text-white light:text-ink font-medium group-hover:text-cherry transition-colors">
                      {item.value}
                    </p>
                  </div>
                  <ArrowRight className="mt-1 hidden sm:block w-4 h-4 text-white/0 group-hover:text-cherry/60 transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-sm text-ash light:text-ink/50 uppercase tracking-wider mb-4">Síguenos</p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-3 px-4 py-3 rounded-xl border border-white/5 light:border-ink/10 bg-white/[0.02] light:bg-ink/[0.03] transition-all duration-300 ${social.color}`}
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5 text-ash light:text-ink/50 group-hover:text-current transition-colors" />
                    <span className="hidden sm:block text-sm text-ash light:text-ink/50 group-hover:text-current transition-colors">
                      {social.handle}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Map + WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            {/* Google Maps */}
            <div className="w-full rounded-2xl border border-white/10 light:border-ink/15 overflow-hidden">
              <iframe
                title="Ubicación Cherry Low"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117335.91684588456!2d-102.36224235!3d21.88139635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429ee67718b62e3%3A0x1661d43bfbb27dc5!2sAguascalientes%2C%20Ags.!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full sm:h-[250px]"
              />
            </div>

            {/* Physical address card */}
            <div className="flex items-start gap-3 rounded-xl border border-white/5 light:border-ink/10 bg-white/[0.02] p-4 light:bg-ink/[0.03]">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-cherry/20">
                <MapPin className="w-5 h-5 text-cherry" strokeWidth={1.5} />
              </div>
              <p className="text-sm text-smoke/70 light:text-ink/70 leading-snug break-words">
                Av. Aguascalientes Sur #123, Col. Centro, Aguascalientes, Ags. CP 20000
              </p>
            </div>

            {/* WhatsApp CTA */}
            <div className="w-full p-6 sm:p-8 lg:p-10 rounded-3xl border border-cherry/20 bg-gradient-to-br from-cherry/5 to-cherry/10 relative overflow-hidden">
              {/* Background decoration - cherry orbs */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-cherry/10 rounded-full blur-[60px]" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-cherry/5 rounded-full blur-[50px]" />

              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center mb-6">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-green-500" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>

                <h3 className="font-[family-name:var(--font-permanent-marker)] text-2xl sm:text-3xl lg:text-4xl text-white light:text-ink mb-4 tracking-wider">
                  COTIZA POR WHATSAPP
                </h3>

                <p className="text-smoke/60 light:text-ink/60 leading-relaxed mb-4">
                  La forma más rápida de cotizar. Mándanos mensaje con lo que buscas y te respondemos al instante.
                </p>

                <ul className="mb-8 space-y-2">
                  {[
                    "Playeras y sudaderas (Personalización DTF)",
                    "Sesiones de foto y video para autos",
                    "Detailing automotriz y taller",
                    "Envíos a todo México",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-smoke/70 light:text-ink/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-cherry flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={WA_CONTACT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-3 px-6 sm:px-8 py-4 bg-green-600 text-white text-sm sm:text-base font-bold uppercase tracking-[0.16em] rounded-full hover:bg-green-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-green-600/20"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Enviar Mensaje
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.76a8.28 8.28 0 0 0 4.66 1.43V6.73a4.83 4.83 0 0 1-.9-.04z" />
    </svg>
  );
}
