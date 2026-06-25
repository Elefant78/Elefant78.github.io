import { Link, useParams } from 'react-router-dom';
import { findProject } from '../data/projects';
import TechBadge from '../components/TechBadge';

const STATUS_LABEL: Record<'live' | 'wip' | 'archived', string> = {
  live: 'Live',
  wip: 'In Arbeit',
  archived: 'Archiv'
};

export default function ProjectDetailPage() {
  const { slug = '' } = useParams<{ slug: string }>();
  const project = findProject(slug);

  if (!project) {
    return (
      <div className="container">
        <Link to="/projekte" className="detail-back">← Zurück zu Projekten</Link>
        <h1>Projekt nicht gefunden</h1>
        <p>Der Slug "{slug}" existiert nicht.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <Link to="/projekte" className="detail-back">← Zurück zu Projekten</Link>

      <div className="detail-hero">
        <div className="section-label">{project.year} · {STATUS_LABEL[project.status]}</div>
        <h1>{project.title}</h1>
        <p style={{ fontSize: '1.15rem', marginTop: 'var(--space-3)', maxWidth: 720 }}>
          {project.tagline}
        </p>

        <div className="tech-badges" style={{ marginTop: 'var(--space-6)' }}>
          {project.techs.map(t => <TechBadge key={t} label={t} />)}
        </div>

        <div className="detail-links">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Live-Demo →
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              Code-Repository
            </a>
          )}
          {project.docsUrl && (
            <a href={project.docsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              Dokumentation
            </a>
          )}
        </div>
      </div>

      {project.screenshot && (
        <div className="detail-screenshot">
          <img src={project.screenshot} alt={`${project.title} Screenshot`} />
        </div>
      )}

      <div className="detail-section">
        <h2>Worum es geht</h2>
        <p style={{ fontSize: '1.05rem' }}>{project.description}</p>
      </div>

      <div className="detail-section">
        <h2>Highlights</h2>
        <ul>
          {project.highlights.map(h => <li key={h}>{h}</li>)}
        </ul>
      </div>

      {project.sections.map((section, idx) => (
        <div key={idx} className="detail-section">
          <h2>{section.heading}</h2>
          {section.body && <p>{section.body}</p>}
          {section.items && (
            <ul>
              {section.items.map(item => <li key={item}>{item}</li>)}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
