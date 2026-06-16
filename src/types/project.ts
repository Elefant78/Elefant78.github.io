export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  year: string;
  status: 'live' | 'wip' | 'archived';
  techs: string[];
  liveUrl?: string;
  repoUrl?: string;
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
