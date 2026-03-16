"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Clock, Calendar, ChevronRight } from "lucide-react";

const PRIMARY = "#7d2c91";
const PRIMARY_LIGHT = "#7d2c9115";
const SECONDARY = "#10b981";

export default function BlogHero({ featured }) {
  return (
    <section className="relative bg-white pt-28 pb-0 overflow-hidden">
      {/* Subtle gradient wash */}
      <div
        className="absolute top-0 right-0 w-[60%] h-full pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at top right, ${PRIMARY}0d 0%, transparent 65%)`,
        }}
      />
      {/* Dot grid bottom-left */}
      <div
        className="absolute bottom-0 left-0 w-72 h-72 opacity-[0.04] pointer-events-none"
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
          className="flex items-center gap-1.5 text-sm mb-10"
        >
          <Link href="/" className="text-gray-400 hover:text-gray-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
          <span className="font-semibold text-gray-700">Blog</span>
        </motion.nav>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5 border"
          style={{ backgroundColor: PRIMARY_LIGHT, color: PRIMARY, borderColor: PRIMARY + "30" }}
        >
          FiPi Insights
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 leading-[1.08] tracking-tight mb-4 max-w-2xl"
        >
          Ideas that{" "}
          <span style={{ color: PRIMARY }}>move</span>{" "}
          your brand forward
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="text-lg text-gray-500 leading-relaxed mb-14 max-w-xl"
        >
          Strategy, creativity, and data — distilled into clear, actionable insights for ambitious brands.
        </motion.p>

        {/* Featured post card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18 }}
        >
          <Link
            href={`/blog/${featured.slug}`}
            className="group relative grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[280px] overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-white/10" />

              {/* Category badge */}
              <div className="absolute top-5 left-5">
                <span
                  className="inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-wide text-white shadow"
                  style={{ backgroundColor: featured.categoryColor }}
                >
                  {featured.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {featured.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {featured.readTime}
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-4 group-hover:text-[#7d2c91] transition-colors duration-300">
                {featured.title}
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                {featured.excerpt}
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={featured.author.avatar}
                    alt={featured.author.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-white shadow"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{featured.author.name}</p>
                    <p className="text-xs text-gray-400">{featured.author.role}</p>
                  </div>
                </div>
                <div
                  className="flex items-center gap-1.5 text-sm font-semibold transition-all duration-300 group-hover:gap-2.5"
                  style={{ color: PRIMARY }}
                >
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>

      {/* Wave transition */}
      <div className="h-14 bg-gradient-to-b from-white to-gray-50 mt-14" />
    </section>
  );
}
