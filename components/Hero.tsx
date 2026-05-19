"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col bg-white">
      {/* Logo */}
      <div className="px-6 pt-8 pb-0">
        <span
          className="text-2xl font-black tracking-tight"
          style={{ color: "#8b22a8", fontFamily: "var(--font-inter)" }}
        >
          Elevative
        </span>
      </div>

      {/* Hero content — vertically centred in remaining space */}
      <div className="flex flex-1 items-center justify-center px-6 py-16">
        <div className="max-w-2xl w-full text-center">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-[#111111] mb-6"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            Watch this before you leave today.
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-[#444444] leading-relaxed max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18, ease: "easeOut" }}
          >
            A free framework on assertive communication — because what you just
            heard in the room is only the beginning.
          </motion.p>

          {/* Scroll arrow */}
          <motion.div
            className="mt-14 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.a
              href="#video"
              aria-label="Scroll to video"
              className="flex flex-col items-center gap-1 text-[#8b22a8] hover:opacity-70 transition-opacity"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
