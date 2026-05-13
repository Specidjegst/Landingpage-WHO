import { motion } from 'framer-motion';
import { Rocket, Users } from 'lucide-react';
import Wheel from './Wheel';

export default function FinalCTA() {
  return (
    <section className="section-pad relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-br from-violet/25 via-electric/10 to-magenta/20 p-8 sm:p-12 lg:p-16"
        >
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-25" />
          <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-neon/20 blur-[140px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-magenta/25 blur-[140px]" />

          {/* Decorative wheels */}
          <div className="pointer-events-none absolute -right-12 top-1/2 hidden -translate-y-1/2 opacity-50 lg:block">
            <Wheel size={420} spin showPointer={false} showHubText={false} />
          </div>
          <div className="pointer-events-none absolute -right-36 top-1/2 hidden -translate-y-1/2 opacity-25 xl:block">
            <Wheel size={560} spin showPointer={false} showHubText={false} />
          </div>

          <div className="relative max-w-2xl text-center lg:text-left">
            <span className="eyebrow">Ready when you are</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
              Ready to enter the
              <br />
              <span className="gradient-text-rainbow">Wheel of FOMO?</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-chalk/85 lg:mx-0">
              Pick your wheel, claim your slice and chase the next jackpot.
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
