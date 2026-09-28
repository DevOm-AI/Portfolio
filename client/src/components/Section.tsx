import type { ReactNode } from "react";
import { FadeIn } from "./motion";
import { cn } from "@/lib/utils";
import { sections, type SectionId } from "@/lib/site";

/** Page-width container shared by the header, hero, sections and footer. */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6", className)}>
      {children}
    </div>
  );
}

/**
 * Editorial section: a rule, a coral index number, a large heading and the
 * subtitle set against it; content below.
 */
export function Section({
  id,
  subtitle,
  children,
}: {
  id: Exclude<SectionId, "about">;
  subtitle: ReactNode;
  children: ReactNode;
}) {
  const index = sections.findIndex((s) => s.id === id);
  const name = sections[index].name;

  return (
    <section id={id} aria-labelledby={`${id}-title`} className="py-12 md:py-16">
      <Container>
        <FadeIn className="flex flex-col gap-3 border-t border-line pt-8 md:flex-row md:items-end md:justify-between md:gap-12">
          <div className="flex items-baseline gap-4">
            <span aria-hidden="true" className="font-mono text-[13px] text-primary-ink">
              {String(index).padStart(2, "0")}
            </span>
            <h2
              id={`${id}-title`}
              className="text-[32px] font-semibold leading-none tracking-[-0.035em] sm:text-[44px]"
            >
              {name}
            </h2>
          </div>
          <p className="max-w-lg text-[15px] [text-wrap:balance] md:pb-1 md:text-right">{subtitle}</p>
        </FadeIn>
        <div className="mt-10 md:mt-14">{children}</div>
      </Container>
    </section>
  );
}

/** Bulleted list with coral markers. */
export function Bullets({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn("space-y-3 text-[15px] leading-relaxed", className)}>
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span aria-hidden="true" className="mt-[0.62em] h-1 w-1 shrink-0 rounded-full bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Stack / skill tags on a slate-blue tint. */
export function Tags({ items, label }: { items: string[]; label?: string }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label={label}>
      {items.map((t) => (
        <li
          key={t}
          className="rounded-full border border-secondary/20 bg-secondary/[0.08] px-2.5 py-0.5 font-mono text-[11.5px] text-secondary"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}
