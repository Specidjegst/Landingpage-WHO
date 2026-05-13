// 20-stop full-spectrum rainbow that loops cleanly (matches the reference artwork)
const DEFAULT_COLORS = Array.from({ length: 20 }, (_, i) => {
  const h = (i / 20) * 360;
  return `hsl(${h}, 82%, 55%)`;
});

export default function Wheel({
  size = 168,
  slices = 20,
  spin = false,
  showPointer = true,
  colors = DEFAULT_COLORS,
}) {
  const sliceAngle = 360 / slices;
  const stops = Array.from({ length: slices })
    .map((_, i) => {
      const c = colors[Math.floor((i * colors.length) / slices) % colors.length];
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
      {/* Warm rainbow ambient glow */}
      <div
        className="absolute -inset-6 rounded-full blur-3xl opacity-70"
        style={{
          background:
            'radial-gradient(circle, rgba(250,204,21,0.28) 0%, rgba(168,85,247,0.22) 50%, transparent 72%)',
        }}
      />

      {/* Gold outer ring */}
      <div className="absolute inset-0 rounded-full gold-ring shadow-[0_0_55px_rgba(245,158,11,0.40),inset_0_0_14px_rgba(120,60,15,0.6)]" />

      {/* Inner dark seam between gold ring and slices */}
      <div
        className="absolute rounded-full"
        style={{
          inset: '6.5%',
          boxShadow:
            'inset 0 0 0 2px rgba(58, 37, 16, 0.6), inset 0 4px 10px rgba(0,0,0,0.4)',
        }}
      />

      {/* Spinning ring: slice fill only */}
      <div
        className={`absolute rounded-full ${spin ? 'animate-spin-slower' : ''}`}
        style={{ inset: '8.5%', transformOrigin: '50% 50%' }}
      >
        <div
          className="absolute inset-0 rounded-full shadow-[inset_0_0_24px_rgba(0,0,0,0.4)]"
          style={wheelStyle}
        />
        {/* Dark seams between slices */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `repeating-conic-gradient(from 0deg, rgba(0,0,0,0.55) 0deg 0.5deg, transparent 0.5deg ${sliceAngle}deg)`,
          }}
        />
      </div>

      {/* Dark bronze studs on the gold rim */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 360) / 8 + 22.5; // offset so they don't sit on top pointer
          const studSize = size * 0.018;
          return (
            <span
              key={i}
              className="absolute left-1/2 top-1/2 rounded-full"
              style={{
                width: studSize,
                height: studSize,
                background:
                  'radial-gradient(circle at 35% 30%, #8b4513 0%, #4a2c0a 70%, #2a1604 100%)',
                boxShadow: 'inset 0 -1px 1px rgba(0,0,0,0.6)',
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${
                  size * 0.46
                }px)`,
              }}
            />
          );
        })}
      </div>

      {/* Center hub — pressed amber disc with embossed gear icon */}
      <div
        className="absolute flex items-center justify-center rounded-full"
        style={{
          inset: '29%',
          background:
            'radial-gradient(circle at 30% 25%, #f4d18a 0%, #e0a04d 40%, #a36523 100%)',
          boxShadow:
            'inset 0 2px 8px rgba(255, 255, 255, 0.45), inset 0 -3px 8px rgba(0, 0, 0, 0.45), 0 4px 18px rgba(0, 0, 0, 0.55), 0 0 24px rgba(245, 158, 11, 0.30)',
          border: '1.5px solid rgba(120, 70, 20, 0.85)',
        }}
      >
        <div
          className="grid place-items-center"
          style={{ width: size * 0.22, height: size * 0.22 }}
        >
          <CenterGear size={size * 0.22} />
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
              height: size * 0.085,
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
        r="7.5"
        stroke="#3a1f04"
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="10" cy="10" r="2" fill="#3a1f04" />
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * Math.PI * 2) / 8;
        const x1 = 10 + Math.cos(angle) * 3.2;
        const y1 = 10 + Math.sin(angle) * 3.2;
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
