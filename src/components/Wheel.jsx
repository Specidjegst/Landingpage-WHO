const DEFAULT_COLORS = [
  '#ef4444', // red
  '#f97316', // orange
  '#fb923c', // light orange
  '#facc15', // yellow
  '#eab308', // amber
  '#a3e635', // lime
  '#65a30d', // dark lime
  '#22c55e', // green
  '#14b8a6', // teal
  '#06b6d4', // cyan
  '#22d3ee', // light cyan
  '#0ea5e9', // sky
  '#3b82f6', // blue
  '#6366f1', // indigo
  '#8b5cf6', // violet
  '#a855f7', // purple
  '#d946ef', // fuchsia
  '#ec4899', // pink
  '#f43f5e', // rose
  '#fb7185', // light rose
];

export default function Wheel({
  size = 168,
  slices = 20,
  spin = false,
  showPointer = true,
  colors = DEFAULT_COLORS,
}) {
  const sliceAngle = 360 / slices;
  // Sample the rainbow evenly across the slice count so any value (8, 10, 15, 20, 25) looks balanced
  const stops = Array.from({ length: slices })
    .map((_, i) => {
      const c = colors[Math.floor((i * colors.length) / slices) % colors.length];
      const from = (i * sliceAngle).toFixed(3);
      const to = ((i + 1) * sliceAngle).toFixed(3);
      return `${c} ${from}deg ${to}deg`;
    })
    .join(', ');
  const wheelStyle = { background: `conic-gradient(from 0deg, ${stops})` };
  const radius = size * 0.28;
  const sliceArc = (Math.PI * 2 * radius) / slices;
  const dotSize = Math.min(size * 0.075, sliceArc * 0.55);
  const showDots = dotSize >= 3;

  return (
    <div
      className="relative shrink-0"
      style={{ width: size, height: size }}
      aria-hidden
    >
      {/* Warm rainbow ambient glow */}
      <div
        className="absolute -inset-6 rounded-full blur-3xl opacity-65"
        style={{
          background:
            'radial-gradient(circle, rgba(250,204,21,0.30) 0%, rgba(168,85,247,0.25) 50%, transparent 72%)',
        }}
      />

      {/* Gold outer ring */}
      <div className="absolute inset-0 rounded-full gold-ring shadow-[0_0_50px_rgba(245,158,11,0.40),inset_0_0_14px_rgba(180,83,9,0.55)]" />

      {/* Inner shadow ring on the gold to add depth */}
      <div
        className="absolute rounded-full"
        style={{
          inset: '6%',
          boxShadow:
            'inset 0 0 0 2px rgba(58, 37, 16, 0.55), inset 0 4px 10px rgba(0,0,0,0.35)',
        }}
      />

      {/* Spinning ring: colored wheel + slice dots */}
      <div
        className={`absolute rounded-full ${spin ? 'animate-spin-slower' : ''}`}
        style={{ inset: '8%', transformOrigin: '50% 50%' }}
      >
        <div
          className="absolute inset-0 rounded-full shadow-[inset_0_0_24px_rgba(0,0,0,0.35)]"
          style={wheelStyle}
        />
        {/* Dark seams between slices */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `repeating-conic-gradient(from 0deg, rgba(0,0,0,0.45) 0deg 0.5deg, transparent 0.5deg ${sliceAngle}deg)`,
          }}
        />
        {/* White dot in each slice */}
        {showDots &&
          Array.from({ length: slices }).map((_, i) => {
            const angle = (i + 0.5) * sliceAngle;
            return (
              <span
                key={i}
                className="absolute left-1/2 top-1/2 rounded-full"
                style={{
                  width: dotSize,
                  height: dotSize,
                  background:
                    'radial-gradient(circle at 35% 30%, #ffffff 0%, #ffffff 60%, #d4d4d8 100%)',
                  boxShadow:
                    '0 1px 3px rgba(0,0,0,0.40), inset 0 -1px 2px rgba(0,0,0,0.20)',
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}px)`,
                }}
              />
            );
          })}
      </div>

      {/* Dark bronze studs on the gold rim */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 360) / 12;
          const studSize = size * 0.016;
          return (
            <span
              key={i}
              className="absolute left-1/2 top-1/2 rounded-full"
              style={{
                width: studSize,
                height: studSize,
                background:
                  'radial-gradient(circle at 35% 30%, #d2691e 0%, #8b4513 60%, #4a2c0a 100%)',
                boxShadow: 'inset 0 -1px 1px rgba(0,0,0,0.55)',
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${
                  size * 0.46
                }px)`,
              }}
            />
          );
        })}
      </div>

      {/* Center hub: pressed amber disc */}
      <div
        className="absolute flex flex-col items-center justify-center rounded-full"
        style={{
          inset: '30%',
          background:
            'radial-gradient(circle at 30% 25%, #f4d18a 0%, #e0a04d 40%, #a36523 100%)',
          boxShadow:
            'inset 0 2px 8px rgba(255, 255, 255, 0.45), inset 0 -3px 8px rgba(0, 0, 0, 0.45), 0 4px 18px rgba(0, 0, 0, 0.55), 0 0 24px rgba(245, 158, 11, 0.30)',
          border: '1.5px solid rgba(120, 70, 20, 0.85)',
        }}
      >
        <div
          className="font-display font-extrabold tracking-[0.08em] text-[#3a1f04]"
          style={{
            fontSize: size * 0.095,
            lineHeight: 1,
            textShadow:
              '0 1px 0 rgba(255,255,255,0.35), 0 -1px 0 rgba(0,0,0,0.35)',
          }}
        >
          WHEEL
        </div>
        <div
          className="my-0.5 grid place-items-center"
          style={{ width: size * 0.07, height: size * 0.07 }}
        >
          <CenterGear size={size * 0.07} />
        </div>
        <div
          className="font-display font-extrabold tracking-[0.06em] text-[#3a1f04]"
          style={{
            fontSize: size * 0.08,
            lineHeight: 1,
            textShadow:
              '0 1px 0 rgba(255,255,255,0.35), 0 -1px 0 rgba(0,0,0,0.35)',
          }}
        >
          OF FOMO
        </div>
      </div>

      {/* Top pointer */}
      {showPointer && (
        <div
          className="absolute left-1/2 -translate-x-1/2 z-20"
          style={{ top: -size * 0.028 }}
        >
          <div
            className="bg-gradient-to-b from-amber-200 to-amber-600 shadow-[0_0_14px_rgba(245,158,11,0.9)]"
            style={{
              width: size * 0.055,
              height: size * 0.08,
              clipPath: 'polygon(50% 100%, 0 0, 100% 0)',
            }}
          />
        </div>
      )}
    </div>
  );
}

function CenterGear({ size }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      style={{ filter: 'drop-shadow(0 1px 0 rgba(255,255,255,0.35))' }}
    >
      <circle
        cx="10"
        cy="10"
        r="8"
        stroke="#3a1f04"
        strokeWidth="1.6"
        fill="none"
      />
      <circle cx="10" cy="10" r="1.8" fill="#3a1f04" />
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * Math.PI * 2) / 8;
        const x1 = 10 + Math.cos(angle) * 3.2;
        const y1 = 10 + Math.sin(angle) * 3.2;
        const x2 = 10 + Math.cos(angle) * 7.2;
        const y2 = 10 + Math.sin(angle) * 7.2;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#3a1f04"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}
