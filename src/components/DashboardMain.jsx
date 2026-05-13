import { TrendingUp } from 'lucide-react';
import Wheel from './Wheel';

const wheels = [
  { jackpot: '189,888', rounds: 1000, stake: '$5', slices: 25 },
  { jackpot: '189,888', rounds: 1000, stake: '$25', slices: 10 },
  { jackpot: '189,888', rounds: 1000, stake: '$10', slices: 25 },
  { jackpot: '189,880', rounds: 1800, stake: '$50', slices: 15 },
  { jackpot: '159,880', rounds: 1800, stake: '$100', slices: 20 },
  { jackpot: '189,880', rounds: 1800, stake: '$200', slices: 7 },
];

export default function DashboardMain() {
  return (
    <main className="scroll-thin relative flex-1 overflow-y-auto px-6 py-6">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {wheels.map((w, i) => (
          <WheelCard key={i} {...w} />
        ))}
      </div>
      <footer className="mt-8 flex items-center justify-between border-t border-white/5 pt-5 text-[11px] text-chalk/45">
        <span>© 2026 Wheel of FOMO · Built on Base</span>
        <span className="flex items-center gap-1.5">
          <TrendingUp size={12} className="text-emerald-400" />
          12,408 players online
        </span>
      </footer>
    </main>
  );
}

function WheelCard({ jackpot, rounds, stake, slices }) {
  return (
    <div className="card-neon group overflow-hidden rounded-2xl p-4">
      <div className="relative overflow-hidden rounded-xl border border-cyan-400/25 bg-gradient-to-b from-[#0e2a40]/95 to-[#0a0c1f]/95 p-3 text-center">
        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />
        <div className="font-display text-[14px] font-extrabold tracking-[0.16em] text-cyan-300 neon-text">
          JACKPOT <span className="text-white">$ {jackpot}</span>
        </div>
        <div className="mt-0.5 text-[10px] font-medium tracking-wide text-chalk/55">
          {rounds} rounds to payout
        </div>
      </div>

      <div className="my-4 flex items-center justify-center">
        <Wheel size={180} slices={slices} spin />
      </div>

      <div className="grid grid-cols-2 rounded-xl border border-white/8 bg-black/30">
        <div className="border-r border-white/10 px-3 py-3 text-center">
          <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-chalk/55">
            STAKE
          </div>
          <div className="mt-1 font-display text-base font-bold text-white">
            {stake}
          </div>
        </div>
        <div className="px-3 py-3 text-center">
          <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-chalk/55">
            SLICES
          </div>
          <div className="mt-1 font-display text-base font-bold text-white">
            {slices}
          </div>
        </div>
      </div>

      <button className="mt-3 flex w-full items-center justify-center rounded-xl border border-cyan-400/55 bg-cyan-400/[0.04] py-2.5 text-[12px] font-bold uppercase tracking-[0.22em] text-cyan-100 transition hover:bg-cyan-400/10 hover:shadow-[0_0_24px_rgba(0,229,255,0.30)]">
        More Wheels
      </button>
    </div>
  );
}
