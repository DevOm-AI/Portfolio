import { Card } from "@/components/ui/card";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { useRef } from "react";

const projects = [
  {
    title: "Face Recognition Attendance System",
    date: "February 2023",
    technologies: ["Python", "OpenCV", "Tkinter", "SQLite"],
    achievements: [
      "Developed a real-time facial recognition system using Python and OpenCV that automated attendance tracking, reducing manual processing time by over 80%.",
      "Implemented Haar Cascade classifiers and optimized the model for various lighting conditions to achieve over 95% face match accuracy.",
      "Integrated the system with a local SQLite database to automatically capture and store verified names and timestamps, eliminating manual data entry.",
      "Built a clean and user-friendly desktop GUI using Tkinter, allowing users to initiate attendance, monitor the live feed, and export records to CSV format.",
    ],
  },
  {
    title: "Shivaaradhya Foundation Official Website",
    date: "January 2025",
    technologies: ["HTML", "CSS", "JavaScript"],
    achievements: [
      "Engineered and launched a user-focused website that directly contributed to receiving 25+ volunteer signups and over ₹10,000 in donations within the first three weeks.",
      "Redesigned the user interface using HTML, CSS, and JavaScript to be more engaging, resulting in a 40% increase in the average user session duration.",
      "Developed a fully responsive, multi-page site with interactive features including event showcases, image sliders, and volunteer forms to improve user engagement.",
      "Optimized the website for fast load times and cross-browser compatibility, which improved general accessibility and performance.",
    ],
  },
];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold transition-all duration-700 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Featured Projects
          </h2>
          <p
            className={`text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Building impactful solutions with measurable results.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`p-6 md:p-8 hover-elevate transition-all duration-700 flex flex-col ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              data-testid={`card-project-${index}`}
            >
              {/* Project Header */}
              <div className="mb-4">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-xl font-semibold leading-tight">
                    {project.title}
                  </h3>
                  <ExternalLink className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                </div>
                <p className="text-sm text-muted-foreground font-mono">
                  {project.date}
                </p>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full border border-secondary-border"
                    data-testid={`badge-tech-${tech.toLowerCase()}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Achievements */}
              <ul className="space-y-3 flex-1">
                {project.achievements.map((achievement, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
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
