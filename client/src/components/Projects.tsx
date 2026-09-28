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
    title: "Linkra – URL Shortener with Click Analytics",
    date: "Mar 2026",
    featured: true,
    technologies: ["FastAPI", "PostgreSQL", "Redis", "React"],
    achievements: [
      "Built a URL shortener with custom slugs, expiring and password-protected links, and per-link click analytics.",
      "64-bit Snowflake IDs were rounded in the browser (past 2⁵³), breaking analytics with 404s. Fixed by returning IDs as strings.",
      "Limited link creation to 10 per user per minute with a Redis counter (INCR with a 60-second expiry).",
    ],
    url: "https://github.com/devOm-AI/linkra",
    flow: {
      title: "Linkra architecture",
      nodes: [
        { id: "web", label: "React", at: { wide: [0, 0], narrow: [0, 0] } },
        { id: "api", label: "FastAPI", at: { wide: [1, 0], narrow: [0, 1] } },
        { id: "pg", label: "PostgreSQL", note: "links · clicks", at: { wide: [2, 0], narrow: [0, 2] } },
        { id: "redis", label: "Redis", note: "rate limit", at: { wide: [1, 1], narrow: [1, 1] } },
      ],
      edges: [
        { from: "web", to: "api" },
        { from: "api", to: "pg" },
        { from: "api", to: "redis", tone: "secondary" },
      ],
      legend: [
        { label: "links & click analytics" },
        { label: "rate limit · INCR, 60s expiry", tone: "secondary" },
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
