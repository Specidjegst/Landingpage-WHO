import { useEffect, useState } from 'react';
import { Rocket, Play, Trophy, Activity, TrendingUp } from 'lucide-react';
import Wheel from './Wheel';

function useCountUp(target, { duration = 1600, decimals = 0 } = {}) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(target * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return value.toFixed(decimals);
}

function formatK(n) {
  const num = Number(n);
  if (num >= 1000) return `${(num / 1000).toFixed(num >= 10000 ? 0 : 1)}K`;
  return `${num}`;
}

export default function Hero() {
  const liveRounds = useCountUp(24);
  const totalSpins = useCountUp(187420);
  const pot = useCountUp(412580);

  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.2]" />
      {/* Animated background orbs */}
      <div className="pointer-events-none absolute -left-32 top-32 h-96 w-96 rounded-full bg-violet/30 blur-[140px] animate-float-slow" />
      <div className="pointer-events-none absolute -right-10 top-40 h-[28rem] w-[28rem] rounded-full bg-neon/18 blur-[160px] animate-float" />
      <div className="pointer-events-none absolute -bottom-10 left-1/3 h-80 w-[60%] rounded-full bg-magenta/15 blur-[160px]" />

      {/* Live winners ticker (top) */}
      <div className="relative mb-10 overflow-hidden border-y border-white/5 bg-white/[0.02] py-2.5">
        <div className="marquee gap-10 whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.32em] text-slate-300">
          {Array.from({ length: 2 })
            .flatMap(() => [
              { user: '0x8f1…c42', amount: '$2,180', tag: 'WON' },
              { user: '0xa3b…91d', amount: '$540', tag: 'WON' },
              { user: '0xfa7…21c', amount: '$8,920', tag: 'WON' },
              { user: 'Round #4127', amount: '17/20 filling', tag: 'LIVE' },
              { user: '0xc89…7d2', amount: '$1,260', tag: 'WON' },
              { user: 'Round #4129', amount: '5/8 ending soon', tag: 'LIVE' },
              { user: '0xe55…039', amount: '$3,470', tag: 'WON' },
            ])
            .map((t, i) => (
              <span key={i} className="flex items-center gap-3 px-3">
                <span
                  className={`flex items-center gap-1.5 ${
                    t.tag === 'WON' ? 'text-emerald-400' : 'text-pink-400'
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-current pulse-dot" />
                  {t.tag}
                </span>
                <span className="text-slate-400">{t.user}</span>
                <span className="gold-text">{t.amount}</span>
                <span className="text-slate-600">·</span>
              </span>
            ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          {/* Left: copy */}
          <div className="text-center lg:text-left">
            <div className="eyebrow">
              <Activity size={11} className="pulse-dot" />
              Live · Base · PvP
            </div>
            <h1 className="mt-5 font-display text-[2.75rem] font-extrabold leading-[0.95] tracking-tight text-white sm:text-[3.5rem] xl:text-[4.5rem]">
              Spin. Compete.
              <br />
              <span className="gradient-text-rainbow">Survive the FOMO.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-300 lg:mx-0">
              A <span className="font-semibold text-electric">Base-powered</span>{' '}
              PvP wheel game where every round is a battle for timing, risk and
              reward. No house edge stories — just degens, on-chain.
            </p>

            {/* Live pot strip */}
            <div className="mt-7 inline-flex items-center gap-3 rounded-2xl border border-amber-400/30 bg-amber-400/5 px-4 py-2.5 shadow-[0_0_30px_rgba(245,158,11,0.18)]">
              <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.32em] text-amber-200">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-300 pulse-dot" />
                Total pot live
              </span>
              <span className="font-display text-xl font-extrabold gold-text">
                $ {Number(pot).toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </span>
            </div>

            <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
              <button className="btn-primary btn-glow-pulse">
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
              <StatTile
                label="Live Rounds"
                value={Number(liveRounds).toFixed(0)}
                accent="gradient-text-cyan"
                icon={Activity}
              />
              <StatTile
                label="Total Spins"
                value={formatK(totalSpins)}
                accent="gold-text"
                icon={TrendingUp}
              />
              <StatTile label="Network" value="Base" accent="gradient-text-violet" />
              <StatTile label="PvP" value="Active" accent="text-pink-400" pulse />
            </div>
          </div>

          {/* Right: hero wheel */}
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function StatTile({ label, value, accent, icon: Icon, pulse }) {
  return (
    <div className="glass relative overflow-hidden rounded-xl px-3 py-3 transition hover:border-neon/40 hover:bg-white/[0.04]">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-neon/40 to-transparent" />
      <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.28em] text-slate-400">
        {Icon && <Icon size={9} />}
        {label}
      </div>
      <div
        className={`mt-1 font-display text-2xl font-extrabold ${accent} ${
          pulse ? 'pulse-dot' : ''
        }`}
      >
        {value}
      </div>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center sm:max-w-lg lg:max-w-xl">
      {/* Radial spotlight */}
      <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-amber-500/15 via-violet/15 to-neon/10 blur-3xl" />
      {/* Halo rings */}
      <div className="pointer-events-none absolute inset-4 rounded-full border border-white/5" />
      <div className="pointer-events-none absolute inset-12 rounded-full border border-amber-400/10" />
      <div className="pointer-events-none absolute inset-20 rounded-full border border-white/5 animate-spin-slower" style={{ background: 'conic-gradient(from 0deg, transparent, rgba(0,245,255,0.25), transparent 40%)' }} />

      {/* Wheel */}
      <div className="relative">
        <Wheel size={400} />
      </div>

      {/* Floating live-round card */}
      <div className="absolute right-0 top-6 sm:right-2 sm:top-10 animate-float">
        <div className="glass-strong w-48 rounded-2xl p-3 shadow-[0_18px_48px_-12px_rgba(245,158,11,0.30)]">
          <div className="flex items-center gap-1.5 text-[9px] font-bold tracking-[0.2em] text-pink-300">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-400 pulse-dot" />
            LIVE ROUND #4127
          </div>
          <div className="mt-2 font-display text-xl font-extrabold gold-text">
            $12,540
          </div>
          <div className="mt-0.5 text-[10px] text-slate-400">
            Jackpot · 8 of 15 slots
          </div>
          <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/5">
            <div
              className="h-full rounded-full bg-gradient-to-r from-neon to-magenta"
              style={{ width: '53%' }}
            />
          </div>
        </div>
      </div>

      {/* Floating recent winner */}
      <div className="absolute bottom-2 left-0 sm:bottom-10 sm:left-2 animate-float-slow">
        <div className="glass-strong w-52 rounded-2xl p-3 shadow-[0_18px_48px_-12px_rgba(124,58,237,0.30)]">
          <div className="flex items-center gap-1.5 text-[9px] font-bold tracking-[0.2em] text-neon">
            <Trophy size={10} />
            RECENT WIN
          </div>
          <div className="mt-1 truncate font-mono text-sm font-bold text-white">
            0x8f1…c42
          </div>
          <div className="text-[10px] text-slate-400">+$2,180 · 12s ago</div>
        </div>
      </div>

      {/* Powered by Base badge */}
      <div className="absolute bottom-2 right-2 sm:bottom-6 sm:right-6 animate-float">
        <div className="glass rounded-full px-3 py-1.5 backdrop-blur">
          <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.22em] text-electric">
            <span className="h-1.5 w-1.5 rounded-full bg-electric pulse-dot" />
            POWERED BY BASE
          </div>
        </div>
      </div>
    </div>
  );
}
