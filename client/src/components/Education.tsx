import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { useRef } from "react";

const education = [
  {
    institution: "Dr. D. Y. Patil College of Engineering and Innovation",
    degree: "Bachelor of Engineering (Artificial Intelligence and Data Science)",
    duration: "Sep. 2023 – June 2026",
    location: "Pune, MH",
    cgpa: "8.29",
  },
  {
    institution: "Yogeshwari Polytechnic",
    degree: "Diploma in Computer Engineering",
    duration: "Jan. 2021 – July 2023",
    location: "Ambajogai, MH",
    cgpa: null,
    courses: null,
  },
];

export default function Education() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" ref={ref} className="py-16 md:py-20 px-6 md:px-12  bg-muted/30">
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
            Education
          </h2>
        </div>

        <div className="space-y-8">
          {/* Education Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {education.map((edu, index) => (
              <Card
                key={edu.institution}
                // --- MODIFICATION: Added hover effects ---
                className={`p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  isInView
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }`}
                // --- END MODIFICATION ---
                style={{ transitionDelay: `${index * 100}ms` }}
                data-testid={`card-education-${index}`}
              >
                <div className="flex gap-3">
                  <div className="p-2 bg-primary text-primary-foreground rounded-md h-fit">
                    <GraduationCap className="h-4 w-4" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-sm font-semibold leading-tight">
                      {edu.institution}
                    </h3>
                    <p className="text-xs text-muted-foreground">{edu.degree}</p>
                    <div className="flex flex-wrap gap-1.5 text-xs text-muted-foreground">
                      <span className="font-mono">{edu.duration}</span>
                      {edu.cgpa && (
                        <>
                          <span>•</span>
                          <span className="font-semibold text-foreground">
                            {edu.cgpa} CGPA
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
