import { Trophy, Clock, ExternalLink, TrendingUp } from 'lucide-react';

const liveJackpots = [
  { id: '#4127', amount: '12,540', tier: 'Degen', accent: 'gold-text' },
  { id: '#4128', amount: '32,400', tier: 'Whale', accent: 'gradient-text-rainbow' },
  { id: '#4129', amount: '74,120', tier: 'Apex', accent: 'gradient-text-cyan' },
];

const winners = [
  { addr: '0x8f1…c42', amount: '+$2,180', round: '#4123', when: '12s ago' },
  { addr: '0xa3b…91d', amount: '+$540', round: '#4122', when: '46s ago' },
  { addr: '0xfa7…21c', amount: '+$8,920', round: '#4121', when: '1m ago' },
  { addr: '0xc89…7d2', amount: '+$1,260', round: '#4120', when: '2m ago' },
  { addr: '0xe55…039', amount: '+$3,470', round: '#4119', when: '3m ago' },
];

const tickerWins = winners.flatMap((w) => [
  `${w.addr} won ${w.amount} on ${w.round}`,
  '·',
]);

export default function RewardsSection() {
  return (
    <section id="rewards" className="section-pad relative">
      {/* Ticker */}
      <div className="relative mb-12 overflow-hidden border-y border-white/5 bg-white/[0.02] py-3">
        <div className="marquee gap-10 whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.32em] text-slate-400">
          {[...tickerWins, ...tickerWins].map((t, i) => (
            <span key={i} className="px-3">
              {t === '·' ? (
                <span className="text-neon">·</span>
              ) : (
                <span>
                  <span className="text-emerald-400">●</span> {t}
                </span>
              )}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <Trophy size={11} />
            Rewards · Live
          </span>
          <h2 className="section-title mt-4">
            Real winners. <span className="gold-text">Real receipts.</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Every jackpot, every winner, every round — transparent and verifiable
            on-chain. No backroom payouts, no insider whales, no edits.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.05fr_1fr]">
          {/* Live jackpots */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.28em] text-slate-300">
                Live Jackpots
              </h3>
              <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 pulse-dot" />
                Streaming
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {liveJackpots.map((j) => (
                <div
                  key={j.id}
                  className="card-neon group rounded-2xl p-4 text-center"
                >
                  <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-400">
                    {j.tier} · {j.id}
                  </div>
                  <div
                    className={`mt-2 font-display text-2xl font-extrabold ${j.accent}`}
                  >
                    $ {j.amount}
                  </div>
                  <div className="mt-2 flex items-center justify-center gap-1 text-[10px] text-slate-500">
                    <TrendingUp size={10} className="text-emerald-400" />
                    +$120 / min
                  </div>
                </div>
              ))}
            </div>

            {/* Recent winners */}
            <div className="glass mt-2 rounded-2xl">
              <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
                <h3 className="font-display text-sm font-bold uppercase tracking-[0.28em] text-slate-300">
                  Recent Winners
                </h3>
                <a
                  href="#"
                  className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.24em] text-neon hover:text-cyan-200"
                >
                  Round history
                  <ExternalLink size={10} />
                </a>
              </div>
              <ul className="divide-y divide-white/5">
                {winners.map((w, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-between px-4 py-3 transition hover:bg-white/[0.025]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-neon/20 to-violet/20 ring-1 ring-white/10">
                        <Trophy size={12} className="text-gold" />
                      </div>
                      <div>
                        <div className="font-mono text-[13px] font-semibold text-white">
                          {w.addr}
                        </div>
                        <div className="flex items-center gap-1 text-[10px] text-slate-500">
                          <Clock size={9} /> {w.when} · Round {w.round}
                        </div>
                      </div>
                    </div>
                    <div className="font-display text-sm font-bold gold-text">
                      {w.amount}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Round history / verification panel */}
          <div className="space-y-4">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.28em] text-slate-300">
              On-Chain Receipt
            </h3>
            <div className="glass-strong relative overflow-hidden rounded-2xl p-5">
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-neon/60 to-transparent" />
              <div className="flex items-center justify-between">
                <div className="badge badge-filling">
                  ROUND #4127 · SETTLED
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-500">
                  Block 12,408,761
                </div>
              </div>

              <dl className="mt-4 space-y-2 text-[12.5px]">
                {[
                  ['Wheel', 'Degen Tier · 10 slices'],
                  ['Pot Total', '$12,540'],
                  ['Players', '10 / 10'],
                  ['Winner', '0x8f1…c42'],
                  ['Payout', '$11,915 (≈ 95%)'],
                  ['Protocol Fee', '$625 (5%)'],
                  ['VRF Seed', '0x9a8…3fe'],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-3 border-b border-white/5 pb-2 last:border-0">
                    <dt className="text-slate-400">{k}</dt>
                    <dd className="font-mono text-white">{v}</dd>
                  </div>
                ))}
              </dl>

              <a
                href="#"
                className="btn-ghost mt-5 w-full"
              >
                View on Basescan
                <ExternalLink size={14} />
              </a>
            </div>

            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-4">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 pulse-dot" />
                Provably Fair
              </div>
              <p className="mt-2 text-[12.5px] leading-relaxed text-slate-300">
                Wheel outcomes are derived from on-chain randomness committed
                before entries close. Every result can be reproduced and audited
                by anyone, anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
