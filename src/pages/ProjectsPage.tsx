import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function ProjectsPage() {
  const live = projects.filter(p => p.status !== 'archived');
  const archive = projects.filter(p => p.status === 'archived');

  return (
    <div className="container">
      <div className="section-label">Portfolio</div>
      <h1 style={{ marginBottom: 'var(--space-4)' }}>Projekte</h1>
      <p style={{ marginBottom: 'var(--space-12)', maxWidth: 640 }}>
        Sechs Projekte, drei verschiedene Domänen. Jedes ist klein genug, um es zu
        Ende zu bringen, aber gross genug, um etwas Konkretes zu lernen.
      </p>

      <div className="section-label">Aktuell</div>
      <h2 style={{ marginBottom: 'var(--space-6)' }}>Aktuelle Arbeiten</h2>
      <div className="projects-grid" style={{ marginBottom: 'var(--space-16)' }}>
        {live.map(p => <ProjectCard key={p.slug} project={p} />)}
      </div>

      <div className="section-label">Archiv</div>
      <h2 style={{ marginBottom: 'var(--space-6)' }}>Ältere Projekte</h2>
      <div className="projects-grid">
        {archive.map(p => <ProjectCard key={p.slug} project={p} />)}
      </div>
    </div>
  );
}
