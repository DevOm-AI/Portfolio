import { Card } from "@/components/ui/card";
import { Code2, Wrench, Database, GraduationCap } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Python", "HTML", "CSS", "JavaScript", "SQL"],
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    skills: ["VS Code", "Eclipse", "GitHub", "Postman API", "Android Studio"],
  },
  {
    title: "Database Systems",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Coursework",
    icon: GraduationCap,
    skills: [
      "DSA",
      "Cloud Computing",
      "Cyber Security",
      "NoSQL Databases",
      "System Design",
      "Data Analytics",
      "Artificial Intelligence",
      "LLM Fine-Tuning",
    ],
  },
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 md:py-32 px-6 md:px-12 bg-muted/30"
    >
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
            Technical Skills
          </h2>
          <p
            className={`text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            A comprehensive toolkit for building intelligent applications and elegant user experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.title}
                className={`p-6 md:p-8 hover-elevate transition-all duration-700 ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                data-testid={`card-skill-${category.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary text-primary-foreground rounded-lg">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full border border-accent-border"
                          data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, "-")}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
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
