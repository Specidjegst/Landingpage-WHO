import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What is Wheel of FOMO?',
    a: 'Wheel of FOMO is a PvP crypto game on Base. Players join wheel rounds, stake on-chain, and compete head-to-head for the round jackpot. Every spin is verifiable on the Base blockchain.',
  },
  {
    q: 'Which chain is it built on?',
    a: 'Wheel of FOMO is built on Base — Coinbase’s Ethereum L2. That means sub-second settlement, low gas fees, and the security of Ethereum underneath every transaction.',
  },
  {
    q: 'Do I need a wallet?',
    a: 'Yes. Any Base-compatible wallet works — MetaMask, Coinbase Wallet, Rabby and more. We never custody your funds; entries are settled directly through smart contracts.',
  },
  {
    q: 'Is it really PvP?',
    a: 'Yes. There is no house bot taking the other side. Each wheel is a closed match between real players. The protocol takes a transparent fee, and the rest of the pot is paid out to the winner.',
  },
  {
    q: 'Are results transparent?',
    a: 'Every wheel uses on-chain randomness committed before entries close. Players, stakes, slices and the winning slot are all recorded on-chain and can be reproduced and audited.',
  },
  {
    q: 'Is there a mobile version?',
    a: 'Yes. The site is fully responsive and the upcoming Phase 05 will deliver a native-feel mobile experience optimized for one-handed play and quick entries.',
  },
  {
    q: 'What are the risks?',
    a: 'Wheel of FOMO is a PvP game with real money. There are no guaranteed wins. Only stake what you can afford to lose, and treat every round as a strategic decision — not a financial product.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="section-pad relative">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">FAQ</span>
          <h2 className="section-title mt-4">
            Questions. <span className="gradient-text-cyan">Honest answers.</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Everything you need to know before you spin your first wheel.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <FaqItem
              key={i}
              {...f}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ q, a, isOpen, onToggle }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border transition ${
        isOpen
          ? 'border-neon/40 bg-white/[0.03] shadow-[0_0_28px_rgba(0,245,255,0.10)]'
          : 'border-white/8 bg-white/[0.02] hover:border-white/15'
      }`}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="font-display text-[15px] font-bold text-white">
          {q}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-slate-400 transition-transform ${
            isOpen ? 'rotate-180 text-neon' : ''
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-[13.5px] leading-relaxed text-slate-400">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}
