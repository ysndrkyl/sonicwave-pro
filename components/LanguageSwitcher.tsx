"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import type { Language } from "@/lib/i18n";

const langs: Language[] = ["en", "de", "tr"];

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();

  return (
    <div className="flex items-center gap-1">
      {langs.map((l, i) => (
        <div key={l} className="flex items-center">
          <motion.button
            onClick={() => setLang(l)}
            className={`font-mono text-sm tracking-widest uppercase px-1 transition-colors duration-300 ${
              lang === l ? "text-[#FF4500]" : "text-white/70 hover:text-white/60"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-hover
          >
            {l}
          </motion.button>
          {i < langs.length - 1 && (
            <span className="text-white text-xs mx-0.5">/</span>
          )}
        </div>
      ))}
    </div>
  );
}
