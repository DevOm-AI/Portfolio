import { Section, Tags } from "./Section";
import { FadeIn } from "./motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "SQL"],
  },
  {
    title: "Backend",
    skills: ["FastAPI", "Django", "Celery", "Node.js", "Express", "REST APIs", "Webhooks", "JWT", "OAuth2"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "Redis"],
  },
  {
    title: "Integrations",
    skills: ["Stripe (Checkout, webhooks)", "LiveKit", "Telnyx SIP", "Greenhouse", "Workday", "Lever"],
  },
  {
    title: "Tools",
    skills: ["Docker", "Git", "pytest", "k6", "Postman", "Sentry"],
  },
  {
    title: "Frontend",
    skills: ["React", "Tailwind CSS"],
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
