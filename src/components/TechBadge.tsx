interface Props {
  label: string;
}

export default function TechBadge({ label }: Props) {
  return <span className="tech-badge">{label}</span>;
}
