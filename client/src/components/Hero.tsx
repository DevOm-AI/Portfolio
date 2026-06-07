import { Github, Mail, ChevronDown, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToNext = () => {
    const skillsSection = document.querySelector("#experience");
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
        <div className="space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Om Shete
          </h1>
          {/* Subtitle: lighter weight + muted color for visual hierarchy */}
          <p className="text-lg md:text-xl font-normal text-muted-foreground/80 tracking-wide animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Backend Developer &amp; AI Engineer
          </p>
        </div>

        {/* Education Highlight */}
        <div className="animate-in fade-in duration-700 delay-300">
          <p className="text-xs tracking-widest uppercase text-muted-foreground/60">
            B.E. in AI &amp; Data Science &nbsp;·&nbsp; CGPA 8.05 &nbsp;·&nbsp; Pune
          </p>
        </div>

        {/* CTA Buttons — clear hierarchy: Resume primary, others outlined */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">

          {/* PRIMARY: Resume — solid filled */}
          <Button
            size="default"
            asChild
            className="rounded-full px-6"
            data-testid="button-resume"
          >
            <a
              href="https://drive.google.com/file/d/1x2xt5poK14kZ949OBKVW2KPgPcwAsUji/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <FileText className="h-4 w-4" />
              Resume
            </a>
          </Button>

          {/* SECONDARY: Contact — outlined */}
          <Button
            size="default"
            variant="outline"
            asChild
            className="rounded-full px-6"
            data-testid="button-email"
          >
            <a href="#contact" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Contact
            </a>
          </Button>

          {/* SECONDARY: GitHub — outlined */}
          <Button
            size="default"
            variant="outline"
            asChild
            className="rounded-full px-6"
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
        </div>

        {/* Tagline — below buttons, styled as a subtle code snippet */}
        <div className="animate-in fade-in duration-700 delay-500 pt-2">
          <p className="text-xs md:text-sm font-mono text-muted-foreground/50 italic">
            if (bug) console.log(&quot;It&apos;s not a bug, it&apos;s a future feature 😎&quot;);
          </p>
        </div>

        {/* Scroll Indicator — labelled + bouncing */}
        <div className="pt-4 animate-in fade-in duration-700 delay-700">
          <button
            onClick={scrollToNext}
            className="flex flex-col items-center gap-1 mx-auto text-muted-foreground/50 hover:text-muted-foreground transition-colors"
            data-testid="button-scroll-down"
            aria-label="Scroll to next section"
          >
            <span className="text-[10px] tracking-widest uppercase">scroll to explore</span>
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </button>
        </div>

      </div>
    </section>
  );
}