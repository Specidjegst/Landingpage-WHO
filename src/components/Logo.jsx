export default function Logo({ size = 'md', className = '' }) {
  const sizes = {
    sm: { wheelTxt: 'text-[15px]', ofTxt: 'text-[15px]', tracking: 'tracking-[0.14em]', gap: 'gap-1.5', gear: 14 },
    md: { wheelTxt: 'text-xl', ofTxt: 'text-xl', tracking: 'tracking-[0.14em]', gap: 'gap-2', gear: 18 },
    lg: { wheelTxt: 'text-3xl', ofTxt: 'text-3xl', tracking: 'tracking-[0.12em]', gap: 'gap-2.5', gear: 26 },
  };
  const s = sizes[size] ?? sizes.md;
  return (
    <div className={`inline-flex items-center ${s.gap} ${className}`}>
      <span className={`font-display font-extrabold ${s.tracking} ${s.wheelTxt} logo-text`}>
        WHEEL
      </span>
      <span className={`grid place-items-center logo-text`}>
        <LogoGear size={s.gear} />
      </span>
      <span className={`font-display font-extrabold ${s.tracking} ${s.ofTxt} logo-text`}>
        OF FOMO
      </span>
    </div>
  );
}

function LogoGear({ size }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="lgg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9ff5ff" />
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
