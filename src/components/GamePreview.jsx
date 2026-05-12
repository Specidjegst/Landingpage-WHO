import { Users, Coins, ArrowRight } from 'lucide-react';
import Wheel from './Wheel';

const wheels = [
  {
    jackpot: '12,540',
    stake: 25,
    slices: 10,
    players: 8,
    capacity: 10,
    status: 'live',
    tag: 'Degen Tier',
  },
  {
    jackpot: '6,800',
    stake: 10,
    slices: 15,
    players: 9,
    capacity: 15,
    status: 'filling',
    tag: 'Starter Round',
  },
  {
    jackpot: '32,400',
    stake: 100,
    slices: 20,
    players: 17,
    capacity: 20,
    status: 'ending',
    tag: 'Whale Wheel',
  },
  {
    jackpot: '4,250',
    stake: 5,
    slices: 25,
    players: 11,
    capacity: 25,
    status: 'filling',
    tag: 'Easy Entry',
  },
  {
    jackpot: '18,900',
    stake: 50,
    slices: 12,
    players: 6,
    capacity: 12,
    status: 'live',
    tag: 'Pro League',
  },
  {
    jackpot: '74,120',
    stake: 200,
    slices: 8,
    players: 5,
    capacity: 8,
    status: 'ending',
    tag: 'Apex',
  },
];

const statusMeta = {
  live: { label: 'Live', className: 'badge badge-live' },
  filling: { label: 'Filling', className: 'badge badge-filling' },
  ending: { label: 'Ending Soon', className: 'badge badge-ending' },
};

export default function GamePreview() {
  return (
    <section id="game" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">Game Preview</span>
            <h2 className="section-title mt-4">
              Pick your stake.{' '}
              <span className="gradient-text-cyan">Pick your wheel.</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-400">
              Every wheel has its own stake size, slot count and player cap.
              Choose the one that matches your risk appetite — the higher the
              risk, the bigger the reward.
            </p>
          </div>
          <button className="btn-ghost btn-sm self-start sm:self-end">
            View all wheels
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {wheels.map((w, i) => (
            <WheelCard key={i} {...w} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WheelCard({ jackpot, stake, slices, players, capacity, status, tag }) {
  const meta = statusMeta[status];
  const fill = Math.round((players / capacity) * 100);
  return (
    <div className="card-neon group overflow-hidden rounded-2xl p-5">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className={meta.className}>
          {status !== 'ending' && (
            <span className="h-1.5 w-1.5 rounded-full bg-current pulse-dot" />
          )}
          {meta.label}
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
          {tag}
        </span>
      </div>

      {/* Jackpot */}
      <div className="mt-4 rounded-xl border border-amber-400/15 bg-black/30 p-3 text-center">
        <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-400">
          Jackpot
        </div>
        <div className="mt-1 font-display text-2xl font-extrabold">
          <span className="gold-text">$ {jackpot}</span>
        </div>
      </div>

      {/* Wheel */}
      <div className="my-5 flex items-center justify-center">
        <Wheel size={180} />
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-3 gap-2 rounded-xl border border-white/8 bg-black/30 p-2.5">
        <Stat label="Stake" value={`$${stake}`} icon={Coins} />
        <Stat label="Slices" value={slices} />
        <Stat label="Players" value={`${players}/${capacity}`} icon={Users} />
      </div>

      {/* Fill bar */}
      <div className="mt-3">
        <div className="flex justify-between text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
          <span>Slots filled</span>
          <span className="text-neon">{fill}%</span>
        </div>
        <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
          <div
            className="h-full rounded-full bg-gradient-to-r from-neon via-electric to-violet"
            style={{ width: `${fill}%` }}
          />
        </div>
      </div>

      <button className="btn-primary mt-4 w-full">Enter Wheel</button>
    </div>
  );
}

function Stat({ label, value, icon: Icon }) {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-1 text-[9px] font-bold uppercase tracking-[0.22em] text-slate-400">
        {Icon && <Icon size={9} />}
        {label}
      </div>
      <div className="mt-0.5 font-display text-[15px] font-bold text-white">
        {value}
      </div>
    </div>
  );
}
