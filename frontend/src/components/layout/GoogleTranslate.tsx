"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    google?: {
      translate: {
        TranslateElement: new (
          config: { pageLanguage: string; includedLanguages: string },
          elementId: string
        ) => void;
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

const languages = [
  { label: "English", value: "en" },
  { label: "Français", value: "fr" },
  { label: "العربية", value: "ar" },
  { label: "Español", value: "es" },
  { label: "Krio", value: "kri" },
  { label: "Português", value: "pt" },
  { label: "Swahili", value: "sw" },
];

const includedLanguages = languages.map((l) => l.value).join(",");

function initGoogleTranslate() {
  if (typeof window !== "undefined" && window.google?.translate) {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages,
      },
      "google_translate_element"
    );
  }
}

export default function GoogleTranslate() {
  const [ready, setReady] = useState(false);
  const [lang, setLang] = useState("en");

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      initGoogleTranslate();
      setReady(true);
    };
  }, []);

  useEffect(() => {
    if (!ready) return;
    const timer = setTimeout(() => {
      const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
      if (select) {
        const cookie = document.cookie
          .split("; ")
          .find((r) => r.startsWith("googtrans="));
        const val = cookie?.split("|")[1]?.split("/")[1] ?? "en";
        setLang(val);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [ready]);

  const handleChange = (value: string) => {
    setLang(value);
    const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (select) {
      select.value = value;
      select.dispatchEvent(new Event("change", { bubbles: true }));
    }
  };

  return (
    <>
      <div
        id="google_translate_element"
        className="[&_.goog-te-gadget]:!hidden [&_iframe]:!hidden"
        style={{ position: "absolute", left: -9999, width: 1, height: 1 }}
      />
      <div className="flex items-center gap-1.5">
        <span className="text-xs text-secondary" aria-hidden>
          🌐
        </span>
        <select
          value={lang}
          onChange={(e) => handleChange(e.target.value)}
          className="rounded-md border border-border bg-white px-2 py-1.5 text-xs font-medium text-secondary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          aria-label="Select language"
        >
          {languages.map((l) => (
            <option key={l.value} value={l.value}>
              {l.label}
            </option>
          ))}
        </select>
      </div>
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </>
  );
}
