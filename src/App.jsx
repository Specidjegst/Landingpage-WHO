import React, { useState } from 'react';
import {
  Home,
  Disc3,
  Trophy,
  BarChart3,
  History,
  LifeBuoy,
  Wallet,
  Settings,
  LogOut,
  ChevronDown,
  Coins,
  Crown,
  MessageSquare,
  Clock,
  Send,
  Sparkles,
  TrendingUp,
  Search,
  Bell,
  Volume2,
  ShieldCheck,
} from 'lucide-react';

/* ---------- Reusable visual primitives ---------- */

const Wheel = ({ size = 168, label = 'JACKPOT OF FOMO' }) => (
  <div
    className="relative shrink-0"
    style={{ width: size, height: size }}
    aria-hidden
  >
    {/* outer glow */}
    <div
      className="absolute inset-0 rounded-full blur-2xl opacity-60"
      style={{
        background:
          'radial-gradient(circle, rgba(124,58,237,0.55) 0%, rgba(34,211,238,0.25) 45%, transparent 70%)',
      }}
    />
    {/* gold outer ring */}
    <div className="absolute inset-0 rounded-full gold-ring shadow-[0_0_25px_rgba(245,158,11,0.45)]" />
    {/* inner bevel */}
    <div className="absolute inset-[6%] rounded-full bg-[#1a1330]" />
    {/* colored wheel */}
    <div className="absolute inset-[9%] rounded-full wheel animate-spin-slow" />
    {/* dot ring on gold border */}
    <div className="absolute inset-0">
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * 360) / 16;
        return (
          <span
            key={i}
            className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-white/85 shadow-[0_0_6px_rgba(255,255,255,0.8)]"
            style={{
              transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${
                size * 0.46
              }px)`,
            }}
          />
        );
      })}
    </div>
    {/* center hub */}
    <div className="absolute inset-[30%] rounded-full gold-ring shadow-[inset_0_2px_8px_rgba(0,0,0,0.45),0_4px_16px_rgba(0,0,0,0.45)] flex items-center justify-center">
      <div className="text-center px-1 leading-tight">
        <div className="font-display text-[7px] font-extrabold tracking-[0.18em] text-[#3d2a08]">
          {label.split(' ')[0]}
        </div>
        <div className="font-display text-[6px] font-bold tracking-[0.22em] text-[#5b3f10] -mt-0.5">
          {label.split(' ').slice(1).join(' ')}
        </div>
      </div>
    </div>
    {/* top pointer */}
    <div className="absolute left-1/2 -translate-x-1/2 -top-1.5">
      <div
        className="h-3 w-3 rotate-45 bg-amber-300 shadow-[0_0_10px_rgba(245,158,11,0.8)]"
        style={{ clipPath: 'polygon(50% 100%, 0 0, 100% 0)' }}
      />
    </div>
  </div>
);

/* ---------- Sidebar pieces ---------- */

const NavItem = ({ icon: Icon, label, active, badge }) => (
  <button
    className={`group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all ${
      active
        ? 'nav-active font-semibold'
        : 'text-slate-300/80 hover:bg-white/[0.04] hover:text-white'
    }`}
  >
    <Icon
      size={18}
      className={active ? 'text-neon drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]' : 'text-slate-400 group-hover:text-white'}
    />
    <span className="flex-1 text-left tracking-wide">{label}</span>
    {badge && (
      <span className="rounded-full bg-magenta/20 px-2 py-0.5 text-[10px] font-semibold text-magenta">
        {badge}
      </span>
    )}
  </button>
);

const Logo = () => (
  <div className="flex items-center gap-2.5">
    <div className="relative">
      <div className="absolute inset-0 rounded-full bg-neon/40 blur-md" />
      <div className="relative h-9 w-9 rounded-full gold-ring shadow-[inset_0_2px_4px_rgba(0,0,0,0.45)] flex items-center justify-center">
        <div className="h-5 w-5 rounded-full wheel" />
      </div>
    </div>
    <div className="font-display leading-tight">
      <div className="text-[15px] font-extrabold tracking-[0.18em] text-white neon-text">
        WHEEL
      </div>
      <div className="text-[10px] font-bold tracking-[0.45em] text-neon/90 -mt-0.5">
        OF FOMO
      </div>
    </div>
  </div>
);

const PlayerAvatar = () => (
  <div className="relative h-12 w-12 shrink-0 rounded-xl overflow-hidden ring-1 ring-white/10">
    <svg viewBox="0 0 48 48" className="h-full w-full">
      <defs>
        <linearGradient id="avg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="60%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" fill="url(#avg)" />
      <circle cx="18" cy="22" r="3" fill="#0f0f1b" />
      <circle cx="30" cy="22" r="3" fill="#0f0f1b" />
      <path
        d="M16 32c2 3 6 4 8 4s6-1 8-4"
        stroke="#0f0f1b"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M10 14 L16 8 L24 12 L32 8 L38 14 Z" fill="#0f0f1b" opacity="0.55" />
    </svg>
  </div>
);

const ProfileCard = () => (
  <div className="glass rounded-2xl p-3">
    <div className="flex items-center gap-3">
      <PlayerAvatar />
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <span className="truncate text-sm font-semibold text-white">
            Aleksandr
          </span>
          <Crown size={13} className="text-amber-300" />
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
          LVL <span className="text-neon">18</span>
          <span className="opacity-50">·</span>
          <span>1877 XP</span>
        </div>
        <div className="mt-1 flex items-center gap-1.5 text-[11px]">
          <Coins size={12} className="text-amber-300" />
          <span className="font-semibold text-amber-200">1,370</span>
          <span className="ml-1 h-1.5 w-1.5 rounded-full bg-rose-500 shadow-[0_0_6px_rgba(244,63,94,0.9)]" />
        </div>
      </div>
    </div>
    {/* progress */}
    <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
      <div
        className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500"
        style={{ width: '62%' }}
      />
    </div>
  </div>
);

/* The NFT Banner with the character head protruding from the top */
const NFTBanner = () => (
  <div className="relative mt-4 select-none">
    {/* Protruding character head — positioned above the banner */}
    <div className="pointer-events-none absolute -top-10 left-3 z-20 animate-float">
      <div className="relative">
        <div className="absolute -inset-2 rounded-full bg-fuchsia-500/40 blur-xl" />
        <svg
          viewBox="0 0 80 80"
          className="relative h-20 w-20 drop-shadow-[0_8px_18px_rgba(0,0,0,0.55)]"
        >
          <defs>
            <linearGradient id="hair" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
            <linearGradient id="skin" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fde68a" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
            <radialGradient id="eye" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="#fff" />
              <stop offset="60%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#0c4a6e" />
            </radialGradient>
          </defs>
          {/* hair back */}
          <path
            d="M14 38 C14 18 26 8 40 8 C54 8 66 18 66 38 L66 50 L14 50 Z"
            fill="url(#hair)"
          />
          {/* face */}
          <ellipse cx="40" cy="44" rx="20" ry="22" fill="url(#skin)" />
          {/* hair fringe */}
          <path
            d="M20 36 C24 26 34 22 40 22 C46 22 56 26 60 36 C56 32 50 30 46 32 C44 28 36 28 34 32 C30 30 24 32 20 36 Z"
            fill="url(#hair)"
          />
          {/* eyes */}
          <ellipse cx="32" cy="46" rx="4" ry="5" fill="#0f172a" />
          <ellipse cx="48" cy="46" rx="4" ry="5" fill="#0f172a" />
          <circle cx="32" cy="45" r="2.2" fill="url(#eye)" />
          <circle cx="48" cy="45" r="2.2" fill="url(#eye)" />
          <circle cx="33" cy="44" r="0.8" fill="#fff" />
          <circle cx="49" cy="44" r="0.8" fill="#fff" />
          {/* blush */}
          <ellipse cx="26" cy="54" rx="3" ry="1.5" fill="#fb7185" opacity="0.55" />
          <ellipse cx="54" cy="54" rx="3" ry="1.5" fill="#fb7185" opacity="0.55" />
          {/* smile */}
          <path
            d="M34 58 Q40 64 46 58"
            stroke="#7c2d12"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          {/* headset */}
          <path
            d="M16 32 C18 16 30 6 40 6 C50 6 62 16 64 32"
            stroke="#22d3ee"
            strokeWidth="2.5"
            fill="none"
          />
          <rect x="10" y="30" width="6" height="10" rx="2" fill="#22d3ee" />
          <rect x="64" y="30" width="6" height="10" rx="2" fill="#22d3ee" />
        </svg>
      </div>
    </div>

    {/* Banner frame */}
    <div className="relative overflow-hidden rounded-2xl">
      <div className="nft-banner relative h-[112px] p-3">
        {/* decorative grid */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'linear-gradient(transparent 0 95%, rgba(255,255,255,0.35) 95% 100%), linear-gradient(90deg, transparent 0 95%, rgba(255,255,255,0.35) 95% 100%)',
            backgroundSize: '16px 16px',
          }}
        />
        {/* sparkle */}
        <Sparkles
          size={14}
          className="absolute right-3 top-3 text-white/90 drop-shadow"
        />
        {/* content */}
        <div className="absolute bottom-2.5 left-3 right-3">
          <div className="font-display text-[13px] font-extrabold tracking-[0.18em] text-white drop-shadow">
            FO-MO STATUS
          </div>
          <div className="text-[10px] font-medium text-white/85 leading-tight">
            Exclusive NFT collection
            <br />
            for true holders
          </div>
        </div>
      </div>
      {/* inner highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/20" />
    </div>
  </div>
);

const Sidebar = () => (
  <aside className="relative z-10 hidden w-[260px] shrink-0 border-r border-white/5 bg-[#0c0c1c]/70 backdrop-blur-xl lg:flex lg:flex-col">
    <div className="flex h-full flex-col p-4">
      {/* Logo */}
      <div className="px-1 pb-4">
        <Logo />
      </div>

      {/* Profile */}
      <ProfileCard />

      {/* Connect Wallet (BLUE) */}
      <div className="mt-3 flex items-center gap-2">
        <button className="btn-wallet group flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold">
          <Wallet
            size={16}
            className="transition-transform group-hover:-rotate-6"
          />
          Connect Wallet
        </button>
        <button
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
          aria-label="Settings"
        >
          <Settings size={16} />
        </button>
      </div>

      {/* Menu */}
      <div className="mt-5 flex items-center justify-between px-1">
        <span className="text-[11px] font-bold tracking-[0.28em] text-slate-400/80">
          MAIN MENU
        </span>
        <ChevronDown size={14} className="text-slate-500" />
      </div>
      <nav className="mt-2 space-y-1">
        <NavItem icon={Home} label="Main Lobby" />
        <NavItem icon={Disc3} label="Wheels" active />
        <NavItem icon={Trophy} label="Tournaments" badge="LIVE" />
        <NavItem icon={BarChart3} label="Statistics" />
        <NavItem icon={History} label="History" />
        <NavItem icon={LifeBuoy} label="Support" />
      </nav>

      {/* NFT Banner */}
      <div className="mt-auto pt-12">
        <NFTBanner />

        {/* Logout */}
        <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-white/8 bg-white/[0.02] px-3 py-2.5 text-sm text-slate-400 transition hover:border-rose-400/40 hover:bg-rose-500/10 hover:text-rose-200">
          <LogOut size={15} />
          Log out
        </button>
      </div>
    </div>
  </aside>
);

/* ---------- Main grid ---------- */

const GameCard = ({ jackpot, rounds, stake, slices, label = 'JACKPOT OF FOMO', tag }) => (
  <div className="card-neon group relative overflow-hidden rounded-2xl p-4">
    {/* Header */}
    <div className="relative rounded-xl border border-white/8 bg-[#0c0c20]/80 p-2.5 text-center">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
      <div className="font-display text-[13px] font-extrabold tracking-[0.22em] text-cyan-300 neon-text">
        JACKPOT <span className="text-white">$ {jackpot}</span>
      </div>
      <div className="mt-0.5 text-[10px] font-medium tracking-wide text-slate-400">
        {rounds} rounds to payout
      </div>
    </div>

    {/* Wheel */}
    <div className="my-4 flex items-center justify-center">
      <Wheel size={168} label={label} />
    </div>

    {/* Stats */}
    <div className="grid grid-cols-2 gap-2 rounded-xl border border-white/8 bg-black/30 p-2.5">
      <div className="border-r border-white/8 text-center">
        <div className="text-[10px] font-semibold tracking-[0.28em] text-slate-400">
          STAKE
        </div>
        <div className="mt-0.5 font-display text-base font-bold text-white">
          ${stake}
        </div>
      </div>
      <div className="text-center">
        <div className="text-[10px] font-semibold tracking-[0.28em] text-slate-400">
          SLICES
        </div>
        <div className="mt-0.5 font-display text-base font-bold text-white">
          {slices}
        </div>
      </div>
    </div>

    {tag && (
      <div className="mt-3 text-center text-[11px] font-medium tracking-wide text-slate-300/90">
        {tag}
      </div>
    )}

    {/* Action button */}
    <button className="btn-neon mt-3 flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-[12px] font-bold uppercase tracking-[0.22em]">
      More Wheels
    </button>
  </div>
);

const TopBar = () => (
  <div className="flex items-center justify-between gap-4 px-1 pb-4">
    <div>
      <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.32em] text-cyan-300/90">
        <Disc3 size={14} className="text-neon" />
        WHEELS LOBBY
      </div>
      <h1 className="mt-1 font-display text-2xl font-extrabold tracking-wide text-white">
        Choose your <span className="violet-text">jackpot</span>
      </h1>
    </div>
    <div className="hidden items-center gap-2 sm:flex">
      <div className="flex items-center gap-2 rounded-xl border border-white/8 bg-white/[0.03] px-3 py-2 text-xs text-slate-300">
        <Search size={14} className="text-slate-400" />
        <input
          placeholder="Search wheels..."
          className="w-40 bg-transparent outline-none placeholder:text-slate-500"
        />
      </div>
      <button className="grid h-9 w-9 place-items-center rounded-xl border border-white/8 bg-white/[0.03] text-slate-300 hover:text-white">
        <Bell size={15} />
      </button>
      <button className="grid h-9 w-9 place-items-center rounded-xl border border-white/8 bg-white/[0.03] text-slate-300 hover:text-white">
        <Volume2 size={15} />
      </button>
      <div className="flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/5 px-3 py-1.5 text-[11px] font-semibold text-emerald-300">
        <ShieldCheck size={14} />
        On-Chain · Verified
      </div>
    </div>
  </div>
);

const MainContent = () => {
  const cards = [
    { jackpot: '189,888', rounds: 1000, stake: '5', slices: 25 },
    { jackpot: '189,888', rounds: 1000, stake: '25', slices: 10 },
    { jackpot: '189,888', rounds: 1000, stake: '10', slices: 25 },
    { jackpot: '189,888', rounds: 1800, stake: '50', slices: 20, tag: 'Pitcher Strikeout' },
    { jackpot: '159,888', rounds: 1800, stake: '75', slices: 15, tag: 'Commander' },
    { jackpot: '189,888', rounds: 1800, stake: '100', slices: 30, tag: 'Commander' },
  ];

  return (
    <main className="relative flex-1 overflow-y-auto scroll-thin p-6">
      <TopBar />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((c, i) => (
          <GameCard key={i} {...c} />
        ))}
      </div>
      <footer className="mt-8 flex items-center justify-between text-[11px] text-slate-500">
        <span>© 2026 Wheel of FOMO · Built on-chain</span>
        <span className="flex items-center gap-1.5">
          <TrendingUp size={12} className="text-emerald-400" />
          12,408 players online
        </span>
      </footer>
    </main>
  );
};

/* ---------- Right panel: Degen Chat ---------- */

const ChatAvatar = ({ seed = 0, badge }) => {
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
        <path
          d="M11 20 Q16 24 21 20"
          stroke="#0f0f1b"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      {badge && (
        <span className="absolute -right-0.5 -bottom-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-[#0f0f1b]" />
      )}
    </div>
  );
};

const ChatMessage = ({ user, message, time, seed, badge, tag, online }) => (
  <div className="flex gap-2.5 rounded-xl px-2 py-2 transition hover:bg-white/[0.025]">
    <ChatAvatar seed={seed} badge={online} />
    <div className="min-w-0 flex-1">
      <div className="flex items-center gap-1.5">
        <span className="truncate text-[12px] font-semibold text-white">{user}</span>
        {tag && (
          <span className="rounded-md bg-cyan-400/15 px-1.5 py-px text-[9px] font-bold tracking-wider text-cyan-300">
            {tag}
          </span>
        )}
        {badge}
      </div>
      <p className="mt-0.5 text-[11.5px] leading-relaxed text-slate-300/90">
        {message}
      </p>
      <div className="mt-0.5 flex items-center gap-1 text-[10px] text-slate-500">
        <Clock size={9} />
        {time}
      </div>
    </div>
  </div>
);

const DegenChat = () => {
  const [tab, setTab] = useState('chat');

  const messages = [
    {
      user: 'AKRSUNHODL',
      message: 'A persuasive participating is the gnande hrocs ane not unoritrip? 🔥',
      time: '2m ago',
      seed: 0,
      online: true,
    },
    {
      user: 'NXFFYL_ALPHA',
      message: 'Anyo and yot to pony customait? Drop the address fam.',
      time: '5m ago',
      seed: 1,
    },
    {
      user: 'BOPFL_07',
      message: 'The pomust ho gallar weationo is a comple of Cruschulh. It need to try a covenant in.',
      time: '12m ago',
      seed: 2,
      tag: 'GOAT',
    },
    {
      user: 'AKRSUNHODL_01.5',
      message:
        'Earnest a mngmoure sensing it knod pre prishtorut. Pr go te onatand contl in any that frustrustard but onte enom areng things.',
      time: '18m ago',
      seed: 3,
    },
    {
      user: 'ALMOA_A_BLOCK',
      message:
        'We nest oxprol le boroges pleind plel piskos went bonage and buencet honity poked it omadang. ⚡',
      time: '22m ago',
      seed: 4,
    },
    {
      user: 'ARTRUTTY_HODOM',
      message:
        "F'me is opmonity in the booool prosent and oamson hoxewno and ohrunsentonemest banind dam good liva oet/61",
      time: '28m ago',
      seed: 5,
    },
    {
      user: 'PMOOEXNA_PNES',
      message:
        'I show upgnarata in the no kruff to a anrls gang an on goin, das anownt joen a hop maat nesi it a pootcet on fond.',
      time: '34m ago',
      seed: 6,
    },
  ];

  const history = [
    { user: 'You', message: '+ Won $128 on Wheel #189,888', time: 'Today · 14:22', seed: 1 },
    { user: 'You', message: '— Staked $25 · 10 slices', time: 'Today · 14:18', seed: 1 },
    { user: 'You', message: '+ Won $54 on Wheel #159,888', time: 'Today · 13:01', seed: 1 },
    { user: 'You', message: '+ NFT Drop: FO-MO #2417 acquired', time: 'Yesterday · 22:40', seed: 1 },
  ];

  return (
    <aside className="relative z-10 hidden w-[320px] shrink-0 border-l border-white/5 bg-[#0c0c1c]/70 backdrop-blur-xl xl:flex xl:flex-col">
      {/* Header */}
      <div className="relative overflow-hidden border-b border-white/5 p-4">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              'radial-gradient(120% 60% at 100% 0%, rgba(124,58,237,0.45), transparent 60%), radial-gradient(120% 60% at 0% 100%, rgba(34,211,238,0.25), transparent 60%)',
          }}
        />
        <div className="relative flex items-center justify-between">
          <div>
            <div className="font-display text-lg font-extrabold tracking-[0.2em] text-white">
              DEGEN
            </div>
            <div className="-mt-1 font-display text-lg font-extrabold tracking-[0.32em] text-magenta neon-text">
              CHAT
            </div>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/40 ring-1 ring-white/10">
            <Sparkles size={18} className="text-magenta" />
          </div>
        </div>
        {/* Tabs */}
        <div className="relative mt-3 flex gap-1 rounded-xl border border-white/8 bg-black/30 p-1">
          <button
            onClick={() => setTab('chat')}
            className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
              tab === 'chat'
                ? 'bg-white/[0.06] text-white shadow-[inset_0_-2px_0_0_rgba(34,211,238,0.65)]'
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
        {(tab === 'chat' ? messages : history).map((m, i) => (
          <ChatMessage key={i} {...m} />
        ))}
      </div>

      {/* Input */}
      <div className="border-t border-white/5 p-3">
        <div className="flex items-center gap-2 rounded-xl border border-white/8 bg-black/40 px-3 py-2 transition focus-within:border-cyan-400/60 focus-within:shadow-[0_0_20px_rgba(34,211,238,0.18)]">
          <input
            placeholder="Your message..."
            className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
          />
          <button
            className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 text-white shadow-[0_0_18px_rgba(34,211,238,0.45)] transition hover:brightness-110"
            aria-label="Send"
          >
            <Send size={14} />
          </button>
        </div>
      </div>
    </aside>
  );
};

/* ---------- Root ---------- */

export default function App() {
  return (
    <div className="bg-pattern relative flex h-screen w-screen overflow-hidden bg-base text-white">
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute -left-32 top-16 h-80 w-80 rounded-full bg-violet/30 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-neon/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-magenta/20 blur-[140px]" />

      <Sidebar />
      <MainContent />
      <DegenChat />
    </div>
  );
}
