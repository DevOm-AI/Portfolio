import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact, { Footer } from "@/components/Contact";
import Certifications from "@/components/Certifications";
import ResearchPapers from "@/components/ResearchPapers";
import { MotionProvider } from "@/components/motion";

export default function Portfolio() {
  return (
    <MotionProvider>
      <div className="min-h-screen">
        <Navigation />
        <main id="main" tabIndex={-1} className="outline-none">
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <ResearchPapers />
          <Education />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionProvider>
  );
}
