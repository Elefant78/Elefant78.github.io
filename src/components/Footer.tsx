import { about } from '../data/about';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        Gebaut mit React + Vite ·{' '}
        <a href={about.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>{' '}
        · © {new Date().getFullYear()} {about.name}
      </div>
    </footer>
  );
}
