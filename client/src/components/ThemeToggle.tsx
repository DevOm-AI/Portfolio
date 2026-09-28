import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

/** Light/dark switch. The new theme is revealed as a circle growing from the button. */
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const next = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        toggleTheme({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
      }}
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-subtle transition-colors duration-200 hover:border-primary/50 hover:text-foreground"
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      data-testid="button-theme-toggle"
    >
      {/* Icon shows the current theme; both are stacked and cross-fade on switch */}
      <Sun
        aria-hidden="true"
        className="absolute h-4 w-4 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 dark:opacity-0"
      />
      <Moon
        aria-hidden="true"
        className="absolute h-4 w-4 rotate-90 scale-0 opacity-0 transition-all duration-500 dark:rotate-0 dark:scale-100 dark:opacity-100"
      />
    </button>
  );
}
