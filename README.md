# Tim - Portfolio-Website

> Persönliche Portfolio-Website. React + TypeScript + Vite, im Dark-Mode-Minimal-Stil.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646cff?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)

---

## Was hier zu sehen ist

Eine zentrale Anlaufstelle, die meine Projekte (AktienWatcher, FinanzManager, FormCheck und ältere Arbeiten) und meinen Tech-Stack zusammenfasst. Jedes Projekt hat eine Detail-Seite mit Architektur-Entscheidungen und der "Was ich gelernt habe"-Story.

---

## Setup

```bash
npm install
npm run dev
```

Dev-Server läuft auf http://localhost:5174

```bash
npm run build     # Production Build (dist/)
npm run preview   # Local Preview des Builds
npm run lint      # TypeScript-Check
```

---

## Inhalte anpassen

Alle Inhalte sind in `src/data/`:

- `about.ts` — persönliche Daten (Name, E-Mail, Intro)
- `skills.ts` — Tech-Stack gruppiert nach Bereich
- `projects.ts` — alle Projekte mit Beschreibung, Tech-Stack, Highlights und Detail-Sektionen

Ein neues Projekt hinzufügen heisst: einen Eintrag in `projects.ts` ergänzen. Die Cards und Detail-Seiten werden automatisch generiert.

---

## Architektur

```
src/
├── components/
│   ├── Header.tsx          Sticky Header mit Navigation
│   ├── Footer.tsx
│   ├── ProjectCard.tsx     Card auf Home + Projekte-Liste
│   └── TechBadge.tsx       Mono-Font Tech-Pill
├── pages/
│   ├── HomePage.tsx        Hero, Featured Projekte, Skills, Status
│   ├── ProjectsPage.tsx    Volle Liste (aktuell + Archiv)
│   ├── ProjectDetailPage.tsx
│   └── ContactPage.tsx
├── data/                   Single Source of Truth (kein CMS, bewusst)
│   ├── about.ts
│   ├── projects.ts
│   └── skills.ts
├── types/project.ts
├── App.tsx                 React Router Setup
├── main.tsx
└── index.css               Globales Design-System mit CSS-Variablen
```

---

## Design-Entscheidungen

- **Kein CMS, keine Datenbank.** Alle Inhalte sind TypeScript-Files — typsicher, versionierbar, ohne Build-Komplexität.
- **CSS-Variablen statt Tailwind.** Schlanker, weniger Abhängigkeiten, und es zwingt mich zu konsistenten Spacing/Farb-Tokens.
- **Eine Schriftart-Familie (Inter + JetBrains Mono).** Genug Variation für Hierarchie ohne visuelles Chaos.
- **Subtiler Gradient-Accent statt knalliger Farben.** Wirkt erwachsen, nicht laut.
- **Sticky Header mit Blur.** Standard moderner Web-Apps, gibt Orientierung.

---

## Deployment

`vercel.json` enthält die SPA-Rewrite-Regel. Repo auf Vercel importieren, fertig.

---

## Lizenz

MIT
