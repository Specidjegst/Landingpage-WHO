import { Zap, DollarSign, Eye, Boxes } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: 'Fast Transactions',
    description:
      'Sub-second settlement on Base. Spins resolve before you finish hyping the timeline.',
  },
  {
    icon: DollarSign,
    title: 'Low Fees',
    description:
      'L2 economics keep entries affordable — more pot for the players, less for the gas.',
  },
  {
    icon: Eye,
    title: 'On-Chain Transparency',
    description:
      'Every wheel, every stake, every winner — verifiable on-chain. No black-box outcomes.',
  },
  {
    icon: Boxes,
    title: 'Web3-Native Gameplay',
    description:
      'Connect your wallet, sign once, and play. No accounts, no email, no custody traps.',
  },
];

export default function BaseSection() {
  return (
    <section className="section-pad relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass-strong relative overflow-hidden rounded-3xl p-6 sm:p-10 lg:p-12">
          {/* Background accents */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-electric/25 blur-[140px]" />
          <div className="pointer-events-none absolute -left-10 bottom-0 h-80 w-80 rounded-full bg-neon/15 blur-[140px]" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-electric/40 bg-electric/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.32em] text-electric">
                <BaseGlyph />
                Built on Base
              </div>
              <h2 className="section-title mt-4">
                Engineered for the{' '}
                <span className="gradient-text-cyan">Base era.</span>
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-400">
                Wheel of FOMO runs on Base — Coinbase&apos;s Ethereum L2 — so every
                round is fast, cheap and provably fair. Built for the Base
                community, optimized for degens who hate waiting.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                <Tag>Ethereum L2</Tag>
                <Tag>Sub-second TX</Tag>
                <Tag>Audited contracts</Tag>
                <Tag>Self-custody</Tag>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {benefits.map((b, i) => (
                <Benefit key={i} {...b} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefit({ icon: Icon, title, description }) {
  return (
    <div className="glass rounded-xl p-4 transition hover:border-electric/40">
      <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-electric/30 to-neon/20 text-neon shadow-[0_0_18px_rgba(37,99,255,0.25)]">
        <Icon size={18} />
      </div>
      <h4 className="mt-3 font-display text-sm font-bold text-white">{title}</h4>
      <p className="mt-1.5 text-[12.5px] leading-relaxed text-slate-400">
        {description}
      </p>
    </div>
  );
}

function Tag({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium text-slate-300">
      {children}
    </span>
  );
}

function BaseGlyph() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M2 12a10 10 0 0 1 10-10v20A10 10 0 0 1 2 12z" />
    </svg>
  );
}
