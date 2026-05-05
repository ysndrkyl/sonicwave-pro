"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";

export default function Services() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" ref={ref} className="relative py-32 md:py-48 px-6 md:px-12">
      {/* BG accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, #FF4500/20, transparent)",
        }}
      />

      <div className="max-w-[1400px] mx-auto">
        {/* Section header */}
        <div className="mb-4 flex items-center gap-6">
          <span className="font-mono text-[10px] text-white/20 tracking-[0.3em] uppercase">
            03 / Services
          </span>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        <div className="mb-16 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-mono text-[10px] text-[#FF4500]/70 tracking-[0.3em] uppercase mb-6"
          >
            {t.services.eyebrow}
          </motion.div>

          {t.services.heading.split("\n").map((line, i) => (
            <motion.h2
              key={i}
              initial={{ y: 60, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-tight text-white block"
            >
              {line}
            </motion.h2>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {t.services.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative bg-[#050505] p-8 md:p-10 overflow-hidden group"
              data-hover
            >
              {/* Hover glow */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(ellipse at 20% 50%, rgba(255,69,0,0.06) 0%, transparent 70%)",
                }}
              />

              {/* Top line that draws in on hover */}
              <motion.div
                className="absolute top-0 left-0 h-px bg-[#FF4500]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredIndex === i ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                style={{ transformOrigin: "left", width: "100%" }}
              />

              {/* Tag */}
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-[9px] text-[#FF4500]/50 tracking-[0.3em] uppercase border border-[#FF4500]/20 px-2 py-1">
                  {item.tag}
                </span>
                <span className="font-mono text-sm text-white/15">
                  0{i + 1}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors">
                {item.title}
              </h3>

              {/* Desc */}
              <p className="font-body text-white/40 text-sm leading-relaxed font-light">
                {item.desc}
              </p>

              {/* Arrow */}
              <motion.div
                className="mt-8 flex items-center gap-2 text-white/20 group-hover:text-[#FF4500] transition-colors duration-300"
                animate={{ x: hoveredIndex === i ? 4 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-px w-6 bg-current" />
                <span className="font-mono text-xs tracking-wider">→</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
