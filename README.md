# LifeWare

Actionable mental models and lifestyle frameworks — a calming bubble gallery deployed as a static SPA.

**Author:** Clark Ngo · © Clark Ngo

**Live site:** [clarkngo.github.io/life-ware](https://clarkngo.github.io/life-ware)

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy

Pushes to `main` deploy via GitHub Actions (`.github/workflows/deploy.yml`).

Enable **GitHub Pages** → Source: **GitHub Actions** in repo settings.

## Background music

Looping track: `public/assets/skyrim-dawn.mp3` (on by default). Users can turn it off via **Music on / Music off** in the navbar. Bubble pops play a short synthesized pop sound when music is enabled.

## Lessons learned

Calm reflection journal at `/lessons` — expandable “leaves” on a vertical stream, theme filters, links to related frameworks.

## Lessons from video games

Long-form story essays at `/games`. First entry: **Breath of Fire III** childhood arc (`bof3-lessons.md` → `src/data/gameLessons.ts`), with screenshots and optional prologue audio.

Nav: **Frameworks** · **Lessons** · **Games**.

## Stack

- Vite + React + TypeScript
- React Router (SPA, base `/life-ware/`)
- Framer Motion
- Lucide icons
