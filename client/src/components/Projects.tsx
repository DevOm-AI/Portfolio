import { Section, Bullets, Tags } from "./Section";
import { ExternalLink } from "./ExternalLink";
import { Metrics, type Metric } from "./Metrics";
import { FlowDiagram, type FlowGraph } from "./FlowDiagram";
import { FadeIn } from "./motion";
import { cn } from "@/lib/utils";

export type Project = {
  title: string;
  date: string;
  featured: boolean;
  technologies: string[];
  achievements: string[];
  url: string;
  metrics?: Metric[];
  flow: FlowGraph;
};

export const projects: Project[] = [
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
    metrics: [
      { value: "<10ms", label: "redirects" },
      { value: "2,000", label: "requests/second under load" },
    ],
    flow: {
      title: "Linkra architecture",
      nodes: [
        { id: "client", label: "client", at: { wide: [0, 0], narrow: [0, 0] } },
        { id: "api", label: "FastAPI", note: "Python", at: { wide: [1, 0], narrow: [0, 1] } },
        { id: "redis", label: "Redis", note: "cache-aside", at: { wide: [2, 0], narrow: [0, 2] } },
        { id: "pg", label: "PostgreSQL", at: { wide: [3, 0], narrow: [0, 3] } },
        { id: "streams", label: "Redis Streams", at: { wide: [2, 1], narrow: [1, 2] } },
        { id: "consumer", label: "Node.js", note: "async consumer", at: { wide: [3, 1], narrow: [1, 3] } },
      ],
      edges: [
        { from: "client", to: "api" },
        { from: "api", to: "redis" },
        { from: "redis", to: "pg", label: "miss" },
        { from: "api", to: "streams", async: true, bend: { wide: "vh", narrow: "hv" } },
        { from: "streams", to: "consumer", async: true },
      ],
      legend: [
        { label: "redirect path" },
        { label: "click analytics · async", dashed: true },
      ],
    },
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
    metrics: [{ value: "40%", label: "max of cart value redeemable" }],
    flow: {
      title: "ShopNPoint architecture",
      nodes: [
        { id: "web", label: "React", at: { wide: [0, 0], narrow: [0, 0] } },
        { id: "api", label: "Python backend", note: "checkout · referral", at: { wide: [1, 0], narrow: [0, 1] } },
        { id: "db", label: "MySQL", note: "transactional", at: { wide: [2, 0], narrow: [0, 2] } },
        { id: "fraud", label: "fraud detection", note: "ML-based", at: { wide: [2, 1], narrow: [1, 2] } },
      ],
      edges: [
        { from: "web", to: "api" },
        { from: "api", to: "db" },
        { from: "api", to: "fraud", tone: "secondary", bend: { wide: "vh", narrow: "hv" } },
      ],
      legend: [
        { label: "checkout & referral workflows" },
        { label: "fraud detection", tone: "secondary" },
      ],
    },
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
    metrics: [{ value: "9", label: "vectors scored 0–100" }],
    flow: {
      title: "NoiseLense architecture",
      nodes: [
        { id: "web", label: "React", at: { wide: [0, 0], narrow: [0, 0] } },
        { id: "api", label: "FastAPI", at: { wide: [1, 0], narrow: [0, 1] } },
        { id: "llm", label: "Groq API", at: { wide: [2, 0], narrow: [0, 2] } },
      ],
      edges: [
        { from: "web", to: "api" },
        { from: "api", to: "llm" },
      ],
      caption: "returns → 9 vector scores (0–100) · trigger phrases · forensic summary",
    },
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
    flow: {
      title: "Resume Roaster architecture",
      nodes: [
        { id: "web", label: "React", note: "Vercel", at: { wide: [0, 0], narrow: [0, 0] } },
        { id: "api", label: "FastAPI", note: "Render", at: { wide: [1, 0], narrow: [0, 1] } },
        { id: "llm", label: "Groq LLM", at: { wide: [2, 0], narrow: [0, 2] } },
      ],
      edges: [
        { from: "web", to: "api" },
        { from: "api", to: "llm" },
      ],
    },
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
    flow: {
      title: "Genify architecture",
      nodes: [
        { id: "browser", label: "browser", at: { wide: [0, 0], narrow: [0, 0] } },
        { id: "ui", label: "Gradio", note: "UI", at: { wide: [1, 0], narrow: [0, 1] } },
        { id: "model", label: "Stable Diffusion", note: "Turbo · local", at: { wide: [2, 0], narrow: [0, 2] } },
      ],
      edges: [
        { from: "browser", to: "ui" },
        { from: "ui", to: "model" },
      ],
    },
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
    metrics: [
      { value: "91%", label: "recognition accuracy" },
      { value: "70–80%", label: "less manual processing" },
    ],
    flow: {
      title: "Face Recognition Attendance System architecture",
      nodes: [
        { id: "cam", label: "webcam", at: { wide: [0, 0], narrow: [0, 0] } },
        { id: "cv", label: "OpenCV", note: "Haar Cascade", at: { wide: [1, 0], narrow: [0, 1] } },
        { id: "db", label: "SQLite", note: "attendance log", at: { wide: [2, 0], narrow: [0, 2] } },
        { id: "csv", label: "CSV export", at: { wide: [3, 0], narrow: [0, 3] } },
      ],
      edges: [
        { from: "cam", to: "cv" },
        { from: "cv", to: "db" },
        { from: "db", to: "csv" },
      ],
    },
  },
];

export default function Projects() {
  return (
    <Section
      id="projects"
      subtitle="⚠ Bugs were harmed in the making of these projects ⚠"
    >
      <div className="space-y-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isRepo = project.url.includes("github.com");

  return (
    <FadeIn>
      <article
        className={cn("card card-lift p-5", project.featured ? "card-featured sm:p-10" : "sm:p-8")}
        data-testid={`card-project-${index}`}
      >
        <header className="flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="flex items-center gap-2 text-[13px] text-secondary">
              <span className="font-mono">{project.date}</span>
              {project.featured && (
                <>
                  <span aria-hidden="true" className="text-line">—</span>
                  <span className="font-medium">Featured</span>
                </>
              )}
            </p>
            <h3
              className={cn(
                "mt-2 max-w-2xl font-semibold leading-tight tracking-[-0.025em]",
                project.featured ? "text-[24px] sm:text-[34px]" : "text-[22px] sm:text-[28px]",
              )}
            >
              {project.title}
            </h3>
          </div>
          <ExternalLink
            href={project.url}
            label={`${project.title} ${isRepo ? "on GitHub" : "live demo"}`}
            className="shrink-0 rounded-full border border-line px-4 py-2 text-[14px] font-medium text-foreground transition-colors duration-200 hover:border-primary/60"
          >
            {isRepo ? "GitHub" : "Live"}
          </ExternalLink>
        </header>

        <Metrics items={project.metrics} className="mt-8 border-y border-line py-5" />

        <div className="mt-8">
          <p className="mono-label mb-3">Architecture</p>
          <div className="flow-panel rounded-2xl border border-line bg-background p-3 sm:p-7">
            <FlowDiagram graph={project.flow} />
          </div>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_280px]">
          <div>
            <p className="mono-label mb-3">What I built</p>
            <Bullets items={project.achievements} />
          </div>
          <div>
            <p className="mono-label mb-3">Stack</p>
            <Tags items={project.technologies} label={`${project.title} stack`} />
          </div>
        </div>
      </article>
    </FadeIn>
  );
}
