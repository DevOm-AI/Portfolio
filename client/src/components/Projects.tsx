import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { useRef } from "react";

const projects = [
  {
    title: "NoiseLense",
    date: "May 2026",
    featured: false,
    technologies: ["React", "TailwindCSS", "FastAPI", "Python", "Groq API", "Framer Motion"],
    achievements: [
      "Analyzes tweets, headlines & captions for psychological manipulation tactics.",
      "Scores content across 9 vectors (Fear, Outrage, Curiosity Gaps, etc.) rated 0–100.",
      "Returns trigger phrases + a forensic summary with clinical neutrality.",
    ],
    url: "https://github.com/DevOm-AI/NoiseLens",
  },
  {
    title: "Linkra — Distributed URL Shortener & Analytics Engine",
    date: "Mar 2026",
    featured: true,
    technologies: ["Python", "FastAPI", "Redis", "PostgreSQL", "Node.js", "React", "Docker", "Redis Streams"],
    achievements: [
      "Redis → PostgreSQL cache-aside pipeline delivering sub-10ms redirects at 2000x throughput.",
      "Async Redis Streams decouple analytics from redirect path — zero latency impact.",
      "Dockerized 4 services; fixed Snowflake ID precision loss via Pydantic serialization.",
    ],
    url: "https://github.com/devOm-AI/linkra",
  },
  {
    title: "Resume Roaster",
    date: "Feb 2026",
    featured: false,
    technologies: ["React JS", "Tailwind CSS", "FastAPI", "Groq AI", "Prompt Engineering"],
    achievements: [
      "AI tool that roasts resumes with humorous, brutally honest feedback via Groq LLM.",
      "Supports English & Hinglish with meme-style roast scoring.",
      "React + Tailwind frontend, FastAPI backend — deployed on Vercel & Render.",
    ],
    url: "https://resume-roaster-eight-xi.vercel.app/",
  },
  {
    title: "ShopNPoint",
    date: "Sep – Nov 2025",
    featured: true,
    technologies: ["React JS", "Tailwind CSS", "JavaScript", "Python", "MySQL (Workbench)"],
    achievements: [
      "Referral system that awards tokens when a promo code is used at checkout.",
      "Tokens cover up to 40% of cart value, driving retention and repeat purchases.",
      "ML models detect promo-code fraud and flag unusual usage patterns in real time.",
    ],
    url: "https://github.com/DevOm-AI/ShopNPoint",
  },
  {
    title: "Genify",
    date: "May 2025",
    featured: false,
    technologies: ["Python", "Hugging Face", "Gradio", "Stable Diffusion Turbo"],
    achievements: [
      "AI image generator built on Stable Diffusion Turbo for fast, cost-free synthesis.",
      "Gradio interface supports both local and browser-based generation seamlessly.",
      "Optimized for lightweight real-time output with no API costs.",
    ],
    url: "https://github.com/DevOm-AI/Genify",
  },
  {
    title: "Face Recognition Attendance System",
    date: "Aug – Sep 2023",
    featured: false,
    technologies: ["Python", "OpenCV", "Haar Cascade Algorithm", "SQLite"],
    achievements: [
      "Automated attendance tracking at 91% accuracy using real-time facial recognition.",
      "Reduced manual processing time by 70–80% with live feed detection.",
      "GUI with live monitoring, SQLite storage, and one-click CSV export.",
    ],
    url: "https://github.com/DevOm-AI/Face-Recognition-Attendance-System",
  },
];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="py-16 md:py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-10 space-y-2">
          <h2
            className={`text-2xl md:text-3xl font-semibold transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Projects
          </h2>
          <p
            className={`text-sm text-muted-foreground transition-all duration-700 delay-100 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            ⚠ Bugs were harmed in the making of these projects ⚠
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => {
            const ProjectCard = (
              <Card
                key={project.title}
                className={`p-5 hover-elevate transition-all duration-700 flex flex-col h-full ${
                  project.featured
                    ? "border-primary/40 ring-1 ring-primary/20"
                    : ""
                } ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                data-testid={`card-project-${index}`}
              >
                {/* Project Header */}
                <div className="mb-3 flex items-start justify-between gap-2">
                  <div>
                    {project.featured && (
                      <span className="inline-block text-[10px] font-medium tracking-widest uppercase text-primary/70 mb-1">
                        ★ Featured
                      </span>
                    )}
                    <h3 className={`text-base font-semibold mb-1 ${project.featured ? "text-foreground" : ""}`}>
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-mono">
                      {project.date}
                    </p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs rounded-md border border-secondary-border"
                      data-testid={`badge-tech-${tech.toLowerCase()}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Achievements */}
                <ul className="space-y-2 flex-1">
                  {project.achievements?.map((achievement, i) => (
                    <li key={i} className="flex gap-2 text-xs leading-relaxed">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );

            return project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                key={project.title}
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg"
              >
                {ProjectCard}
              </a>
            ) : (
              ProjectCard
            );
          })}
        </div>


      </div>
    </section>
  );
}