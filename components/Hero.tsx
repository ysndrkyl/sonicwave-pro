"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";

export default function Hero() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);

  const lines = t.hero.tagline.split("\n");

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Ambient radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #FF4500 0%, #FF4500 20%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="h-px w-12 bg-[#FF4500]/60" />
          <span className="font-mono text-xs text-[#FF4500]/80 tracking-[0.3em] uppercase">
            {t.hero.brand}
          </span>
          <div className="h-px w-12 bg-[#FF4500]/60" />
        </motion.div>

        {/* Main heading */}
        <div className="overflow-hidden mb-8">
  {lines.map((line, i) => (
    <motion.h1
      key={i}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1,
        delay: 0.3 + i * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      /* 
         Eski: 3.5rem -> 3rem (Mobil başlangıç küçüldü)
         Eski: 9vw -> 7.5vw (Büyüme hızı yavaşladı)
         Eski: 8rem -> 6.5rem (Maksimum sınır aşağı çekildi)
      */
      className="font-display text-[clamp(2.8rem,7.5vw,6.5rem)] font-extrabold leading-[0.95] tracking-tight text-white block"
    >
      {line}
    </motion.h1>
  ))}
</div>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-body text-white/50 text-lg md:text-xl max-w-xl mx-auto leading-relaxed font-light"
        >
          {t.hero.sub}
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20 flex flex-col items-center gap-3"
        >
          <span className="font-mono text-[12px] text-white/30 tracking-[0.25em] uppercase">
            {t.hero.scrollLabel}
          </span>

          {/* Animated scroll pill */}
          <div className="w-px h-16 relative overflow-hidden">
            <motion.div
              className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-transparent via-[#FF4500] to-transparent"
              animate={{ y: ["-100%", "200%"] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Corner decorations */}
      <div className="absolute bottom-8 left-8 hidden md:block">
        <span className="font-mono text-[10px] text-white/15 tracking-widest">
          EST. 2018
        </span>
      </div>
      <div className="absolute bottom-8 right-8 hidden md:block">
        <span className="font-mono text-[10px] text-white/15 tracking-widest">
          v4.2.0
        </span>
      </div>
    </section>
  );
}
