import { useEffect, useState } from "preact/hooks";
import { translations, type Language } from "../utils/translations.ts";
import TypedHeadline from "./TypedHeadline.tsx";
import MeteorShower from "./MeteorShower.tsx";
import TerminalDemo from "./TerminalDemo.tsx";
import ThemeToggle from "./ThemeToggle.tsx";
import LanguageSwitcher from "./LanguageSwitcher.tsx";

// SVG Icons
function ArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="3" y1="12" x2="21" y2="12"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  );
}

function TeamIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2"/>
      <polyline points="2 17 12 22 22 17"/>
      <polyline points="2 12 12 17 22 12"/>
    </svg>
  );
}

function TrendingUpIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
      <polyline points="17 6 23 6 23 12"/>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

function BotIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="11" width="18" height="10" rx="2"/>
      <circle cx="12" cy="5" r="2"/>
      <path d="M12 7v4"/>
      <line x1="8" y1="16" x2="8" y2="16"/>
      <line x1="16" y1="16" x2="16" y2="16"/>
    </svg>
  );
}

function MegaphoneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 11l18-5v12L3 13v-2z"/>
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
    </svg>
  );
}

// Logo: Broken Infinity Symbol
function LogoIcon() {
  return (
    <svg
      width="32"
      height="20"
      viewBox="0 0 64 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      class="logo__icon"
    >
      {/* Left loop of infinity - breaks before center */}
      <path
        d="M6 20C6 13.4 11.4 8 18 8C22.5 8 26.5 10.5 28.5 14.5L30 17"
        stroke="var(--accent)"
        stroke-width="4"
        stroke-linecap="round"
      />
      {/* Right loop - breaks after center */}
      <path
        d="M34 23L35.5 25.5C37.5 29.5 41.5 32 46 32C52.6 32 58 26.6 58 20C58 13.4 52.6 8 46 8C41.5 8 37.5 10.5 35.5 14.5L34 17"
        stroke="var(--accent)"
        stroke-width="4"
        stroke-linecap="round"
      />
      {/* Bottom of left loop */}
      <path
        d="M28.5 25.5C26.5 29.5 22.5 32 18 32C11.4 32 6 26.6 6 20"
        stroke="var(--accent)"
        stroke-width="4"
        stroke-linecap="round"
      />
      {/* The break point - transformation moment */}
      <circle cx="32" cy="20" r="3" fill="var(--fg)" />
    </svg>
  );
}

