import { useEffect } from "react";
import { Command } from "cmdk";
import { ArrowUpRight, Hash, SunMoon } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { links, sections } from "@/lib/site";
import { useTheme } from "@/hooks/use-theme";

const linkItems = [
  { name: "Resume", href: links.resume },
  { name: "GitHub", href: links.github },
  { name: "LinkedIn", href: links.linkedin },
  { name: "Email", href: links.email },
  { name: "X (Twitter)", href: links.x },
];

const itemClass =
  "flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-[14px] text-subtle outline-none data-[selected=true]:bg-accent data-[selected=true]:text-foreground [&[data-selected=true]_svg]:text-primary";
const groupClass =
  "px-2 pb-2 [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:pb-1 [&_[cmdk-group-heading]]:pt-3 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:text-faint";

function goTo(id: string) {
  document.getElementById(id)?.scrollIntoView();
  history.replaceState(null, "", `#${id}`);
}

/** ⌘K / Ctrl+K palette for jumping between sections and opening links. */
export default function CommandPalette({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onOpenChange]);

  const run = (action: () => void) => {
    onOpenChange(false);
    // Let the dialog close (and restore focus) before navigating.
    requestAnimationFrame(action);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        aria-describedby={undefined}
        className="top-[20%] max-w-[calc(100%-2rem)] translate-y-0 gap-0 overflow-hidden rounded-2xl border-line bg-surface p-0 ![box-shadow:var(--shadow-card)] data-[state=closed]:slide-out-to-top-[20%] data-[state=open]:slide-in-from-top-[20%] sm:max-w-md [&>button]:hidden">
        <DialogTitle className="sr-only">Command palette</DialogTitle>
        <Command loop className="flex flex-col">
          <Command.Input
            autoFocus
            placeholder="Jump to…"
            className="h-12 border-b border-line bg-transparent px-4 text-[14px] text-foreground outline-none placeholder:text-faint"
          />
          <Command.List className="max-h-[320px] overflow-y-auto">
            <Command.Empty className="px-4 py-6 font-mono text-[12px] text-faint">
              No results.
            </Command.Empty>

            <Command.Group heading="sections" className={groupClass}>
              {sections.map((s) => (
                <Command.Item
                  key={s.id}
                  value={s.name}
                  onSelect={() => run(() => goTo(s.id))}
                  className={itemClass}
                >
                  <Hash aria-hidden="true" className="h-3.5 w-3.5 text-faint" />
                  {s.name}
                </Command.Item>
              ))}
            </Command.Group>

            <Command.Group heading="links" className={groupClass}>
              {linkItems.map((l) => (
                <Command.Item
                  key={l.name}
                  value={l.name}
                  onSelect={() =>
                    run(() => window.open(l.href, "_blank", "noopener,noreferrer"))
                  }
                  className={itemClass}
                >
                  <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5 text-faint" />
                  {l.name}
                </Command.Item>
              ))}
            </Command.Group>

            <Command.Group heading="preferences" className={groupClass}>
              <Command.Item
                value="Switch theme dark light"
                onSelect={() => run(() => toggleTheme())}
                className={itemClass}
              >
                <SunMoon aria-hidden="true" className="h-3.5 w-3.5 text-faint" />
                Switch to {theme === "dark" ? "light" : "dark"} theme
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
