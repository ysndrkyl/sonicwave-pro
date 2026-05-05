"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import type { Language } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";

const navLinks = [
  { key: "about" as const, href: "#about" },
  { key: "services" as const, href: "#services" },
  { key: "projects" as const, href: "#projects" },
  { key: "contact" as const, href: "#contact" },
];

export default function Navbar() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/5"
            : ""
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="/"
            className="font-display text-white font-bold text-lg tracking-tight"
            whileHover={{ opacity: 0.7 }}
            transition={{ duration: 0.2 }}
          >
            SW<span className="text-[#FF4500]">P</span>
          </motion.a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.key}
                onClick={() => handleNavClick(link.href)}
                className="font-body text-lg text-white hover:text-white/70 transition-colors duration-300 tracking-wide"
                whileHover={{ y: -1 }}
                data-hover
              >
                {t.nav[link.key]}
              </motion.button>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-6">
            <LanguageSwitcher />

            {/* Mobile menu toggle */}
            <button
              className="md:hidden w-8 h-8 flex flex-col justify-center gap-[5px]"
              onClick={() => setMenuOpen(!menuOpen)}
              data-hover
            >
              <motion.span
                className="block h-px bg-white/80 origin-center"
                animate={menuOpen ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block h-px bg-white/80 origin-center"
                animate={menuOpen ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-10"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                onClick={() => handleNavClick(link.href)}
                className="font-display text-4xl font-bold text-white/70 hover:text-white transition-colors"
                data-hover
              >
                {t.nav[link.key]}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
