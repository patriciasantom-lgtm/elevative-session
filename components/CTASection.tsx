"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const BOOKING_URL =
  "https://outlook.office.com/bookwithme/user/de934c8f5aaa4b01a1ec7ce2e5939bfb%40elevative.com.au/meetingtype/60d6fd23-73db-4238-ad79-630b664c55d7?anonymous";

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="py-24 px-6"
      style={{ backgroundColor: "#8b22a8" }}
      ref={ref}
    >
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 36 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-5">
          Let&apos;s talk about where you want to go as a leader.
        </h2>
        <p className="text-lg text-white/85 mb-10 leading-relaxed">
          Book a free 30-min call. No pressure, no pitch — just a real
          conversation.
        </p>

        <motion.a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-5 text-white font-bold text-lg rounded-full shadow-lg transition-transform"
          style={{ backgroundColor: "#019b9f" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          Book my free call →
        </motion.a>
      </motion.div>
    </section>
  );
}
