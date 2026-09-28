import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/** Link that opens in a new tab, with a ↗ marker that turns coral on hover. */
export function ExternalLink({
  href,
  className,
  children,
  label,
  "data-testid": testId,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  /** Accessible name, when the visible text alone is ambiguous (e.g. "GitHub"). */
  label?: string;
  "data-testid"?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label ? `${label} (opens in a new tab)` : undefined}
      className={cn("group inline-flex items-center gap-1", className)}
      data-testid={testId}
    >
      {children}
      <ArrowUpRight
        aria-hidden="true"
        className="h-3.5 w-3.5 shrink-0 text-faint transition-[color,transform] duration-200 group-hover:-translate-y-px group-hover:translate-x-px group-hover:text-primary"
      />
      {!label && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}
