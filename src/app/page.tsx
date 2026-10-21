import { About } from "@/components/About";
import { ConceptNotice } from "@/components/ConceptNotice";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Services } from "@/components/Services";

export default function HomePage() {
  return (
    <div id="top" className="min-h-screen overflow-x-clip bg-paper text-ink">
      <ConceptNotice />
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <ContactCTA />
      </main>
      <Footer />
      <ScrollReveal />
    </div>
  );
}
