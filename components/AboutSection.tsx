"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const credentials = [
  "Change Management",
  "Leadership Development",
  "Keynote Speaker",
];

function MarianaPhoto() {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div
        className="w-28 h-28 rounded-full flex items-center justify-center text-white text-2xl font-black ring-4 ring-white shadow-lg select-none"
        style={{ backgroundColor: "#8b22a8" }}
        aria-label="Mariana Marcano"
      >
        MM
      </div>
    );
  }

  return (
    <div className="relative w-28 h-28 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
      <Image
        src="/images/mariana.jpg"
        alt="Mariana Marcano"
        fill
        className="object-cover"
        onError={() => setImgError(true)}
      />
    </div>
  );
}

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
          <MarianaPhoto />
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
