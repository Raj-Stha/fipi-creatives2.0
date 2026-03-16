"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

const PRIMARY = "#7d2c91";
const PRIMARY_LIGHT = "#7d2c9115";

export default function AboutPageHero({ label, title, titleAccent, subtitle, breadcrumb }) {
  return (
    <section className="relative bg-white pt-28 pb-16 overflow-hidden">
      {/* Gradient wash */}
      <div
        className="absolute top-0 right-0 w-[55%] h-full pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at top right, ${PRIMARY}0d 0%, transparent 65%)`,
        }}
      />
      {/* Dot grid */}
      <div
        className="absolute bottom-0 left-0 w-80 h-80 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, ${PRIMARY} 1.5px, transparent 1.5px)`,
          backgroundSize: "20px 20px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="flex items-center gap-1.5 text-sm mb-10 flex-wrap"
        >
          <Link href="/" className="text-gray-400 hover:text-gray-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
          <span className="text-gray-400">About Us</span>
          {breadcrumb && (
            <>
              <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
              <span className="font-semibold text-gray-700">{breadcrumb}</span>
            </>
          )}
        </motion.nav>

        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border"
            style={{ backgroundColor: PRIMARY_LIGHT, color: PRIMARY, borderColor: PRIMARY + "30" }}
          >
            {label}
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="text-4xl md:text-5xl xl:text-[3.5rem] font-bold text-gray-900 leading-[1.08] tracking-tight mb-5"
          >
            {title}{" "}
            {titleAccent && (
              <span style={{ color: PRIMARY }}>{titleAccent}</span>
            )}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="text-lg text-gray-500 leading-relaxed"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
