"use client";

import { motion } from "motion/react";
import { PRIMARY } from "@/data/services";

export default function WorkCard({ work }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-md cursor-default"
    >
      {/* Main Image */}
      <img
        src={work.image}
        alt={work.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
        <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-xl font-bold text-white mb-2">
            {work.title}
          </h3>
          <div 
            className="w-12 h-1 mx-auto rounded-full"
            style={{ backgroundColor: PRIMARY }}
          />
        </div>
      </div>

      {/* Static Category Badge (optional, for clarity) */}
      <div className="absolute top-4 left-4 z-10">
        <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-white/10 backdrop-blur-md text-white border border-white/20">
          {work.childCategory ? work.childCategory.replace("-", " ") : work.category.replace("-", " ")}
        </span>
      </div>
    </motion.div>
  );
}
