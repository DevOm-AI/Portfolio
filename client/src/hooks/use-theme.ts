import { useCallback, useSyncExternalStore } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";
/** Browser UI colour (address bar etc.), matching --background in each theme. */
const THEME_COLOR: Record<Theme, string> = { light: "#FAF7F2", dark: "#0E1015" };

// The <html> class is the source of truth. It is set before first paint by the
// inline script in index.html, so there is no flash of the wrong theme.
const listeners = new Set<() => void>();
const media = () => window.matchMedia("(prefers-color-scheme: dark)");

const readTheme = (): Theme =>
  document.documentElement.classList.contains("dark") ? "dark" : "light";

function storedTheme(): Theme | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", THEME_COLOR[theme]);
  listeners.forEach((notify) => notify());
}

// Follow the OS setting until the visitor picks a theme explicitly.
const onSystemChange = (e: MediaQueryListEvent) => {
  if (!storedTheme()) applyTheme(e.matches ? "dark" : "light");
};

function subscribe(notify: () => void) {
  if (listeners.size === 0) media().addEventListener("change", onSystemChange);
  listeners.add(notify);
  return () => {
    listeners.delete(notify);
    if (listeners.size === 0) media().removeEventListener("change", onSystemChange);
  };
}

type ViewTransitionDocument = Document & {
  startViewTransition?: (update: () => void) => { ready: Promise<void> };
};

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, readTheme, (): Theme => "light");

  /**
   * Switch theme. With `origin` (e.g. the toggle button's centre), the new theme
   * is revealed as a circle growing from that point, where View Transitions are
   * supported and the visitor hasn't asked for reduced motion.
   */
  const setTheme = useCallback((next: Theme, origin?: { x: number; y: number }) => {
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage unavailable (private mode etc.): the switch still applies for this visit.
    }

    const doc = document as ViewTransitionDocument;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!doc.startViewTransition || reduceMotion) {
      applyTheme(next);
      return;
    }

    const x = origin?.x ?? window.innerWidth / 2;
    const y = origin?.y ?? 0;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    const transition = doc.startViewTransition(() => applyTheme(next));
    transition.ready
      .then(() => {
        document.documentElement.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
          {
            duration: 600,
            easing: "cubic-bezier(.2, .65, .2, 1)",
            pseudoElement: "::view-transition-new(root)",
          },
        );
      })
      .catch(() => {});
  }, []);

  const toggleTheme = useCallback(
    (origin?: { x: number; y: number }) => setTheme(readTheme() === "dark" ? "light" : "dark", origin),
    [setTheme],
  );

  return { theme, setTheme, toggleTheme };
}
