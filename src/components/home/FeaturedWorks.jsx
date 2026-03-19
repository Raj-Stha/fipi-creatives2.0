"use client";

import { works, workCategories } from "@/data/works";
import WorkCard from "../works/WorkCard";
import { PRIMARY } from "@/data/services";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export default function FeaturedWorks() {
  // Filter out the "all" category for the homepage
  const homeCategories = workCategories.filter((cat) => cat.id !== "all");

  // Set default tab to the first category instead of "all"
  const [activeTab, setActiveTab] = useState(homeCategories[0]?.id || "");

  const filteredWorks = works.filter((w) => w.category === activeTab);

  // Show only latest three for the active category
  const displayedWorks = filteredWorks.slice(0, 3);

  const viewAllHref = `/our-works?category=${activeTab}`;

  return (
    <section className="bg-white py-12 relative z-20 -mt-[100vh]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-6 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-none">
              Latest Works
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href={viewAllHref}
              className="group flex items-center gap-2 font-bold text-sm tracking-widest uppercase transition-all hover:opacity-80 pb-1"
              style={{ color: PRIMARY }}
            >
              View More {activeTab.replace("-", " ")}
              <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center transition-all group-hover:bg-primary group-hover:text-white">
                <ArrowRight className="w-4 h-4 " />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Tab bar - Filtered to hide "All" */}
        <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8 p-1.5 bg-gray-50 rounded-2xl w-fit xl:mx-0 mx-auto shadow-sm border border-gray-100">
          {homeCategories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className="relative px-5 py-2.5 rounded-xl cursor-pointer text-sm font-semibold transition-colors duration-200 outline-none"
                style={{ color: isActive ? "#fff" : "#000" }}
              >
                {isActive && (
                  <motion.span
                    layoutId="home-work-tab-pill"
                    className="absolute inset-0 rounded-sm z-0"
                    style={{ backgroundColor: PRIMARY }}
                    transition={{ type: "spring", bounce: 0.22, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Works Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 "
          >
            {displayedWorks.map((work, index) => (
              <motion.div
                key={work.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <WorkCard work={work} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {displayedWorks.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            No works in this category yet.
          </div>
        )}
      </div>
    </section>
  );
}
