import { Github, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToNext = () => {
    const skillsSection = document.querySelector("#skills");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-6 md:px-12 py-20"
    >
      <div className="max-w-4xl w-full text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Om Shete
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            AI Developer & Front-End Engineer
          </p>
        </div>

        {/* Tagline with subtle humor */}
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          Making machines smarter, one model at a time ☕
          <br />
          Crafting intelligent solutions with Python, JavaScript, and a dash of creativity.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
          <Button
            size="lg"
            asChild
            className="rounded-full"
            data-testid="button-github"
          >
            <a
              href="https://github.com/DevOm-AI"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-5 w-5" />
              GitHub
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="rounded-full"
            data-testid="button-email"
          >
            <a
              href="mailto:om.shete.developer@gmail.com"
              className="flex items-center gap-2"
            >
              <Mail className="h-5 w-5" />
              Get in Touch
            </a>
          </Button>
        </div>

        {/* Education Highlight */}
        <div className="pt-8 animate-in fade-in duration-700 delay-500">
          <p className="text-sm text-muted-foreground">
            B.E. in AI & Data Science @ Dr. D. Y. Patil College of Engineering
          </p>
          <p className="text-xs text-muted-foreground mt-1">CGPA: 8.43 | Pune, MH</p>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          data-testid="button-scroll-down"
        >
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </button>
      </div>
    </section>
  );
}
