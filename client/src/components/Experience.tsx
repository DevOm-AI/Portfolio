import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { useRef } from "react";

const experience = {
  company: "Shivaaradhya Foundation",
  role: "Front-End Engineer Intern",
  duration: "Jan 2025 – Apr 2025",
  location: "Pune, MH",
  achievements: [
    "Increased session duration by 40% through UI redesign",
    "Improved page load speed by 30% with responsive optimizations",
    "Reduced bounce rate by 25% via iterative UX improvements",
  ],
};

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-16 md:py-20 px-6 md:px-12 bg-muted/30"
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
        </div>

        {/* Experience Card */}
        <div className="max-w-3xl mx-auto">
          <Card
            className={`p-5 transition-all duration-700 ${
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

              {/* Content */}
              <div className="flex-1 space-y-3">
                <div>
                  <h3 className="text-base font-semibold">
                    {experience.role}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {experience.company}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-1 text-xs text-muted-foreground">
                    <span className="font-mono">{experience.duration}</span>
                    <span>•</span>
                    <span>{experience.location}</span>
                  </div>
                </div>

                <ul className="space-y-1.5">
                  {experience.achievements.map((achievement, index) => (
                    <li key={index} className="text-xs text-muted-foreground leading-relaxed">
                      • {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
