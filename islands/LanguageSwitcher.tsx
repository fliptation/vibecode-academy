import { useEffect, useState } from "preact/hooks";
import type { Language } from "../utils/translations.ts";

interface Props {
  onChange?: (lang: Language) => void;
}

export default function LanguageSwitcher({ onChange }: Props) {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Language | null;
    if (stored === "de" || stored === "en") {
      setLang(stored);
    }
  }, []);

  const handleChange = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
    onChange?.(newLang);
    // Reload page to apply new language
    window.location.reload();
  };

  return (
    <div class="lang-switcher">
      <button
        type="button"
        class={`lang-btn ${lang === "en" ? "lang-btn--active" : ""}`}
        onClick={() => handleChange("en")}
        aria-label="English"
      >
        EN
      </button>
      <button
        type="button"
        class={`lang-btn ${lang === "de" ? "lang-btn--active" : ""}`}
        onClick={() => handleChange("de")}
        aria-label="Deutsch"
      >
        DE
      </button>
    </div>
  );
}

// Helper to get current language (for server-side or initial render)
export function getLanguage(): Language {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("lang") as Language | null;
    if (stored === "de" || stored === "en") {
      return stored;
    }
  }
  return "en";
}
