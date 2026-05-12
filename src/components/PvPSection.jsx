import { Swords, Zap, ShieldAlert, Brain } from 'lucide-react';

const points = [
  {
    icon: Swords,
    title: 'Player vs Player',
    description:
      'Every wheel is a closed PvP arena. Your competition is real people — not a smart-contract opponent.',
  },
  {
    icon: Zap,
    title: 'Variable Stakes & Slots',
    description:
      'Each round has its own stake size, slice count and player cap. Pick the format that fits your style.',
  },
  {
    icon: Brain,
    title: 'Timing & Strategy',
    description:
      'Enter early to anchor the pot — or late to play the FOMO. There is no shortcut to winning.',
  },
  {
    icon: ShieldAlert,
    title: 'Honest about Risk',
    description:
      'PvP means someone loses. No guaranteed wins, no profit promises. Stake only what you can afford.',
  },
];

export default function PvPSection() {
  return (
    <section id="pvp" className="section-pad relative">
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">PvP · Risk · Strategy</span>
            <h2 className="section-title mt-4">
              This isn&apos;t a casino.
              <br />
              <span className="gradient-text-cyan">It&apos;s an arena.</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-400">
              Every spin is a head-to-head match. No bots, no house, no edge
              tilted against you. Every wheel pays out exactly what the players
              put in — minus a transparent on-chain protocol fee.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {points.map((p, i) => (
                <Point key={i} {...p} />
              ))}
            </div>
          </div>

          <PvPVisual />
        </div>
      </div>
    </section>
  );
}

function Point({ icon: Icon, title, description }) {
  return (
    <div className="group flex gap-3 rounded-xl border border-white/8 bg-white/[0.02] p-4 transition hover:border-neon/40 hover:bg-white/[0.04]">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/10 bg-gradient-to-br from-white/5 to-transparent text-neon transition group-hover:text-white">
        <Icon size={18} />
      </div>
      <div>
        <h4 className="font-display text-sm font-bold tracking-wide text-white">
          {title}
        </h4>
        <p className="mt-1 text-[12.5px] leading-relaxed text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );
}

function PvPVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="glass-strong relative overflow-hidden rounded-3xl p-6">
        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-neon/60 to-transparent" />
        <div className="flex items-center justify-between">
          <span className="badge badge-live">
            <span className="h-1.5 w-1.5 rounded-full bg-current pulse-dot" />
            ROUND #4127
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-400">
            00:00:24 left
          </span>
        </div>

        <div className="mt-5 text-center">
          <div className="text-[10px] font-bold uppercase tracking-[0.32em] text-slate-400">
            Pot Total
          </div>
          <div className="mt-1 font-display text-4xl font-extrabold gold-text">
            $4,200
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          {[
            { name: '0xa3…91', stake: 200, pct: 28, color: 'from-neon to-electric' },
            { name: '0xfa…21', stake: 150, pct: 21, color: 'from-violet to-magenta' },
            { name: '0xc8…7d', stake: 350, pct: 49, color: 'from-magenta to-gold' },
            { name: 'You', stake: 150, pct: 21, color: 'from-gold to-neon' },
          ].map((p, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-xl border border-white/8 bg-black/30 p-3 ${
                p.name === 'You' ? 'ring-1 ring-neon/60' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="font-display text-sm font-bold text-white">
                  {p.name}
                </div>
                <div className={`bg-gradient-to-r ${p.color} bg-clip-text text-[11px] font-bold text-transparent`}>
                  {p.pct}%
                </div>
              </div>
              <div className="mt-1 text-[11px] text-slate-400">
                Stake ${p.stake}
              </div>
              <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/5">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${p.color}`}
                  style={{ width: `${p.pct * 2}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-xl border border-white/8 bg-black/40 p-3 text-center">
          <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-400">
            Winning Odds Reflect Stake
          </div>
          <div className="mt-1 text-[12px] text-slate-300">
            Higher stake · larger slice · bigger win chance.
          </div>
        </div>
      </div>
    </div>
  );
}
