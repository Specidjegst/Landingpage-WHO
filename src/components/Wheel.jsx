const EMPTY_SLICE = '#13112e';

// Player palettes — each filled slot picks one. Colour stays consistent
// with the avatar so the slice clearly "belongs" to that player.
export const PLAYER_PALETTES = [
  { color: '#ec4899', from: '#ec4899', to: '#a855f7' }, // pink → violet
  { color: '#f59e0b', from: '#f59e0b', to: '#dc2626' }, // amber → red
  { color: '#22d3ee', from: '#22d3ee', to: '#3b82f6' }, // cyan → blue
  { color: '#22c55e', from: '#22c55e', to: '#84cc16' }, // green → lime
  { color: '#8b5cf6', from: '#8b5cf6', to: '#ec4899' }, // violet → pink
  { color: '#f97316', from: '#f97316', to: '#facc15' }, // orange → yellow
  { color: '#06b6d4', from: '#06b6d4', to: '#a855f7' }, // cyan → purple
  { color: '#f43f5e', from: '#f43f5e', to: '#fb923c' }, // rose → orange
];

export default function Wheel({
  size = 168,
  slots,
  slices,
  spin = false,
  showPointer = true,
  showHubText = true,
}) {
  // slots: array of paletteIndex | null  (null = empty slot)
  const slotArr =
    slots ?? Array.from({ length: slices ?? 8 }, () => null);
  const count = slotArr.length;
  const sliceAngle = 360 / count;

  const stops = slotArr
    .map((slot, i) => {
      const color =
        slot != null ? PLAYER_PALETTES[slot % PLAYER_PALETTES.length].color : EMPTY_SLICE;
      const from = (i * sliceAngle).toFixed(3);
      const to = ((i + 1) * sliceAngle).toFixed(3);
      return `${color} ${from}deg ${to}deg`;
    })
    .join(', ');

  const wheelStyle = { background: `conic-gradient(from 0deg, ${stops})` };

  const avatarRadius = size * 0.31;
  const sliceArc = (Math.PI * 2 * avatarRadius) / count;
  const avatarSize = Math.min(size * 0.13, sliceArc * 0.7);
  const showAvatars = avatarSize >= 10;

  return (
    <div
      className="relative shrink-0"
      style={{ width: size, height: size }}
      aria-hidden
    >
      {/* Multi-colour ambient glow (rainbow halo behind the wheel) */}
      <div
        className="absolute -inset-6 rounded-full blur-3xl opacity-70"
        style={{
          background:
            'conic-gradient(from 0deg, rgba(236,72,153,0.35), rgba(245,158,11,0.28), rgba(34,197,94,0.25), rgba(0,212,255,0.30), rgba(124,58,237,0.32), rgba(236,72,153,0.35))',
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

      {/* Spinning ring: slice fill + player avatars */}
      <div
        className={`absolute rounded-full ${spin ? 'animate-spin-slower' : ''}`}
        style={{ inset: '8.5%', transformOrigin: '50% 50%' }}
      >
        <div
          className="absolute inset-0 rounded-full shadow-[inset_0_0_24px_rgba(0,0,0,0.55)]"
          style={wheelStyle}
        />
        {/* Dark seams between slices */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `repeating-conic-gradient(from 0deg, rgba(0,0,0,0.65) 0deg 0.5deg, transparent 0.5deg ${sliceAngle}deg)`,
          }}
        />
        {/* Player avatar in each filled slot */}
        {showAvatars &&
          slotArr.map((slot, i) => {
            if (slot == null) return null;
            const palette = PLAYER_PALETTES[slot % PLAYER_PALETTES.length];
            const angle = (i + 0.5) * sliceAngle;
            return (
              <div
                key={i}
                className="absolute left-1/2 top-1/2"
                style={{
                  width: avatarSize,
                  height: avatarSize,
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${avatarRadius}px)`,
                }}
              >
                <PlayerAvatar palette={palette} size={avatarSize} seed={i} />
              </div>
            );
          })}
      </div>

      {/* Dark bronze studs on the gold rim */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 360) / 8 + 22.5;
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

      {/* Center hub — pressed amber disc */}
      <div
        className="absolute flex flex-col items-center justify-center rounded-full"
        style={{
          inset: '29%',
          background:
            'radial-gradient(circle at 30% 25%, #f4d18a 0%, #e0a04d 40%, #a36523 100%)',
          boxShadow:
            'inset 0 2px 8px rgba(255, 255, 255, 0.45), inset 0 -3px 8px rgba(0, 0, 0, 0.45), 0 4px 18px rgba(0, 0, 0, 0.55), 0 0 24px rgba(245, 158, 11, 0.30)',
          border: '1.5px solid rgba(120, 70, 20, 0.85)',
        }}
      >
        {showHubText ? (
          <>
            <HubText size={size * 0.105}>WHEEL</HubText>
            <div
              className="my-[1px] grid place-items-center"
              style={{ width: size * 0.062, height: size * 0.062 }}
            >
              <CenterGear size={size * 0.062} />
            </div>
            <HubText size={size * 0.065}>OF</HubText>
            <HubText size={size * 0.105}>FOMO</HubText>
          </>
        ) : (
          <div
            className="grid place-items-center"
            style={{ width: size * 0.22, height: size * 0.22 }}
          >
            <CenterGear size={size * 0.22} />
          </div>
        )}
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

function HubText({ children, size }) {
  return (
    <div
      className="font-display font-extrabold tracking-[0.06em]"
      style={{
        fontSize: size,
        lineHeight: 1,
        color: '#6b3a10',
        textShadow:
          '0 1px 0 rgba(255, 230, 180, 0.55), 0 -1px 0 rgba(50, 25, 5, 0.55)',
      }}
    >
      {children}
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
      style={{ filter: 'drop-shadow(0 1px 0 rgba(255,230,180,0.45))' }}
    >
      <circle cx="10" cy="10" r="7.5" stroke="#6b3a10" strokeWidth="1.5" fill="none" />
      <circle cx="10" cy="10" r="2" fill="#6b3a10" />
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
            stroke="#6b3a10"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

function PlayerAvatar({ palette, size, seed = 0 }) {
  const id = `pa-${seed}-${palette.color.slice(1)}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.45))' }}
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={palette.from} />
          <stop offset="100%" stopColor={palette.to} />
        </linearGradient>
      </defs>
      <circle
        cx="16"
        cy="16"
        r="14.5"
        fill={`url(#${id})`}
        stroke="white"
        strokeWidth="2"
      />
      <circle cx="12" cy="14" r="1.8" fill="#0f0f1b" />
      <circle cx="20" cy="14" r="1.8" fill="#0f0f1b" />
      <path
        d="M11 20 Q16 24 21 20"
        stroke="#0f0f1b"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
