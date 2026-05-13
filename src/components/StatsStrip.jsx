import { motion } from 'framer-motion';
import { Coins, Disc3, Users, Hash, Trophy } from 'lucide-react';

const stats = [
  { icon: Coins, label: 'Total Jackpot', value: '$189,000', accent: 'gold-text' },
  { icon: Disc3, label: 'Active Wheels', value: '24', accent: 'gradient-text-cyan' },
  { icon: Users, label: 'Players Online', value: '1,370', accent: 'gradient-text-violet' },
  { icon: Hash, label: 'Rounds Played', value: '1,877', accent: 'text-chalk' },
  { icon: Trophy, label: 'Last Winner', value: '0x8f1…c42', accent: 'gradient-text-rainbow', mono: true },
];

export default function StatsStrip() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="glass relative overflow-hidden rounded-2xl px-4 py-3.5"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-neon/60 to-transparent" />
              <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-chalk/60">
                <s.icon size={10} className="text-neon" />
                {s.label}
              </div>
              <div
                className={`mt-1.5 font-display text-xl font-extrabold leading-none ${s.accent} ${
                  s.mono ? 'font-mono' : ''
                }`}
              >
                {s.value}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
