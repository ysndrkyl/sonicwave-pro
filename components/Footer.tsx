"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative py-16 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Logo */}
        <div>
          <span className="font-display text-2xl font-extrabold text-white">
            SW<span className="text-[#FF4500]">P</span>
          </span>
          <p className="font-mono text-[10px] text-white/20 tracking-widest mt-1">
            SONIC WAVE PRO
          </p>
        </div>

        {/* Center note */}
        <p className="font-body text-xs text-white/20 text-center">
          © {new Date().getFullYear()} SonicWave Pro. All rights reserved.
          <br />
          <span className="text-white/10">Sound is our universe.</span>
        </p>

        {/* Right: social links */}
        <div className="flex items-center gap-6">
          {["Twitter", "Instagram", "LinkedIn"].map((s) => (
            <motion.a
              key={s}
              href="#"
              className="font-mono text-[10px] text-white/20 hover:text-white/60 tracking-widest uppercase transition-colors"
              whileHover={{ y: -1 }}
              data-hover
            >
              {s}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
