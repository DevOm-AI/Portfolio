import { Card } from "@/components/ui/card";
import { Briefcase, TrendingUp } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { useRef } from "react";

const experience = {
  company: "Shivaaradhya Foundation (NGO)",
  role: "Front-End Engineer Intern",
  duration: "Jan 2025 – April 2025",
  location: "Pune, MH",
  achievements: [
    {
      text: "Redesigned a website UI using HTML, CSS, and JavaScript, which increased the average session duration by",
      metric: "40%",
    },
    {
      text: "Achieved a",
      metric: "30%",
      text2: "increase in page load speed by making the official website's UI more responsive.",
    },
    {
      text: "Reduced the bounce rate by",
      metric: "25%",
      text2: "through iterative UI improvements based on user feedback.",
    },
    {
      text: "Conducted UI audits and usability testing to find design flaws and performance bottlenecks.",
      metric: null,
    },
  ],
};

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 md:py-32 px-6 md:px-12 bg-muted/30"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold transition-all duration-700 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Experience
          </h2>
          <p
            className={`text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Delivering measurable impact through thoughtful design and optimization.
          </p>
        </div>

        {/* Experience Card */}
        <div className="max-w-4xl mx-auto">
          <Card
            className={`p-6 md:p-8 transition-all duration-700 ${
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
            data-testid="card-experience"
          >
            {/* Timeline Marker */}
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="p-3 bg-primary text-primary-foreground rounded-full">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div className="w-0.5 h-full bg-border mt-4"></div>
              </div>

              {/* Content */}
              <div className="flex-1 pb-4">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold mb-2">
                    {experience.role}
                  </h3>
                  <p className="text-lg text-muted-foreground font-medium">
                    {experience.company}
                  </p>
                  <div className="flex flex-wrap gap-3 mt-2 text-sm text-muted-foreground">
                    <span className="font-mono">{experience.duration}</span>
                    <span>•</span>
                    <span>{experience.location}</span>
                  </div>
                </div>

                {/* Achievements */}
                <ul className="space-y-4">
                  {experience.achievements.map((achievement, index) => (
                    <li key={index} className="flex gap-3">
                      <TrendingUp className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground leading-relaxed">
                        {achievement.text}
                        {achievement.metric && (
                          <span className="font-bold text-foreground mx-1">
                            {achievement.metric}
                          </span>
                        )}
                        {achievement.text2}
                      </span>
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
