import { Check, Loader2, Sparkles } from 'lucide-react';

const phases = [
  {
    phase: 'Phase 01',
    title: 'Landingpage + Community Launch',
    description:
      'Public site goes live. Telegram, X and Discord channels open. First community drops & early access list.',
    status: 'done',
  },
  {
    phase: 'Phase 02',
    title: 'Beta Game Launch on Base',
    description:
      'Private beta of the core wheel mechanic on Base mainnet. Limited stakes, real on-chain payouts.',
    status: 'active',
  },
  {
    phase: 'Phase 03',
    title: 'PvP Wheels + Live Chat',
    description:
      'Full PvP rounds, multi-tier stakes, live Degen Chat, leaderboards and on-chain receipts for every spin.',
    status: 'next',
  },
  {
    phase: 'Phase 04',
    title: 'Tournaments + Leaderboards',
    description:
      'Weekly & seasonal tournaments. Climb the leaderboard, win NFT trophies and protocol revenue shares.',
    status: 'upcoming',
  },
  {
    phase: 'Phase 05',
    title: 'Mobile Experience + Partner Integrations',
    description:
      'Native-feel mobile UX, partner wheels with Base-native projects, and deeper Web3 social integrations.',
    status: 'upcoming',
  },
];

const statusMeta = {
  done: { label: 'Shipped', icon: Check, color: 'text-emerald-400', dot: 'bg-emerald-400' },
  active: { label: 'In progress', icon: Loader2, color: 'text-neon', dot: 'bg-neon', spin: true },
  next: { label: 'Up next', icon: Sparkles, color: 'text-violet', dot: 'bg-violet' },
  upcoming: { label: 'Planned', icon: Sparkles, color: 'text-slate-400', dot: 'bg-slate-500' },
};

export default function Roadmap() {
  return (
    <section id="roadmap" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Roadmap</span>
          <h2 className="section-title mt-4">
            The road to a <span className="gradient-text-violet">full PvP arena.</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            From community launch to mobile-native gameplay — here&apos;s how
            Wheel of FOMO scales without compromising on transparency.
          </p>
        </div>

        <div className="relative mt-14">
          {/* Timeline line */}
          <div className="timeline-line absolute left-5 top-0 h-full w-px lg:left-1/2 lg:-translate-x-1/2" />

          <ol className="space-y-10 lg:space-y-14">
            {phases.map((p, i) => (
              <Phase key={i} index={i} {...p} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Phase({ index, phase, title, description, status }) {
  const meta = statusMeta[status];
  const Icon = meta.icon;
  const isRight = index % 2 === 1;

  const card = (
    <div className="card-neon w-full max-w-lg rounded-2xl p-5">
      <div className="flex items-center justify-between">
        <span className="font-display text-[11px] font-bold uppercase tracking-[0.32em] text-slate-500">
          {phase}
        </span>
        <span
          className={`flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.24em] ${meta.color}`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${meta.dot}`} />
          {meta.label}
        </span>
      </div>
      <h3 className="mt-2 font-display text-lg font-bold text-white">{title}</h3>
      <p className="mt-2 text-[13px] leading-relaxed text-slate-400">
        {description}
      </p>
    </div>
  );

  return (
    <li className="relative pl-14 lg:pl-0">
      {/* Node */}
      <div
        className={`absolute left-[14px] top-1 z-10 grid h-6 w-6 place-items-center rounded-full ring-4 ring-base lg:left-1/2 lg:-translate-x-1/2 ${meta.dot}`}
      >
        <Icon
          size={12}
          className={`text-white ${meta.spin ? 'animate-spin' : ''}`}
        />
      </div>

      {/* Card placement */}
      <div className="lg:grid lg:grid-cols-2 lg:gap-12">
        {/* Left column */}
        <div className={`${isRight ? 'hidden lg:block' : 'flex lg:justify-end'}`}>
          {!isRight && card}
        </div>
        {/* Right column */}
        <div className={`${isRight ? 'flex lg:justify-start' : 'hidden lg:block'}`}>
          {isRight && card}
        </div>
      </div>
    </li>
  );
}
