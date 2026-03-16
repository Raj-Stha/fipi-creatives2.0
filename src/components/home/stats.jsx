"use client";

import { motion } from "motion/react";

const stats = [
  { label: "Years of Experience", value: "12+" },
  { label: "Projects Completed", value: "500+" },
  { label: "Happy Clients", value: "250+" },
  { label: "Creative Awards", value: "45+" },
];

export default function Stats() {
  return (
    <section className="py-24  ">
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-2 text-black lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-display font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-fipi-light/40 uppercase tracking-widest text-xs font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
