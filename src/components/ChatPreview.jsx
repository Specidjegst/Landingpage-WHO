import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MessageSquare,
  History,
  Sparkles,
  Send,
  Clock,
  Users,
} from 'lucide-react';

const chatMessages = [
  {
    user: 'akr_hodl',
    seed: 0,
    online: true,
    text: 'just snipe-entered the $200 wheel. wish me luck 🎯',
    time: '2m',
  },
  {
    user: 'baseboi',
    seed: 1,
    online: true,
    text: 'lfg the new pvp rounds are insane. fee is barely anything',
    time: '4m',
  },
  {
    user: 'sliceslayer',
    seed: 2,
    tag: 'GOAT',
    text: 'won 3 wheels back to back. fomo really pays sometimes 😎',
    time: '7m',
  },
  {
    user: 'degen_42',
    seed: 3,
    online: true,
    text: 'who else watching the $32k wheel fill up rn',
    time: '11m',
  },
  {
    user: 'fomofrog',
    seed: 4,
    text: 'first time on base, this hits different. instant payouts ⚡',
    time: '14m',
  },
  {
    user: 'wheel_whisperer',
    seed: 5,
    tag: 'OG',
    text: 'timing > stake size. mark my words',
    time: '18m',
  },
];

const historyMessages = [
  { user: 'You', seed: 1, text: '+ Won $128 on Wheel #4127', time: 'Today · 14:22' },
  { user: 'You', seed: 1, text: '— Staked $25 · 10 slices', time: 'Today · 14:18' },
  { user: 'You', seed: 1, text: '+ Won $54 on Wheel #4108', time: 'Today · 13:01' },
  { user: 'You', seed: 1, text: '+ NFT Drop: FO-MO #2417 acquired', time: 'Yesterday' },
];

export default function ChatPreview() {
  const [tab, setTab] = useState('chat');
  const list = tab === 'chat' ? chatMessages : historyMessages;

  return (
    <section className="section-pad relative">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow">
              <Users size={11} />
              Community
            </span>
            <h2 className="section-title mt-4">
              The lobby <span className="gradient-text-rainbow">is alive</span>.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-chalk/70">
              Wheel of FOMO ist mehr als nur ein Spin. Live Degen-Chat, On-Chain
              Trash-Talk und eine Community, die das nächste Round-Drop schon vor
              dem Spin riecht.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button className="btn-primary">
                <MessageSquare size={15} />
                Join the Community
              </button>
              <button className="btn-ghost">Read the Manifesto</button>
            </div>

            <div className="mt-7 grid grid-cols-3 gap-3">
              {[
                { label: 'Online', value: '1,370', accent: 'gradient-text-cyan' },
                { label: 'Messages today', value: '8.4K', accent: 'gradient-text-violet' },
                { label: 'Active Wheels', value: '24', accent: 'gold-text' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="glass rounded-xl px-3 py-2.5 text-center"
                >
                  <div className={`font-display text-lg font-extrabold ${s.accent}`}>
                    {s.value}
                  </div>
                  <div className="text-[9px] font-bold uppercase tracking-[0.22em] text-chalk/55">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-strong relative overflow-hidden rounded-3xl"
          >
            <div className="relative border-b border-white/5 p-5">
              <div
                className="absolute inset-0 opacity-60"
                style={{
                  background:
                    'radial-gradient(120% 60% at 100% 0%, rgba(123,44,255,0.45), transparent 60%), radial-gradient(120% 60% at 0% 100%, rgba(0,229,255,0.25), transparent 60%)',
                }}
              />
              <div className="relative flex items-center justify-between">
                <div>
                  <div className="font-display text-lg font-extrabold tracking-[0.22em] text-white">
                    DEGEN
                  </div>
                  <div className="-mt-1 font-display text-lg font-extrabold tracking-[0.32em] gradient-text-rainbow">
                    CHAT
                  </div>
                </div>
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-black/40 ring-1 ring-white/10">
                  <Sparkles size={18} className="text-magenta" />
                </div>
              </div>
              <div className="relative mt-4 flex gap-1 rounded-xl border border-white/8 bg-black/30 p-1">
                {['chat', 'history'].map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-1.5 text-xs font-semibold capitalize transition ${
                      tab === t
                        ? 'bg-white/[0.06] text-white shadow-[inset_0_-2px_0_0_rgba(0,229,255,0.65)]'
                        : 'text-chalk/55 hover:text-chalk/85'
                    }`}
                  >
                    {t === 'chat' ? <MessageSquare size={13} /> : <History size={13} />}
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="scroll-thin max-h-[420px] space-y-1 overflow-y-auto p-3">
              {list.map((m, i) => (
                <ChatMessage key={i} {...m} />
              ))}
            </div>

            <div className="border-t border-white/5 p-3">
              <div className="flex items-center gap-2 rounded-xl border border-white/8 bg-black/40 px-3 py-2 transition focus-within:border-neon/60 focus-within:shadow-[0_0_20px_rgba(0,229,255,0.2)]">
                <input
                  placeholder="Drop your alpha..."
                  className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-chalk/40"
                />
                <button
                  aria-label="Send"
                  className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-neon to-electric text-white shadow-[0_0_18px_rgba(0,229,255,0.45)] transition hover:brightness-110"
                >
                  <Send size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ChatMessage({ user, text, time, tag, seed = 0, online }) {
  return (
    <div className="flex gap-2.5 rounded-xl px-2 py-2 transition hover:bg-white/[0.025]">
      <ChatAvatar seed={seed} online={online} />
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <span className="truncate text-[12px] font-semibold text-white">
            {user}
          </span>
          {tag && (
            <span className="rounded-md bg-neon/15 px-1.5 py-px text-[9px] font-bold tracking-wider text-neon">
              {tag}
            </span>
          )}
          <span className="ml-auto flex items-center gap-1 text-[10px] text-chalk/45">
            <Clock size={9} />
            {time}
          </span>
        </div>
        <p className="mt-0.5 text-[12px] leading-relaxed text-chalk/85">{text}</p>
      </div>
    </div>
  );
}

function ChatAvatar({ seed = 0, online }) {
  const palettes = [
    ['#7B2CFF', '#00E5FF'],
    ['#FF3BD4', '#FFB800'],
    ['#22c55e', '#0ea5e9'],
    ['#FF3BD4', '#7B2CFF'],
    ['#22c55e', '#FFB800'],
    ['#00E5FF', '#7B2CFF'],
  ];
  const [a, b] = palettes[seed % palettes.length];
  const id = `g-${seed}`;
  return (
    <div className="relative h-8 w-8 shrink-0">
      <svg viewBox="0 0 32 32" className="h-full w-full rounded-lg ring-1 ring-white/10">
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={a} />
            <stop offset="100%" stopColor={b} />
          </linearGradient>
        </defs>
        <rect width="32" height="32" fill={`url(#${id})`} />
        <circle cx="12" cy="14" r="1.8" fill="#0f0f1b" />
        <circle cx="20" cy="14" r="1.8" fill="#0f0f1b" />
        <path d="M11 20 Q16 24 21 20" stroke="#0f0f1b" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      </svg>
      {online && (
        <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-base" />
      )}
    </div>
  );
}
