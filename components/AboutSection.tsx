"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const credentials = [
  "Change Management",
  "Leadership Development",
  "Keynote Speaker",
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 px-6 bg-[#F5F5F5]" ref={ref}>
      <motion.div
        className="max-w-lg mx-auto text-center"
        initial={{ opacity: 0, y: 36 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mb-6 flex justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/mariana.jpg"
            alt="Mariana Marcano"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              objectFit: "cover",
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
            }}
          />
        </div>

        <h3 className="text-xl font-bold text-[#111111] mb-2">
          Mariana Marcano
        </h3>
        <p className="text-[#555555] leading-relaxed mb-7 text-base sm:text-lg">
          Leadership coach, keynote speaker, and founder of Elevative. Mariana
          works with HR leaders and managers across the private, public and
          not-for-profit sectors.
        </p>

        <div className="flex flex-wrap justify-center gap-2">
          {credentials.map((c) => (
            <span
              key={c}
              className="px-4 py-1.5 rounded-full text-sm font-medium text-[#8b22a8] border border-[#8b22a8]/30 bg-white"
            >
              {c}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
