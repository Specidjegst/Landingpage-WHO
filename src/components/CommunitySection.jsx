import { useState } from 'react';
import { MessageSquare, Send, Sparkles, Users } from 'lucide-react';

const messages = [
  {
    user: 'akr_hodl',
    color: 'from-violet to-magenta',
    text: 'just snipe-entered the $200 wheel. wish me luck 🎯',
    time: '2m',
    tag: 'OG',
  },
  {
    user: 'baseboi',
    color: 'from-electric to-neon',
    text: 'lfg the new pvp rounds are insane. fee is barely anything',
    time: '4m',
  },
  {
    user: 'sliceslayer',
    color: 'from-magenta to-gold',
    text: 'won 3 wheels back to back. fomo really pays sometimes 😎',
    time: '7m',
    tag: 'GOAT',
  },
  {
    user: 'degen_42',
    color: 'from-neon to-violet',
    text: 'who else watching the $32k wheel fill up rn',
    time: '11m',
  },
  {
    user: 'fomofrog',
    color: 'from-gold to-magenta',
    text: 'first time on base, this hits different. instant payouts ⚡',
    time: '14m',
  },
  {
    user: 'wheel_whisperer',
    color: 'from-neon to-electric',
    text: 'timing > stake size. mark my words',
    time: '18m',
  },
];

const socials = [
  { name: 'Telegram', glyph: TelegramIcon, href: '#', color: 'from-electric to-neon' },
  { name: 'X / Twitter', glyph: XIcon, href: '#', color: 'from-white/40 to-white/10' },
  { name: 'Discord', glyph: DiscordIcon, href: '#', color: 'from-violet to-electric' },
];

export default function CommunitySection() {
  return (
    <section className="section-pad relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-10 lg:grid-cols-[1.05fr_1fr]">
          {/* Copy */}
          <div className="flex flex-col justify-center">
            <span className="eyebrow">
              <Users size={11} />
              Community
            </span>
            <h2 className="section-title mt-4">
              Where degens talk
              <br />
              <span className="gradient-text-rainbow">before they spin.</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-400">
              Wheel of FOMO is more than a game — it&apos;s a live, on-chain
              arena driven by its community. Drop in the Degen Chat, follow live
              jackpots, and trade alpha with the rest of the wheel.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <button className="btn-primary">
                <MessageSquare size={15} />
                Join the Community
              </button>
              <button className="btn-ghost">Read the Manifesto</button>
            </div>

            <div className="mt-7 grid grid-cols-3 gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  className="group flex flex-col items-center gap-2 rounded-xl border border-white/8 bg-white/[0.02] p-4 text-center transition hover:-translate-y-0.5 hover:border-neon/40 hover:bg-white/[0.05]"
                >
                  <div
                    className={`grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br ${s.color} text-white shadow-[0_0_18px_rgba(0,245,255,0.18)] transition group-hover:scale-110`}
                  >
                    <s.glyph />
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-300">
                    {s.name}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Chat mockup */}
          <DegenChat />
        </div>
      </div>
    </section>
  );
}

function DegenChat() {
  const [tab, setTab] = useState('chat');
  return (
    <div className="glass-strong relative overflow-hidden rounded-3xl">
      {/* Header */}
      <div className="relative border-b border-white/5 p-5">
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
        <div className="relative mt-4 flex gap-1 rounded-xl border border-white/8 bg-black/30 p-1">
          {['chat', 'history'].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 rounded-lg px-3 py-1.5 text-xs font-semibold capitalize transition ${
                tab === t
                  ? 'bg-white/[0.06] text-white shadow-[inset_0_-2px_0_0_rgba(0,245,255,0.65)]'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div className="scroll-thin max-h-[420px] space-y-1 overflow-y-auto p-3 lg:max-h-[460px]">
        {(tab === 'chat'
          ? messages
          : [
              { user: 'You', text: '+ Won $128 on Wheel #4127', time: '14:22', color: 'from-gold to-magenta' },
              { user: 'You', text: '— Staked $25 · 10 slices', time: '14:18', color: 'from-neon to-electric' },
              { user: 'You', text: '+ Won $54 on Wheel #4108', time: '13:01', color: 'from-gold to-magenta' },
              { user: 'You', text: '— Staked $50 · 12 slices', time: '12:58', color: 'from-violet to-magenta' },
            ]
        ).map((m, i) => (
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
    </div>
  );
}

function ChatMessage({ user, text, time, tag, color }) {
  return (
    <div className="flex gap-2.5 rounded-xl px-2 py-2 transition hover:bg-white/[0.025]">
      <div
        className={`h-8 w-8 shrink-0 rounded-lg bg-gradient-to-br ${color} ring-1 ring-white/10`}
      />
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
          <span className="ml-auto text-[10px] text-slate-500">{time}</span>
        </div>
        <p className="mt-0.5 text-[12px] leading-relaxed text-slate-300/90">
          {text}
        </p>
      </div>
    </div>
  );
}

/* ---------- Social icons (svg) ---------- */
function TelegramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.9 4.4 18.7 19.6c-.24 1.07-.87 1.33-1.77.83l-4.9-3.61-2.36 2.27c-.26.26-.48.48-.98.48l.35-4.96 9.02-8.15c.39-.35-.09-.54-.61-.2L7.3 13.15l-4.81-1.5c-1.05-.33-1.07-1.05.22-1.55L20.43 3.04c.87-.33 1.63.2 1.47 1.36z"/>
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.369A19.79 19.79 0 0 0 16.558 3.2a13.7 13.7 0 0 0-.617 1.265 18.27 18.27 0 0 0-5.482 0A13.4 13.4 0 0 0 9.842 3.2a19.74 19.74 0 0 0-3.76 1.17C2.61 9.602 1.66 14.69 2.13 19.71a19.9 19.9 0 0 0 6.06 3.05c.487-.664.92-1.37 1.292-2.108a12.94 12.94 0 0 1-2.04-.97c.171-.124.34-.253.5-.385 3.85 1.794 8.014 1.794 11.83 0 .162.132.33.261.5.385a12.93 12.93 0 0 1-2.043.973c.371.738.804 1.443 1.29 2.107a19.86 19.86 0 0 0 6.062-3.05c.553-5.755-.948-10.79-3.864-15.343zM9.85 16.62c-1.183 0-2.158-1.085-2.158-2.422 0-1.337.955-2.43 2.158-2.43 1.202 0 2.176 1.092 2.156 2.43.002 1.337-.955 2.422-2.156 2.422zm7.97 0c-1.183 0-2.158-1.085-2.158-2.422 0-1.337.955-2.43 2.158-2.43 1.202 0 2.176 1.092 2.156 2.43 0 1.337-.954 2.422-2.156 2.422z"/>
    </svg>
  );
}
