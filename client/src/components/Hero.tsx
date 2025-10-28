import { Github, Mail, ChevronDown, FileText } from "lucide-react"; // Added FileText
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
      className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-6 md:px-12 py-16"
    >
      <div className="max-w-3xl w-full text-center space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
        {/* Main Heading */}
        <div className="space-y-3">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Om Shete
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            AI/ML Engineer
          </p>
        </div>

        {/* Tagline */}
        <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          if (bug) console.log("It's not a bug, it's a future feature 😎");
        </p>

        {/* --- MODIFICATION: Button group updated --- */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
          {/* GitHub Button */}
          <Button
            size="default"
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
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </Button>

          {/* Contact Button */}
          <Button
            size="default"
            variant="outline"
            asChild
            className="rounded-full"
            data-testid="button-email"
          >
            <a
              href="mailto:om.shete.developer@gmail.com"
              className="flex items-center gap-2"
            >
              <Mail className="h-4 w-4" />
              Contact
            </a>
          </Button>

          {/* NEW Resume Button */}
          <Button
            size="default"
            asChild
            className="rounded-full" // No variant prop = default solid style (like GitHub)
            data-testid="button-resume"
          >
            <a
              href="https://drive.google.com/file/d/1BRAZD5PgPXDmTb-LCBHpGV8t0yCiJfA0/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <FileText className="h-4 w-4" />
              Resume
            </a>
          </Button>
        </div>
        {/* --- END MODIFICATION --- */}

        {/* Education Highlight */}
        <div className="pt-6 animate-in fade-in duration-700 delay-500">
          <p className="text-xs text-muted-foreground">
            B.E. AI & Data Science • CGPA 8.29 • Pune
          </p>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          data-testid="button-scroll-down"
        >
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        </button>
      </div>
    </section>
  );
}
