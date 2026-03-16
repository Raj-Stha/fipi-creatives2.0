"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import BlogCard from "./BlogCard";

const ALL = "All";

export default function BlogGrid({ blogs }) {
  const categories = [
    ALL,
    ...Array.from(new Set(blogs.map((b) => b.category))),
  ];
  const [active, setActive] = useState(ALL);

  const filtered =
    active === ALL ? blogs : blogs.filter((b) => b.category === active);

  const PRIMARY = "#7d2c91";
  const PRIMARY_LIGHT = "#7d2c9115";

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p
              className="text-xs font-bold tracking-widest uppercase mb-2"
              style={{ color: PRIMARY }}
            >
              All Articles
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Browse our latest thinking
            </h2>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-white rounded-2xl w-fit shadow-sm border border-gray-100">
            {categories.map((cat) => {
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className="relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200 outline-none cursor-pointer"
                  style={{ color: isActive ? "#fff" : "#9ca3af" }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="filter-pill"
                      className="absolute inset-0 rounded-xl z-0"
                      style={{ backgroundColor: PRIMARY }}
                      transition={{
                        type: "spring",
                        bounce: 0.22,
                        duration: 0.4,
                      }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.map((blog, i) => (
              <BlogCard key={blog.id} blog={blog} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-24 text-gray-400">
            <p className="text-lg">No articles found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
