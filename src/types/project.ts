export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  year: string;
  status: 'live' | 'wip' | 'archived';
  techs: string[];
  /** Live-Demo URL (z.B. Vercel/GitHub Pages) */
  liveUrl?: string;
  /** Haupt-Code-Repository */
  repoUrl?: string;
  /** Zusätzliches Doku-/README-Repository, falls Doku separat liegt */
  docsUrl?: string;
  /** Pfad zu einem Screenshot, relativ zu /public (z.B. "/screenshots/aktienwatcher.png") */
  screenshot?: string;
  highlights: string[];
  sections: Array<{
    heading: string;
    body: string;
    items?: string[];
  }>;
}

export interface SkillGroup {
  title: string;
  items: string[];
}
