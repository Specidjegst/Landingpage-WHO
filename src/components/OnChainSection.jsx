import { motion } from 'framer-motion';
import { ShieldCheck, ExternalLink, CheckCircle2 } from 'lucide-react';

const txRows = [
  ['TX Hash', '0x9a8…3fe2c1', 'mono'],
  ['Round ID', '#4127', 'mono'],
  ['Stake', '$25.00 USDC'],
  ['Slices Filled', '10 / 10'],
  ['Jackpot Pool', '$ 189,000', 'gold'],
  ['Block', '12,408,761', 'mono'],
];

export default function OnChainSection() {
  return (
    <section className="section-pad relative">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow">
              <ShieldCheck size={11} />
              Powered by Base
            </span>
            <h2 className="section-title mt-4">
              Verified <span className="gradient-text-cyan">on-chain</span>.{' '}
              <br className="hidden sm:block" />
              Always.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-chalk/70">
              Alle Rounds, Stakes und Auszahlungen landen direkt on-chain auf
              Base. Keine versteckte Off-Chain-Logik, keine Black-Box-Outcomes —
              jede Wheel-Round kann von jedem nachvollzogen werden.
            </p>

            <ul className="mt-6 space-y-2">
              {[
                'Alle Rounds werden transparent gespeichert',
                'Jackpot-Logik ist auditierbar im Smart-Contract',
                'Wallet-basierter Zugang — keine Custodial-Falle',
                'Keine Off-Chain-Manipulationen, keine Hidden Fees',
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-[13px] text-chalk/80">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="badge badge-cyan">
                <span className="h-1.5 w-1.5 rounded-full bg-current pulse-dot" />
                On-Chain Verified
              </span>
              <span className="badge badge-violet">Audited contracts</span>
              <span className="badge badge-gold">Self-custody</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="glass-strong relative overflow-hidden rounded-2xl p-5 sm:p-6">
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-neon/60 to-transparent" />
              <div className="flex items-center justify-between">
                <span className="badge badge-cyan">
                  Round #4127 · Settled
                </span>
                <span className="font-mono text-[10px] tracking-widest text-chalk/55">
                  base · L2
                </span>
              </div>

              <dl className="mt-5 space-y-2 text-[13px]">
                {txRows.map(([k, v, style]) => (
                  <div
                    key={k}
                    className="flex items-center justify-between gap-4 border-b border-white/5 pb-2 last:border-0"
                  >
                    <dt className="text-chalk/55">{k}</dt>
                    <dd
                      className={`truncate ${
                        style === 'mono' ? 'font-mono text-chalk' : ''
                      } ${style === 'gold' ? 'gold-text font-display font-extrabold' : 'text-chalk'}`}
                    >
                      {v}
                    </dd>
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

              <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/5 p-3">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 pulse-dot" />
                  Provably Fair · VRF Seed Committed
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
