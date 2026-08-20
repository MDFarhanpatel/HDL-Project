import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Regions from "@/components/sections/Regions";
import Ecosystem from "@/components/sections/Ecosystem";
import About from "@/components/sections/About";
import WhyChoose from "@/components/sections/WhyChoose";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Regions />
      <Ecosystem />
      <About />
      <WhyChoose />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
