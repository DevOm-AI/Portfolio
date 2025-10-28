import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Certifications from "@/components/Certifications";

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}
