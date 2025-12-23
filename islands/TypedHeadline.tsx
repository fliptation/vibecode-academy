import { useEffect, useState } from "preact/hooks";
import { getTypedPhrases, type Language } from "../utils/translations.ts";

interface Props {
  lang?: Language;
}

export default function TypedHeadline({ lang = "en" }: Props) {
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentLang, setCurrentLang] = useState<Language>(lang);
  const [phrases, setPhrases] = useState<string[]>(getTypedPhrases(lang));

  // Check localStorage for language preference on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("lang") as Language | null;
      if (stored === "de" || stored === "en") {
        setCurrentLang(stored);
        setPhrases(getTypedPhrases(stored));
      }
    }
  }, []);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentPhrase.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setPhraseIndex((phraseIndex + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex, phrases]);

  return (
    <span class="typed-text">
      {displayText}
      <span class="cursor">|</span>
    </span>
  );
}
