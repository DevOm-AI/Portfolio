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
    value: "DevOm-AI",
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
            Contact
          </h2>
        </div>

        {/* Contact Cards */}
        <div className="max-w-2xl mx-auto">
          <Card
            className={`p-6 transition-all duration-700 delay-100 ${
              isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            data-testid="card-contact"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <Button
                    key={method.label}
                    variant="outline"
                    size="default"
                    asChild
                    className="h-auto py-4 flex-col gap-2 hover-elevate"
                    data-testid={`button-contact-${method.label.toLowerCase()}`}
                  >
                    <a
                      href={method.href}
                      target={method.label === "GitHub" ? "_blank" : undefined}
                      rel={method.label === "GitHub" ? "noopener noreferrer" : undefined}
                    >
                      <Icon className="h-4 w-4" />
                      <div className="text-center">
                        <p className="font-semibold text-xs mb-0.5">
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
          className={`text-center mt-12 space-y-1 transition-all duration-700 delay-300 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs text-muted-foreground">
            Built with React & Tailwind
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            console.log("Let's build something great!");
          </p>
        </div>
      </div>
    </section>
  );
}
