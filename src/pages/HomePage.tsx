import { Link } from 'react-router-dom';
import { about } from '../data/about';
import { projects } from '../data/projects';
import { skillGroups } from '../data/skills';
import ProjectCard from '../components/ProjectCard';

export default function HomePage() {
  const featured = projects.filter(p => p.status !== 'archived').slice(0, 3);

  return (
    <>
      {/* Hero mit Bild */}
      <section className="container hero">
        <div className="hero-grid">
          <div className="hero-text">
            <div className="hero-eyebrow">{about.role} · {about.location}</div>
            <h1>
              Hi, ich bin {about.name}.<br />
              Ich baue{' '}
              <span className="highlight">Web-, Desktop- und ML-Projekte</span>{' '}
              um zu lernen.
            </h1>
            <p className="hero-lead">{about.intro}</p>
            <div className="hero-actions">
              <Link to="/projekte" className="btn btn-primary">
                Projekte ansehen →
              </Link>
              <Link to="/kontakt" className="btn btn-ghost">
                Kontakt
              </Link>
            </div>
          </div>

          <div className="hero-portrait">
            <div className="portrait-glow" aria-hidden />
            <img
              src="/profile.jpg"
              alt={`${about.name} - Portrait`}
              className="portrait"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Featured Projekte */}
      <section className="container section">
        <div className="section-header">
          <div>
            <div className="section-label">Ausgewählte Arbeiten</div>
            <h2>Was ich gerade baue</h2>
          </div>
          <Link to="/projekte" className="btn btn-ghost">Alle Projekte →</Link>
        </div>
        <div className="projects-grid">
          {featured.map(p => <ProjectCard key={p.slug} project={p} />)}
        </div>
      </section>

      {/* Skills */}
      <section className="container section">
        <div className="section-header">
          <div>
            <div className="section-label">Was ich kann</div>
            <h2>Tech-Stack</h2>
          </div>
        </div>
        <div className="skills-grid">
          {skillGroups.map(group => (
            <div key={group.title} className="skill-group">
              <h3>{group.title}</h3>
              <ul className="skill-list">
                {group.items.map(s => <li key={s}>{s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Aktuell-Suche */}
      <section className="container section">
        <div className="section-label">Status</div>
        <h2 style={{ marginBottom: 'var(--space-4)' }}>Aktuell auf Praktikumssuche</h2>
        <p style={{ fontSize: '1.1rem', maxWidth: 640 }}>{about.searching}</p>
        <div style={{ marginTop: 'var(--space-6)' }}>
          <Link to="/kontakt" className="btn btn-primary">Kontakt aufnehmen →</Link>
        </div>
      </section>
    </>
  );
}
