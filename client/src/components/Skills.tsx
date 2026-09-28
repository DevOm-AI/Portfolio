import { Section, Tags } from "./Section";
import { FadeIn } from "./motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Java", "JavaScript", "SQL"],
  },
  {
    title: "Backend",
    skills: ["Spring Boot", "FastAPI", "Node.js", "REST APIs", "Webhooks", "JWT", "HMAC"],
  },
  {
    title: "Databases & Infrastructure",
    skills: ["MySQL", "PostgreSQL", "Redis", "Docker", "Docker Compose"],
  },
  {
    title: "Frontend",
    skills: ["React.JS", "Next.JS", "Tailwind CSS"],
  },
  {
    title: "Engineering",
    skills: ["Async Processing", "API Design", "Caching", "Messaging", "Testing", "Git"],
  },
  {
    title: "Tools",
    skills: ["VS Code", "GitHub", "Postman", "Docker", "Vercel", "Render"],
  },
];

export default function Skills() {
  return (
    <Section
      id="skills"
      subtitle="A toolkit built one late-night debug session at a time."
    >
      <dl>
        {skillCategories.map((category) => (
          <FadeIn
            key={category.title}
            className="grid gap-3 border-t border-line py-6 md:grid-cols-[280px_1fr] md:gap-12"
          >
            <dt
              className="text-[17px] font-medium text-foreground"
              data-testid={`card-skill-${category.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {category.title}
            </dt>
            <dd>
              <Tags items={category.skills} label={category.title} />
            </dd>
          </FadeIn>
        ))}
      </dl>
    </Section>
  );
}
