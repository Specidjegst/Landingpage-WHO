import Logo from './Logo';

const columns = [
  {
    title: 'Game',
    links: [
      { label: 'Wheels Lobby', href: '#wheels' },
      { label: 'Jackpot', href: '#jackpot' },
      { label: 'Tournaments', href: '#tournaments' },
      { label: 'How It Works', href: '#how' },
    ],
  },
  {
    title: 'Protocol',
    links: [
      { label: 'On-Chain', href: '#' },
      { label: 'Docs', href: '#' },
      { label: 'Smart Contracts', href: '#' },
      { label: 'Audit', href: '#' },
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
    <footer className="relative border-t border-white/5 pt-14 pb-10">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-10" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,minmax(0,1fr))]">
          <div>
            <Logo size="md" />
            <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-chalk/60">
              A Base-powered PvP crypto wheel game. Built on-chain. Built for
              degens. Stake only what you can afford to lose.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <span className="badge badge-cyan">Built on Base</span>
              <span className="badge badge-pink">
                <span className="h-1.5 w-1.5 rounded-full bg-current pulse-dot" />
                PvP Live
              </span>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-[11px] font-bold uppercase tracking-[0.32em] text-chalk/85">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[13px] text-chalk/55 transition hover:text-neon"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 text-[11px] text-chalk/45 sm:flex-row sm:items-center">
          <span>© 2026 Wheel of FOMO · All rights reserved.</span>
          <span className="max-w-xl text-left sm:text-right">
            Wheel of FOMO is a crypto game. Play responsibly.
          </span>
        </div>
      </div>
    </footer>
  );
}
