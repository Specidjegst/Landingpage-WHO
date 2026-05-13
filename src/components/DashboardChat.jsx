import { useState } from 'react';
import { MessageSquare, History, Sparkles, Send, Clock } from 'lucide-react';

const messages = [
  { user: 'AKRSUNHODL', text: 'just snipe-entered the $200 wheel. wish me luck 🎯', time: '2m', seed: 0, online: true },
  { user: 'NXFFYL_ALPHA', text: 'Anyo and yot to pony customait? Drop the address fam.', time: '5m', seed: 1 },
  { user: 'BOPFL_07', text: 'lfg the new pvp rounds are insane. fee is barely anything', time: '12m', seed: 2, tag: 'GOAT' },
  { user: 'AKRSUNHODL_01.5', text: 'won 3 wheels back to back. fomo really pays sometimes 😎', time: '18m', seed: 3 },
  { user: 'ALMOA_A_BLOCK', text: 'who else watching the $32k wheel fill up rn ⚡', time: '22m', seed: 4 },
  { user: 'ARTRUTTY_HODOM', text: 'first time on base, this hits different. instant payouts.', time: '28m', seed: 5 },
  { user: 'PMOOEXNA_PNES', text: 'timing > stake size. mark my words', time: '34m', seed: 6 },
];

const history = [
  { user: 'You', text: '+ Won $128 on Wheel #189,888', time: 'Today · 14:22', seed: 1 },
  { user: 'You', text: '— Staked $25 · 10 slices', time: 'Today · 14:18', seed: 1 },
  { user: 'You', text: '+ Won $54 on Wheel #159,888', time: 'Today · 13:01', seed: 1 },
  { user: 'You', text: '+ NFT Drop: FO-MO #2417 acquired', time: 'Yesterday · 22:40', seed: 1 },
];

export default function DashboardChat() {
  const [tab, setTab] = useState('chat');
  const list = tab === 'chat' ? messages : history;

  return (
    <aside className="relative z-10 hidden w-[320px] shrink-0 flex-col border-l border-white/5 bg-[#0c0c1c]/70 backdrop-blur-xl xl:flex">
      {/* Header */}
      <div className="relative overflow-hidden border-b border-white/5 p-4">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              'radial-gradient(120% 60% at 100% 0%, rgba(124,58,237,0.45), transparent 60%), radial-gradient(120% 60% at 0% 100%, rgba(0,245,255,0.25), transparent 60%)',
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
        {/* Tabs */}
        <div className="relative mt-3 flex gap-1 rounded-xl border border-white/8 bg-black/30 p-1">
          <button
            onClick={() => setTab('chat')}
            className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
              tab === 'chat'
                ? 'bg-white/[0.06] text-white shadow-[inset_0_-2px_0_0_rgba(0,245,255,0.65)]'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <MessageSquare size={13} />
            Chat
          </button>
          <button
            onClick={() => setTab('history')}
            className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
              tab === 'history'
                ? 'bg-white/[0.06] text-white shadow-[inset_0_-2px_0_0_rgba(236,72,153,0.65)]'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <History size={13} />
            History
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="scroll-thin flex-1 space-y-1 overflow-y-auto p-2">
        {list.map((m, i) => (
          <ChatMessage key={i} {...m} />
        ))}
      </div>

      {/* Input */}
      <div className="border-t border-white/5 p-3">
        <div className="flex items-center gap-2 rounded-xl border border-white/8 bg-black/40 px-3 py-2 transition focus-within:border-neon/60 focus-within:shadow-[0_0_20px_rgba(0,245,255,0.18)]">
          <input
            placeholder="Drop your alpha..."
            className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
          />
          <button
            aria-label="Send"
            className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-neon to-electric text-white shadow-[0_0_18px_rgba(0,245,255,0.45)] transition hover:brightness-110"
          >
            <Send size={14} />
          </button>
        </div>
      </div>
    </aside>
  );
}

function ChatMessage({ user, text, time, seed = 0, tag, online }) {
  return (
    <div className="flex gap-2.5 rounded-xl px-2 py-2 transition hover:bg-white/[0.025]">
      <ChatAvatar seed={seed} online={online} />
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <span className="truncate text-[12px] font-semibold text-white">{user}</span>
          {tag && (
            <span className="rounded-md bg-cyan-400/15 px-1.5 py-px text-[9px] font-bold tracking-wider text-cyan-300">
              {tag}
            </span>
          )}
        </div>
        <p className="mt-0.5 text-[11.5px] leading-relaxed text-slate-300/90">{text}</p>
        <div className="mt-0.5 flex items-center gap-1 text-[10px] text-slate-500">
          <Clock size={9} />
          {time}
        </div>
      </div>
    </div>
  );
}

function ChatAvatar({ seed = 0, online }) {
  const palettes = [
    ['#7c3aed', '#22d3ee'],
    ['#ec4899', '#f59e0b'],
    ['#10b981', '#0ea5e9'],
    ['#f43f5e', '#8b5cf6'],
    ['#22c55e', '#eab308'],
    ['#06b6d4', '#a855f7'],
    ['#fb7185', '#3b82f6'],
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
        <circle cx="12" cy="14" r="1.6" fill="#0f0f1b" />
        <circle cx="20" cy="14" r="1.6" fill="#0f0f1b" />
        <path d="M11 20 Q16 24 21 20" stroke="#0f0f1b" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      </svg>
      {online && (
        <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-[#0f0f1b]" />
      )}
    </div>
  );
}
