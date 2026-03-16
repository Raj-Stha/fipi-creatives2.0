"use client";

import { motion } from "motion/react";
import { ChevronRight, ArrowRight, FolderOpen, Image as ImageIcon, Briefcase, Star, Eye } from "lucide-react";
import Link from "next/link";
import { PRIMARY, PRIMARY_LIGHT, SECONDARY } from "@/data/services";

export default function WorksHero() {
  return (
    <section className="relative bg-white pt-28 pb-0 overflow-hidden">
      {/* Subtle top-right gradient wash */}
      <div
        className="absolute top-0 right-0 w-[55%] h-full pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at top right, ${PRIMARY}0d 0%, transparent 70%)`,
        }}
      />
      {/* Bottom decorative dots grid */}
      <div
        className="absolute bottom-0 left-0 w-64 h-64 opacity-[0.04] pointer-events-none"
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
          <span className="font-semibold text-gray-700">Our Works</span>
        </motion.nav>

        {/* Main split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center pb-16">
          {/* LEFT: Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border"
              style={{
                backgroundColor: PRIMARY_LIGHT,
                color: PRIMARY,
                borderColor: PRIMARY + "30",
              }}
            >
              <Briefcase className="w-3.5 h-3.5" />
              Portfolio
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 leading-[1.08] tracking-tight mb-5"
            >
              Creative Works <br /> That Inspire
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg"
            >
              Explore our diverse portfolio of digital experiences, brand identities, and high-conversion marketing campaigns built for modern brands.
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="flex flex-wrap gap-3 mb-12"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-200"
                style={{ backgroundColor: PRIMARY }}
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border-2 text-gray-700 hover:border-gray-400 hover:text-gray-900 transition-all duration-300"
                style={{ borderColor: "#e5e7eb" }}
              >
                Start a Project
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="grid grid-cols-3 gap-6 border-t border-gray-100 pt-8"
            >
              {[
                { icon: FolderOpen, label: "Projects", value: "150+" },
                { icon: Star, label: "Awards", value: "24" },
                { icon: Eye, label: "Impressions", value: "10M+" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col gap-0.5">
                  <p className="text-2xl md:text-3xl font-bold text-gray-900">{s.value}</p>
                  <p className="text-xs text-gray-400 font-medium">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Hero image + floating cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative hidden lg:block"
          >
            {/* Decorative ring behind image */}
            <div
              className="absolute -inset-4 rounded-[2.5rem] opacity-10"
              style={{ background: `linear-gradient(135deg, ${PRIMARY}, ${SECONDARY})` }}
            />

            {/* Main image */}
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80"
                alt="Creative Works"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              <div
                className="absolute top-5 left-5 w-12 h-12 rounded-2xl flex items-center justify-center shadow-xl"
                style={{ backgroundColor: PRIMARY }}
              >
                <ImageIcon className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: -20, x: -10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -top-5 -right-6 bg-white rounded-2xl shadow-2xl border border-gray-100 px-5 py-4 flex items-center gap-3"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: PRIMARY_LIGHT }}
              >
                <Briefcase className="w-5 h-5" style={{ color: PRIMARY }} />
              </div>
              <div>
                <p className="text-xs text-gray-400 leading-none mb-0.5">Successfully Delivered</p>
                <p className="text-lg font-bold text-gray-900 leading-none">150+ Projects</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="h-12 bg-gradient-to-b from-white to-gray-50" />
    </section>
  );
}
