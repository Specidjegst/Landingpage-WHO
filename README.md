# WHEEL OF FOMO — Landing Page

A pixel-perfect, Cyber-Dark mode landing page for the Web3 game **WHEEL OF FOMO**, built with React, Tailwind CSS and lucide-react.

## Highlights

- Glassmorphism panels with `backdrop-blur` and gradient borders
- Multi-colored, spinning wheels (pure CSS `conic-gradient`)
- Vibrant neon-cyan / violet / magenta accents on a deep navy `#0f0f1b` background
- 6-card responsive grid (2 rows × 3) with cyan hover glow
- Sidebar with **blue Connect Wallet** button and NFT banner whose mascot head **overflows above the frame** for 3D depth
- Right **Degen Chat** panel with Chat / History tabs, scrollable feed and message input

## Getting started

```bash
npm install
npm run dev
```

Then open the URL printed by Vite (default `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Deploy to Railway

The repo is preconfigured for Railway (Nixpacks builder + `serve` for static
hosting). To deploy:

1. Go to <https://railway.app/new> → **Deploy from GitHub repo**.
2. Pick this repository and the branch `claude/web3-game-landing-page-XrmTC`
   (or `main` after merge).
3. Railway auto-detects `railway.json` / `nixpacks.toml`:
   - **Build**: `npm ci && npm run build`
   - **Start**: `npm start` → `serve -s dist -l $PORT`
4. Click **Deploy**. After ~1 min Railway gives you a public URL like
   `https://wheel-of-fomo-production.up.railway.app`.
5. (Optional) In **Settings → Networking → Generate Domain** for a clean URL,
   or attach your custom domain.

No env vars are required — it's a pure static SPA. Railway provides `$PORT`
automatically; the `start` script reads it.

### CLI alternative

```bash
npm i -g @railway/cli
railway login
railway init        # link this repo to a new project
railway up          # build + deploy
railway domain      # generate a public URL
```

## Stack

- **React 18** (Vite)
- **Tailwind CSS 3**
- **lucide-react** for icons
- Custom CSS for wheel, glass surfaces and neon glow

## Project layout

```
src/
  App.jsx     ← entire landing page in a single component file
  index.css   ← Tailwind + custom utility classes (glass, wheel, neon, ...)
  main.jsx
```
