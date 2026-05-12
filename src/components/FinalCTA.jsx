import { Rocket, Users } from 'lucide-react';
import Wheel from './Wheel';

export default function FinalCTA() {
  return (
    <section className="section-pad relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-br from-violet/20 via-electric/10 to-magenta/15 p-8 sm:p-12 lg:p-16">
          {/* Background effects */}
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-20" />
          <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-neon/20 blur-[140px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-magenta/20 blur-[140px]" />

          {/* Decorative wheel */}
          <div className="pointer-events-none absolute -right-16 top-1/2 hidden -translate-y-1/2 opacity-40 lg:block">
            <Wheel size={420} />
          </div>
          <div className="pointer-events-none absolute -right-32 top-1/2 hidden -translate-y-1/2 opacity-20 xl:block">
            <Wheel size={520} />
          </div>

          {/* Content */}
          <div className="relative max-w-2xl text-center lg:text-left">
            <span className="eyebrow">Ready when you are</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
              Ready to enter
              <br />
              <span className="gradient-text-rainbow">the wheel?</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 lg:mx-0">
              Join thousands of degens already spinning on Base. No accounts, no
              custody traps — just connect your wallet and play.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
              <button className="btn-gold">
                <Rocket size={15} />
                Launch App
              </button>
              <button className="btn-ghost">
                <Users size={15} />
                Join Community
              </button>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] font-bold uppercase tracking-[0.28em] text-slate-400 lg:justify-start">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 pulse-dot" />
                Audited contracts
              </span>
              <span className="hidden sm:inline">·</span>
              <span>Built on Base</span>
              <span className="hidden sm:inline">·</span>
              <span>Self-custody</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
