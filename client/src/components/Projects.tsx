import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { useRef } from "react";

const projects = [
  {
    title: "Aegis — Financial Reconciliation Platform",
    date: "(In Progress)",
    featured: true,
    technologies: ["Java", "Spring Boot", "PostgreSQL", "RabbitMQ", "Redis", "Docker"],
    achievements: [
      "Built idempotent event ingestion with transactional processing, preventing duplicate reconciliation on retries.",
      "Used fixed-precision decimals and append-only audit trails to preserve financial correctness and traceability.",
      "Built async reconciliation workflows with RabbitMQ and Redis, decoupling ingestion from downstream processing.",
    ],
    url: "https://github.com/Ashwanti/Aegis",
  },
  {
    title: "Linkra — Distributed URL Shortener & Analytics Engine",
    date: "Mar 2026",
    featured: true,
    technologies: ["Python", "FastAPI", "Redis", "PostgreSQL", "Node.js", "React", "Docker", "Redis Streams"],
    achievements: [
      "Built a Redis → PostgreSQL cache-aside architecture delivering sub-10ms redirects at 2,000 requests/second under load testing.",
      "Decoupled click analytics from the redirect path using Redis Streams and an asynchronous Node.js consumer, eliminating analytics work from the critical request path.",
      "Dockerized the distributed services and resolved Snowflake ID precision loss across the Python → PostgreSQL → JavaScript boundary using explicit serialization.",
    ],
    url: "https://github.com/devOm-AI/linkra",
  },
  {
    title: "ShopNPoint",
    date: "Sep – Nov 2025",
    featured: true,
    technologies: ["React JS", "Tailwind CSS", "JavaScript", "Python", "MySQL (Workbench)"],
    achievements: [
      "Built a token-based referral and redemption system where promotional codes generate tokens redeemable for up to 40% of cart value.",
      "Implemented ML-based fraud detection to identify abnormal promotional-code usage and suspicious redemption patterns.",
      "Built the React frontend and Python backend with transactional checkout and referral workflows.",
    ],
    url: "https://github.com/DevOm-AI/ShopNPoint",
  },
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
    title: "Resume Roaster",
    date: "Feb 2026",
    featured: false,
    technologies: ["React JS", "Tailwind CSS", "FastAPI", "Groq AI", "Prompt Engineering"],
    achievements: [
      "Built an AI-powered resume analysis tool using React, FastAPI, and Groq LLMs to generate structured, role-aware feedback.",
      "Implemented English and Hinglish analysis with scoring across resume quality dimensions and actionable improvement suggestions.",
      "Deployed the React frontend and FastAPI backend independently on Vercel and Render.",
    ],
    url: "https://resume-roaster-eight-xi.vercel.app/",
  },
  {
    title: "Genify",
    date: "May 2025",
    featured: false,
    technologies: ["Python", "Hugging Face", "Gradio", "Stable Diffusion Turbo"],
    achievements: [
      "Built a lightweight AI image-generation application using Stable Diffusion Turbo with a browser-based Gradio interface.",
      "Optimized the application for low-cost local generation without relying on paid image-generation APIs.",
    ],
    url: "https://github.com/DevOm-AI/Genify",
  },
  {
    title: "Face Recognition Attendance System",
    date: "Aug – Sep 2023",
    featured: false,
    technologies: ["Python", "OpenCV", "Haar Cascade Algorithm", "SQLite"],
    achievements: [
      "Built a real-time face-recognition attendance system using OpenCV, achieving 91% recognition accuracy on the project dataset.",
      "Automated attendance logging with SQLite storage, live monitoring, and CSV export, reducing manual processing by 70–80%.",
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