export default function Logo({ size = 'md', className = '' }) {
  const sizes = {
    sm: { txt: 'text-[15px]', tracking: 'tracking-[0.12em]', gap: 'gap-1', smallGap: '-mx-px', gear: 14 },
    md: { txt: 'text-xl', tracking: 'tracking-[0.12em]', gap: 'gap-1', smallGap: '-mx-px', gear: 20 },
    lg: { txt: 'text-3xl', tracking: 'tracking-[0.1em]', gap: 'gap-1.5', smallGap: '-mx-0.5', gear: 30 },
  };
  const s = sizes[size] ?? sizes.md;
  return (
    <div className={`inline-flex items-center ${s.gap} ${className}`}>
      <span className={`font-display font-extrabold ${s.tracking} ${s.txt} logo-text`}>
        WHEEL
      </span>
      <span className="ml-1.5 grid place-items-center logo-text">
        <LogoGear size={s.gear} />
      </span>
      <span className={`font-display font-extrabold ${s.tracking} ${s.txt} logo-text`}>
        F&nbsp;FOMO
      </span>
    </div>
  );
}

function LogoGear({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <defs>
        <linearGradient id="lgg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d8fbff" />
          <stop offset="50%" stopColor="#00d4ff" />
          <stop offset="100%" stopColor="#0e76e8" />
        </linearGradient>
      </defs>
      <circle
        cx="12"
        cy="12"
        r="9.5"
        stroke="url(#lgg)"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="12" cy="12" r="2" fill="url(#lgg)" />
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * Math.PI * 2) / 8;
        const x1 = 12 + Math.cos(angle) * 3.8;
        const y1 = 12 + Math.sin(angle) * 3.8;
        const x2 = 12 + Math.cos(angle) * 8;
        const y2 = 12 + Math.sin(angle) * 8;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="url(#lgg)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}
