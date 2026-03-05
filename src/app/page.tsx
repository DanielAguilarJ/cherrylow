import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import CustomDesigns from "@/components/CustomDesigns";
import Catalog from "@/components/Catalog";
import Photography from "@/components/Photography";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <div className="section-divider" />
        <CustomDesigns />
        <div className="section-divider" />
        <Catalog />
        <div className="section-divider" />
        <Photography />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
