"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function BridgeSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 px-6 bg-white" ref={ref}>
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 36 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-lg sm:text-xl text-[#333333] leading-relaxed mb-6">
          Liked what you saw? This is just one piece of the framework Mariana
          teaches inside her leadership programme —{" "}
          <span className="font-semibold text-[#8b22a8]">In Your Element</span>.
        </p>
        <p className="text-lg sm:text-xl text-[#333333] leading-relaxed">
          If you want to go deeper, the next step is a{" "}
          <span className="font-semibold">
            free 30-minute conversation with Mariana.
          </span>
        </p>
      </motion.div>
    </section>
  );
}
