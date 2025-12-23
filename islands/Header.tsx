import { useEffect, useState } from "preact/hooks";
import { translations, type Language } from "../utils/translations.ts";
import ThemeToggle from "./ThemeToggle.tsx";
import LanguageSwitcher from "./LanguageSwitcher.tsx";

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  );
}

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
      <path
        d="M6 20C6 13.4 11.4 8 18 8C22.5 8 26.5 10.5 28.5 14.5L30 17"
        stroke="var(--accent)"
        stroke-width="4"
        stroke-linecap="round"
      />
      <path
        d="M34 23L35.5 25.5C37.5 29.5 41.5 32 46 32C52.6 32 58 26.6 58 20C58 13.4 52.6 8 46 8C41.5 8 37.5 10.5 35.5 14.5L34 17"
        stroke="var(--accent)"
        stroke-width="4"
        stroke-linecap="round"
      />
      <path
        d="M28.5 25.5C26.5 29.5 22.5 32 18 32C11.4 32 6 26.6 6 20"
        stroke="var(--accent)"
        stroke-width="4"
        stroke-linecap="round"
      />
      <circle cx="32" cy="20" r="3" fill="var(--fg)" />
    </svg>
  );
}

export default function Header() {
  const [lang, setLang] = useState<Language>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Language | null;
    if (stored === "de" || stored === "en") {
      setLang(stored);
    }
  }, []);

  useEffect(() => {
    const handleLangChange = () => {
      const stored = localStorage.getItem("lang") as Language | null;
      if (stored === "de" || stored === "en") {
        setLang(stored);
      }
    };
    window.addEventListener("storage", handleLangChange);
    window.addEventListener("langchange", handleLangChange);
    return () => {
      window.removeEventListener("storage", handleLangChange);
      window.removeEventListener("langchange", handleLangChange);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header class="navbar">
        <div class="container header-inner">
          <a href="/" class="logo" aria-label="Unchained Academy">
            <LogoIcon />
            <span class="logo__text">{t.logo}<span>{t.logoAccent}</span></span>
          </a>
          <nav class="navbar__nav navbar__nav--desktop">
            <a href="/#agents" class="navbar__link">{t.navAgents}</a>
            <a href="/#formate" class="navbar__link">{t.navFormats}</a>
            <LanguageSwitcher />
            <ThemeToggle />
            <a href="/#contact" class="navbar__link navbar__link--cta">{t.bookSession}</a>
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
          <button class="drawer__close" onClick={closeMenu} aria-label="Close menu">
            <CloseIcon />
          </button>
        </div>
        <nav class="drawer__nav">
          <a href="/#agents" class="drawer__link" onClick={closeMenu}>{t.navAgents}</a>
          <a href="/#formate" class="drawer__link" onClick={closeMenu}>{t.navFormats}</a>
          <a href="/#contact" class="drawer__link drawer__link--cta" onClick={closeMenu}>{t.bookSession}</a>
        </nav>
        <div class="drawer__footer">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </aside>
    </>
  );
}
