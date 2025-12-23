export type Language = "en" | "de";

export const translations = {
  en: {
    // Header
    logo: "UNCHAINED",
    logoAccent: "Academy",
    bookSession: "Book a Session",

    // Hero
    heroTag: "AI agents for founders",
    heroSubtitle: "Stop doing the work. Start directing AI agents that research, write, build, and ship for you. Hands-on training for founders who want to 10x their output — without hiring.",
    getStarted: "Get Started",

    // Testimonial
    testimonialQuote: "\"In two hours, I went from skeptical to having an AI agent draft my marketing content, research competitors, and build an internal dashboard. This changes everything.\"",
    testimonialAuthor: "Michael Borter",
    testimonialRole: "CEO, Cashare",

    // Terminal section
    terminalSectionLabel: "See It In Action",
    terminalTitle: "This is an AI agent",
    terminalSubtitle: "Not chatting. Not autocomplete. An agent that takes action — researches, creates, builds, ships.",
    terminalWindowTitle: "claude — your AI agent",

    // Stats
    stat1Value: "10x",
    stat1Label: "Faster content creation with AI agents",
    stat2Value: "5hrs",
    stat2Label: "Saved per week on marketing tasks",
    stat3Value: "2hrs",
    stat3Label: "From zero to shipping your first agent",
    stat4Value: "∞",
    stat4Label: "Things you'll stop doing manually",

    // Shift section
    shiftLabel: "The Shift",
    shiftTitle: "From executor to director",
    shiftBefore: "Before",
    shiftAfter: "After",
    shiftBefore1: "Research competitors manually",
    shiftBefore2: "Write content yourself",
    shiftBefore3: "Wait weeks for dev",
    shiftBefore4: "Your time is the bottleneck",
    shiftAfter1: "Agents research for you",
    shiftAfter2: "Agents draft your content",
    shiftAfter3: "Build tools in hours",
    shiftAfter4: "Your judgment is the bottleneck",
    shiftResultIntro: "The result:",
    shiftResult: "Ship marketing in minutes. Build internal tools in hours. Run your company like you have a team of 10.",

    // Use cases
    useCasesLabel: "What Agents Can Do",
    useCasesTitle: "Real work, not demos",
    useCase1Title: "Marketing on Autopilot",
    useCase1Desc: "Research your competitors. Analyze their positioning. Draft LinkedIn posts, email sequences, and landing page copy — all tailored to your voice and market.",
    useCase1Item1: "Competitive research in minutes",
    useCase1Item2: "Content drafted to your brand voice",
    useCase1Item3: "Connected to your actual tools",
    useCase1Item4: "Scheduled and posted automatically",
    useCase2Title: "Research & Intelligence",
    useCase2Desc: "Never read 50 articles to understand a market again. Agents crawl, synthesize, and summarize — giving you insights, not information overload.",
    useCase2Item1: "Market analysis on demand",
    useCase2Item2: "Competitor monitoring",
    useCase2Item3: "Customer research synthesized",
    useCase2Item4: "Trends spotted before everyone else",
    useCase3Title: "Build Without Developers",
    useCase3Desc: "Internal dashboards. Customer portals. Automation scripts. Describe what you need, Claude builds it — and fixes its own bugs along the way.",
    useCase3Item1: "Internal tools in hours",
    useCase3Item2: "Prototypes for investor demos",
    useCase3Item3: "Automations that save hours weekly",
    useCase3Item4: "No dev backlog, no waiting",

    // Who section
    whoLabel: "Who This Is For",
    whoTitle: "Founders who want leverage",
    who1Title: "Startup Founders",
    who1Desc: "You're doing 5 jobs. Marketing, product, sales, ops, support. AI agents let you do all of them faster — without hiring.",
    who1Item1: "Ship marketing without a marketing hire",
    who1Item2: "Build MVPs without a dev team",
    who1Item3: "Research without an analyst",
    who2Title: "CEOs & Executives",
    who2Desc: "You need information fast and decisions made. Stop waiting on reports. Get the analysis you need, when you need it.",
    who2Item1: "Competitive intel on demand",
    who2Item2: "Board materials drafted in minutes",
    who2Item3: "Automate the CEO busywork",
    who3Title: "Growing Teams",
    who3Desc: "Scale output without scaling headcount. Give every team member an AI agent that handles their repetitive work.",
    who3Item1: "Shared playbook for the team",
    who3Item2: "Consistent AI-assisted workflow",
    who3Item3: "More output, same team size",

    // What you'll learn
    learnLabel: "What You'll Learn",
    learnTitle: "From passenger to pilot in one session",
    learn1Title: "Agents, Not Autocomplete",
    learn1Desc: "The mental shift: stop asking questions, start giving directions. Let Claude take action — create files, run commands, fix its own mistakes.",
    learn2Title: "Marketing Agents",
    learn2Desc: "Research competitors, draft content, analyze your market. Set up agents that handle your marketing tasks so you can focus on strategy.",
    learn3Title: "Building Without Code",
    learn3Desc: "Dashboards, tools, automations. Describe what you want, Claude builds it. Learn when to let it run and when to intervene.",
    learn4Title: "Connected Tools (MCP)",
    learn4Desc: "Connect Claude to Google Drive, Slack, your database, LinkedIn. Agents that don't just talk — they take action in your real tools.",
    learn5Title: "Advanced Control",
    learn5Desc: "Plan mode for complex tasks. Ultrathink for hard problems. Know which tool to use when, and how to steer without micromanaging.",
    learn6Title: "Ship to Production",
    learn6Desc: "From prototype to live product. Deploy dashboards, automate workflows, set up systems that run without you.",

    // About section
    aboutLabel: "Your Guide",
    aboutTitle: "Built by practitioners, not theorists",
    aboutDesc: "We're <a href=\"https://unchained.ch\" target=\"_blank\" rel=\"noopener\">Unchained</a> — a Zürich-based team that's shipped 100+ AI-assisted projects to production. E-commerce platforms, internal tools, marketing automation, browser extensions. We've made the mistakes so you don't have to.",
    aboutStat1: "100+",
    aboutStat1Label: "Projects shipped",
    aboutStat2: "15+",
    aboutStat2Label: "Years building",
    aboutStat3: "Zürich",
    aboutStat3Label: "Based",

    // Formats
    formatsLabel: "Formats",
    formatsTitle: "Choose your path",
    format1Title: "Executive 1:1",
    format1Price: "CHF 500 / 2 hours",
    format1Desc: "Hands-on session tailored to your business. We set up your first agents, work on real tasks — marketing, research, building — and you leave ready to run.",
    format2Title: "Launchpad",
    format2Price: "CHF 1,500 / one-time",
    format2Desc: "Full technical setup. Git, CI/CD, Claude Code with API, MCP connections to your tools. You walk away with a production-ready AI workflow.",
    format3Title: "Team Workshop",
    format3Price: "CHF 2,500 / half-day",
    format3Desc: "Get your whole team on the same page. Live agent demos, hands-on practice, shared playbook. Everyone leaves with working agents.",
    format4Title: "Academy Partner",
    format4Price: "CHF 1,500 / month",
    format4Desc: "Async support whenever you need it. Bi-weekly calls to review and expand. For founders building ambitious things who want a sparring partner.",

    // CTA
    ctaTitle: "Ready to stop doing the work?",
    ctaSubtitle: "One session. Real agents. Immediate results.",
    ctaButton: "Get in Touch",

    // Footer
    footerText: "© 2025 Unchained Commerce GmbH · Zürich · ",
    impressum: "Impressum",
    privacy: "Privacy",

    // Typed headlines
    typedPhrases: [
      "Direct AI agents",
      "Ship in hours, not weeks",
      "Automate the grind",
      "Build while you sleep",
    ],
  },
  de: {
    // Header
    logo: "UNCHAINED",
    logoAccent: "Academy",
    bookSession: "Session buchen",

    // Hero
    heroTag: "KI-Agenten für Gründer",
    heroSubtitle: "Hör auf zu arbeiten. Fang an, KI-Agenten zu dirigieren, die für dich recherchieren, schreiben, bauen und ausliefern. Praxisnahe Schulung für Gründer, die ihren Output verzehnfachen wollen — ohne einzustellen.",
    getStarted: "Jetzt starten",

    // Testimonial
    testimonialQuote: "\"In zwei Stunden ging ich von skeptisch zu einem KI-Agenten, der meine Marketing-Inhalte entwirft, Wettbewerber analysiert und ein internes Dashboard baut. Das verändert alles.\"",
    testimonialAuthor: "Michael Borter",
    testimonialRole: "CEO, Cashare",

    // Terminal section
    terminalSectionLabel: "Sieh es in Aktion",
    terminalTitle: "Das ist ein KI-Agent",
    terminalSubtitle: "Kein Chat. Kein Autocomplete. Ein Agent, der handelt — recherchiert, erstellt, baut, liefert.",
    terminalWindowTitle: "claude — dein KI-Agent",

    // Stats
    stat1Value: "10x",
    stat1Label: "Schnellere Content-Erstellung mit KI-Agenten",
    stat2Value: "5h",
    stat2Label: "Gespart pro Woche bei Marketing-Aufgaben",
    stat3Value: "2h",
    stat3Label: "Von null zum ersten ausgelieferten Agenten",
    stat4Value: "∞",
    stat4Label: "Dinge, die du nicht mehr manuell machst",

    // Shift section
    shiftLabel: "Der Wandel",
    shiftTitle: "Vom Ausführer zum Dirigent",
    shiftBefore: "Vorher",
    shiftAfter: "Nachher",
    shiftBefore1: "Wettbewerber manuell recherchieren",
    shiftBefore2: "Content selbst schreiben",
    shiftBefore3: "Wochen auf Entwicklung warten",
    shiftBefore4: "Deine Zeit ist der Engpass",
    shiftAfter1: "Agenten recherchieren für dich",
    shiftAfter2: "Agenten entwerfen deine Inhalte",
    shiftAfter3: "Tools in Stunden bauen",
    shiftAfter4: "Dein Urteil ist der Engpass",
    shiftResultIntro: "Das Ergebnis:",
    shiftResult: "Marketing in Minuten ausliefern. Interne Tools in Stunden bauen. Dein Unternehmen führen, als hättest du ein Team von 10.",

    // Use cases
    useCasesLabel: "Was Agenten können",
    useCasesTitle: "Echte Arbeit, keine Demos",
    useCase1Title: "Marketing auf Autopilot",
    useCase1Desc: "Recherchiere deine Wettbewerber. Analysiere ihre Positionierung. Entwirf LinkedIn-Posts, E-Mail-Sequenzen und Landing-Page-Texte — alles auf deine Stimme und deinen Markt abgestimmt.",
    useCase1Item1: "Wettbewerbsanalyse in Minuten",
    useCase1Item2: "Content in deiner Markenstimme",
    useCase1Item3: "Mit deinen Tools verbunden",
    useCase1Item4: "Automatisch geplant und gepostet",
    useCase2Title: "Research & Intelligence",
    useCase2Desc: "Nie wieder 50 Artikel lesen, um einen Markt zu verstehen. Agenten durchsuchen, synthetisieren und fassen zusammen — geben dir Insights, nicht Informationsflut.",
    useCase2Item1: "Marktanalyse auf Abruf",
    useCase2Item2: "Wettbewerber-Monitoring",
    useCase2Item3: "Kundenforschung synthetisiert",
    useCase2Item4: "Trends vor allen anderen erkennen",
    useCase3Title: "Bauen ohne Entwickler",
    useCase3Desc: "Interne Dashboards. Kundenportale. Automatisierungsskripte. Beschreibe was du brauchst, Claude baut es — und behebt seine eigenen Fehler.",
    useCase3Item1: "Interne Tools in Stunden",
    useCase3Item2: "Prototypen für Investoren-Demos",
    useCase3Item3: "Automatisierungen, die wöchentlich Stunden sparen",
    useCase3Item4: "Kein Dev-Backlog, kein Warten",

    // Who section
    whoLabel: "Für wen ist das",
    whoTitle: "Gründer, die Hebelwirkung wollen",
    who1Title: "Startup-Gründer",
    who1Desc: "Du machst 5 Jobs. Marketing, Produkt, Sales, Ops, Support. KI-Agenten lassen dich alle schneller machen — ohne einzustellen.",
    who1Item1: "Marketing ohne Marketing-Mitarbeiter",
    who1Item2: "MVPs ohne Dev-Team bauen",
    who1Item3: "Recherche ohne Analyst",
    who2Title: "CEOs & Führungskräfte",
    who2Desc: "Du brauchst Informationen schnell und Entscheidungen getroffen. Hör auf, auf Reports zu warten. Bekomme die Analyse, die du brauchst, wann du sie brauchst.",
    who2Item1: "Wettbewerbs-Intel auf Abruf",
    who2Item2: "Board-Materialien in Minuten entworfen",
    who2Item3: "Die CEO-Fleissarbeit automatisieren",
    who3Title: "Wachsende Teams",
    who3Desc: "Output skalieren ohne Headcount zu skalieren. Gib jedem Teammitglied einen KI-Agenten, der ihre repetitive Arbeit übernimmt.",
    who3Item1: "Gemeinsames Playbook fürs Team",
    who3Item2: "Konsistenter KI-gestützter Workflow",
    who3Item3: "Mehr Output, gleiche Teamgrösse",

    // What you'll learn
    learnLabel: "Was du lernst",
    learnTitle: "Vom Passagier zum Piloten in einer Session",
    learn1Title: "Agenten, kein Autocomplete",
    learn1Desc: "Der mentale Shift: Hör auf zu fragen, fang an zu dirigieren. Lass Claude handeln — Dateien erstellen, Befehle ausführen, eigene Fehler beheben.",
    learn2Title: "Marketing-Agenten",
    learn2Desc: "Wettbewerber recherchieren, Content entwerfen, deinen Markt analysieren. Agenten einrichten, die deine Marketing-Aufgaben übernehmen, damit du dich auf Strategie fokussieren kannst.",
    learn3Title: "Bauen ohne Code",
    learn3Desc: "Dashboards, Tools, Automatisierungen. Beschreibe was du willst, Claude baut es. Lerne, wann du es laufen lässt und wann du eingreifst.",
    learn4Title: "Verbundene Tools (MCP)",
    learn4Desc: "Verbinde Claude mit Google Drive, Slack, deiner Datenbank, LinkedIn. Agenten, die nicht nur reden — sie handeln in deinen echten Tools.",
    learn5Title: "Fortgeschrittene Steuerung",
    learn5Desc: "Plan-Modus für komplexe Aufgaben. Ultrathink für schwierige Probleme. Wissen, welches Tool wann, und wie man steuert ohne Micromanagement.",
    learn6Title: "In Produktion bringen",
    learn6Desc: "Vom Prototyp zum Live-Produkt. Dashboards deployen, Workflows automatisieren, Systeme einrichten, die ohne dich laufen.",

    // About section
    aboutLabel: "Dein Guide",
    aboutTitle: "Gebaut von Praktikern, nicht Theoretikern",
    aboutDesc: "Wir sind <a href=\"https://unchained.ch\" target=\"_blank\" rel=\"noopener\">Unchained</a> — ein Zürcher Team, das 100+ KI-gestützte Projekte in Produktion gebracht hat. E-Commerce-Plattformen, interne Tools, Marketing-Automatisierung, Browser-Erweiterungen. Wir haben die Fehler gemacht, damit du sie nicht machen musst.",
    aboutStat1: "100+",
    aboutStat1Label: "Projekte ausgeliefert",
    aboutStat2: "15+",
    aboutStat2Label: "Jahre Erfahrung",
    aboutStat3: "Zürich",
    aboutStat3Label: "Basiert",

    // Formats
    formatsLabel: "Formate",
    formatsTitle: "Wähle deinen Weg",
    format1Title: "Executive 1:1",
    format1Price: "CHF 500 / 2 Stunden",
    format1Desc: "Hands-on Session auf dein Business zugeschnitten. Wir richten deine ersten Agenten ein, arbeiten an echten Aufgaben — Marketing, Research, Bauen — und du gehst startklar.",
    format2Title: "Launchpad",
    format2Price: "CHF 1'500 / einmalig",
    format2Desc: "Komplettes technisches Setup. Git, CI/CD, Claude Code mit API, MCP-Verbindungen zu deinen Tools. Du gehst mit einem produktionsreifen KI-Workflow.",
    format3Title: "Team Workshop",
    format3Price: "CHF 2'500 / halber Tag",
    format3Desc: "Bring dein ganzes Team auf den gleichen Stand. Live-Agenten-Demos, praktische Übungen, gemeinsames Playbook. Alle gehen mit funktionierenden Agenten.",
    format4Title: "Academy Partner",
    format4Price: "CHF 1'500 / Monat",
    format4Desc: "Async Support wann immer du ihn brauchst. Zweiwöchentliche Calls zum Reviewen und Erweitern. Für Gründer, die Grosses bauen und einen Sparringspartner wollen.",

    // CTA
    ctaTitle: "Bereit, aufzuhören zu arbeiten?",
    ctaSubtitle: "Eine Session. Echte Agenten. Sofortige Resultate.",
    ctaButton: "Kontakt aufnehmen",

    // Footer
    footerText: "© 2025 Unchained Commerce GmbH · Zürich · ",
    impressum: "Impressum",
    privacy: "Datenschutz",

    // Typed headlines
    typedPhrases: [
      "KI-Agenten dirigieren",
      "In Stunden liefern, nicht Wochen",
      "Das Grind automatisieren",
      "Bauen während du schläfst",
    ],
  },
} as const;

export function t(lang: Language, key: keyof typeof translations.en): string {
  return translations[lang][key] as string;
}

export function getTypedPhrases(lang: Language): string[] {
  return translations[lang].typedPhrases as unknown as string[];
}
