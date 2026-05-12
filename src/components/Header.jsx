import { useEffect, useState } from 'react';
import { Menu, X, Wallet, Rocket } from 'lucide-react';

const navItems = [
  { label: 'Game', href: '#game' },
  { label: 'How It Works', href: '#how' },
  { label: 'Rewards', href: '#rewards' },
  { label: 'PvP', href: '#pvp' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'FAQ', href: '#faq' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'glass-header' : ''
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-neon/30 blur-md" />
            <div className="relative grid h-9 w-9 place-items-center rounded-full gold-ring shadow-[inset_0_2px_4px_rgba(0,0,0,0.45)]">
              <div className="h-5 w-5 rounded-full wheel" />
            </div>
          </div>
          <div className="font-display leading-tight">
            <div className="text-[14px] font-extrabold tracking-[0.2em] text-white">
              WHEEL
            </div>
            <div className="-mt-0.5 text-[9px] font-bold tracking-[0.45em] text-neon/90">
              OF FOMO
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/[0.04] hover:text-white"
            >
              {n.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button className="btn-ghost btn-sm hidden sm:inline-flex">
            <Wallet size={14} />
            Connect
          </button>
          <button className="btn-primary btn-sm">
            <Rocket size={14} />
            Launch App
          </button>
          <button
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-white lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden border-t border-white/5 transition-[max-height] duration-300 lg:hidden ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
          {navItems.map((n) => (
            <a
              key={n.label}
              href={n.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/[0.04]"
            >
              {n.label}
            </a>
          ))}
          <button className="btn-ghost mt-2 w-full">
            <Wallet size={14} />
            Connect Wallet
          </button>
        </nav>
      </div>
    </header>
  );
}
