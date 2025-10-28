import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { useRef } from "react";

const projects = [
  {
    title: "Face Recognition Attendance System",
    date: "Feb 2023",
    technologies: ["Python", "OpenCV", "SQLite"],
    achievements: [
      "Automated attendance tracking with 95% accuracy using facial recognition",
      "Reduced manual processing time by 80% with real-time detection",
      "Built user-friendly GUI with live feed monitoring and CSV export",
    ],
  },
  {
    title: "NGO Website",
    date: "Jan 2025",
    technologies: ["HTML", "CSS", "JavaScript"],
    achievements: [
      "Generated 25+ volunteer signups and ₹10,000 in donations within 3 weeks",
      "Increased session duration by 40% through engaging UI redesign",
      "Optimized for fast load times and cross-browser compatibility",
    ],
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
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`p-5 hover-elevate transition-all duration-700 flex flex-col ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              data-testid={`card-project-${index}`}
            >
              {/* Project Header */}
              <div className="mb-3">
                <h3 className="text-base font-semibold mb-1">
                  {project.title}
                </h3>
                <p className="text-xs text-muted-foreground font-mono">
                  {project.date}
                </p>
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
                {project.achievements.map((achievement, i) => (
                  <li key={i} className="flex gap-2 text-xs leading-relaxed">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
