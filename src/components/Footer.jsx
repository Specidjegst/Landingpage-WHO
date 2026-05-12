const navColumns = [
  {
    title: 'Game',
    links: [
      { label: 'Game', href: '#game' },
      { label: 'How It Works', href: '#how' },
      { label: 'PvP', href: '#pvp' },
      { label: 'Rewards', href: '#rewards' },
    ],
  },
  {
    title: 'Protocol',
    links: [
      { label: 'Roadmap', href: '#roadmap' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Audit Report', href: '#' },
      { label: 'Smart Contracts', href: '#' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Telegram', href: '#' },
      { label: 'X / Twitter', href: '#' },
      { label: 'Discord', href: '#' },
      { label: 'Brand Kit', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 pt-16 pb-10">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-10" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,minmax(0,1fr))]">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2.5">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-neon/30 blur-md" />
                <div className="relative grid h-9 w-9 place-items-center rounded-full gold-ring">
                  <div className="h-5 w-5 rounded-full wheel" />
                </div>
              </div>
              <div className="font-display leading-tight">
                <div className="text-[14px] font-extrabold tracking-[0.2em] text-white">
                  WHEEL
                </div>
                <div className="-mt-0.5 text-[9px] font-bold tracking-[0.45em] text-neon/90">
                  OF FOMO
                </div>
              </div>
            </a>
            <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-slate-400">
              A Base-powered PvP wheel game. Built on-chain. Built for degens.
              Stake only what you can afford to lose.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <span className="badge badge-filling">Built on Base</span>
              <span className="badge badge-live">
                <span className="h-1.5 w-1.5 rounded-full bg-current pulse-dot" />
                PvP Live
              </span>
            </div>
          </div>

          {/* Link columns */}
          {navColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-[11px] font-bold uppercase tracking-[0.32em] text-slate-300">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[13px] text-slate-400 transition hover:text-neon"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 text-[11px] text-slate-500 sm:flex-row sm:items-center">
          <span>© 2026 Wheel of FOMO · All rights reserved.</span>
          <span className="max-w-xl text-left sm:text-right">
            PvP gaming involves real risk of loss. Wheel of FOMO is not a
            financial product and offers no guaranteed returns.
          </span>
        </div>
      </div>
    </footer>
  );
}
