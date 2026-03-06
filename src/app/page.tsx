import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Merch from "@/components/Merch";
import Services from "@/components/Services";
import Multimedia from "@/components/Multimedia";
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
        <Merch />
        <div className="section-divider" />
        <Multimedia />
        <div className="section-divider" />
        <Services />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
