import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Industries from "@/components/sections/Industries";
import WhyChoose from "@/components/sections/WhyChoose";
import Ecosystem from "@/components/sections/Ecosystem";
import About from "@/components/sections/About";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Industries />
      <WhyChoose />
      <Ecosystem />
      <About />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
