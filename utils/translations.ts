export type Language = "en" | "de";

export const translations = {
  en: {
    // Header
    logo: "UNCHAINED",
    logoAccent: "Academy",
    bookSession: "Book Session",
    navAgents: "Agents",
    navFormats: "Formats",
    menuLabel: "Menu",

    // Hero
    heroTag: "AI agents for founders",
    heroSubtitle: "Stop doing the work. Start directing AI agents that research, write, build, and ship for you. Walk out with agents running on your actual tasks — not hypothetical demos.",
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
    stat1Value: "45min",
    stat1Label: "For a full week of LinkedIn content",
    stat2Value: "CHF 8k",
    stat2Label: "Saved monthly vs. hiring a junior dev",
    stat3Value: "1 afternoon",
    stat3Label: "From idea to working internal tool",
    stat4Value: "80%",
    stat4Label: "Less time spent on research",

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
    useCase1Item1: "A week of content in 45 minutes",
    useCase1Item2: "Your voice, not generic AI slop",
    useCase1Item3: "Posts directly, no copy-paste",
    useCase1Item4: "Runs while you're on vacation",
    useCase2Title: "Research & Intelligence",
    useCase2Desc: "Never read 50 articles to understand a market again. Agents crawl, synthesize, and summarize — giving you insights, not information overload.",
    useCase2Item1: "Morning briefing waiting in your inbox",
    useCase2Item2: "Competitor moves — instantly, not next week",
    useCase2Item3: "50 articles → 1 page summary",
    useCase2Item4: "Decisions backed by data, not gut feeling",
    useCase3Title: "Build Without Developers",
    useCase3Desc: "Internal dashboards. Customer portals. Automation scripts. Describe what you need, Claude builds it — and fixes its own bugs along the way.",
    useCase3Item1: "Dashboard in 2 hours, not 2 sprints",
    useCase3Item2: "No freelancer, no agency, no waiting",
    useCase3Item3: "Make changes yourself, live instantly",
    useCase3Item4: "CHF 8k/month saved vs. hiring a dev",

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
    who2Item1: "Competitor's new feature? Know within hours",
    who2Item2: "Board prep, investor updates — drafted in minutes",
    who2Item3: "Status reports, emails, research — delegated",
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
    learn2Desc: "Competitor research, content calendar, LinkedIn posts. Set up agents that run your marketing while you focus on closing deals.",
    learn3Title: "Building Without Code",
    learn3Desc: "Dashboards, tools, automations. Describe what you want, Claude builds it. Learn when to let it run and when to intervene.",
    learn4Title: "Connected Tools (MCP)",
    learn4Desc: "Claude connected to Slack, Google Drive, your CRM, LinkedIn. Not just reading — posting, updating, organizing in your actual tools.",
    learn5Title: "Advanced Control",
    learn5Desc: "Complex tasks? Plan mode. Hard problems? Ultrathink. Master the controls that turn a chatbot into a real executor.",
    learn6Title: "Ship to Production",
    learn6Desc: "From prototype to live product. Deploy dashboards, automate workflows, set up systems that run without you.",

    // About section
    aboutLabel: "Your Guide",
    aboutTitle: "Built by practitioners, not theorists",
    aboutDesc: "We're <a href=\"https://unchained.ch\" target=\"_blank\" rel=\"noopener\">Unchained</a> — a Zürich-based team that's shipped 100+ AI-assisted projects to production. E-commerce platforms, internal tools, marketing automation, browser extensions. We've made the mistakes so you don't have to.",
    aboutStat1: "100+",
    aboutStat1Label: "Projects shipped",
    aboutStat2: "15+",
    aboutStat2Label: "Years shipping software",
    aboutStat3: "Zürich",
    aboutStat3Label: "Based",

    // Formats
    formatsLabel: "Formats",
    formatsTitle: "Choose your path",
    format1Title: "Power Session",
    format1Price: "CHF 800 / 2 hours",
    format1Desc: "Intensive 1:1 tailored to your business. Build your first agents on real tasks, leave with a working system. Recording and follow-up included.",
    format2Title: "Founder Sprint",
    format2Price: "CHF 3,500 / full day",
    format2Desc: "Complete transformation in one day. Full technical setup, agents built on your actual work, MCP connections to your tools. 30-day async support included.",
    format3Title: "AI Partner",
    format3Price: "CHF 4,500 / month",
    format3Desc: "Embedded AI expertise. 6 hours/month 1:1 time, unlimited async support. For founders going all-in on AI. 3-month minimum.",

    // CTA
    ctaBadge: "Limited Availability",
    ctaTitle: "Ready to stop doing the work?",
    ctaSubtitle: "One session. Your first agents. Running before you leave.",
    ctaBenefit1: "2-hour intensive, tailored to your business",
    ctaBenefit2: "Walk out with working agents on real tasks",
    ctaBenefit3: "Recording + 7 days async follow-up included",
    ctaButton: "Book Your Session",
    ctaNote: "Typically respond within 24 hours · Zürich-based",

    // Footer
    footerText: "© 2025 Unchained Commerce GmbH · Zürich · ",
    impressum: "Impressum",
    privacy: "Privacy",

    // Typed headlines
    typedPhrases: [
      "Your invisible team",
      "From ChatGPT to real agents",
      "10x output, same hours",
      "Delegate, don't type",
    ],
  },
  de: {
    // Header
    logo: "UNCHAINED",
    logoAccent: "Academy",
    bookSession: "Session buchen",
    navAgents: "Agenten",
    navFormats: "Formate",
    menuLabel: "Menü",

    // Hero
    heroTag: "KI-Agenten für Gründer",
    heroSubtitle: "Hör auf zu arbeiten. Fang an, KI-Agenten zu dirigieren, die für dich recherchieren, schreiben, bauen und ausliefern. Du gehst mit Agenten raus, die auf deinen echten Aufgaben laufen — keine hypothetischen Demos.",
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
    stat1Value: "45min",
    stat1Label: "Für eine Woche LinkedIn-Content",
    stat2Value: "CHF 8k",
    stat2Label: "Gespart pro Monat vs. Junior-Entwickler",
    stat3Value: "1 Nachmittag",
    stat3Label: "Von Idee zum funktionierenden Tool",
    stat4Value: "80%",
    stat4Label: "Weniger Zeit für Recherche",

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
    useCase1Item1: "Eine Woche Content in 45 Minuten",
    useCase1Item2: "Deine Stimme, kein generischer KI-Müll",
    useCase1Item3: "Postet direkt, kein Copy-Paste",
    useCase1Item4: "Läuft auch wenn du im Urlaub bist",
    useCase2Title: "Research & Intelligence",
    useCase2Desc: "Nie wieder 50 Artikel lesen, um einen Markt zu verstehen. Agenten durchsuchen, synthetisieren und fassen zusammen — geben dir Insights, nicht Informationsflut.",
    useCase2Item1: "Morgen-Briefing wartet in der Inbox",
    useCase2Item2: "Wettbewerber-Moves — sofort, nicht nächste Woche",
    useCase2Item3: "50 Artikel → 1 Seite Zusammenfassung",
    useCase2Item4: "Entscheidungen mit Daten, nicht Bauchgefühl",
    useCase3Title: "Bauen ohne Entwickler",
    useCase3Desc: "Interne Dashboards. Kundenportale. Automatisierungsskripte. Beschreibe was du brauchst, Claude baut es — und behebt seine eigenen Fehler.",
    useCase3Item1: "Dashboard in 2 Stunden, nicht 2 Sprints",
    useCase3Item2: "Kein Freelancer, keine Agentur, kein Warten",
    useCase3Item3: "Änderungen selbst machen, sofort live",
    useCase3Item4: "CHF 8k/Monat gespart vs. Entwickler",

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
    who2Item1: "Neues Feature vom Wettbewerber? Weisst du innert Stunden",
    who2Item2: "Board-Prep, Investor-Updates — in Minuten entworfen",
    who2Item3: "Status-Reports, Emails, Recherche — delegiert",
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
    learn2Desc: "Wettbewerber-Recherche, Content-Kalender, LinkedIn-Posts. Agenten einrichten, die dein Marketing laufen lassen, während du Deals abschliesst.",
    learn3Title: "Bauen ohne Code",
    learn3Desc: "Dashboards, Tools, Automatisierungen. Beschreibe was du willst, Claude baut es. Lerne, wann du es laufen lässt und wann du eingreifst.",
    learn4Title: "Verbundene Tools (MCP)",
    learn4Desc: "Claude verbunden mit Slack, Google Drive, deinem CRM, LinkedIn. Nicht nur lesen — posten, updaten, organisieren in deinen echten Tools.",
    learn5Title: "Fortgeschrittene Steuerung",
    learn5Desc: "Komplexe Aufgaben? Plan-Modus. Schwierige Probleme? Ultrathink. Meistere die Steuerung, die einen Chatbot zum echten Executor macht.",
    learn6Title: "In Produktion bringen",
    learn6Desc: "Vom Prototyp zum Live-Produkt. Dashboards deployen, Workflows automatisieren, Systeme einrichten, die ohne dich laufen.",

    // About section
    aboutLabel: "Dein Guide",
    aboutTitle: "Gebaut von Praktikern, nicht Theoretikern",
    aboutDesc: "Wir sind <a href=\"https://unchained.ch\" target=\"_blank\" rel=\"noopener\">Unchained</a> — ein Zürcher Team, das 100+ KI-gestützte Projekte in Produktion gebracht hat. E-Commerce-Plattformen, interne Tools, Marketing-Automatisierung, Browser-Erweiterungen. Wir haben die Fehler gemacht, damit du sie nicht machen musst.",
    aboutStat1: "100+",
    aboutStat1Label: "Projekte ausgeliefert",
    aboutStat2: "15+",
    aboutStat2Label: "Jahre Software ausgeliefert",
    aboutStat3: "Zürich",
    aboutStat3Label: "Basiert",

    // Formats
    formatsLabel: "Formate",
    formatsTitle: "Wähle deinen Weg",
    format1Title: "Power Session",
    format1Price: "CHF 700 / 2 Stunden",
    format1Desc: "Intensives 1:1 auf dein Business zugeschnitten. Baue deine ersten Agenten an echten Aufgaben, geh mit einem funktionierenden System. Aufnahme und Follow-up inklusive.",
    format2Title: "Founder Sprint",
    format2Price: "CHF 3'500 / ganzer Tag",
    format2Desc: "Komplette Transformation an einem Tag. Vollständiges technisches Setup, Agenten auf deiner echten Arbeit gebaut, MCP-Verbindungen zu deinen Tools. 30-Tage Async-Support inklusive.",
    format3Title: "AI Partner",
    format3Price: "CHF 4'200 / Monat",
    format3Desc: "Eingebettete KI-Expertise. 6 Stunden/Monat 1:1 Zeit, unlimitierter Async-Support. Für Gründer, die voll auf KI setzen. Mindestens 3 Monate.",

    // CTA
    ctaBadge: "Begrenzte Verfügbarkeit",
    ctaTitle: "Bereit, aufzuhören zu arbeiten?",
    ctaSubtitle: "Eine Session. Deine ersten Agenten. Laufen bevor du gehst.",
    ctaBenefit1: "2-Stunden Intensiv, auf dein Business zugeschnitten",
    ctaBenefit2: "Geh mit funktionierenden Agenten für echte Aufgaben",
    ctaBenefit3: "Aufnahme + 7 Tage Async-Support inklusive",
    ctaButton: "Session buchen",
    ctaNote: "Antwort innerhalb 24 Stunden · Standort Zürich",

    // Footer
    footerText: "© 2025 Unchained Commerce GmbH · Zürich · ",
    impressum: "Impressum",
    privacy: "Datenschutz",

    // Typed headlines
    typedPhrases: [
      "Dein unsichtbares Team",
      "Von ChatGPT zu echten Agenten",
      "10x Output, gleiche Stunden",
      "Delegieren statt tippen",
    ],
  },
} as const;

export function t(lang: Language, key: keyof typeof translations.en): string {
  return translations[lang][key] as string;
}

export function getTypedPhrases(lang: Language): string[] {
  return translations[lang].typedPhrases as unknown as string[];
}
