import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CanvasScroll from "@/components/CanvasScroll";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CanvasScroll />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
