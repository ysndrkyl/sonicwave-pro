"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<keyof FormState | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-32 md:py-48 px-6 md:px-12"
    >
      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,69,0,0.07), transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-[1400px] mx-auto">
        {/* Section label */}
        <div className="mb-4 flex items-center gap-6">
          <span className="font-mono text-[10px] text-white/20 tracking-[0.3em] uppercase">
            05 / Contact
          </span>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              className="font-mono text-[10px] text-[#FF4500]/70 tracking-[0.3em] uppercase mb-6"
            >
              {t.contact.eyebrow}
            </motion.div>

            {t.contact.heading.split("\n").map((line, i) => (
              <motion.h2
                key={i}
                initial={{ y: 60, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-white block"
              >
                {line}
              </motion.h2>
            ))}

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 font-body text-white/40 text-lg font-light leading-relaxed"
            >
              {t.contact.sub}
            </motion.p>

            {/* Decorative element */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-16 hidden md:block"
            >
              <div className="font-mono text-[10px] text-white/10 leading-5">
                {Array.from({ length: 8 }).map((_, row) => (
                  <div key={row} className="flex gap-3">
                    {Array.from({ length: 16 }).map((_, col) => (
                      <span
                        key={col}
                        className={
                          (row + col) % 3 === 0
                            ? "text-[#FF4500]/20"
                            : "text-white/5"
                        }
                      >
                        {(row * 16 + col) % 7 === 0 ? "◈" : "·"}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center py-24 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                    className="w-16 h-16 rounded-full border border-[#FF4500]/40 flex items-center justify-center mb-8"
                  >
                    <span className="text-[#FF4500] text-2xl">✓</span>
                  </motion.div>
                  <p className="font-display text-2xl font-bold text-white mb-3">
                    {t.contact.successMessage}
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-0"
                >
                  {(
                    [
                      {
                        field: "name" as const,
                        placeholder: t.contact.namePlaceholder,
                        type: "text",
                        multiline: false,
                      },
                      {
                        field: "email" as const,
                        placeholder: t.contact.emailPlaceholder,
                        type: "email",
                        multiline: false,
                      },
                      {
                        field: "message" as const,
                        placeholder: t.contact.messagePlaceholder,
                        type: "text",
                        multiline: true,
                      },
                    ] as const
                  ).map((inputConfig) => (
                    <div
                      key={inputConfig.field}
                      className="relative border-b border-white/10 group"
                    >
                      {/* Animated bottom border */}
                      <motion.div
                        className="absolute bottom-0 left-0 h-px bg-[#FF4500]"
                        animate={{
                          scaleX: focused === inputConfig.field ? 1 : 0,
                          opacity: focused === inputConfig.field ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        style={{ transformOrigin: "left", width: "100%" }}
                      />

                      {inputConfig.multiline ? (
                        <textarea
                          value={form[inputConfig.field]}
                          onChange={(e) =>
                            setForm((f) => ({
                              ...f,
                              [inputConfig.field]: e.target.value,
                            }))
                          }
                          onFocus={() => setFocused(inputConfig.field)}
                          onBlur={() => setFocused(null)}
                          placeholder={inputConfig.placeholder}
                          rows={5}
                          className="w-full bg-transparent py-6 font-body text-base text-white placeholder:text-white/20 resize-none focus:outline-none"
                          data-hover
                        />
                      ) : (
                        <input
                          type={inputConfig.type}
                          value={form[inputConfig.field]}
                          onChange={(e) =>
                            setForm((f) => ({
                              ...f,
                              [inputConfig.field]: e.target.value,
                            }))
                          }
                          onFocus={() => setFocused(inputConfig.field)}
                          onBlur={() => setFocused(null)}
                          placeholder={inputConfig.placeholder}
                          className="w-full bg-transparent py-5 font-body text-base text-white placeholder:text-white/20 focus:outline-none"
                          data-hover
                        />
                      )}
                    </div>
                  ))}

                  <div className="pt-10">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative overflow-hidden group px-10 py-4 bg-[#FF4500] text-white font-display font-bold text-sm tracking-widest uppercase"
                      data-hover
                    >
                      {/* Hover shimmer */}
                      <motion.div
                        className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                      />
                      <span className="relative z-10">{t.contact.submit}</span>
                    </motion.button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
