"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const thumbnailUrl = `https://img.youtube.com/vi/CI68YDCkJ10/maxresdefault.jpg`;

  return (
    <section id="video" className="py-20 px-6 bg-[#F5F5F5]" ref={ref}>
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 36 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#111111] mb-8">
          Your free resource 🎁
        </h2>

        {/* Video container */}
        <div
          className="relative w-full rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
          style={{ aspectRatio: "16 / 9" }}
          onClick={() => setPlaying(true)}
        >
          {!playing ? (
            <>
              {/* Thumbnail */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={thumbnailUrl}
                alt="Video thumbnail"
                className="w-full h-full object-cover"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />

              {/* Custom play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center shadow-xl"
                  style={{ backgroundColor: "#8b22a8" }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.div>
              </div>
            </>
          ) : (
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/CI68YDCkJ10?rel=0&showinfo=0&autoplay=1"
              title="Assertive Communication Framework by Mariana Marcano"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>

        <p className="mt-5 text-center text-sm text-[#777777] italic">
          Prefer to watch this later? Bookmark this page.
        </p>
      </motion.div>
    </section>
  );
}
