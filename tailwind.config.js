/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#080A1F',
        deep: '#050617',
        panel: '#0f1130',
        neon: '#00F5FF',
        electric: '#2563FF',
        violet: '#7C3AED',
        magenta: '#EC4899',
        gold: '#FACC15',
      },
      fontFamily: {
        display: ['"Orbitron"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 18px rgba(0, 245, 255, 0.45), 0 0 4px rgba(0, 245, 255, 0.85) inset',
        'neon-soft': '0 0 25px rgba(0, 245, 255, 0.25)',
        violet: '0 0 25px rgba(124, 58, 237, 0.35)',
        pink: '0 0 25px rgba(236, 72, 153, 0.35)',
        gold: '0 0 25px rgba(250, 204, 21, 0.35)',
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
        'count-up': 'fadeUp 0.6s ease-out both',
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
          '50%': { opacity: 0.35, transform: 'scale(0.85)' },
        },
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(8px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
