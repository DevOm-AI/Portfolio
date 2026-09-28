import { FileText } from "lucide-react";
import { Container } from "./Section";
import { ExternalLink } from "./ExternalLink";
import { FadeIn } from "./motion";
import { links } from "@/lib/site";

const education = ["B.E. in AI & Data Science", "CGPA 8.14", "FIRST CLASS WITH DISTINCTION", "Pune"];

const secondaryLinks = [
  { name: "GitHub", href: links.github, testId: "button-github" },
  { name: "LinkedIn", href: links.linkedin, testId: "button-linkedin" },
  { name: "Email", href: links.email, testId: "button-email" },
];

export default function Hero() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="hero-grid -z-10" />
      <div aria-hidden="true" className="hero-glow -z-10" />

      <Container className="pb-12 pt-16 sm:pb-16 sm:pt-24">
        {/* Status pill */}
        <FadeIn inView={false}>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1 text-[13px] text-foreground [box-shadow:var(--shadow-card)]">
            <span aria-hidden="true" className="status-dot glow-dot h-1.5 w-1.5 rounded-full bg-primary text-primary" />
            open to SDE / backend roles
          </p>
        </FadeIn>

        <div className="mt-8 grid items-end gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            <FadeIn inView={false} fade={false} delay={0.05}>
              <h1
                id="about-title"
                className="hero-name text-[60px] font-semibold leading-[0.95] tracking-[-0.05em] sm:text-[104px] lg:text-[120px]"
              >
                Om Shete
              </h1>
            </FadeIn>
            <FadeIn inView={false} delay={0.1}>
              <p className="mt-6 text-[21px] leading-snug sm:text-[28px]">
                Software Engineer &amp; <span className="text-primary-ink">Backend Focus</span>
              </p>
            </FadeIn>
          </div>

          {/* Education highlight */}
          <FadeIn inView={false} delay={0.16} className="lg:pb-3">
            <ul className="border-t border-line font-mono text-[11.5px] uppercase tracking-[0.06em] text-faint">
              {education.map((item) => (
                <li key={item} className="border-b border-line py-2">
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        {/* Links */}
        <FadeIn inView={false} delay={0.22}>
          <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 text-[15px]">
            <a
              href={links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 font-medium text-background [box-shadow:var(--shadow-cta)] transition-transform duration-200 hover:-translate-y-px"
              data-testid="button-resume"
            >
              <FileText aria-hidden="true" className="h-4 w-4 text-primary" />
              Resume
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {secondaryLinks.map((l) => (
                <li key={l.name}>
                  <ExternalLink href={l.href} className="text-link" data-testid={l.testId}>
                    {l.name}
                  </ExternalLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Tagline */}
          <p className="mt-10 font-mono text-[12px] text-faint sm:text-[13px]">
            if (bug) console.log(&quot;It&apos;s not a bug, it&apos;s a future feature 😎&quot;);
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
