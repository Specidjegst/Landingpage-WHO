import {
  Disc3,
  Search,
  Bell,
  Volume2,
  ShieldCheck,
  TrendingUp,
  Users,
  Coins,
} from 'lucide-react';
import Wheel from './Wheel';

const wheels = [
  { jackpot: '30,000', rounds: 1000, stake: 5, slices: 25, players: '18/25', status: 'filling', tag: 'Low Stake' },
  { jackpot: '30,000', rounds: 1000, stake: 25, slices: 10, players: '7/10', status: 'live', tag: 'Mid Stake' },
  { jackpot: '30,000', rounds: 1000, stake: 100, slices: 25, players: '19/25', status: 'ending', tag: 'High Stake' },
  { jackpot: '30,000', rounds: 1800, stake: 10, slices: 15, players: '11/15', status: 'filling', tag: 'Low Stake' },
  { jackpot: '30,000', rounds: 1800, stake: 50, slices: 10, players: '8/10', status: 'live', tag: 'Mid Stake' },
  { jackpot: '30,000', rounds: 1800, stake: 200, slices: 7, players: '5/7', status: 'ending', tag: 'High Stake' },
];

export default function DashboardMain() {
  return (
    <main className="scroll-thin relative flex-1 overflow-y-auto p-6">
      <TopBar />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {wheels.map((w, i) => (
          <WheelCard key={i} {...w} />
        ))}
      </div>
      <footer className="mt-8 flex items-center justify-between border-t border-white/5 pt-5 text-[11px] text-slate-500">
        <span>© 2026 Wheel of FOMO · Built on Base</span>
        <span className="flex items-center gap-1.5">
          <TrendingUp size={12} className="text-emerald-400" />
          12,408 players online
        </span>
      </footer>
    </main>
  );
}

function TopBar() {
  return (
    <div className="mb-6 flex flex-col gap-3 px-1 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
      <div>
        <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.32em] text-cyan-300/90">
          <Disc3 size={14} className="text-neon" />
          WHEELS LOBBY
        </div>
        <h1 className="mt-1 font-display text-2xl font-extrabold tracking-wide text-white sm:text-3xl">
          Choose your <span className="gold-text">jackpot</span>
        </h1>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 rounded-xl border border-white/8 bg-white/[0.03] px-3 py-2 text-xs text-slate-300">
          <Search size={14} className="text-slate-400" />
          <input
            placeholder="Search wheels..."
            className="w-32 bg-transparent outline-none placeholder:text-slate-500 sm:w-40"
          />
        </div>
        <button
          aria-label="Notifications"
          className="hidden h-9 w-9 place-items-center rounded-xl border border-white/8 bg-white/[0.03] text-slate-300 hover:text-white sm:grid"
        >
          <Bell size={15} />
        </button>
        <button
          aria-label="Sound"
          className="hidden h-9 w-9 place-items-center rounded-xl border border-white/8 bg-white/[0.03] text-slate-300 hover:text-white sm:grid"
        >
          <Volume2 size={15} />
        </button>
        <div className="hidden items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/5 px-3 py-1.5 text-[11px] font-semibold text-emerald-300 lg:flex">
          <ShieldCheck size={14} />
          On-Chain · Verified
        </div>
      </div>
    </div>
  );
}

const statusMeta = {
  live: { label: 'LIVE', cls: 'text-pink-300 bg-pink-500/10 border-pink-400/40' },
  filling: { label: 'FILLING', cls: 'text-cyan-200 bg-cyan-400/10 border-cyan-400/40' },
  ending: { label: 'ENDING SOON', cls: 'text-amber-200 bg-amber-400/10 border-amber-400/40' },
};

function WheelCard({ jackpot, rounds, stake, slices, players, status, tag }) {
  const meta = statusMeta[status];
  return (
    <div className="card-neon group overflow-hidden rounded-2xl p-4">
      {/* Jackpot header */}
      <div className="relative overflow-hidden rounded-xl border border-cyan-400/20 bg-gradient-to-b from-[#0d2a3f]/90 to-[#0c0c20]/90 p-3 text-center">
        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />
        <div className="font-display text-[13px] font-extrabold tracking-[0.18em] text-cyan-300 neon-text sm:text-[14px]">
          JACKPOT <span className="text-white">$ {jackpot}</span>
        </div>
        <div className="mt-0.5 text-[10px] font-medium tracking-wide text-slate-400">
          {rounds} rounds to payout
        </div>
      </div>

      {/* Status + tag */}
      <div className="mt-3 flex items-center justify-between">
        <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[9px] font-bold tracking-[0.22em] ${meta.cls}`}>
          {status !== 'ending' && (
            <span className="h-1.5 w-1.5 rounded-full bg-current pulse-dot" />
          )}
          {meta.label}
        </span>
        <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
          {tag}
        </span>
      </div>

      {/* Wheel */}
      <div className="my-4 flex items-center justify-center">
        <Wheel size={170} slices={slices} spin />
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-2 rounded-xl border border-white/8 bg-black/30 p-2.5">
        <Stat icon={Coins} label="STAKE" value={`$${stake}`} />
        <Stat label="SLICES" value={slices} divider />
        <Stat icon={Users} label="PLAYERS" value={players} />
      </div>

      {/* Action */}
      <button className="btn-ghost mt-3 w-full !border-cyan-400/45 !bg-cyan-400/[0.04] !text-cyan-100 hover:!bg-cyan-400/10 hover:!shadow-[0_0_24px_rgba(0,245,255,0.25)]">
        Enter Wheel
      </button>
    </div>
  );
}

function Stat({ icon: Icon, label, value, divider }) {
  return (
    <div className={`text-center ${divider ? 'border-x border-white/8' : ''}`}>
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
