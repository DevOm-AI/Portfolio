import { useId } from "react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "framer-motion";

type Layout = "wide" | "narrow";
type Tone = "primary" | "secondary";

export type FlowNode = {
  id: string;
  label: string;
  note?: string;
  /** Grid position [column, row] in each layout. */
  at: Record<Layout, [number, number]>;
};

export type FlowEdge = {
  from: string;
  to: string;
  label?: string;
  /** Off the request path: drawn dashed (and in the secondary accent). */
  async?: boolean;
  /** Line colour; defaults to secondary for async edges, primary otherwise. */
  tone?: Tone;
  /** For diagonal edges: vertical-then-horizontal ("vh", default) or the reverse ("hv"). */
  bend?: Partial<Record<Layout, "vh" | "hv">>;
};

export type FlowGraph = {
  title: string;
  nodes: FlowNode[];
  edges: FlowEdge[];
  legend?: { label: string; tone?: Tone; dashed?: boolean }[];
  caption?: string;
};

const GRID: Record<Layout, { w: number; h: number; gx: number; gy: number; pad: number }> = {
  wide: { w: 136, h: 46, gx: 44, gy: 34, pad: 6 },
  narrow: { w: 136, h: 46, gx: 26, gy: 30, pad: 6 },
};

const stroke = (tone: Tone) => (tone === "secondary" ? "var(--flow-async)" : "var(--flow-line)");
const toneOf = (e: FlowEdge): Tone => e.tone ?? (e.async ? "secondary" : "primary");

/**
 * System-flow diagram drawn in the accent colours, with a small dot travelling
 * each arrow like a request. Wide layout from `sm` up, stacked layout on phones.
 */
export function FlowDiagram({ graph }: { graph: FlowGraph }) {
  return (
    <figure>
      <FlowSvg graph={graph} layout="wide" className="hidden sm:block" />
      <FlowSvg graph={graph} layout="narrow" className="sm:hidden" />
      {(graph.legend || graph.caption) && (
        <figcaption className="mt-4 space-y-2 font-mono text-[11px] text-faint">
          {graph.legend && (
            <span className="flex flex-wrap gap-x-5 gap-y-1.5">
              {graph.legend.map((item) => (
                <span key={item.label} className="inline-flex items-center gap-2">
                  <svg aria-hidden="true" width="18" height="2" className="overflow-visible">
                    <line
                      x1="0" y1="1" x2="18" y2="1"
                      stroke={stroke(item.tone ?? (item.dashed ? "secondary" : "primary"))}
                      strokeWidth="1.5"
                      strokeDasharray={item.dashed ? "3 3" : undefined}
                    />
                  </svg>
                  {item.label}
                </span>
              ))}
            </span>
          )}
          {graph.caption && <span className="block">{graph.caption}</span>}
        </figcaption>
      )}
    </figure>
  );
}

