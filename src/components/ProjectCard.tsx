import { Link } from 'react-router-dom';
import type { Project } from '../types/project';
import TechBadge from './TechBadge';

interface Props {
  project: Project;
}

const STATUS_LABEL: Record<Project['status'], string> = {
  live: 'Live',
  wip: 'In Arbeit',
  archived: 'Archiv'
};

export default function ProjectCard({ project }: Props) {
  return (
    <Link to={`/projekte/${project.slug}`} className="project-card">
      <div className="project-card-header">
        <h3>{project.title}</h3>
        <div className="project-card-meta">
          <span className={`project-card-status ${project.status === 'wip' ? 'wip' : ''}`} />
          <span>{STATUS_LABEL[project.status]}</span>
          <span>·</span>
          <span>{project.year}</span>
        </div>
      </div>
      <p>{project.tagline}</p>
      <div className="tech-badges">
        {project.techs.slice(0, 6).map(t => (
          <TechBadge key={t} label={t} />
        ))}
      </div>
    </Link>
  );
}
