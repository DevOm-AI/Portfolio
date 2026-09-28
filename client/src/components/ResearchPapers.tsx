import { Section, Bullets } from "./Section";
import { ExternalLink } from "./ExternalLink";
import { FadeIn } from "./motion";

// --- Research Papers Data ---
const researchPapers = [
  {
    title: "REFERRAI: An Adaptive AI Agent for Secure Token-Based Referral Systems",
    description: [
      "AI-based referral system where users earn tokens redeemable for up to 40% discount.",
      "Uses ML and encryption to detect fraud and secure promo-code usage.",
    ],
    url: "https://drive.google.com/file/d/1z_Ehg57Xk7yKrw3J3l8rgYyqbX7tWvA-/view?usp=drive_link", // replace if needed
  },
  {
    title: "Transformative AI in Drug Discovery",
    description: [
      "AI models speed up drug discovery by predicting molecules and analysing medical datasets.",
      "Improves accuracy, automates testing, and reduces overall research cost.",
    ],
    url: "https://drive.google.com/file/d/1KCC-F-bkEEZiaEcS77ZTxM8hqIhDB3er/view?usp=drive_link", // replace if needed
  },
];

export default function ResearchPapers() {
  return (
    <Section
      id="research-papers"
      subtitle="Some questions needed more than a weekend project to answer."
    >
      <ol className="grid gap-6 md:grid-cols-2">
        {researchPapers.map((paper, index) => (
          <FadeIn as="li" key={paper.title} delay={index * 0.08}>
            <article className="card flex h-full flex-col p-6 sm:p-8">
              <p aria-hidden="true" className="font-mono text-[13px] text-primary-ink">
                [{index + 1}]
              </p>
              <h3 className="mt-3 text-[20px] font-semibold leading-snug tracking-[-0.015em]">
                {paper.title}
              </h3>
              <Bullets items={paper.description} className="mt-4 flex-1" />
              <ExternalLink
                href={paper.url}
                label={`Read paper: ${paper.title}`}
                className="text-link mt-6 self-start text-[14px]"
              >
                Read paper
              </ExternalLink>
            </article>
          </FadeIn>
        ))}
      </ol>
    </Section>
  );
}
