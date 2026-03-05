import type { Metadata } from "next";
import { Permanent_Marker, Dancing_Script, Montserrat } from "next/font/google";
import "./globals.css";

const permanentMarker = Permanent_Marker({
  weight: "400",
  variable: "--font-permanent-marker",
  subsets: ["latin"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cherry Low | Photography & Streetwear - Aguascalientes",
  description:
    "Cherry Low Photography - Personalización de camisetas y sudaderas, sesiones de fotos y video para autos. Aférrate a tus sueños. Aguascalientes y envíos a todo México.",
  keywords: [
    "Cherry Low",
    "Photography",
    "Streetwear",
    "Camisetas personalizadas",
    "Sudaderas",
    "Fotos de autos",
    "Aguascalientes",
    "Sublimación",
  ],
  openGraph: {
    title: "Cherry Low | Photography & Streetwear",
    description: "Personalización de camisetas y sudaderas. Sesiones de foto y video para autos.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${permanentMarker.variable} ${dancingScript.variable} ${montserrat.variable} antialiased grain-overlay`}
      >
        {children}
      </body>
    </html>
  );
}
