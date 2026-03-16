"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import PackageCard from "./PackageCard";
import { PRIMARY } from "@/data/services";

export default function PackageTabs({ service }) {
  const [activeTab, setActiveTab] = useState("all");

  const filtered =
    activeTab === "all"
      ? service.packages
      : service.packages.filter((p) => p.category === activeTab);

  return (
    <section id="packages" className="bg-gray-50 max-w-7xl mx-auto px-6 py-16">
      {/* Section header */}
      <div className="mb-10">
        <p
          className="text-xs font-bold tracking-[0.3em] uppercase mb-2"
          style={{ color: PRIMARY }}
        >
          Choose Your Package
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
          Pick the right plan for your goals
        </h2>
      </div>

      {/* Tab bar */}
      <div className="flex flex-wrap gap-2 mb-12 p-1.5 bg-white rounded-2xl w-fit shadow-sm border border-gray-100">
        {service.categories.map((cat) => {
          const isActive = activeTab === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className="relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200 outline-none cursor-pointer"
              style={{ color: isActive ? "#fff" : "#9ca3af" }}
            >
              {isActive && (
                <motion.span
                  layoutId="tab-pill"
                  className="absolute inset-0 rounded-xl z-0"
                  style={{ backgroundColor: PRIMARY }}
                  transition={{ type: "spring", bounce: 0.22, duration: 0.4 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Package grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.22 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {filtered.map((pkg, i) => (
            <motion.div
              key={pkg.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28, delay: i * 0.06 }}
            >
              <PackageCard pkg={pkg} serviceSlug={service.slug} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          No packages in this category yet.
        </div>
      )}

      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <p className="text-gray-400 text-sm mb-4">
          Not sure which package is right for you?
        </p>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-200"
          style={{ backgroundColor: PRIMARY }}
        >
          Talk to an Expert →
        </Link>
      </div>
    </section>
  );
}
