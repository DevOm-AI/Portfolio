import { Card } from "@/components/ui/card";
import { Code2, Wrench, Database, GraduationCap } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Python", "JavaScript", "SQL", "HTML/CSS"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["VS Code", "GitHub", "Postman", "Android Studio"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Expertise",
    icon: GraduationCap,
    skills: ["AI/ML", "Data Science", "React JS", "Debugging", "Cloud", "System Design"],
  },
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-16 md:py-20 px-6 md:px-12 bg-muted/30"
    >
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
            Skills
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.title}
                className={`p-5 hover-elevate transition-all duration-700 ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                data-testid={`card-skill-${category.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary text-primary-foreground rounded-md">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="text-sm font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 bg-accent text-accent-foreground text-xs rounded-md border border-accent-border"
                        data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
