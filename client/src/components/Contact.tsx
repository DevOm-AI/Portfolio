import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { useRef } from "react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "om.shete.developer@gmail.com",
    href: "mailto:om.shete.developer@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8237149044",
    href: "tel:+918237149044",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/DevOm-AI",
    href: "https://github.com/DevOm-AI",
  },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
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
            Get In Touch
          </h2>
          <p
            className={`text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Let's collaborate on something amazing. I'm always open to discussing new projects and opportunities.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="max-w-3xl mx-auto">
          <Card
            className={`p-8 md:p-12 transition-all duration-700 delay-200 ${
              isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            data-testid="card-contact"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Button
                    key={method.label}
                    variant="outline"
                    size="lg"
                    asChild
                    className="h-auto py-6 flex-col gap-3 hover-elevate"
                    data-testid={`button-contact-${method.label.toLowerCase()}`}
                  >
                    <a
                      href={method.href}
                      target={method.label === "GitHub" ? "_blank" : undefined}
                      rel={method.label === "GitHub" ? "noopener noreferrer" : undefined}
                    >
                      <Icon className="h-6 w-6" />
                      <div className="text-center">
                        <p className="font-semibold text-sm mb-1">
                          {method.label}
                        </p>
                        <p className="text-xs text-muted-foreground break-all">
                          {method.value}
                        </p>
                      </div>
                    </a>
                  </Button>
                );
              })}
            </div>
          </Card>
        </div>

        {/* Footer */}
        <div
          className={`text-center mt-16 space-y-2 transition-all duration-700 delay-400 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm text-muted-foreground">
            Built with React & Tailwind CSS
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            console.log("Let's build something amazing together!");
          </p>
        </div>
      </div>
    </section>
  );
}
