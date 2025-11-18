import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { useRef } from "react";

// --- MODIFICATION 1: Updated certifications array ---
const certifications = [
  {
    title: "Cyber Security Analyst",
    issuer: "TCS Forage",
    url: "https://drive.google.com/file/d/11Omlr6bs2iZ3D7X7Zo8h0tcr-pJO7QHN/view?usp=drive_link",
  },
  {
    title: "Blockchain Build Station",
    issuer: "Geeks of Gurukul",
    url: "https://drive.google.com/file/d/1r414EpnvcTbnerGpP7-xc0OVaKrQP4o1/view?usp=drive_link",
  },
  {
    title: "Python Workshop",
    issuer: "IEEE SB VIT",
    url: "https://drive.google.com/file/d/1xA0nMl7Uh3gne1yfnekbu2JG8r4Tg-pJ/view?usp=drive_link",
  },
  {
    title: "Career Edge - Communication Skills",
    issuer: "TCS iON",
    url: "https://drive.google.com/file/d/1LecJZwi2Db--Y5R2cQpnG22amuJ0O2Og/view?usp=drive_link",
  },
  {
    title: "MERN Stack Development",
    issuer: "Course Certificate",
    url: "https://drive.google.com/file/d/1PpqRaKA_jVdsMdde1VSq1VmiRswUqv2j/view?usp=drive_link",
  },
  {
    title: "Infosys Springboard",
    issuer: "Infosys",
    url: "https://drive.google.com/file/d/1OBhB7Cp86TO6tcGYhvs6A5igSxfHMofs/view?usp=drive_link",
  },
  {
    title: "Deloitte Data Analytics",
    issuer: "Deloitte Forage",
    url: "https://drive.google.com/file/d/19kfJmjCZJu2KjpQzQRNrWTIh7_Vfq6pK/view?usp=drive_link",
  },
];
// --- END MODIFICATION 1 ---

export default function Certifications() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="certifications"
      ref={ref}
      className="py-16 md:py-20 px-6 md:px-12"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 space-y-2">
          <h2
            className={`text-2xl md:text-3xl font-semibold transition-all duration-700 flex items-center justify-center gap-2 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <Award className="h-5 w-5" />
            Certifications
          </h2>
        </div>

        {/* --- MODIFICATION 2: Mapped cards wrapped in <a> tags --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {certifications.map((cert, index) => (
            <a
              key={cert.title}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg"
            >
              <Card
                className={`p-4 text-center hover-elevate transition-all duration-700 h-full ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                data-testid={`card-certification-${index}`}
              >
                <h4 className="font-semibold text-sm mb-1">{cert.title}</h4>
                <p className="text-xs text-muted-foreground">{cert.issuer}</p>
              </Card>
            </a>
          ))}
        </div>
        {/* --- END MODIFICATION 2 --- */}
      </div>
    </section>
  );
}