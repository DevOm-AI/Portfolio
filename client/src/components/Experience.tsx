import { Section, Bullets } from "./Section";
import { Metrics } from "./Metrics";
import { FadeIn } from "./motion";

const experience = [
  {
    company: "WhatBytes",
    role: "Backend Engineering Intern",
    duration: "May 2026 – Sep 2026",
    location: "Remote",
    metrics: [
      { value: "5 → 1", label: "polling APIs" },
      { value: "5", label: "calls in parallel" },
    ],
    achievements: [
      "Fixed outbound calling campaigns pausing by themselves in Rezora, an AI voice agent (Django, Celery, LiveKit). One unanswered call after all retries was stopping the whole campaign; now the failure is logged and the next queued call goes out, with up to 5 calls in parallel.",
      "Tracked a flickering campaigns page to the frontend polling 5 APIs every 5 seconds and cut it to one. Fixed two N+1 queries in that API and stopped it from rewriting campaign status on every poll.",
      "Integrated Greenhouse, Lever and Workday  into Meet AI, and built its partner API with HMAC-signed webhooks and a revocable API key per partner.",
      "Added Stripe Checkout to Anybiz for paid valuation reports, with the report generated from Stripe's payment-success webhook instead of the browser redirect.",
    ],
  },
  {
    company: "Shivaaradhya Foundation",
    role: "Full Stack Developer Intern",
    duration: "Jan 2025 – Apr 2025",
    location: "Pune, MH (Remote)",
    metrics: [
      { value: "2,000+", label: "students" },
      { value: "~3h → <20m", label: "data reconciliation" },
    ],
    achievements: [
      "Built student registration and a live leaderboard with React, Node.js and PostgreSQL for 2,000+ students across 5 competition events.",
      "Redesigned the database schema with foreign keys and indexes, cutting post-event data reconciliation from about 3 hours to under 20 minutes.",
      "Fixed a race condition in leaderboard score updates and a deployment misconfiguration while events were live.",
    ],
  },
];

export default function Experience() {
  return (
    <Section
      id="experience"
      subtitle="Where side-project energy met production-level responsibility."
    >
      <ol>
        {experience.map((exp) => (
          <FadeIn
            as="li"
            key={exp.company}
            className="grid gap-6 border-t border-line py-10 lg:grid-cols-[280px_1fr] lg:gap-12 lg:py-12"
          >
            <div className="font-mono text-[12px] leading-6">
              <p className="text-secondary">{exp.duration}</p>
              <p className="text-faint">{exp.location}</p>
            </div>

            <div data-testid="card-experience">
              <h3 className="text-[22px] font-semibold leading-tight tracking-[-0.02em] sm:text-[26px]">
                {exp.role}
              </h3>
              <p className="mt-1 text-[17px] font-medium text-primary-ink">{exp.company}</p>

              <Metrics items={exp.metrics} className="mt-7" />

              <Bullets items={exp.achievements} className="mt-7 max-w-[72ch]" />
            </div>
          </FadeIn>
        ))}
      </ol>
    </Section>
  );
}
