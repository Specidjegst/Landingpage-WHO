const SLICE_COLORS = [
  '#a855f7', // purple (top-right)
  '#2563eb', // blue
  '#22d3ee', // cyan
  '#a3e635', // lime
  '#facc15', // yellow
  '#f97316', // orange
  '#ef4444', // red
  '#ef4444', // red (top-left)
];

export default function Wheel({
  size = 168,
  slices = SLICE_COLORS.length,
  spin = false,
  showPointer = false,
  colors = SLICE_COLORS,
}) {
  const sliceAngle = 360 / slices;
  // Build conic-gradient from colors so the boundary sits cleanly at 12 o'clock
  const stops = colors
    .map((c, i) => {
      const from = (i * sliceAngle).toFixed(3);
      const to = ((i + 1) * sliceAngle).toFixed(3);
      return `${c} ${from}deg ${to}deg`;
    })
    .join(', ');
  const wheelStyle = { background: `conic-gradient(from 0deg, ${stops})` };

  return (
    <div
      className="relative shrink-0"
      style={{ width: size, height: size }}
      aria-hidden
    >
      {/* Warm gold ambient glow */}
      <div
        className="absolute -inset-6 rounded-full blur-3xl opacity-70"
        style={{
          background:
            'radial-gradient(circle, rgba(250,204,21,0.40) 0%, rgba(245,158,11,0.25) 45%, transparent 72%)',
        }}
      />

      {/* Gold outer ring */}
      <div className="absolute inset-0 rounded-full gold-ring shadow-[0_0_50px_rgba(245,158,11,0.45),inset_0_0_14px_rgba(180,83,9,0.55)]" />

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
            background: `repeating-conic-gradient(from 0deg, rgba(0,0,0,0.55) 0deg 0.5deg, transparent 0.5deg ${sliceAngle}deg)`,
          }}
        />
        {/* White dot in slice centers */}
        {Array.from({ length: slices }).map((_, i) => {
          const angle = (i + 0.5) * sliceAngle;
          const dotSize = size * 0.085;
          const radius = size * 0.28;
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
                  '0 1px 3px rgba(0,0,0,0.45), inset 0 -1px 2px rgba(0,0,0,0.20)',
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}px)`,
              }}
            />
          );
        })}
      </div>

      {/* Studs on the gold rim — only ~10 like the reference */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 10 }).map((_, i) => {
          const angle = (i * 360) / 10;
          const studSize = size * 0.018;
          return (
            <span
              key={i}
              className="absolute left-1/2 top-1/2 rounded-full"
              style={{
                width: studSize,
                height: studSize,
                background:
                  'radial-gradient(circle at 35% 30%, #d2691e 0%, #8b4513 60%, #5b2c0d 100%)',
                boxShadow: 'inset 0 -1px 1px rgba(0,0,0,0.5)',
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${
                  size * 0.46
                }px)`,
              }}
            />
          );
        })}
      </div>

      {/* Center hub — solid orange-gold disc with pressed text */}
      <div
        className="absolute flex items-center justify-center rounded-full"
        style={{
          inset: '32%',
          background:
            'radial-gradient(circle at 30% 25%, #f4d18a 0%, #e0a04d 40%, #a36523 100%)',
          boxShadow:
            'inset 0 2px 8px rgba(255, 255, 255, 0.45), inset 0 -3px 8px rgba(0, 0, 0, 0.45), 0 4px 18px rgba(0, 0, 0, 0.55), 0 0 24px rgba(245, 158, 11, 0.30)',
          border: '1.5px solid rgba(120, 70, 20, 0.85)',
        }}
      >
        <div className="text-center px-1 leading-[1.05]">
          <div
            className="font-display font-extrabold tracking-[0.08em] text-[#3a1f04]"
            style={{
              fontSize: size * 0.105,
              textShadow:
                '0 1px 0 rgba(255,255,255,0.35), 0 -1px 0 rgba(0,0,0,0.35)',
            }}
          >
            WHEEL
          </div>
          <div
            className="mx-auto my-0.5 grid place-items-center"
            style={{
              width: size * 0.075,
              height: size * 0.075,
            }}
          >
            <CenterIcon size={size * 0.075} />
          </div>
          <div
            className="font-display font-extrabold tracking-[0.08em] text-[#3a1f04]"
            style={{
              fontSize: size * 0.105,
              textShadow:
                '0 1px 0 rgba(255,255,255,0.35), 0 -1px 0 rgba(0,0,0,0.35)',
            }}
          >
            FOMO
          </div>
        </div>
      </div>

      {/* Top pointer (optional) */}
      {showPointer && (
        <div
          className="absolute left-1/2 -translate-x-1/2 z-20"
          style={{ top: -size * 0.025 }}
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

function CenterIcon({ size }) {
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
      <circle cx="10" cy="10" r="1.6" fill="#3a1f04" />
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * Math.PI * 2) / 8;
        const x1 = 10 + Math.cos(angle) * 3;
        const y1 = 10 + Math.sin(angle) * 3;
        const x2 = 10 + Math.cos(angle) * 7;
        const y2 = 10 + Math.sin(angle) * 7;
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
