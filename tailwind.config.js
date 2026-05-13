/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Brand surfaces
        base: '#07071A',
        deep: '#0A0D24',
        panel: '#120B2E',
        ink: '#0C0D2D',
        // Brand neon
        neon: '#00E5FF',
        electric: '#2F80FF',
        violet: '#7B2CFF',
        magenta: '#FF3BD4',
        gold: '#FFB800',
        amber: '#F59E0B',
        // Text
        chalk: '#EAF6FF',
        muted: '#8B93B8',
      },
      fontFamily: {
        display: ['"Orbitron"', '"Rajdhani"', 'system-ui', 'sans-serif'],
        body: ['"Space Grotesk"', '"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        neon: '0 0 18px rgba(0, 229, 255, 0.45), 0 0 4px rgba(0, 229, 255, 0.85) inset',
        'neon-soft': '0 0 32px rgba(0, 229, 255, 0.25)',
        violet: '0 0 30px rgba(123, 44, 255, 0.45)',
        pink: '0 0 30px rgba(255, 59, 212, 0.45)',
        gold: '0 0 30px rgba(255, 184, 0, 0.4)',
      },
      animation: {
        spin: 'spin 16s linear infinite',
        'spin-slow': 'spin 28s linear infinite',
        'spin-slower': 'spin 60s linear infinite',
        'spin-reverse': 'spin 22s linear infinite reverse',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        marquee: 'marquee 45s linear infinite',
        'pulse-dot': 'pulseDot 1.6s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: 0.55, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.35, transform: 'scale(0.8)' },
        },
      },
    },
  },
  plugins: [],
};
