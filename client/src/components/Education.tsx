import { Card } from "@/components/ui/card";
import { GraduationCap, MapPin } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { useRef } from "react";

const education = [
  {
    institution: "Dr. D. Y. Patil College of Engineering and Innovation",
    degree: "Bachelor of Engineering (Artificial Intelligence and Data Science)",
    duration: "Sep. 2023 – June 2026",
    location: "Pune, MH",
    cgpa: "8.43",
  },
  {
    institution: "Yogeshwari Polytechnic",
    degree: "Diploma in Computer Engineering",
    duration: "Jan. 2021 – July 2023",
    location: "Ambajogai, MH",
    cgpa: null,
  },
];

const certifications = [
  {
    title: "Cyber Security Analyst",
    issuer: "TCS Forage",
    date: "January 2025",
  },
  {
    title: "Blockchain Build Station",
    issuer: "Geeks of Gurukul",
    date: "January 2025",
  },
  {
    title: "Python Workshop",
    issuer: "IEEE SB VIT",
    date: "February 2024",
  },
];

export default function Education() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" ref={ref} className="py-20 md:py-32 px-6 md:px-12">
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
            Education & Certifications
          </h2>
          <p
            className={`text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Continuous learning and skill development.
          </p>
        </div>

        <div className="space-y-12">
          {/* Education Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {education.map((edu, index) => (
              <Card
                key={edu.institution}
                className={`p-6 md:p-8 transition-all duration-700 ${
                  isInView
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                data-testid={`card-education-${index}`}
              >
                <div className="flex gap-4">
                  <div className="p-3 bg-primary text-primary-foreground rounded-lg h-fit">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-lg font-semibold leading-tight">
                      {edu.institution}
                    </h3>
                    <p className="text-muted-foreground">{edu.degree}</p>
                    <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                      <span className="font-mono">{edu.duration}</span>
                      {edu.cgpa && (
                        <>
                          <span>•</span>
                          <span className="font-semibold text-foreground">
                            CGPA: {edu.cgpa}
                          </span>
                        </>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Professional Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <Card
                  key={cert.title}
                  className="p-6 text-center hover-elevate transition-all"
                  data-testid={`card-certification-${index}`}
                >
                  <h4 className="font-semibold mb-2">{cert.title}</h4>
                  <p className="text-sm text-muted-foreground mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-muted-foreground font-mono">
                    {cert.date}
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