export default function PageContent() {
  const [lang, setLang] = useState<Language>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Language | null;
    if (stored === "de" || stored === "en") {
      setLang(stored);
    }
  }, []);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  // Cursor-following glow effect for cards
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.format-card, .usecase-card');
      cards.forEach((card) => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <MeteorShower />
      <header class="navbar">
        <div class="container header-inner">
          <a href="/" class="logo" aria-label="Unchained Academy">
            <LogoIcon />
            <span class="logo__text">{t.logo}<span>{t.logoAccent}</span></span>
          </a>
          <nav class="navbar__nav navbar__nav--desktop">
            <a href="#agents" class="navbar__link">{t.navAgents}</a>
            <a href="#formate" class="navbar__link">{t.navFormats}</a>
            <LanguageSwitcher />
            <ThemeToggle />
            <a href="#contact" class="navbar__link navbar__link--cta">{t.bookSession}</a>
          </nav>
          <button
            class="navbar__menu-btn"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            {t.menuLabel}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div class={`drawer-overlay ${menuOpen ? "drawer-overlay--open" : ""}`} onClick={closeMenu} />
      <aside class={`drawer ${menuOpen ? "drawer--open" : ""}`}>
        <div class="drawer__header">
          <span class="drawer__title">{t.logo}<span>{t.logoAccent}</span></span>
          <button class="drawer__close" onClick={closeMenu} aria-label="Close menu">
            <CloseIcon />
          </button>
        </div>
        <nav class="drawer__nav">
          <a href="#agents" class="drawer__link" onClick={closeMenu}>{t.navAgents}</a>
          <a href="#formate" class="drawer__link" onClick={closeMenu}>{t.navFormats}</a>
          <a href="#contact" class="drawer__link drawer__link--cta" onClick={closeMenu}>{t.bookSession}</a>
        </nav>
        <div class="drawer__footer">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </aside>

      <main>
        <section class="hero">
          <div class="container hero__grid">
            <div class="hero__text">
              <div class="hero__tag">{t.heroTag}</div>
              <h1><TypedHeadline lang={lang} /></h1>
              <p class="hero__subtitle">{t.heroSubtitle}</p>
              <a href="#contact" class="hero__cta">
                {t.getStarted}
                <ArrowIcon />
              </a>
            </div>
            <div class="hero__testimonial">
              <blockquote class="hero__testimonial-quote">
                {t.testimonialQuote}
              </blockquote>
              <div class="hero__testimonial-author">
                <strong>{t.testimonialAuthor}</strong>
                <span>{t.testimonialRole}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Terminal Demo */}
        <section class="terminal-section">
          <div class="container">
            <div class="section-label">{t.terminalSectionLabel}</div>
            <h2 class="section-title">{t.terminalTitle}</h2>
            <p class="section-subtitle">{t.terminalSubtitle}</p>
            <TerminalDemo />
          </div>
        </section>

        {/* Stats Section */}
        <section class="stats-section">
          <div class="container">
            <div class="stats-grid">
              <div class="stat-item">
                <div class="stat-number">{t.stat1Value}</div>
                <div class="stat-label">{t.stat1Label}</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">{t.stat2Value}</div>
                <div class="stat-label">{t.stat2Label}</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">{t.stat3Value}</div>
                <div class="stat-label">{t.stat3Label}</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">{t.stat4Value}</div>
                <div class="stat-label">{t.stat4Label}</div>
              </div>
            </div>
          </div>
        </section>

        {/* The Shift Section */}
        <section class="section shift-section">
          <div class="container">
            <div class="section-label">{t.shiftLabel}</div>
            <h2 class="section-title">{t.shiftTitle}</h2>
            <div class="shift-comparison">
              <div class="shift-before">
                <div class="shift-label">
                  <ClockIcon />
                  <span>{t.shiftBefore}</span>
                </div>
                <ul class="shift-list">
                  <li>{t.shiftBefore1}</li>
                  <li>{t.shiftBefore2}</li>
                  <li>{t.shiftBefore3}</li>
                  <li>{t.shiftBefore4}</li>
                </ul>
              </div>
              <div class="shift-arrow">
                <ArrowIcon />
              </div>
              <div class="shift-after">
                <div class="shift-label">
                  <BotIcon />
                  <span>{t.shiftAfter}</span>
                </div>
                <ul class="shift-list">
                  <li>{t.shiftAfter1}</li>
                  <li>{t.shiftAfter2}</li>
                  <li>{t.shiftAfter3}</li>
                  <li>{t.shiftAfter4}</li>
                </ul>
              </div>
            </div>
            <div class="shift-result">
              <TrendingUpIcon />
              <p><strong>{t.shiftResultIntro}</strong> {t.shiftResult}</p>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section id="agents" class="section">
          <div class="container">
            <div class="section-label">{t.useCasesLabel}</div>
            <h2 class="section-title">{t.useCasesTitle}</h2>
            <div class="usecase-grid">
              <div class="usecase-card">
                <div class="usecase-icon"><MegaphoneIcon /></div>
                <h3>{t.useCase1Title}</h3>
                <p>{t.useCase1Desc}</p>
                <ul class="who-list">
                  <li><CheckIcon /> {t.useCase1Item1}</li>
                  <li><CheckIcon /> {t.useCase1Item2}</li>
                  <li><CheckIcon /> {t.useCase1Item3}</li>
                  <li><CheckIcon /> {t.useCase1Item4}</li>
                </ul>
              </div>
              <div class="usecase-card">
                <div class="usecase-icon"><SearchIcon /></div>
                <h3>{t.useCase2Title}</h3>
                <p>{t.useCase2Desc}</p>
                <ul class="who-list">
                  <li><CheckIcon /> {t.useCase2Item1}</li>
                  <li><CheckIcon /> {t.useCase2Item2}</li>
                  <li><CheckIcon /> {t.useCase2Item3}</li>
                  <li><CheckIcon /> {t.useCase2Item4}</li>
                </ul>
              </div>
              <div class="usecase-card">
                <div class="usecase-icon"><CodeIcon /></div>
                <h3>{t.useCase3Title}</h3>
                <p>{t.useCase3Desc}</p>
                <ul class="who-list">
                  <li><CheckIcon /> {t.useCase3Item1}</li>
                  <li><CheckIcon /> {t.useCase3Item2}</li>
                  <li><CheckIcon /> {t.useCase3Item3}</li>
                  <li><CheckIcon /> {t.useCase3Item4}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Who Section */}
        <section class="section">
          <div class="container">
            <div class="section-label">{t.whoLabel}</div>
            <h2 class="section-title">{t.whoTitle}</h2>
            <div class="who-grid">
              <div class="who-card">
                <h3>{t.who1Title}</h3>
                <p>{t.who1Desc}</p>
                <ul class="who-list">
                  <li><CheckIcon /> {t.who1Item1}</li>
                  <li><CheckIcon /> {t.who1Item2}</li>
                  <li><CheckIcon /> {t.who1Item3}</li>
                </ul>
              </div>
              <div class="who-card">
                <h3>{t.who2Title}</h3>
                <p>{t.who2Desc}</p>
                <ul class="who-list">
                  <li><CheckIcon /> {t.who2Item1}</li>
                  <li><CheckIcon /> {t.who2Item2}</li>
                  <li><CheckIcon /> {t.who2Item3}</li>
                </ul>
              </div>
              <div class="who-card">
                <h3>{t.who3Title}</h3>
                <p>{t.who3Desc}</p>
                <ul class="who-list">
                  <li><CheckIcon /> {t.who3Item1}</li>
                  <li><CheckIcon /> {t.who3Item2}</li>
                  <li><CheckIcon /> {t.who3Item3}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Learn Section */}
        <section class="section">
          <div class="container">
            <div class="section-label">{t.learnLabel}</div>
            <h2 class="section-title">{t.learnTitle}</h2>
            <div class="learn-grid">
              <div class="learn-item">
                <div class="learn-number">01</div>
                <h3>{t.learn1Title}</h3>
                <p>{t.learn1Desc}</p>
              </div>
              <div class="learn-item">
                <div class="learn-number">02</div>
                <h3>{t.learn2Title}</h3>
                <p>{t.learn2Desc}</p>
              </div>
              <div class="learn-item">
                <div class="learn-number">03</div>
                <h3>{t.learn3Title}</h3>
                <p>{t.learn3Desc}</p>
              </div>
              <div class="learn-item">
                <div class="learn-number">04</div>
                <h3>{t.learn4Title}</h3>
                <p>{t.learn4Desc}</p>
              </div>
              <div class="learn-item">
                <div class="learn-number">05</div>
                <h3>{t.learn5Title}</h3>
                <p>{t.learn5Desc}</p>
              </div>
              <div class="learn-item">
                <div class="learn-number">06</div>
                <h3>{t.learn6Title}</h3>
                <p>{t.learn6Desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section class="section about-section">
          <div class="container">
            <div class="about-compact">
              <div class="about-text">
                <div class="section-label">{t.aboutLabel}</div>
                <h2 class="section-title">{t.aboutTitle}</h2>
                <p dangerouslySetInnerHTML={{ __html: t.aboutDesc }} />
              </div>
              <div class="about-stats">
                <div class="about-stat">
                  <span class="about-stat__number">{t.aboutStat1}</span>
                  <span class="about-stat__label">{t.aboutStat1Label}</span>
                </div>
                <div class="about-stat">
                  <span class="about-stat__number">{t.aboutStat2}</span>
                  <span class="about-stat__label">{t.aboutStat2Label}</span>
                </div>
                <div class="about-stat">
                  <span class="about-stat__number">{t.aboutStat3}</span>
                  <span class="about-stat__label">{t.aboutStat3Label}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formats Section */}
        <section id="formate" class="section">
          <div class="container">
            <div class="section-label">{t.formatsLabel}</div>
            <h2 class="section-title">{t.formatsTitle}</h2>
            <div class="formats-grid">
              <div class="format-card">
                <div class="format-icon">
                  <UserIcon />
                </div>
                <h3>{t.format1Title}</h3>
                <div class="format-price">{t.format1Price}</div>
                <p>{t.format1Desc}</p>
              </div>
              <div class="format-card">
                <div class="format-icon">
                  <RocketIcon />
                </div>
                <h3>{t.format2Title}</h3>
                <div class="format-price">{t.format2Price}</div>
                <p>{t.format2Desc}</p>
              </div>
              <div class="format-card">
                <div class="format-icon">
                  <LayersIcon />
                </div>
                <h3>{t.format3Title}</h3>
                <div class="format-price">{t.format3Price}</div>
                <p>{t.format3Desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" class="section cta-section">
          <div class="container">
            <div class="cta-content">
              <div class="cta-badge">{t.ctaBadge}</div>
              <h2>{t.ctaTitle}</h2>
              <p class="cta-subtitle">{t.ctaSubtitle}</p>

              <div class="cta-benefits">
                <div class="cta-benefit">
                  <CheckIcon />
                  <span>{t.ctaBenefit1}</span>
                </div>
                <div class="cta-benefit">
                  <CheckIcon />
                  <span>{t.ctaBenefit2}</span>
                </div>
                <div class="cta-benefit">
                  <CheckIcon />
                  <span>{t.ctaBenefit3}</span>
                </div>
              </div>

              <a href="mailto:vedran@unchained.shop?subject=Unchained%20Academy" class="cta-button">
                <span>{t.ctaButton}</span>
                <ArrowIcon />
              </a>

              <p class="cta-note">{t.ctaNote}</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div class="container">
          <p>{t.footerText}<a href="/impressum">{t.impressum}</a> · <a href="/privacy">{t.privacy}</a></p>
        </div>
      </footer>
    </>
  );
}
