export default function Wheel({ size = 168, slices = 16, spin = true, showPointer = true }) {
  const sliceAngle = 360 / slices;
  return (
    <div
      className="relative shrink-0"
      style={{ width: size, height: size }}
      aria-hidden
    >
      {/* Warm gold ambient glow (matches reference) */}
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
          inset: '5%',
          boxShadow:
            'inset 0 0 0 2px rgba(58, 37, 16, 0.55), inset 0 4px 10px rgba(0,0,0,0.35)',
        }}
      />

      {/* Spinning ring: colored wheel + slice dots */}
      <div
        className={`absolute rounded-full ${spin ? 'animate-spin-slower' : ''}`}
        style={{ inset: '7%', transformOrigin: '50% 50%' }}
      >
        <div className="absolute inset-0 rounded-full wheel shadow-[inset_0_0_24px_rgba(0,0,0,0.4)]" />
        {/* Subtle dark seams between slices */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `repeating-conic-gradient(from 0deg, rgba(0,0,0,0.30) 0deg 0.4deg, transparent 0.4deg ${sliceAngle}deg)`,
          }}
        />
        {/* White dots in slice centers */}
        {Array.from({ length: slices }).map((_, i) => {
          const angle = (i + 0.5) * sliceAngle;
          const dotSize = size * 0.062;
          const radius = size * 0.295;
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

      {/* Studs on the gold rim */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 360) / 24;
          const studSize = size * 0.022;
          return (
            <span
              key={i}
              className="absolute left-1/2 top-1/2 rounded-full"
              style={{
                width: studSize,
                height: studSize,
                background:
                  'radial-gradient(circle at 35% 30%, #ffffff 0%, #fde68a 45%, #b45309 100%)',
                boxShadow:
                  '0 0 5px rgba(255, 225, 150, 0.85), inset 0 -1px 1px rgba(0,0,0,0.35)',
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${
                  size * 0.455
                }px)`,
              }}
            />
          );
        })}
      </div>

      {/* Center hub — solid orange-gold (matches reference) */}
      <div
        className="absolute flex items-center justify-center rounded-full"
        style={{
          inset: '31%',
          background:
            'radial-gradient(circle at 30% 25%, #fef3c7 0%, #fbbf24 35%, #b45309 100%)',
          boxShadow:
            'inset 0 2px 8px rgba(255, 255, 255, 0.5), inset 0 -3px 8px rgba(0, 0, 0, 0.45), 0 4px 18px rgba(0, 0, 0, 0.6), 0 0 24px rgba(245, 158, 11, 0.35)',
          border: '1.5px solid rgba(180, 83, 9, 0.85)',
        }}
      >
        <div className="text-center px-1 leading-none">
          <div
            className="font-display font-extrabold tracking-[0.18em] text-[#2a1a04]"
            style={{ fontSize: size * 0.09 }}
          >
            WHEEL
          </div>
          <div
            className="font-display font-bold tracking-[0.22em] text-[#4a2c07] mt-0.5"
            style={{ fontSize: size * 0.062 }}
          >
            OF FOMO
          </div>
        </div>
      </div>

      {/* Top pointer */}
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
