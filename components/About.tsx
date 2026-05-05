"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";

export default function About() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  const stats = [
    { label: t.about.stat1Label, value: t.about.stat1Value },
    { label: t.about.stat2Label, value: t.about.stat2Value },
    { label: t.about.stat3Label, value: t.about.stat3Value },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 md:py-48 px-6 md:px-12"
    >
      {/* Section divider */}
      <div className="max-w-[1400px] mx-auto mb-20 flex items-center gap-6">
        <span className="font-mono text-[10px] text-white/20 tracking-[0.3em] uppercase">
          02 / About
        </span>
        <div className="flex-1 h-px bg-white/5" />
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-mono text-[10px] text-[#FF4500]/70 tracking-[0.3em] uppercase mb-6"
          >
            {t.about.eyebrow}
          </motion.div>

          <div className="overflow-hidden">
            {t.about.heading.split("\n").map((line, i) => (
              <motion.h2
                key={i}
                initial={{ y: 60, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{
                  duration: 0.9,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-tight text-white block"
              >
                {line}
              </motion.h2>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 font-body text-white/50 text-lg leading-relaxed font-light max-w-md"
          >
            {t.about.body}
          </motion.p>

          {/* Manifesto quote */}
          <motion.blockquote
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 pl-6 border-l-2 border-[#FF4500]/40"
          >
            <p className="font-display text-lg text-white/70 italic font-medium leading-snug">
              {t.about.manifesto}
            </p>
          </motion.blockquote>
        </div>

        {/* Right column — stats */}
        <div className="lg:pt-20 grid grid-cols-1 gap-0 divide-y divide-white/5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className="py-8 flex items-baseline justify-between group"
            >
              <span className="font-body text-sm text-white/40 uppercase tracking-widest">
                {stat.label}
              </span>
              <div className="flex items-baseline gap-1">
                <span className="font-display text-5xl font-extrabold text-white group-hover:text-[#FF4500] transition-colors duration-500">
                  {stat.value}
                </span>
              </div>
            </motion.div>
          ))}

          {/* Abstract grid decoration */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="pt-12"
          >
            <div className="grid grid-cols-8 gap-1">
              {Array.from({ length: 34 }).map((_, i) => (
                <motion.div
  key={i}
  className="aspect-square rounded-sm bg-white/5"
  animate={{
    opacity: [0.1, 0.4, 0.1], // Görünürlüğü biraz artırdım
    backgroundColor:
      Math.random() > 0.9
        ? ["#FF4500", "#FF8C00", "#FF4500"] // Daha canlı Turuncu ve Koyu Turuncu geçişi
        : "#ffffff05", // Diğer kareler için çok hafif beyaz
  }}
  transition={{
    duration: 2 + Math.random() * 3,
    repeat: Infinity,
    delay: Math.random() * 2,
  }}
  style={{
    boxShadow: Math.random() > 0.9 ? "0 0 10px #FF450033" : "none" // Şanslı karelere hafif parlama (glow)
  }}
/>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
