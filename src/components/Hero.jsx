import { motion } from 'framer-motion';
import {
  Rocket,
  Play,
  ShieldCheck,
  Activity,
  Crown,
  Coins,
  Disc3,
  Globe,
  Trophy,
  BarChart3,
  History,
  LifeBuoy,
  MessageSquare,
} from 'lucide-react';
import Wheel from './Wheel';
import Logo from './Logo';

const trustBadges = [
  { icon: ShieldCheck, label: 'On-Chain Verified' },
  { icon: Globe, label: 'Base Network' },
  { icon: Trophy, label: 'PvP Jackpot Rounds' },
  { icon: Activity, label: 'Transparent Payouts' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-32 lg:pt-36 lg:pb-28">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-25" />
      <div className="pointer-events-none absolute -left-32 top-32 h-96 w-96 rounded-full bg-violet/35 blur-[140px]" />
      <div className="pointer-events-none absolute -right-10 top-40 h-[28rem] w-[28rem] rounded-full bg-neon/15 blur-[160px]" />
      <div className="pointer-events-none absolute -bottom-10 left-1/3 h-80 w-[60%] rounded-full bg-magenta/15 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <div className="eyebrow">
              <Activity size={11} className="pulse-dot" />
              Live · Base · PvP
            </div>
            <h1 className="mt-5 font-display text-[2.5rem] font-extrabold leading-[0.95] tracking-tight text-white sm:text-5xl xl:text-[4rem]">
              Spin. Risk.
              <br />
              <span className="gradient-text-rainbow">Win the FOMO Jackpot.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-chalk/75 lg:mx-0">
              A <span className="font-semibold text-electric">Base-powered</span>{' '}
              PvP crypto wheel game where every spin, every slice and every
              jackpot is fully on-chain.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
              <button className="btn-primary">
                <Rocket size={15} />
                Enter Lobby
              </button>
              <button className="btn-ghost">
                <Play size={15} />
                See How It Works
              </button>
            </div>
            <div className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2 lg:justify-start">
              {trustBadges.map((b) => (
                <span
                  key={b.label}
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-chalk/75"
                >
                  <b.icon size={11} className="text-neon" />
                  {b.label}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            className="relative"
          >
            <HeroMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroMockup() {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
      className="relative mx-auto w-full max-w-2xl lg:max-w-none"
    >
      {/* Halo */}
      <div className="pointer-events-none absolute -inset-10 rounded-[2rem] bg-gradient-to-br from-violet/25 via-neon/15 to-magenta/20 blur-3xl" />

      {/* Browser frame */}
      <div className="browser-frame relative overflow-hidden">
        <div className="browser-bar flex items-center gap-2 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-rose-500/80" />
          <span className="h-3 w-3 rounded-full bg-amber-400/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
          <div className="ml-3 hidden h-6 flex-1 rounded-md border border-white/10 bg-white/[0.04] sm:block" />
        </div>

        <div className="grid grid-cols-[110px_1fr] gap-2 p-3 sm:grid-cols-[140px_1fr_120px] sm:p-4">
          <MiniSidebar />
          <MiniWheels />
          <MiniChat />
        </div>
      </div>
    </motion.div>
  );
}

function MiniSidebar() {
  const menu = [
    { icon: Disc3, label: 'Wheels', active: true },
    { icon: Trophy, label: 'Tournaments' },
    { icon: BarChart3, label: 'Statistics' },
    { icon: History, label: 'History' },
    { icon: LifeBuoy, label: 'Support' },
  ];
  return (
    <div className="space-y-2.5 rounded-lg border border-white/5 bg-black/30 p-2.5">
      <Logo size="sm" />
      <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2 text-[10px]">
        <div className="flex items-center gap-1.5">
          <div className="h-6 w-6 rounded bg-gradient-to-br from-violet to-magenta" />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1 text-white">
              Aleksandr <Crown size={9} className="text-amber-300" />
            </div>
            <div className="flex items-center gap-1 text-[8px] text-chalk/60">
              <Coins size={8} className="text-amber-300" /> 1,370
            </div>
          </div>
        </div>
      </div>
      <button className="w-full rounded-md border border-emerald-400/40 bg-emerald-500/15 px-2 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-emerald-300">
        + Add Balance
      </button>
      <div className="hidden space-y-1 sm:block">
        {menu.map((m) => (
          <div
            key={m.label}
            className={`flex items-center gap-1.5 rounded-md px-1.5 py-1 text-[10px] ${
              m.active
                ? 'border border-neon/30 bg-neon/10 text-neon'
                : 'text-chalk/65'
            }`}
          >
            <m.icon size={10} />
            <span>{m.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MiniWheels() {
  const wheels = [
    { stake: '$5', slices: 25, slots: buildSlots(25, [3, 9, 17]) },
    { stake: '$25', slices: 10, slots: buildSlots(10, [1, 4, 7]) },
    { stake: '$50', slices: 15, slots: buildSlots(15, [2, 8, 12]) },
  ];
  return (
    <div className="grid grid-cols-3 gap-2">
      {wheels.map((w, i) => (
        <MiniWheelCard key={i} {...w} />
      ))}
    </div>
  );
}

function buildSlots(count, indices) {
  const arr = Array.from({ length: count }, () => null);
  indices.forEach((idx, i) => {
    arr[idx % count] = i;
  });
  return arr;
}

function MiniWheelCard({ stake, slices, slots }) {
  return (
    <div className="card-neon overflow-hidden rounded-lg p-1.5">
      <div className="rounded border border-neon/25 bg-gradient-to-b from-[#0e2a40]/95 to-[#0a0c1f]/95 px-1.5 py-1 text-center">
        <div className="font-display text-[8px] font-extrabold tracking-[0.12em] text-cyan-300 neon-text">
          JACKPOT <span className="text-white">$189K</span>
        </div>
      </div>
      <div className="my-2 flex items-center justify-center">
        <Wheel size={70} slots={slots} spin showPointer={false} showHubText={false} />
      </div>
      <div className="grid grid-cols-2 rounded border border-white/8 bg-black/30 text-center text-[8px]">
        <div className="border-r border-white/10 py-1">
          <div className="text-[6px] tracking-[0.18em] text-chalk/60">STAKE</div>
          <div className="text-[10px] font-bold text-white">{stake}</div>
        </div>
        <div className="py-1">
          <div className="text-[6px] tracking-[0.18em] text-chalk/60">SLICES</div>
          <div className="text-[10px] font-bold text-white">{slices}</div>
        </div>
      </div>
      <div className="mt-1.5 rounded border border-neon/45 bg-neon/[0.04] py-1 text-center text-[7px] font-bold uppercase tracking-[0.18em] text-cyan-100">
        More
      </div>
    </div>
  );
}

function MiniChat() {
  const msgs = ['Big win on $200 wheel 🔥', 'lfg base!', '$50 going up', 'gn degens'];
  return (
    <div className="hidden rounded-lg border border-white/5 bg-black/30 p-2 sm:block">
      <div className="flex items-center gap-1">
        <MessageSquare size={10} className="text-magenta" />
        <span className="font-display text-[9px] font-extrabold tracking-[0.22em] text-white">
          DEGEN CHAT
        </span>
      </div>
      <div className="mt-2 space-y-1.5">
        {msgs.map((m, i) => (
          <div
            key={i}
            className="flex items-start gap-1.5 rounded border border-white/5 bg-white/[0.02] p-1.5"
          >
            <div
              className="h-3 w-3 shrink-0 rounded"
              style={{
                background: `linear-gradient(135deg, hsl(${i * 80}, 80%, 60%), hsl(${
                  i * 80 + 60
                }, 80%, 50%))`,
              }}
            />
            <div className="min-w-0 flex-1 truncate text-[8px] text-chalk/85">{m}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
