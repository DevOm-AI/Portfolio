import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { useRef } from "react";

const education = [
  {
    institution: "Dr. D. Y. Patil College",
    degree: "B.E. AI & Data Science",
    duration: "2023 – 2026",
    location: "Pune",
    cgpa: "8.43",
  },
  {
    institution: "Yogeshwari Polytechnic",
    degree: "Diploma in CS",
    duration: "2021 – 2023",
    location: "Ambajogai",
    cgpa: null,
  },
];

const certifications = [
  { title: "Cyber Security Analyst", issuer: "TCS Forage" },
  { title: "Blockchain Build Station", issuer: "Geeks of Gurukul" },
  { title: "Python Workshop", issuer: "IEEE SB VIT" },
];

export default function Education() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" ref={ref} className="py-16 md:py-20 px-6 md:px-12">
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
                className={`p-5 transition-all duration-700 ${
                  isInView
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }`}
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

          {/* Certifications */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-lg font-semibold mb-4 text-center flex items-center justify-center gap-2">
              <Award className="h-4 w-4" />
              Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {certifications.map((cert, index) => (
                <Card
                  key={cert.title}
                  className="p-4 text-center hover-elevate transition-all"
                  data-testid={`card-certification-${index}`}
                >
                  <h4 className="font-semibold text-sm mb-1">{cert.title}</h4>
                  <p className="text-xs text-muted-foreground">
                    {cert.issuer}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
