const PARTICLES = [
  { top: "24%", left: "18%", r: 90, dur: 46, size: 3 },
  { top: "38%", left: "31%", r: 64, dur: 58, size: 2 },
  { top: "30%", left: "52%", r: 110, dur: 72, size: 3 },
  { top: "46%", left: "68%", r: 78, dur: 64, size: 2 },
  { top: "22%", left: "80%", r: 96, dur: 54, size: 3 },
  { top: "56%", left: "42%", r: 130, dur: 84, size: 2 },
  { top: "62%", left: "74%", r: 70, dur: 68, size: 2 },
  { top: "18%", left: "62%", r: 58, dur: 50, size: 2 },
];

/**
 * The TRINITY atmosphere: an oversized, low-opacity wordmark behind every
 * screen with a few slowly orbiting green particles. Never a header logo.
 */
export function TrinityBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div
        className="absolute -inset-x-10 top-1/2 -translate-y-1/2"
        style={{ animation: "trinity-drift 46s ease-in-out infinite" }}
      >
        <div
          className="w-full text-center font-display text-primary/[0.07] glow-green select-none"
          style={{
            fontSize: "clamp(5rem, 21vw, 22rem)",
            fontWeight: 300,
            letterSpacing: "0.16em",
            lineHeight: 1,
          }}
        >
          TRINITY
        </div>
      </div>

      {PARTICLES.map((p, i) => (
        <div key={i} className="absolute" style={{ top: p.top, left: p.left }}>
          <div
            className="rounded-full bg-primary/60"
            style={
              {
                width: p.size,
                height: p.size,
                boxShadow: "0 0 10px 2px color-mix(in oklab, var(--color-primary) 45%, transparent)",
                ["--orbit-r" as string]: `${p.r}px`,
                animation: `trinity-orbit ${p.dur}s linear infinite`,
              } as React.CSSProperties
            }
          />
        </div>
      ))}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1100px 600px at 50% 40%, color-mix(in oklab, var(--color-primary) 6%, transparent), transparent 70%)",
        }}
      />
    </div>
  );
}
