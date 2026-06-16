import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    slug: 'formcheck',
    title: 'FormCheck',
    tagline: 'KI-Fitness-Coach mit Pose-Estimation und selbst trainiertem LSTM',
    description:
      'Eine Live-Web-App, die per Webcam Kniebeugen, Liegestütze und Plank erkennt, Wiederholungen zählt und Form-Feedback gibt. End-to-End ML-Pipeline: Daten selbst aufgenommen, Modell selbst trainiert.',
    year: '2026',
    status: 'wip',
    techs: ['Python', 'TensorFlow', 'MediaPipe', 'OpenCV', 'Streamlit', 'scikit-learn'],
    repoUrl: 'https://github.com/Elefant78/formcheck',
    highlights: [
      'Eigene Daten aufgenommen, gelabelt, vorverarbeitet',
      'LSTM-Klassifikator mit Masking-Layer und Sliding-Window-Augmentation',
      'Hybride Architektur: ML für Übungs-Erkennung, Regeln für erklärbares Form-Feedback',
      'Live-Inferenz unter 33ms pro Frame (30 FPS)'
    ],
    sections: [
      {
        heading: 'Problem',
        body:
          'Trainings-Apps auf dem Markt sind entweder reine Timer ohne Verständnis für die Bewegung, oder sie nutzen Wearables. Ich wollte zeigen, dass Webcam plus klassisches Deep-Learning für Erkennung und Form-Feedback ausreichen.'
      },
      {
        heading: 'Lösung',
        body:
          'Eine Pipeline aus drei Stufen: MediaPipe extrahiert 33 Pose-Keypoints pro Frame, ein LSTM klassifiziert das aktuelle 30-Frames-Fenster als Übung, und eine State Machine plus Winkel-Heuristiken zählt Reps und prüft die Form.'
      },
      {
        heading: 'Was ich gelernt habe',
        body: '',
        items: [
          'Sequence-Modeling: warum LSTM, wann Transformer - bei kleinen Datensätzen ist LSTM robuster.',
          'Daten-Augmentation durch Sliding-Windows: aus 4×5 Aufnahmen werden 1700 Trainings-Samples.',
          'Pose-Normalisierung relativ zur Hüfte: ohne diesen Schritt lernt das Modell nur deine Aufnahme-Position.',
          'Real-Time-Constraints: alles muss in unter 33ms durchlaufen, sonst ruckelt der Stream.',
          'Erklärbare vs. ML-getriebene Komponenten: Klassifikation per Modell, Feedback bewusst per Regel.'
        ]
      }
    ]
  },
  {
    slug: 'aktienwatcher',
    title: 'AktienWatcher',
    tagline: 'Live-Aktien-Watchlist mit Charts und Vergleichs-Funktion',
    description:
      'Eine React + TypeScript Web-App mit Live-Kursen via Finnhub, sortierbaren Watchlists, Detail-Charts (1W bis 5J) und einem Vergleichs-Modus für mehrere Aktien.',
    year: '2026',
    status: 'live',
    techs: ['React 18', 'TypeScript', 'Vite', 'React Router', 'Recharts', 'Finnhub API'],
    liveUrl: 'https://aktien-watcher-3rub.vercel.app/',
    repoUrl: 'https://github.com/Elefant78/aktien-watcher-',
    highlights: [
      'Live-Kurse mit Auto-Refresh und localStorage-Persistenz',
      'Charts und %-Vergleich von bis zu 3 Aktien gleichzeitig',
      'Dark-Mode-UI inspiriert von modernen Trading-Apps',
      'Auf Vercel deployed mit CI/CD via GitHub'
    ],
    sections: [
      {
        heading: 'Architektur-Entscheidungen',
        body: '',
        items: [
          'React + Vite statt Next.js: clientseitig reicht, schneller Dev-Server, schlanker Build.',
          'Kein Backend: Finnhub erlaubt CORS direkt vom Browser - für ein Lernprojekt unkompliziert.',
          'Recharts statt D3: deklarative React-Komponenten, weniger Boilerplate.',
          'React Hooks statt Redux/Zustand: der State ist überschaubar genug.'
        ]
      },
      {
        heading: 'Was ich gelernt habe',
        body: '',
        items: [
          'TypeScript-Generics für die typsicheren API-Antworten.',
          'Custom Hooks: useWatchlist + useWatchlistQuotes kapseln Datenladen und Persistenz.',
          'Chart-Normalisierung: bei Vergleichen müssen unterschiedliche Preisskalen auf %-Basis gebracht werden.',
          'Vercel Deployment mit Environment-Variablen für API-Keys.'
        ]
      }
    ]
  },
  {
    slug: 'finanzmanager',
    title: 'FinanzManager',
    tagline: 'WPF-Desktop-App in C# mit MVVM, EF Core und Unit-Tests',
    description:
      'Persönliches Haushaltsbuch mit Buchungen, Kategorien, Monatsstatistik und lokaler SQLite-Datenbank. Sauberer MVVM-Aufbau mit Repository-Pattern, getestet mit xUnit und InMemory-SQLite.',
    year: '2026',
    status: 'live',
    techs: ['C# 12', '.NET 8', 'WPF', 'EF Core', 'SQLite', 'xUnit', 'GitHub Actions'],
    repoUrl: 'https://github.com/Elefant78/FinanzManager',
    highlights: [
      'MVVM mit eigener Infrastruktur (ViewModelBase, RelayCommand, AsyncRelayCommand)',
      'Repository-Pattern mit Interfaces - macht Tests überhaupt erst möglich',
      'Unit-Tests gegen echtes SQLite In-Memory (nicht der EF-InMemory-Provider)',
      'CI-Pipeline mit GitHub Actions, baut und testet bei jedem Push'
    ],
    sections: [
      {
        heading: 'Architektur',
        body:
          'Eine klassische Schichten-Trennung: XAML-Views binden an ViewModels, die ViewModels nutzen Repository-Interfaces, dahinter sitzt EF Core mit SQLite. Alle Services und Models werden in einem DI-Container in App.xaml.cs registriert.'
      },
      {
        heading: 'Bewusste Entscheidungen',
        body: '',
        items: [
          'MVVM ohne externes Framework: ich wollte das Pattern wirklich verstehen, nicht CommunityToolkit importieren.',
          'DbContextFactory statt scoped DbContext: in WPF gibt es keine HTTP-Request-Scopes.',
          'decimal statt double für Beträge: keine Fliesskomma-Bugs in Geld-Berechnungen.',
          'DeleteBehavior.Restrict für Kategorien: Schutz vor versehentlichem Datenverlust, wird im Unit-Test geprüft.'
        ]
      },
      {
        heading: 'Was ich gelernt habe',
        body: '',
        items: [
          'Lifetime-Management in Dependency Injection: warum ViewModels Singleton, Dialog-Windows Transient sind.',
          'EF Core Fluent API: Beziehungen, Constraints, Seed-Daten an einem Ort.',
          'Test-Strategie: SQLite In-Memory simuliert das echte FK-Verhalten, EF-InMemory nicht.',
          'GitHub Actions: erste eigene CI-Pipeline für ein .NET-Projekt.'
        ]
      }
    ]
  },
  {
    slug: 'blackjack',
    title: 'Online-Blackjack',
    tagline: 'Multiplayer-Spiel: gemeinsam online gegen den Dealer',
    description:
      'Browser-basiertes Blackjack zum gemeinsamen Spielen mit Freunden. Mein erstes echtes Team-Projekt - geteilte Codebase, Code-Reviews, Merge-Konflikte.',
    year: '2025',
    status: 'archived',
    techs: ['JavaScript', 'HTML5', 'CSS', 'WebSockets'],
    highlights: [
      'Erstes ernsthaftes Multi-Player-Spiel mit Realtime-State',
      'Teamarbeit mit zwei Freunden - Git, Branches, Reviews',
      'Vollständige Spielregel-Logik inkl. Splits und Doubles'
    ],
    sections: [
      {
        heading: 'Was ich gelernt habe',
        body: '',
        items: [
          'Realtime-State-Synchronisation zwischen mehreren Clients.',
          'Team-Workflow mit Git: Branches, PRs, Konflikte lösen.',
          'Das Wichtigste: nicht alles selbst machen wollen, sondern aufteilen und vertrauen.'
        ]
      }
    ]
  },
  {
    slug: 'csharp-vlog',
    title: 'C#-Lerntagebuch',
    tagline: 'Video-Tutorial-Serie: meine ersten Schritte mit C#',
    description:
      'Eine Vlog-Reihe, in der ich meinen Weg vom JavaScript-Hintergrund in die C#- und .NET-Welt dokumentiere. Lernen durch Erklären.',
    year: '2025',
    status: 'archived',
    techs: ['C#', '.NET', 'Video-Produktion'],
    highlights: [
      'Eigeninitiative: niemand hat es verlangt, ich wollte es lernen und teilen',
      'Lernen durch Erklären - der beste Weg um Konzepte wirklich zu verstehen',
      'Reflexionsfähigkeit: ich zeige auch Fehler und Sackgassen'
    ],
    sections: [
      {
        heading: 'Warum?',
        body:
          'Wenn ich etwas wirklich verstehen will, erkläre ich es. Die Kamera zwingt mich, mein Gedankenmodell so klar zu formulieren, dass es jemand anderes nachvollziehen kann - der schnellste Weg, eigene Wissenslücken zu erkennen.'
      }
    ]
  },
  {
    slug: 'schule-web',
    title: 'Schulprojekte (HTML/CSS/JS)',
    tagline: 'Web-Grundlagen aus dem Unterricht',
    description:
      'Eine kuratierte Auswahl von Schulübungen, die meinen Einstieg ins Web zeigen. Keine Frameworks - reines HTML, CSS und Vanilla-JavaScript.',
    year: '2024',
    status: 'archived',
    techs: ['HTML5', 'CSS', 'Vanilla JavaScript'],
    highlights: [
      'Grundlagen-Festigung: Box-Model, Flexbox, Grid',
      'Pure JavaScript ohne Framework-Magie - schafft Verständnis',
      'Erste Schritte mit semantischem HTML und Barrierefreiheit'
    ],
    sections: [
      {
        heading: 'Hier zeige ich Folgendes',
        body: 'Dass die Basis sitzt. Wer mit React anfängt, ohne die Web-Plattform selbst zu verstehen, scheitert beim ersten Bug der nicht im Framework liegt.'
      }
    ]
  }
];

export function findProject(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}
