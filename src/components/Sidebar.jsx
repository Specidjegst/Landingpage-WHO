import {
  Home,
  Disc3,
  Trophy,
  BarChart3,
  History,
  LifeBuoy,
  Settings,
  LogOut,
  ChevronDown,
  Coins,
  Crown,
  Plus,
  Sparkles,
} from 'lucide-react';
import Logo from './Logo';

const menu = [
  { icon: Home, label: 'Main Lobby' },
  { icon: Disc3, label: 'Wheels', active: true },
  { icon: Trophy, label: 'Tournaments', badge: 'LIVE' },
  { icon: BarChart3, label: 'Statistics' },
  { icon: History, label: 'History' },
  { icon: LifeBuoy, label: 'Support' },
];

export default function Sidebar() {
  return (
    <aside className="relative z-10 hidden w-[260px] shrink-0 flex-col border-r border-white/5 bg-[#0c0c1c]/70 backdrop-blur-xl lg:flex">
      <div className="flex h-full flex-col p-4">
        {/* Logo */}
        <div className="px-1 pb-4 pt-1">
          <Logo size="md" />
        </div>

        {/* Profile */}
        <ProfileCard />

        {/* Action row */}
        <div className="mt-3 flex items-center gap-2">
          <button className="group flex flex-1 items-center justify-center gap-2 rounded-xl border border-emerald-400/40 bg-gradient-to-b from-emerald-500/90 to-emerald-700/90 px-3 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(16,185,129,0.6),inset_0_1px_0_rgba(255,255,255,0.2)] transition hover:brightness-110">
            <Plus size={14} />
            Add Balance
          </button>
          <button
            aria-label="Settings"
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
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
          {menu.map((m) => (
            <NavItem key={m.label} {...m} />
          ))}
        </nav>

        {/* NFT banner */}
        <div className="mt-auto pt-10">
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
}

function NavItem({ icon: Icon, label, active, badge }) {
  return (
    <button
      className={`group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
        active
          ? 'border border-neon/35 bg-gradient-to-r from-neon/15 to-transparent text-[#a8f3ff] shadow-[0_0_18px_rgba(0,245,255,0.12),inset_0_0_12px_rgba(0,245,255,0.06)] font-semibold'
          : 'text-slate-300/85 hover:bg-white/[0.04] hover:text-white'
      }`}
    >
      <Icon
        size={18}
        className={
          active
            ? 'text-neon drop-shadow-[0_0_6px_rgba(0,245,255,0.8)]'
            : 'text-slate-400 group-hover:text-white'
        }
      />
      <span className="flex-1 text-left tracking-wide">{label}</span>
      {badge && (
        <span className="rounded-full bg-magenta/20 px-2 py-0.5 text-[10px] font-semibold text-magenta">
          {badge}
        </span>
      )}
    </button>
  );
}

function ProfileCard() {
  return (
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
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
        <div
          className="h-full rounded-full bg-gradient-to-r from-neon via-violet to-magenta"
          style={{ width: '62%' }}
        />
      </div>
    </div>
  );
}

function PlayerAvatar() {
  return (
    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl ring-1 ring-white/10">
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
}

function NFTBanner() {
  return (
    <div className="relative select-none">
      {/* Floating character head */}
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
            <path d="M14 38 C14 18 26 8 40 8 C54 8 66 18 66 38 L66 50 L14 50 Z" fill="url(#hair)" />
            <ellipse cx="40" cy="44" rx="20" ry="22" fill="url(#skin)" />
            <path d="M20 36 C24 26 34 22 40 22 C46 22 56 26 60 36 C56 32 50 30 46 32 C44 28 36 28 34 32 C30 30 24 32 20 36 Z" fill="url(#hair)" />
            <ellipse cx="32" cy="46" rx="4" ry="5" fill="#0f172a" />
            <ellipse cx="48" cy="46" rx="4" ry="5" fill="#0f172a" />
            <circle cx="32" cy="45" r="2.2" fill="url(#eye)" />
            <circle cx="48" cy="45" r="2.2" fill="url(#eye)" />
            <circle cx="33" cy="44" r="0.8" fill="#fff" />
            <circle cx="49" cy="44" r="0.8" fill="#fff" />
            <ellipse cx="26" cy="54" rx="3" ry="1.5" fill="#fb7185" opacity="0.55" />
            <ellipse cx="54" cy="54" rx="3" ry="1.5" fill="#fb7185" opacity="0.55" />
            <path d="M34 58 Q40 64 46 58" stroke="#7c2d12" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M16 32 C18 16 30 6 40 6 C50 6 62 16 64 32" stroke="#22d3ee" strokeWidth="2.5" fill="none" />
            <rect x="10" y="30" width="6" height="10" rx="2" fill="#22d3ee" />
            <rect x="64" y="30" width="6" height="10" rx="2" fill="#22d3ee" />
          </svg>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl">
        <div
          className="relative h-[112px] p-3"
          style={{
            background:
              'linear-gradient(135deg, #ef4444 0%, #f59e0b 25%, #ec4899 55%, #8b5cf6 85%)',
          }}
        >
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                'linear-gradient(transparent 0 95%, rgba(255,255,255,0.35) 95% 100%), linear-gradient(90deg, transparent 0 95%, rgba(255,255,255,0.35) 95% 100%)',
              backgroundSize: '16px 16px',
            }}
          />
          <Sparkles
            size={14}
            className="absolute right-3 top-3 text-white/90 drop-shadow"
          />
          <div className="absolute bottom-2.5 left-3 right-3">
            <div className="font-display text-[13px] font-extrabold tracking-[0.18em] text-white drop-shadow">
              FO-MO STATUS
            </div>
            <div className="text-[10px] font-medium leading-tight text-white/85">
              Exclusive NFT collection
              <br />
              for true holders
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/20" />
      </div>
    </div>
  );
}
