import { Card } from "@/components/ui/card";
import { BookOpen } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { useRef } from "react";

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
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="research-papers" ref={ref} className="py-16 md:py-20 px-6 md:px-12 bg-muted/20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 space-y-2">
          <h2
            className={`text-2xl md:text-3xl font-semibold transition-all duration-700 flex items-center justify-center gap-2 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <BookOpen className="h-5 w-5" />
            Research Papers
          </h2>
        </div>

        {/* Papers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {researchPapers.map((paper, index) => (
            <a
              key={paper.title}
              href={paper.url}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg"
            >
              <Card
                className={`p-5 hover-elevate transition-all duration-700 h-full ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <h3 className="text-base font-semibold mb-2">{paper.title}</h3>

                <ul className="space-y-2 text-xs text-muted-foreground">
                  {paper.description.map((point, i) => (
                    <li key={i} className="leading-relaxed">• {point}</li>
                  ))}
                </ul>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
