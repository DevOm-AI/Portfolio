import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import CommandPalette from "./CommandPalette";
import ThemeToggle from "./ThemeToggle";
import { Container } from "./Section";
import { useActiveSection } from "@/hooks/use-active-section";
import { sections } from "@/lib/site";
import { cn } from "@/lib/utils";

const sectionIds = sections.map((s) => s.id);

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [isMac, setIsMac] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    setIsMac(/Mac|iPhone|iPad/.test(navigator.platform));
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileMenuOpen]);

  const linkClass = (id: string) =>
    cn(
      "relative transition-colors duration-200 hover:text-foreground",
      active === id ? "text-foreground" : "text-subtle",
    );

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-background/90 backdrop-blur-sm">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:text-foreground"
      >
        Skip to content
      </a>

      <Container className="flex h-16 items-center justify-between gap-6">
        <a
          href="#about"
          className="shrink-0 whitespace-nowrap font-mono text-[13px] font-medium text-foreground"
          data-testid="link-logo"
        >
          &lt;DevOm-AI/&gt;
        </a>

        <nav aria-label="Sections" className="hidden lg:block">
          <ul className="flex items-center gap-5 whitespace-nowrap text-[13.5px]">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={linkClass(s.id)}
                  aria-current={active === s.id ? "location" : undefined}
                  data-testid={`link-nav-${s.name.toLowerCase()}`}
                >
                  {s.name}
                  {active === s.id && (
                    <span
                      aria-hidden="true"
                      className="glow-dot absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => setPaletteOpen(true)}
            className="hidden items-center gap-1.5 whitespace-nowrap rounded-full border border-line bg-surface px-3 py-1 font-mono text-[11px] text-faint transition-colors duration-200 hover:border-primary/50 hover:text-foreground sm:inline-flex"
            aria-label="Open command palette"
            aria-keyshortcuts={isMac ? "Meta+K" : "Control+K"}
          >
            {isMac ? "⌘" : "Ctrl"} K
          </button>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-subtle transition-colors duration-200 hover:bg-accent hover:text-foreground lg:hidden"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? (
              <X aria-hidden="true" className="h-4 w-4" />
            ) : (
              <Menu aria-hidden="true" className="h-4 w-4" />
            )}
          </button>
        </div>
      </Container>

      {mobileMenuOpen && (
        <nav id="mobile-menu" aria-label="Sections" className="border-t border-line lg:hidden">
          <Container>
            <ul className="py-3">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn("flex items-baseline gap-4 py-2.5 text-[16px]", linkClass(s.id))}
                    aria-current={active === s.id ? "location" : undefined}
                    data-testid={`link-mobile-${s.name.toLowerCase()}`}
                  >
                    <span aria-hidden="true" className="w-5 font-mono text-[12px] text-primary-ink">
                      {String(i).padStart(2, "0")}
                    </span>
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </nav>
      )}

      <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} />
    </header>
  );
}
