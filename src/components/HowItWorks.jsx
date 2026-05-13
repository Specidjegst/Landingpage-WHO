import { Target, Coins, Swords, Trophy } from 'lucide-react';

const steps = [
  {
    icon: Target,
    title: 'Choose a Wheel',
    description:
      'Browse live wheels, compare jackpots, stakes and slot counts. Match your risk appetite.',
    accent: 'from-neon to-electric',
    glow: 'shadow-[0_0_30px_rgba(0,245,255,0.35)]',
  },
  {
    icon: Coins,
    title: 'Place Your Entry',
    description:
      'Lock your stake on-chain. Your slot is reserved instantly — no escrow, no middlemen.',
    accent: 'from-electric to-violet',
    glow: 'shadow-[0_0_30px_rgba(37,99,255,0.35)]',
  },
  {
    icon: Swords,
    title: 'Compete Against Players',
    description:
      'When the wheel fills, all entries face off. Timing, strategy and a little FOMO decide everything.',
    accent: 'from-violet to-magenta',
    glow: 'shadow-[0_0_30px_rgba(124,58,237,0.35)]',
  },
  {
    icon: Trophy,
    title: 'Spin & Claim',
    description:
      'The wheel spins, the winner is verifiable on-chain. Rewards are streamed to your wallet.',
    accent: 'from-magenta to-gold',
    glow: 'shadow-[0_0_30px_rgba(236,72,153,0.35)]',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">How it works</span>
          <h2 className="section-title mt-4">
            Four steps. <span className="gradient-text-rainbow">One winner.</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Wheel of FOMO is built around fast, transparent PvP rounds. No hidden
            multipliers, no house edge stories — every result is verifiable
            on-chain.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {steps.map((s, i) => (
            <Step key={i} step={i + 1} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Step({ step, icon: Icon, title, description, accent, glow }) {
  return (
    <div className="group relative">
      <div className="card-neon h-full rounded-2xl p-5">
        {/* Big translucent step number */}
        <span className="pointer-events-none absolute right-4 top-2 font-display text-[5.5rem] font-extrabold leading-none text-white/[0.04]">
          0{step}
        </span>
        <div
          className={`relative grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${accent} ${glow} transition-transform group-hover:scale-110 group-hover:rotate-3`}
        >
          <Icon size={22} className="text-white drop-shadow" />
        </div>
        <div className="mt-5 flex items-center gap-2">
          <span className="font-display text-xs font-bold tracking-[0.32em] text-slate-500">
            STEP 0{step}
          </span>
        </div>
        <h3 className="mt-1.5 font-display text-lg font-bold text-white">
          {title}
        </h3>
        <p className="mt-2 text-[13px] leading-relaxed text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );
}
