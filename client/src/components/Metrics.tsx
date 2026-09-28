import { cn } from "@/lib/utils";

export type Metric = { value: string; label: string };

/** Key figures already stated in the text, set large with a mono caption. */
export function Metrics({ items, className }: { items?: Metric[]; className?: string }) {
  if (!items?.length) return null;

  return (
    <dl className={cn("flex flex-wrap gap-x-10 gap-y-4", className)}>
      {items.map((m) => (
        <div key={m.label} className="flex flex-col-reverse">
          <dt className="mt-1 font-mono text-[11px] text-faint">{m.label}</dt>
          <dd className="text-[26px] font-semibold leading-none tracking-[-0.03em] text-foreground">
            {m.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
