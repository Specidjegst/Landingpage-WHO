import { motion } from 'framer-motion';
import {
  Swords,
  Shield,
  Coins,
  MessageSquare,
  Trophy,
  Crown,
} from 'lucide-react';

const features = [
  {
    icon: Swords,
    title: 'PvP Wheel Battles',
    description:
      'Spieler treten indirekt über Slices und Rounds gegeneinander an. Jeder Spin ist eine Schlacht.',
    accent: 'from-neon to-electric',
    glow: 'shadow-[0_0_30px_rgba(0,229,255,0.30)]',
  },
  {
    icon: Shield,
    title: 'On-Chain Fairness',
    description:
      'Jeder Spin und jeder Jackpot ist transparent auf Base nachvollziehbar. Keine Off-Chain-Magie.',
    accent: 'from-electric to-violet',
    glow: 'shadow-[0_0_30px_rgba(47,128,255,0.30)]',
  },
  {
    icon: Coins,
    title: 'Jackpot Rounds',
    description:
      'Jeder Wheel-Raum hat eigene Stakes, Slices und Payout-Runden. Du wählst dein Risiko.',
    accent: 'from-gold to-amber',
    glow: 'shadow-[0_0_30px_rgba(255,184,0,0.30)]',
  },
  {
    icon: MessageSquare,
    title: 'Degen Chat',
    description:
      'Live-Community-Chat direkt neben der Lobby. Trash-Talk inklusive.',
    accent: 'from-violet to-magenta',
    glow: 'shadow-[0_0_30px_rgba(123,44,255,0.30)]',
  },
  {
    icon: Trophy,
    title: 'Tournaments',
    description:
      'Spezielle Events, Leaderboards und High-Risk-Rounds für die echten Wheelmaster.',
    accent: 'from-magenta to-gold',
    glow: 'shadow-[0_0_30px_rgba(255,59,212,0.30)]',
  },
  {
    icon: Crown,
    title: 'FO-MO Status NFTs',
    description:
      'Exklusive NFT-Status-Items für treue Spieler. Boost deine Lobby-Identity.',
    accent: 'from-amber to-magenta',
    glow: 'shadow-[0_0_30px_rgba(245,158,11,0.30)]',
  },
];

export default function FeatureGrid() {
  return (
    <section className="section-pad relative">
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow">Features</span>
          <h2 className="section-title mt-4">
            Built for degens.{' '}
            <span className="gradient-text-cyan">Verified on-chain.</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-chalk/70">
            Sechs Bausteine, die Wheel of FOMO zu mehr machen als nur einem
            weiteren Casino-Klon — alle on-chain, alle PvP, alle für die Base
            community.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="card-neon group h-full rounded-2xl p-5"
            >
              <div
                className={`relative grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${f.accent} ${f.glow} transition-transform group-hover:scale-110 group-hover:rotate-3`}
              >
                <f.icon size={22} className="text-white drop-shadow" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-white">
                {f.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-chalk/65">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