function FlowSvg({
  graph,
  layout,
  className,
}: {
  graph: FlowGraph;
  layout: Layout;
  className?: string;
}) {
  const uid = useId().replace(/:/g, "");
  const reduceMotion = useReducedMotion();
  const g = GRID[layout];

  const cols = Math.max(...graph.nodes.map((n) => n.at[layout][0])) + 1;
  const rows = Math.max(...graph.nodes.map((n) => n.at[layout][1])) + 1;
  const width = g.pad * 2 + cols * g.w + (cols - 1) * g.gx;
  const height = g.pad * 2 + rows * g.h + (rows - 1) * g.gy;

  const box = (id: string) => {
    const n = graph.nodes.find((node) => node.id === id)!;
    const [c, r] = n.at[layout];
    const x = g.pad + c * (g.w + g.gx);
    const y = g.pad + r * (g.h + g.gy);
    return { x, y, r: x + g.w, b: y + g.h, cx: x + g.w / 2, cy: y + g.h / 2 };
  };

  const edges = graph.edges.map((e) => {
    const a = box(e.from);
    const b = box(e.to);
    let d: string;
    let label: { x: number; y: number; anchor: "middle" | "start" };

    if (a.cy === b.cy) {
      d = `M${a.r} ${a.cy} H${b.x}`;
      label = { x: (a.r + b.x) / 2, y: a.cy - 7, anchor: "middle" };
    } else if (a.cx === b.cx) {
      d = `M${a.cx} ${a.b} V${b.y}`;
      label = { x: a.cx + 7, y: (a.b + b.y) / 2 + 3, anchor: "start" };
    } else if ((e.bend?.[layout] ?? "vh") === "vh") {
      d = `M${a.cx} ${a.b} V${b.cy} H${b.x}`;
      label = { x: (a.cx + b.x) / 2, y: b.cy - 7, anchor: "middle" };
    } else {
      d = `M${a.r} ${a.cy} H${b.cx} V${b.y}`;
      label = { x: b.cx + 7, y: (a.cy + b.y) / 2 + 3, anchor: "start" };
    }
    return { ...e, tone: toneOf(e), d, labelPos: label };
  });

  const description = graph.edges
    .map((e) => {
      const from = graph.nodes.find((n) => n.id === e.from)!.label;
      const to = graph.nodes.find((n) => n.id === e.to)!.label;
      return `${from} to ${to}${e.label ? ` (${e.label})` : ""}${e.async ? ", asynchronous" : ""}`;
    })
    .join("; ");

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-labelledby={`${uid}-t ${uid}-d`}
      className={className}
      style={{ width: "100%", maxWidth: width * 1.15, height: "auto" }}
    >
      <title id={`${uid}-t`}>{graph.title}</title>
      <desc id={`${uid}-d`}>{description}.</desc>

      <defs>
        {(["primary", "secondary"] as const).map((tone) => (
          <marker
            key={tone}
            id={`${uid}-${tone}`}
            viewBox="0 0 8 8"
            refX="8"
            refY="4"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M0 0.5 L8 4 L0 7.5 Z" fill={stroke(tone)} />
          </marker>
        ))}
      </defs>

      {/* Edges */}
      {edges.map((e) => (
        <g key={`${e.from}-${e.to}`}>
          <path
            d={e.d}
            fill="none"
            stroke={stroke(e.tone)}
            strokeWidth="1.25"
            strokeDasharray={e.async ? "4 4" : undefined}
            markerEnd={`url(#${uid}-${e.tone})`}
          />
          {e.label && (
            <text
              x={e.labelPos.x}
              y={e.labelPos.y}
              textAnchor={e.labelPos.anchor}
              fontFamily="var(--font-mono)"
              fontSize="10"
              fill="var(--flow-note)"
            >
              {e.label}
            </text>
          )}
        </g>
      ))}

      {/* Request dots travelling along each edge */}
      {!reduceMotion &&
        edges.map((e, i) => {
          const begin = `${(i * 0.55).toFixed(2)}s`;
          const dur = e.async ? "3.6s" : "3s";
          return (
            <circle
              key={`dot-${e.from}-${e.to}`}
              r="2.5"
              className={cn("flow-dot", e.tone === "secondary" ? "text-secondary" : "text-primary")}
              fill="currentColor"
              opacity="0"
            >
              <animateMotion dur={dur} begin={begin} repeatCount="indefinite" path={e.d}
                keyPoints="0;1;1" keyTimes="0;0.55;1" calcMode="linear" />
              <animate attributeName="opacity" dur={dur} begin={begin} repeatCount="indefinite"
                values="0;1;1;0;0" keyTimes="0;0.08;0.5;0.56;1" />
            </circle>
          );
        })}

      {/* Nodes */}
      {graph.nodes.map((n) => {
        const b = box(n.id);
        return (
          <g key={n.id}>
            <rect
              x={b.x + 0.5}
              y={b.y + 0.5}
              width={g.w - 1}
              height={g.h - 1}
              rx="8"
              fill="var(--flow-node)"
              stroke="var(--flow-node-stroke)"
            />
            <text
              x={b.x + 12}
              y={n.note ? b.y + 20 : b.cy + 4}
              fontFamily="var(--font-mono)"
              fontSize="12"
              fontWeight="500"
              fill="var(--flow-text)"
            >
              {n.label}
            </text>
            {n.note && (
              <text
                x={b.x + 12}
                y={b.y + 35}
                fontFamily="var(--font-mono)"
                fontSize="10"
                fill="var(--flow-note)"
              >
                {n.note}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}
