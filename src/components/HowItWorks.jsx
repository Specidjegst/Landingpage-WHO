import { motion } from 'framer-motion';
import { Wallet, Target, Coins, Trophy } from 'lucide-react';

const steps = [
  {
    icon: Wallet,
    title: 'Connect your wallet',
    description:
      'Connect mit Coinbase Wallet, MetaMask oder Rabby. Keine Accounts, keine Mails.',
    accent: 'from-neon to-electric',
  },
  {
    icon: Target,
    title: 'Choose a wheel',
    description:
      'Stake-Klasse, Slice-Anzahl, Jackpot — wähle den Raum, der zu deinem Risiko passt.',
    accent: 'from-electric to-violet',
  },
  {
    icon: Coins,
    title: 'Buy your slice',
    description:
      'On-chain Entry. Dein Slot ist sofort reserviert — bis zu mehrere Slices pro Round.',
    accent: 'from-violet to-magenta',
  },
  {
    icon: Trophy,
    title: 'Spin & win',
    description:
      'Wenn die Lobby voll ist, dreht sich das Wheel. Gewinn wird direkt ausgezahlt.',
    accent: 'from-magenta to-gold',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow">How it works</span>
          <h2 className="section-title mt-4">
            How <span className="gradient-text-rainbow">Wheel of FOMO</span> works.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-chalk/70">
            Vier Schritte vom Wallet-Connect zur ersten Auszahlung. Komplett
            on-chain. Komplett transparent.
          </p>
        </motion.div>

        <div className="relative mt-14">
          {/* Connecting line on desktop */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-neon/40 to-transparent lg:block" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative"
              >
                {/* Step number on the line */}
                <div className="mb-4 grid place-items-center lg:mb-6">
                  <div
                    className={`relative grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br ${s.accent} shadow-[0_0_30px_rgba(0,229,255,0.35)]`}
                  >
                    <span className="font-display text-sm font-extrabold text-white">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-full bg-base px-1.5 py-0 text-[8px] font-bold uppercase tracking-[0.18em] text-chalk/60 lg:block">
                      step
                    </span>
                  </div>
                </div>

                <div className="card-neon h-full rounded-2xl p-5">
                  <div
                    className={`grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br ${s.accent} shadow-[0_0_20px_rgba(0,229,255,0.25)]`}
                  >
                    <s.icon size={18} className="text-white" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-chalk/65">
                    {s.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
