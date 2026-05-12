import { Rocket, Play, Trophy, Activity } from 'lucide-react';
import Wheel from './Wheel';

const stats = [
  { label: 'Live Rounds', value: '24', accent: 'gradient-text-cyan' },
  { label: 'Total Spins', value: '187K', accent: 'gold-text' },
  { label: 'Network', value: 'Base', accent: 'gradient-text-violet' },
  { label: 'PvP', value: 'Active', accent: 'text-pink-400' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.18]" />
      <div className="pointer-events-none absolute -left-32 top-32 h-96 w-96 rounded-full bg-violet/25 blur-[140px]" />
      <div className="pointer-events-none absolute -right-10 top-40 h-96 w-96 rounded-full bg-neon/15 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-10 left-1/3 h-80 w-[60%] rounded-full bg-magenta/12 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          {/* Left: copy */}
          <div className="text-center lg:text-left">
            <div className="eyebrow">
              <Activity size={11} className="pulse-dot" />
              Live · Base · PvP
            </div>
            <h1 className="mt-5 font-display text-[2.5rem] font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl xl:text-[3.75rem]">
              Spin. Compete.
              <br />
              <span className="gradient-text-rainbow">Survive the FOMO.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-400 lg:mx-0">
              A <span className="font-semibold text-electric">Base-powered</span>{' '}
              PvP wheel game where every round is a battle for timing, risk and
              reward. No house edge stories — just degens, on-chain.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
              <button className="btn-primary">
                <Rocket size={15} />
                Launch Game
              </button>
              <button className="btn-ghost">
                <Play size={15} />
                View Live Wheels
              </button>
            </div>
            {/* Stats */}
            <div className="mt-9 grid max-w-md grid-cols-2 gap-3 sm:max-w-2xl sm:grid-cols-4 lg:max-w-none">
              {stats.map((s) => (
                <div key={s.label} className="glass rounded-xl px-3 py-3">
                  <div className="text-[9px] font-bold uppercase tracking-[0.28em] text-slate-400">
                    {s.label}
                  </div>
                  <div
                    className={`mt-1 font-display text-xl font-extrabold ${s.accent}`}
                  >
                    {s.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: visual */}
          <HeroMockup />
        </div>
      </div>
    </section>
  );
}

function HeroMockup() {
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center sm:max-w-lg">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-violet/25 via-neon/10 to-magenta/15 blur-3xl" />
      <div className="pointer-events-none absolute inset-8 rounded-full border border-white/5" />
      <div className="pointer-events-none absolute inset-16 rounded-full border border-white/5" />

      {/* Wheel */}
      <div className="relative">
        <Wheel size={320} />
      </div>

      {/* Floating cards */}
      <div className="absolute right-0 top-6 sm:right-4 sm:top-10 animate-float">
        <div className="glass w-44 rounded-2xl p-3 shadow-[0_18px_48px_-12px_rgba(0,245,255,0.25)]">
          <div className="flex items-center gap-1.5 text-[9px] font-bold tracking-[0.2em] text-pink-300">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-400 pulse-dot" />
            LIVE ROUND
          </div>
          <div className="mt-2 font-display text-lg font-extrabold gold-text">
            $12,540
          </div>
          <div className="mt-0.5 text-[10px] text-slate-400">
            Jackpot · 8 of 15 slots
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-0 sm:bottom-10 sm:left-4 animate-float-slow">
        <div className="glass w-48 rounded-2xl p-3 shadow-[0_18px_48px_-12px_rgba(124,58,237,0.25)]">
          <div className="flex items-center gap-1.5 text-[9px] font-bold tracking-[0.2em] text-neon">
            <Trophy size={10} />
            RECENT WIN
          </div>
          <div className="mt-1 truncate font-display text-sm font-bold text-white">
            0x8f1…c42
          </div>
          <div className="text-[10px] text-slate-400">+$2,180 · 12s ago</div>
        </div>
      </div>

      <div className="absolute bottom-2 right-2 sm:bottom-6 sm:right-6 animate-float">
        <div className="glass rounded-full px-3 py-1.5">
          <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.22em] text-electric">
            <span className="h-1.5 w-1.5 rounded-full bg-electric pulse-dot" />
            POWERED BY BASE
          </div>
        </div>
      </div>
    </div>
  );
}
