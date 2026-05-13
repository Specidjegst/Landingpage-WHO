import { TrendingUp } from 'lucide-react';
import Wheel from './Wheel';

// Build a wheel: slices total, with a list of [sliceIndex, playerPaletteIndex]
// entries indicating which slots are already taken by players.
function makeWheel(slices, players) {
  const arr = Array.from({ length: slices }, () => null);
  players.forEach(([i, p]) => {
    arr[((i % slices) + slices) % slices] = p;
  });
  return arr;
}

const wheels = [
  {
    jackpot: '189,888',
    rounds: 1000,
    stake: '$5',
    slots: makeWheel(25, [
      [2, 0],
      [7, 2],
      [11, 5],
      [16, 3],
      [21, 1],
    ]),
  },
  {
    jackpot: '189,888',
    rounds: 1000,
    stake: '$25',
    slots: makeWheel(10, [
      [1, 0],
      [3, 4],
      [6, 2],
      [8, 5],
    ]),
  },
  {
    jackpot: '189,888',
    rounds: 1000,
    stake: '$10',
    slots: makeWheel(25, [
      [3, 1],
      [8, 3],
      [12, 6],
      [17, 0],
      [22, 5],
    ]),
  },
  {
    jackpot: '189,880',
    rounds: 1800,
    stake: '$50',
    slots: makeWheel(15, [
      [1, 5],
      [4, 2],
      [7, 0],
      [10, 7],
      [13, 3],
    ]),
  },
  {
    jackpot: '159,880',
    rounds: 1800,
    stake: '$100',
    slots: makeWheel(20, [
      [2, 4],
      [6, 1],
      [10, 6],
      [13, 3],
      [17, 0],
    ]),
  },
  {
    jackpot: '189,880',
    rounds: 1800,
    stake: '$200',
    slots: makeWheel(7, [
      [0, 0],
      [2, 5],
      [4, 2],
    ]),
  },
];

export default function DashboardMain() {
  return (
    <main className="scroll-thin relative flex-1 overflow-y-auto px-6 py-6">
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

function WheelCard({ jackpot, rounds, stake, slots }) {
  const slices = slots.length;
  return (
    <div className="card-neon group overflow-hidden rounded-2xl p-4">
      {/* Cyan JACKPOT header */}
      <div className="relative overflow-hidden rounded-xl border border-cyan-400/25 bg-gradient-to-b from-[#0e2a40]/95 to-[#0a0c1f]/95 p-3 text-center">
        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />
        <div className="font-display text-[14px] font-extrabold tracking-[0.16em] text-cyan-300 neon-text">
          JACKPOT <span className="text-white">$ {jackpot}</span>
        </div>
        <div className="mt-0.5 text-[10px] font-medium tracking-wide text-slate-400">
          {rounds} rounds to payout
        </div>
      </div>

      {/* Wheel */}
      <div className="my-4 flex items-center justify-center">
        <Wheel size={180} slots={slots} spin />
      </div>

      {/* 2-column stats with divider */}
      <div className="grid grid-cols-2 rounded-xl border border-white/8 bg-black/30">
        <div className="border-r border-white/10 px-3 py-3 text-center">
          <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-400">
            STAKE
          </div>
          <div className="mt-1 font-display text-base font-bold text-white">
            {stake}
          </div>
        </div>
        <div className="px-3 py-3 text-center">
          <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-400">
            SLICES
          </div>
          <div className="mt-1 font-display text-base font-bold text-white">
            {slices}
          </div>
        </div>
      </div>

      {/* More Wheels button — cyan outlined pill */}
      <button className="mt-3 flex w-full items-center justify-center rounded-xl border border-cyan-400/55 bg-cyan-400/[0.04] py-2.5 text-[12px] font-bold uppercase tracking-[0.22em] text-cyan-100 transition hover:bg-cyan-400/10 hover:shadow-[0_0_24px_rgba(0,245,255,0.30)]">
        More Wheels
      </button>
    </div>
  );
}
