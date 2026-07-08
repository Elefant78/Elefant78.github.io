import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    slug: 'connectfouronline',
    title: '4 gewinnt Online',
    tagline: 'Multiplayer mit .NET-Backend und SignalR - server-autoritativ, mit Reconnect',
    description:
      'Die dritte Ausbaustufe meines 4-gewinnt-Projekts und das erste Projekt, das meine beiden Welten kombiniert: TypeScript/React-Frontend und C#/.NET-8-Backend. Gespielt wird live über SignalR (WebSockets) - der Server ist die einzige Autorität über den Spielzustand, validiert jeden Zug und stellt Partien nach Verbindungsabbrüchen nahtlos wieder her.',
    year: '2026',
    status: 'live',
    techs: ['C# 12', '.NET 8', 'ASP.NET Core', 'SignalR', 'WebSockets', 'TypeScript', 'React 18', 'Vite', 'xUnit', 'Vitest', 'GitHub Actions', 'Azure App Service'],
    liveUrl: 'https://connectfouronline-hqh2a7hscrdgdcaw.germanywestcentral-01.azurewebsites.net/',
    repoUrl: 'https://github.com/Elefant78/ConnectFourOnline',
    screenshot: '/screenshots/connectfouronline.png',
    highlights: [
      'Server-autoritative Spiellogik: jeder Zug wird serverseitig validiert (bist du im Spiel? bist du dran? ist die Spalte frei?) - ein manipulierter Client kann nicht schummeln',
      'Reconnect-Konzept: Session-ID im localStorage statt Verbindungs-Identität - Browser-Reload oder WLAN-Aussetzer mitten in der Partie, und es geht nahtlos weiter',
      'Die Domain ist die 1:1-C#-Portierung der TypeScript pure functions aus ConnectFour: gleiche Denkweise (immutabler State), zwei Sprachen',
      'Nach jeder Änderung schickt der Server beiden Spielern einen kompletten Snapshot - der Client rendert nur noch, kein Zustand kann auseinanderlaufen',
      '31 xUnit-Tests inkl. einer kompletten E2E-Partie mit zwei echten SignalR-Clients (Sieg, Revanche-Abstimmung, Reconnect mitten im Spiel) plus 8 Vitest-Tests'
    ],
    sections: [
      {
        heading: 'Drei Ausbaustufen, ein Spiel',
        body:
          'Stufe 1: lokal und gegen die Minimax-KI (reines Frontend). Stufe 2: online per WebRTC, Peer-to-Peer ohne Server. Stufe 3, dieses Projekt: server-autoritativ mit ASP.NET Core und SignalR. Die P2P-Version funktioniert, aber beide Clients müssen einander vertrauen und ohne Vermittler gibt es keinen Reconnect. Hier fällt jede fachliche Entscheidung auf dem Server - der Client zeigt nur an, was der Server bestätigt.'
      },
      {
        heading: 'Architektur: Hub → GameService → Domain',
        body:
          'Drei Schichten mit klarer Verantwortung: Der SignalR-Hub ist reiner Transport (~100 Zeilen), der GameService verwaltet Räume, Sessions und Regeldurchsetzung, und die Domain enthält die Spiellogik als pure functions mit immutablem GameState. Nach jeder Änderung bekommen beide Spieler einen kompletten Snapshot ihrer Sicht - das macht den Client trivial und Reconnect gratis: der erste Snapshot nach der Rückkehr stellt alles wieder her.'
      },
      {
        heading: 'Das Reconnect-Konzept',
        body: '',
        items: [
          'Beim Erstellen/Beitreten bekommt jeder Spieler eine geheime Session-ID, die der Client im localStorage ablegt - die SignalR-Verbindung ist NICHT die Identität des Spielers.',
          'Bricht die Verbindung ab, bleibt der Platz reserviert; der Gegner sieht den Verbindungsstatus live.',
          'Der Client meldet sich mit Reconnect(sessionId) zurück - nach einem Reload genauso wie nach einem automatischen SignalR-Reconnect - und bekommt Brett, Runde und Punktestand als Snapshot.',
          'Timeout-Regel: ein BackgroundService schliesst Räume, in denen ein Spieler länger als 2 Minuten weg ist, und benachrichtigt den Verbliebenen.'
        ]
      },
      {
        heading: 'Testing',
        body:
          'Vitest deckt die Anzeige-Logik des Frontends ab, xUnit den Server: portierte Kernlogik, Raum-Lifecycle, Regeldurchsetzung (nicht am Zug, ohne Gegner, volle Spalte), Revanche-Abstimmung mit Startspieler-Wechsel und die Timeout-Regel. Das Highlight ist der E2E-Test: zwei echte SignalR-Clients spielen gegen den In-Memory-TestServer eine komplette Partie durch - inklusive Regelverstoss, Sieg, Revanche und einem Reconnect mitten in Runde 2. Zusätzlich wurde der komplette Flow im Browser verifiziert (zwei isolierte Profile, Reload mitten im Spiel).'
      },
      {
        heading: 'Was ich gelernt habe',
        body: '',
        items: [
          'WebSockets drehen HTTP um: der Server kann von sich aus reden - SignalR macht daraus Methodenaufrufe in beide Richtungen, inklusive Fallbacks und Auto-Reconnect.',
          'Verbindung und Identität müssen getrennte Konzepte sein, sonst beendet jeder Reload das Spiel.',
          'Vollständige Snapshots statt Delta-Updates: minimal mehr Bandbreite, dafür kann der Client-Zustand nie auseinanderlaufen.',
          'Ein Raum-Lock plus ConcurrentDictionary reicht für sauberes Concurrency-Verhalten - man braucht nicht immer verteilte Systeme.',
          'Dieselbe Logik in TypeScript und C# zu haben zeigt: die Denkweise (pure functions, immutabler State) ist die eigentliche Portierung, nicht die Syntax.'
        ]
      }
    ]
  },
  {
    slug: 'connectfour',
    title: '4 gewinnt (Connect Four)',
    tagline: 'Browser-Spiel mit Minimax-KI und Online-Modus per WebRTC – live spielbar auf GitHub Pages',
    description:
      'Das klassische 4 gewinnt als reines Frontend-Projekt: TypeScript, React und Vite, eine Minimax-KI mit Alpha-Beta-Pruning in drei Schwierigkeitsgraden, ein lokaler 2-Spieler-Modus und ein Online-Modus, der per WebRTC direkt von Browser zu Browser spielt - ganz ohne eigenen Server. Die komplette Spiellogik ist als pure functions von React getrennt und mit 36 Unit Tests abgesichert.',
    year: '2026',
    status: 'live',
    techs: ['TypeScript', 'React 18', 'Vite', 'Minimax', 'Alpha-Beta-Pruning', 'WebRTC', 'PeerJS', 'Vitest', 'Web Audio API', 'GitHub Actions', 'GitHub Pages'],
    liveUrl: 'https://elefant78.github.io/ConnectFour/',
    repoUrl: 'https://github.com/Elefant78/ConnectFour',
    screenshot: '/screenshots/connectfour.png',
    highlights: [
      'Minimax mit Alpha-Beta-Pruning: die Stufe "schwer" durchsucht den Spielbaum bis Tiefe 7 und antwortet dank Zugsortierung (Mitte zuerst) trotzdem deutlich unter einer Sekunde',
      'Bewertungsfunktion über alle 4er-Fenster des Bretts: offene Dreier stark gewichtet, Zentrumsspalte bevorzugt - sofortige Gewinnzüge und Blocks sind auf jeder Stufe garantiert',
      'Online-Modus per WebRTC (PeerJS): Spiel erstellen, Einladungslink oder 6-stelligen Code verschicken, Züge laufen direkt von Browser zu Browser - ohne eigenen Server',
      'Strikte Trennung von Logik und UI: die komplette Spiellogik lebt als pure functions mit immutablem State in eigenen Modulen ohne React-Import',
      '36 Unit Tests (Vitest): Gewinn-Erkennung in allen vier Richtungen, ungültige Züge, KI-Pflichtzüge, Online-Protokoll und eine komplette programmatische Partie KI gegen KI',
      'Hover-Vorschau, Fall-Animation, Gewinnlinien-Hervorhebung, Undo, Punktestand und synthetisierte Sounds per Web Audio API - responsive und komplett auf Deutsch'
    ],
    sections: [
      {
        heading: 'Die KI: Minimax mit Alpha-Beta-Pruning',
        body:
          'Die KI simuliert abwechselnd eigene Züge und die besten Antworten des Gegners bis zu einer festen Suchtiefe und wählt den Zug mit dem besten garantierten Ergebnis. Alpha-Beta-Pruning schneidet dabei Äste ab, in die ein perfekter Gegenspieler nie hineinlaufen würde - das Ergebnis bleibt identisch, aber die Suche wird um Grössenordnungen schneller. Damit das Pruning oft greift, werden die Spalten von der Mitte nach aussen untersucht: gute Züge zuerst bedeutet mehr abgeschnittene Äste.'
      },
      {
        heading: 'Bewertungsfunktion & Schwierigkeitsgrade',
        body: '',
        items: [
          'Am Ende der Suchtiefe werden alle 4er-Fenster des Bretts (horizontal, vertikal, beide Diagonalen) gezählt: eigene Steine positiv, gegnerische negativ, offene Dreier stark gewichtet.',
          'Steine in der Zentrumsspalte bekommen einen Bonus, weil durch die Mitte die meisten Gewinnlinien laufen.',
          'Die Schwierigkeitsgrade steuern die Suchtiefe: leicht = 2, mittel = 4, schwer = 7. "Leicht" spielt zusätzlich mit 35% Wahrscheinlichkeit einen Zufallszug.',
          'Unabhängig von der Stufe gilt: sofortige Gewinnzüge werden immer genommen und gegnerische Gewinnzüge immer blockiert - diese Prüfung läuft vor allem anderen.'
        ]
      },
      {
        heading: 'Architektur',
        body:
          'Die Spiellogik (Brett, Züge, Gewinnprüfung, KI) liegt in eigenen Modulen als pure functions mit immutablem State - ohne einen einzigen React-Import. Jeder Zug erzeugt einen neuen GameState, der alte bleibt unverändert. Das macht die Logik isoliert testbar und Undo trivial: die Zug-Historie wird einfach ohne die letzten Züge neu abgespielt. React kümmert sich nur um Darstellung und Interaktion.'
      },
      {
        heading: 'Online-Modus: Peer-to-Peer per WebRTC',
        body:
          'Auch online bleibt das Spiel ein reines Frontend-Projekt ohne eigenen Server: Der Host erstellt ein Spiel und bekommt einen 6-stelligen Code plus Einladungslink, der Gast tritt damit bei. Der öffentliche PeerJS-Signalserver vermittelt nur den Verbindungsaufbau - danach laufen alle Züge direkt zwischen den beiden Browsern über einen WebRTC-DataChannel. Der Startspieler wechselt pro Runde deterministisch aus der Rundennummer, empfangene Nachrichten werden zur Laufzeit validiert und Züge nur übernommen, wenn der Gegner wirklich am Zug ist.'
      },
      {
        heading: 'Testing & Deployment',
        body:
          'Vitest deckt Kernlogik und Online-Protokoll mit 36 Tests ab: Gewinn-Erkennung in allen vier Richtungen, Unentschieden, ungültige Züge (volle Spalte, Zug nach Spielende), Immutabilität, KI-Pflichtzüge auf allen Stufen (Gewinnen geht vor Blockieren), Antwortzeit unter einer Sekunde, eine komplette Partie KI gegen KI sowie Spiel-Codes und Nachrichten-Validierung des Online-Protokolls. Der Online-Flow wurde zusätzlich End-to-End mit zwei Browser-Instanzen über den echten Signalserver verifiziert. Ein GitHub-Actions-Workflow testet und baut bei jedem Push und deployed automatisch auf GitHub Pages.'
      },
      {
        heading: 'Was ich gelernt habe',
        body: '',
        items: [
          'Klassische Spielbaum-Suche: Minimax denkt in Garantien, nicht in Hoffnungen - der Gegner wird immer als perfekt angenommen.',
          'Alpha-Beta-Pruning lebt von der Zugsortierung: gute Züge zuerst macht aus derselben Suchtiefe ein Vielfaches an Geschwindigkeit.',
          'Immutabler State macht Spiellogik testbar und Features wie Undo fast gratis.',
          'WebRTC braucht keinen Spielserver: ein Signalserver für den Verbindungsaufbau reicht, danach reden die Browser direkt miteinander - Peer-Daten müssen aber wie jede Nutzereingabe validiert werden.',
          'Soundeffekte brauchen keine Audiodateien: die Web Audio API synthetisiert Plopp, Sieg-Arpeggio und Remis-Ton aus Oszillatoren.',
          'Vite-Apps auf GitHub Pages brauchen die richtige base-Konfiguration, sonst zeigen alle Asset-Pfade ins Leere.'
        ]
      }
    ]
  },
  {
    slug: 'battleship',
    title: 'Schiffe versenken (Battleship)',
    tagline: 'API-Game mit .NET 8 Backend, JWT-Auth, SQLite und einem Bot mit Hunt-&-Target-Strategie',
    description:
      'Das klassische Schiffe versenken als Full-Stack-Projekt: Ein C#/.NET 8 Backend verwaltet die verdeckten Flotten, validiert jeden Zug serverseitig und stellt eine REST-API bereit. Gespielt wird im Browser gegen einen Bot, der nach einem Treffer gezielt weiterjagt. 24 Unit Tests sichern Regel-Engine und Bot ab.',
    year: '2026',
    status: 'live',
    techs: ['C# 12', '.NET 8', 'ASP.NET Core', 'EF Core', 'SQLite', 'JWT', 'Swagger', 'xUnit', 'REST API', 'Vanilla JS'],
    repoUrl: 'https://github.com/Elefant78/Battleship',
    screenshot: '/screenshots/battleship.png',
    highlights: [
      'Hidden Information sauber gelöst: Die gegnerischen Schiffspositionen verlassen nie die Service-Schicht - das Frontend bekommt nur Miss/Hit/Sunk',
      'Unerbittliche Regel-Engine: Flottenvalidierung (keine Überlappung, keine Berührung), Zugreihenfolge und Doppelschuss-Sperre serverseitig erzwungen',
      'Bot mit Hunt-&-Target: Schachbrettmuster in der Suche, nach einem Treffer systematische Jagd entlang der Trefferlinie bis zum Versenken',
      '24 Unit Tests (xUnit) plus kompletter End-to-End-Durchlauf einer Partie über die API',
      'Web-Frontend ohne Frameworks: Platzierung per Klick mit Live-Vorschau, Soundeffekte per Web Audio API, Flotten-Auflösung am Spielende'
    ],
    sections: [
      {
        heading: 'Architektur',
        body:
          'Die Solution besteht aus der Web-API (Controller, JWT-Auth, Swagger, Error-Middleware), einer Service-Schicht mit der kompletten Spiellogik (GameService als Regel-Engine, BotService, FleetValidator) und EF Core mit SQLite für die Persistenz. Vier Tabellen - Users, Games, Ships, Moves - speichern den Zustand, sodass Partien jederzeit unterbrochen und fortgesetzt werden können. Das statische Frontend wird direkt von der API ausgeliefert.'
      },
      {
        heading: 'Regel-Engine & Sicherheit',
        body: '',
        items: [
          'Jeder Schuss wird serverseitig validiert: Bist du Teilnehmer? Bist du an der Reihe? Wurde das Feld schon beschossen? Verstösse liefern saubere HTTP-Fehler (400/401/403/404/409).',
          'Die Flottenaufstellung wird als Ganzes geprüft: richtige Zusammensetzung (1x4, 2x3, 3x2, 4x1), alles im 10x10-Raster, keine Überlappung und keine Berührung - auch nicht diagonal.',
          'Treffer werden pro Schiff als Bitmaske gespeichert - Versenkt-Erkennung und Siegbedingung sind damit ein Bitvergleich.',
          'Ein Unique-Index auf der Move-Tabelle verhindert Doppelschüsse zusätzlich auf Datenbank-Ebene.'
        ]
      },
      {
        heading: 'Der Bot',
        body:
          'Der Bot platziert seine Flotte zufällig, aber immer regelkonform. Beim Schiessen arbeitet er in zwei Modi: Im Hunt-Modus feuert er in einem Schachbrettmuster, das jedes Schiff ab zwei Feldern garantiert kreuzt. Nach einem Treffer wechselt er in den Target-Modus, beschiesst die Nachbarfelder und verlängert bei zwei Treffern die Linie an beiden Enden, bis das Schiff versenkt ist. In Bot-Partien antwortet er im selben API-Request - ohne zusätzliche Infrastruktur.'
      },
      {
        heading: 'Testing',
        body:
          'Das xUnit-Projekt deckt die Kernlogik mit 24 Tests ab: Flottenvalidierung mit allen Fehlerfällen, Hit/Miss/Sunk-Erkennung, Zugreihenfolge, Siegbedingung, Schutz vor Fremdzugriff und die Bot-Strategie (legale Platzierung, gezieltes Nachsetzen, Effizienz gegenüber blindem Feuern). Die Tests laufen gegen eine In-Memory-SQLite-Datenbank, also ohne Mock-Verzerrung durch das echte EF-Core-Verhalten.'
      },
      {
        heading: 'Was ich gelernt habe',
        body: '',
        items: [
          'Hidden-Information-Spiele brauchen eine klare Grenze: Der Client bekommt eine Sicht, nie den Zustand.',
          'Eine Regel-Engine, die jeden Zug validiert, macht das Spiel gleichzeitig robust und testbar.',
          'Klassische Spiel-KI ohne Machine Learning: Hunt & Target ist einfach zu implementieren und spielt spürbar stark.',
          'DOM-Rebuilds während Maus-Interaktionen verschlucken Click-Events - einmal bauen, dann nur noch Klassen ändern.'
        ]
      }
    ]
  },
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
