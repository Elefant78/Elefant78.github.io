import { about } from '../data/about';

export default function ContactPage() {
  return (
    <div className="container">
      <div className="section-label">Kontakt</div>
      <h1 style={{ marginBottom: 'var(--space-4)' }}>Lass uns reden.</h1>
      <p style={{ maxWidth: 640, fontSize: '1.05rem' }}>
        Wenn du auf der Suche nach einem motivierten Praktikanten bist, oder mir
        Feedback zu einem Projekt geben möchtest - schreib mir.
      </p>

      <div className="contact-grid">
        <a href={`mailto:${about.email}`} className="contact-card">
          <div className="contact-card-label">E-Mail</div>
          <div className="contact-card-value">{about.email}</div>
        </a>
        <a href={about.github} target="_blank" rel="noopener noreferrer" className="contact-card">
          <div className="contact-card-label">GitHub</div>
          <div className="contact-card-value">@Elefant78</div>
        </a>
        <div className="contact-card">
          <div className="contact-card-label">Standort</div>
          <div className="contact-card-value">{about.location}</div>
        </div>
      </div>
    </div>
  );
}
