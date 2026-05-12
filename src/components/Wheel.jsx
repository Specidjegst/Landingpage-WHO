export default function Wheel({ size = 168, slices = 16, spin = true, showPointer = true }) {
  const sliceAngle = 360 / slices;
  return (
    <div
      className="relative shrink-0"
      style={{ width: size, height: size }}
      aria-hidden
    >
      {/* outer ambient glow */}
      <div
        className="absolute -inset-6 rounded-full blur-3xl opacity-70"
        style={{
          background:
            'radial-gradient(circle, rgba(0,245,255,0.30) 0%, rgba(124,58,237,0.25) 45%, transparent 70%)',
        }}
      />
      {/* gold outer ring */}
      <div className="absolute inset-0 rounded-full gold-ring shadow-[0_0_45px_rgba(245,158,11,0.40),inset_0_0_12px_rgba(180,83,9,0.55)]" />
      {/* inner dark gap */}
      <div className="absolute inset-[7%] rounded-full bg-[#0c0a20]" />
      {/* spinning ring: colored wheel + slice dots */}
      <div
        className={`absolute inset-[9%] rounded-full ${spin ? 'animate-spin-slow' : ''}`}
        style={{ transformOrigin: '50% 50%' }}
      >
        <div className="absolute inset-0 rounded-full wheel shadow-[inset_0_0_24px_rgba(0,0,0,0.35)]" />
        <div className="absolute inset-0 rounded-full wheel-divider opacity-60" />
        {Array.from({ length: slices }).map((_, i) => {
          const angle = (i + 0.5) * sliceAngle;
          const dotSize = size * 0.055;
          const radius = size * 0.275;
          return (
            <span
              key={i}
              className="absolute left-1/2 top-1/2 rounded-full bg-white"
              style={{
                width: dotSize,
                height: dotSize,
                boxShadow:
                  '0 0 4px rgba(255,255,255,0.85), inset 0 -1px 2px rgba(0,0,0,0.35)',
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}px)`,
              }}
            />
          );
        })}
      </div>
      {/* studded ring on the gold border */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 360) / 24;
          return (
            <span
              key={i}
              className="absolute left-1/2 top-1/2 rounded-full bg-amber-50"
              style={{
                width: size * 0.012,
                height: size * 0.012,
                boxShadow: '0 0 4px rgba(255, 240, 200, 0.75)',
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${
                  size * 0.46
                }px)`,
              }}
            />
          );
        })}
      </div>
      {/* center hub */}
      <div className="absolute inset-[33%] rounded-full gold-ring shadow-[inset_0_2px_8px_rgba(0,0,0,0.5),0_6px_20px_rgba(0,0,0,0.6)] flex items-center justify-center">
        <div className="text-center px-1 leading-none">
          <div
            className="font-display font-extrabold tracking-[0.18em] text-[#3d2a08]"
            style={{ fontSize: size * 0.085 }}
          >
            WHEEL
          </div>
          <div
            className="font-display font-bold tracking-[0.22em] text-[#5b3f10] mt-0.5"
            style={{ fontSize: size * 0.062 }}
          >
            OF FOMO
          </div>
        </div>
      </div>
      {/* top pointer */}
      {showPointer && (
        <div
          className="absolute left-1/2 -translate-x-1/2 z-20"
          style={{ top: -size * 0.03 }}
        >
          <div
            className="bg-gradient-to-b from-amber-200 to-amber-500 shadow-[0_0_14px_rgba(245,158,11,0.9)]"
            style={{
              width: size * 0.05,
              height: size * 0.07,
              clipPath: 'polygon(50% 100%, 0 0, 100% 0)',
            }}
          />
        </div>
      )}
    </div>
  );
}
