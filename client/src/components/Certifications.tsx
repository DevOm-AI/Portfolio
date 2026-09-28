import { ArrowUpRight } from "lucide-react";
import { Section } from "./Section";
import { FadeIn } from "./motion";

const certifications = [
  {
    title: "Quora System Design",
    issuer: "Scaler",
    url: "https://drive.google.com/file/d/1dOBOWbZKTd2gYv7EWWOyKZENaYde9J4y/view?usp=drive_link"
  },
  {
    title: "Cyber Security Analyst",
    issuer: "TCS Forage",
    url: "https://drive.google.com/file/d/11Omlr6bs2iZ3D7X7Zo8h0tcr-pJO7QHN/view?usp=drive_link",
  },
  {
    title: "Deloitte Data Analytics",
    issuer: "Deloitte Forage",
    url: "https://drive.google.com/file/d/19kfJmjCZJu2KjpQzQRNrWTIh7_Vfq6pK/view?usp=drive_link",
  },
  {
    title: "Infosys Springboard",
    issuer: "Infosys",
    url: "https://drive.google.com/file/d/1OBhB7Cp86TO6tcGYhvs6A5igSxfHMofs/view?usp=drive_link",
  },
];

export default function Certifications() {
  return (
    <Section
      id="certifications"
      subtitle="Credentials that complement the engineering work."
    >
      <FadeIn>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, index) => (
            <li key={cert.title}>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full items-start justify-between gap-4 rounded-2xl border border-line bg-surface/60 px-5 py-4 transition-[background-color,border-color,box-shadow] duration-200 hover:border-primary/40 hover:bg-surface hover:[box-shadow:var(--shadow-card)]"
                data-testid={`card-certification-${index}`}
              >
                <span className="min-w-0">
                  <span className="block text-[15px] font-medium text-foreground">{cert.title}</span>
                  <span className="mt-0.5 block font-mono text-[11.5px] text-faint">{cert.issuer}</span>
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0 text-faint transition-[color,transform] duration-200 group-hover:-translate-y-px group-hover:translate-x-px group-hover:text-primary"
                />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </FadeIn>
    </Section>
  );
}
