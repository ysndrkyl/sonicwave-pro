"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";

export default function Projects() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="projects" ref={ref} className="relative py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Section label */}
        <div className="mb-4 flex items-center gap-6">
          <span className="font-mono text-[10px] text-white/20 tracking-[0.3em] uppercase">
            04 / Projects
          </span>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        <div className="mb-20 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="font-mono text-[10px] text-[#FF4500]/70 tracking-[0.3em] uppercase mb-6"
          >
            {t.projects.eyebrow}
          </motion.div>

          {t.projects.heading.split("\n").map((line, i) => (
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

        {/* Projects list */}
        <div className="space-y-0 divide-y divide-white/5">
          {t.projects.items.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
              className="group relative py-8 md:py-10 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-start hover:bg-white/[0.02] transition-colors duration-300 px-2 -mx-2"
              data-hover
            >
              {/* Left side */}
              <div className="flex items-start gap-8">
                {/* Index */}
                <span className="font-mono text-xs text-white/20 mt-1 hidden md:block">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <span className="font-mono text-[9px] text-[#FF4500]/60 tracking-[0.25em] uppercase">
                      {project.category}
                    </span>
                    <span className="font-mono text-[9px] text-white/20">{project.year}</span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white group-hover:text-white transition-colors mb-3">
                    {project.title}
                  </h3>
                  <p className="font-body text-sm text-white/40 leading-relaxed max-w-xl font-light">
                    {project.desc}
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <motion.div
                className="self-center text-white/20 group-hover:text-[#FF4500] transition-colors duration-300 hidden md:flex items-center gap-2"
                animate={{ x: 0 }}
                whileHover={{ x: 4 }}
              >
                <span className="font-mono text-sm">→</span>
              </motion.div>

              {/* Bottom line reveal on hover */}
              <motion.div
                className="absolute bottom-0 left-0 h-px bg-[#FF4500]/30 origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
                style={{ width: "100%" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
