import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { useRef } from "react";

const experience = [
  {
    company: "WhatBytes",
    role: "Backend Engineering Intern",
    duration: "May 2026 – Sep 2026",
    location: "Remote",
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
    achievements: [
      "Built student registration and a live leaderboard with React, Node.js and PostgreSQL for 2,000+ students across 5 competition events.",
      "Redesigned the database schema with foreign keys and indexes, cutting post-event data reconciliation from about 3 hours to under 20 minutes.",
      "Fixed a race condition in leaderboard score updates and a deployment misconfiguration while events were live.",
    ],
  },
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-16 md:py-20 px-6 md:px-12"
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
            Experience
          </h2>
          <p
            className={`text-sm text-muted-foreground transition-all duration-700 delay-100 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Where side-project energy met production-level responsibility.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="max-w-3xl mx-auto space-y-6">
          {experience.map((exp, idx) => (
            <Card
              key={idx}
              className={`p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                isInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
              data-testid="card-experience"
            >
              <div className="flex gap-4">
                <div className="p-2.5 bg-primary text-primary-foreground rounded-md h-fit">
                  <Briefcase className="h-4 w-4" />
                </div>

                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="text-base font-semibold">{exp.role}</h3>

                    <p className="text-sm text-muted-foreground">
                      {exp.company}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-1 text-xs text-muted-foreground">
                      <span className="font-mono">{exp.duration}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-1.5">
                    {exp.achievements.map((achievement, index) => (
                      <li
                        key={index}
                        className="text-xs text-muted-foreground leading-relaxed"
                      >
                        • {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
