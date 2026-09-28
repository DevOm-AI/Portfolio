import type { ReactNode } from "react";
import { LazyMotion, MotionConfig, domAnimation, m } from "framer-motion";

/** Loads Framer Motion's lightweight DOM feature set and honours prefers-reduced-motion. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}

const ease = [0.2, 0.65, 0.2, 1] as const;

const tags = { div: m.div, li: m.li, article: m.article };

/**
 * Fades and slides its content up once.
 * - `inView`: wait until scrolled into view (default); otherwise play on load.
 * - `fade={false}`: keep the element opaque (used for the hero heading so it
 *   doesn't delay Largest Contentful Paint).
 */
export function FadeIn({
  children,
  className,
  delay = 0,
  inView = true,
  fade = true,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  inView?: boolean;
  fade?: boolean;
  as?: keyof typeof tags;
}) {
  const Tag = tags[as];
  const hidden = { opacity: fade ? 0 : 1, y: 14 };
  const shown = { opacity: 1, y: 0 };

  return (
    <Tag
      className={className}
      initial={hidden}
      {...(inView
        ? { whileInView: shown, viewport: { once: true, margin: "0px 0px -80px 0px" } }
        : { animate: shown })}
      transition={{ duration: 0.6, delay, ease }}
    >
      {children}
    </Tag>
  );
}
