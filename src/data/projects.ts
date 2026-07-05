import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    slug: 'nexusshop',
    title: 'NexusShop',
    tagline: 'Product-Microservice in ASP.NET Core 8 mit Clean Architecture',
    description:
      'Ein produktionsnaher Product-Microservice für eine E-Commerce-Plattform. Vier sauber getrennte Schichten, EF Core Code-First, JWT-gesicherte Admin-Endpunkte, FluentValidation und eine xUnit-Test-Suite mit über 80% Abdeckung der Geschäftslogik.',
    year: '2026',
    status: 'live',
    techs: ['C# 12', '.NET 8', 'ASP.NET Core', 'EF Core', 'JWT', 'FluentValidation', 'Swagger', 'xUnit', 'Moq', 'FluentAssertions'],
    repoUrl: 'https://github.com/Elefant78/NexusShop',
    highlights: [
      'Clean Architecture mit strikter Dependency-Rule - der Domain-Layer hat null externe Abhängigkeiten',
      'JWT-Authentifizierung mit Rollen: nur Admins dürfen Produkte anlegen, ändern, löschen',
      'EF Core Code-First mit Fluent API und Money als Owned-Value-Object',
      'Über 80% Test-Abdeckung der Application-Logik mit gemockten Repositories (Moq + FluentAssertions)',
      'Läuft sofort ohne Setup: SQLite-Fallback neben SQL Server, clonen und starten'
    ],
    sections: [
      {
        heading: 'Architektur',
        body:
          'Die Solution ist in vier Projekte geteilt: Domain (Entities, Value Objects, Repository-Interfaces), Application (Use-Cases, DTOs, Mapping, Validierung), Infrastructure (EF Core, Repositories, Unit of Work) und WebAPI (Controller, JWT, Swagger, Middleware). Die Abhängigkeiten zeigen immer nach innen - die WebAPI kennt die Infrastructure, aber der Domain-Kern kennt niemanden.'
      },
      {
        heading: 'Bewusste Entscheidungen',
        body: '',
        items: [
          'Repository-Interfaces im Domain-Layer, Implementierung in Infrastructure: das ist Dependency Inversion, dadurch wird die Geschäftslogik überhaupt erst testbar.',
          'Money als Owned-Value-Object statt zwei loser Spalten: Preis und Währung gehören zusammen und validieren sich selbst.',
          'Rich Entities statt anämischer Models: ein Product kann nie in einen ungültigen Zustand geraten, weil jede Änderung durch Methoden mit Invarianten läuft.',
          'Exceptions als Cross-Cutting-Concern: eine Middleware übersetzt NotFound/Validation/Domain-Fehler in saubere HTTP-Statuscodes, die Controller bleiben schlank.'
        ]
      },
      {
        heading: 'Testing',
        body:
          'Das Test-Projekt deckt die Application-Services mit xUnit ab. Die Repositories werden mit Moq simuliert, sodass die Logik ohne Datenbank in Isolation läuft. FluentAssertions macht die Assertions lesbar, und die Validatoren sowie Domain-Invarianten sind separat getestet.'
      },
      {
        heading: 'Was ich gelernt habe',
        body: '',
        items: [
          'Clean Architecture in der Praxis: wo welche Verantwortung hingehört und warum die Dependency-Rule so wichtig ist.',
          'Unit of Work über dem DbContext: ein Use-Case committet eine Transaktion und bleibt voll mockbar.',
          'JWT und rollenbasierte Autorisierung sauber in ASP.NET Core konfigurieren - inklusive Bearer-Token-Eingabe direkt in Swagger.',
          'Provider-agnostisches EF Core: dasselbe Modell läuft auf SQLite und SQL Server, mit HasPrecision statt provider-spezifischer Spaltentypen.'
        ]
      }
    ]
  },
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
          'Daten-Augmentation durch Sliding-Windows: aus 4x5 Aufnahmen werden 1700 Trainings-Samples.',
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
    screenshot: '/screenshots/aktienwatcher.png',
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
    screenshot: '/screenshots/finanzmanager.png',
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
    title: 'Online-Blackjack (21)',
    tagline: 'Multiplayer-Spiel: gemeinsam online gegen den Dealer',
    description:
      'Browser-basiertes Blackjack zum gemeinsamen Spielen mit Freunden. Mein erstes echtes Team-Projekt mit Fynn - geteilte Codebase, Code-Reviews, Merge-Konflikte. Doku, Lernperioden-Reflexion und Arbeitspakete in einem separaten Repository.',
    year: '2026',
    status: 'archived',
    techs: ['JavaScript', 'HTML5', 'CSS', 'Multiplayer-Logik', 'Azure App Service'],
    liveUrl: 'https://blackjacck21-dubwbnf2eyhjd4b0.swedencentral-01.azurewebsites.net',
    repoUrl: 'https://github.com/Fynn8962/21',
    docsUrl: 'https://github.com/Elefant78/Lernperiode-14',
    highlights: [
      'Erstes ernsthaftes Multi-Player-Spiel mit synchronisiertem Spielzustand',
      'Online live spielbar - gehostet auf Azure App Service',
      'Teamarbeit mit Fynn - Git-Workflow mit Branches und Pull Requests',
      'Vollständige Blackjack-Regel-Logik inklusive Sonderfälle',
      'Separates Doku-Repository mit README und Arbeitspaketen aus der Lernperiode'
    ],
    sections: [
      {
        heading: 'Aufteilung der Repositories',
        body:
          'Der Code liegt in Fynns Repository (Fynn8962/21), weil er das Projekt-Setup gemacht hat. Die Doku, das ausführliche README und unsere Arbeitspakete habe ich in mein eigenes Repository (Elefant78/Lernperiode-14) gelegt - so kann jedes Repository für sich gelesen werden, ohne die Code-Historie mit Doku-Commits zu verwässern.'
      },
      {
        heading: 'Was ich gelernt habe',
        body: '',
        items: [
          'Realtime-State-Synchronisation zwischen mehreren Clients.',
          'Team-Workflow mit Git: Branches, Pull Requests, Konflikte lösen.',
          'Verantwortlichkeiten klar aufteilen statt alles selbst machen zu wollen.',
          'Dokumentation getrennt von Code halten, wenn das Projekt damit übersichtlicher wird.'
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
        body:
          'Dass die Basis sitzt. Wer mit React anfängt, ohne die Web-Plattform selbst zu verstehen, scheitert beim ersten Bug der nicht im Framework liegt.'
      }
    ]
  }
];

export function findProject(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}
