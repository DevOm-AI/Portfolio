// Shared site data used by the hero, contact section, navigation and command palette.

export const links = {
  resume:
    "https://drive.google.com/file/d/1YFaCqmcCS87P6vGeFm6eFC3GPN6Le6o1/view?usp=sharing",
  email:
    "https://mail.google.com/mail/?view=cm&fs=1&to=om.shete.developer@gmail.com",
  github: "https://github.com/DevOm-AI",
  linkedin: "https://www.linkedin.com/in/devom-ai/",
  x: "https://x.com/Om_S_Dev",
};

// Page order. Section numbers (01, 02, …) and nav order are derived from this list.
export const sections = [
  { id: "about", name: "About" },
  { id: "experience", name: "Experience" },
  { id: "projects", name: "Projects" },
  { id: "skills", name: "Skills" },
  { id: "research-papers", name: "Research Papers" },
  { id: "education", name: "Education" },
  { id: "certifications", name: "Certifications" },
  { id: "contact", name: "Contact" },
] as const;

export type SectionId = (typeof sections)[number]["id"];
