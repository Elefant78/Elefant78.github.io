import type { SkillGroup } from '../types/project';

export const skillGroups: SkillGroup[] = [
  {
    title: 'Sprachen',
    items: ['TypeScript', 'C# (.NET 8)', 'Python', 'JavaScript', 'HTML / CSS', 'SQL']
  },
  {
    title: 'Frontend',
    items: ['React', 'Vite', 'React Router', 'Recharts', 'Responsive CSS']
  },
  {
    title: 'Backend / Daten',
    items: ['Entity Framework Core', 'SQLite', 'REST-APIs', 'Finnhub-Integration']
  },
  {
    title: 'Machine Learning',
    items: ['TensorFlow / Keras', 'scikit-learn', 'MediaPipe', 'OpenCV', 'NumPy / Pandas']
  },
  {
    title: 'Architektur & Praxis',
    items: ['MVVM', 'Dependency Injection', 'Repository-Pattern', 'Unit-Tests (xUnit)', 'Git & GitHub']
  },
  {
    title: 'Tools',
    items: ['Visual Studio', 'VS Code', 'GitHub Actions', 'Vercel', 'Streamlit']
  }
];
