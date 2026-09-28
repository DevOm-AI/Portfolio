import { Section } from "./Section";
import { FadeIn } from "./motion";

const education = [
  {
    institution: "Dr. D. Y. Patil College of Engineering and Innovation",
    degree: "Bachelor of Engineering (Artificial Intelligence and Data Science)",
    duration: "Sep. 2023 – June 2026",
    location: "Pune, MH",
    cgpa: "8.14",
  },
  {
    institution: "Yogeshwari Polytechnic",
    degree: "Diploma in Computer Engineering",
    duration: "Jan. 2021 – July 2023",
    location: "Ambajogai, MH",
    cgpa: "8.71",
  },
];

export default function Education() {
  return (
    <Section
      id="education"
      subtitle="Classroom gave me the map. The terminal gave me the territory."
    >
      <ol>
        {education.map((edu, index) => (
          <FadeIn
            as="li"
            key={edu.institution}
            className="grid gap-4 border-t border-line py-8 lg:grid-cols-[280px_1fr_auto] lg:items-baseline lg:gap-12"
          >
            <p className="font-mono text-[12px] text-secondary">{edu.duration}</p>
            <div data-testid={`card-education-${index}`}>
              <h3 className="text-[20px] font-semibold leading-snug tracking-[-0.015em] sm:text-[22px]">
                {edu.institution}
              </h3>
              <p className="mt-1 text-[15px]">{edu.degree}</p>
            </div>
            {edu.cgpa && (
              <p className="flex items-baseline gap-2 lg:justify-end">
                <span className="text-[28px] font-semibold leading-none tracking-[-0.03em] text-foreground">
                  {edu.cgpa}
                </span>
                <span className="font-mono text-[11px] text-faint">CGPA</span>
              </p>
            )}
          </FadeIn>
        ))}
      </ol>
    </Section>
  );
}
