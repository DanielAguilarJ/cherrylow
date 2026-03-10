import type { Metadata } from "next";
import { Permanent_Marker, Dancing_Script, Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

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
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${permanentMarker.variable} ${dancingScript.variable} ${montserrat.variable} antialiased grain-overlay`}
      >
        {/* Hidden SVG for cherry clip-path */}
        <svg width="0" height="0" style={{ position: 'absolute' }}>
          <defs>
            <clipPath id="cherry-clip" clipPathUnits="objectBoundingBox">
              {/* Left cherry */}
              <circle cx="0.32" cy="0.65" r="0.28" />
              {/* Right cherry */}
              <circle cx="0.68" cy="0.65" r="0.28" />
              {/* Left stem */}
              <path d="M0.32 0.38 Q0.35 0.20 0.50 0.05 L0.52 0.05 Q0.37 0.22 0.35 0.38 Z" />
              {/* Right stem */}
              <path d="M0.68 0.38 Q0.65 0.20 0.50 0.05 L0.48 0.05 Q0.63 0.22 0.65 0.38 Z" />
              {/* Leaf */}
              <path d="M0.50 0.05 Q0.62 0.00 0.70 0.06 Q0.62 0.12 0.50 0.10 Q0.50 0.07 0.50 0.05 Z" />
            </clipPath>
          </defs>
        </svg>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
