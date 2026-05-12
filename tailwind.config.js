/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#0f0f1b',
        deep: '#0a0a14',
        panel: '#15152a',
        neon: '#22d3ee',
        violet: '#7c3aed',
        magenta: '#ec4899',
      },
      fontFamily: {
        display: ['"Orbitron"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 18px rgba(34, 211, 238, 0.45), 0 0 4px rgba(34, 211, 238, 0.85) inset',
        'neon-soft': '0 0 25px rgba(34, 211, 238, 0.25)',
        violet: '0 0 25px rgba(124, 58, 237, 0.35)',
      },
      animation: {
        spin: 'spin 16s linear infinite',
        'spin-slow': 'spin 28s linear infinite',
        'spin-reverse': 'spin 22s linear infinite reverse',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
        float: 'float 5s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: 0.55, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.04)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
};
