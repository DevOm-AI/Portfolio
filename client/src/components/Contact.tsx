import { ArrowUpRight } from "lucide-react";
import { Section, Container } from "./Section";
import { FadeIn } from "./motion";
import { links } from "@/lib/site";

const contactMethods = [
  {
    label: "Email",
    value: "om.shete.developer@gmail.com",
    href: links.email,
  },
  {
    label: "GitHub",
    value: "DevOm-AI",
    href: links.github,
  },
  {
    label: "LinkedIn",
    value: "devom-ai",
    href: links.linkedin,
  },
  {
    label: "X (Twitter)",
    value: "@Om_S_Dev",
    href: links.x,
  },
];

export default function Contact() {
  return (
    <Section
      id="contact"
      subtitle="The only section where I'm waiting on *you* to push first."
    >
      <FadeIn>
        <ul className="grid gap-4 sm:grid-cols-2" data-testid="card-contact">
          {contactMethods.map((method) => (
            <li key={method.label}>
              <a
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${method.label}: ${method.value} (opens in a new tab)`}
                className="card card-lift group flex h-full items-start justify-between gap-4 p-6 sm:p-7"
                data-testid={`button-contact-${method.label
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
                <span className="min-w-0">
                  <span className="mono-label block">{method.label}</span>
                  <span className="mt-2 block break-all text-[19px] font-medium tracking-[-0.01em] text-foreground sm:text-[21px]">
                    {method.value}
                  </span>
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 shrink-0 text-faint transition-[color,transform] duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                />
              </a>
            </li>
          ))}
        </ul>
      </FadeIn>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="pb-10 pt-4">
      <Container>
        <div className="flex flex-col gap-1 border-t border-line pt-8 font-mono text-[12px] text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>Built with React &amp; Tailwind</p>
          <p>console.log("Let's build something great!");</p>
        </div>
      </Container>
    </footer>
  );
}
