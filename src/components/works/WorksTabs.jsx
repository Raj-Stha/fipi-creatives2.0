"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import WorkCard from "./WorkCard";
import { PRIMARY } from "@/data/services";

export default function WorksTabs({ works, categories }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const categoryParam = searchParams.get("category");

  const [activeTab, setActiveTab] = useState("all");
  const isManualTabChange = useRef(false);

  useEffect(() => {
    if (categoryParam && categories.some((c) => c.id === categoryParam)) {
      setActiveTab(categoryParam);
      
      // If we didn't just click a tab manually, smooth scroll to this section
      if (!isManualTabChange.current) {
        setTimeout(() => {
          const element = document.getElementById("projects");
          if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - 80; // 80px offset for the fixed header
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }, 100);
      }
    } else {
      setActiveTab("all");
    }
    
    // Reset manual override after effect runs
    isManualTabChange.current = false;
  }, [categoryParam, categories]);

  const handleTabChange = (catId) => {
    isManualTabChange.current = true;
    setActiveTab(catId);
    
    // Update the URL without scrolling
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    if (catId === "all") {
      current.delete("category");
    } else {
      current.set("category", catId);
    }
    
    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.replace(`${pathname}${query}`, { scroll: false });
  };

  const filtered =
    activeTab === "all"
      ? works
      : works.filter((w) => w.category === activeTab);

  return (
    <section id="projects" className="bg-gray-50 max-w-7xl mx-auto px-6 py-16">
      {/* Section header */}
      <div className="mb-10 text-center md:text-left">
        <p
          className="text-xs font-bold tracking-[0.3em] uppercase mb-2"
          style={{ color: PRIMARY }}
        >
          Our Portfolio
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
          Featured Works
        </h2>
      </div>

      {/* Tab bar */}
      <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-12 p-1.5 bg-white rounded-2xl w-fit xl:mx-0 mx-auto shadow-sm border border-gray-100">
        {categories.map((cat) => {
          const isActive = activeTab === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => handleTabChange(cat.id)}
              className="relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200 outline-none"
              style={{ color: isActive ? "#fff" : "#9ca3af" }}
            >
              {isActive && (
                <motion.span
                  layoutId="work-tab-pill"
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

      {/* Works grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.22 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filtered.map((work, i) => (
            <motion.div
              key={work.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28, delay: i * 0.06 }}
            >
              <WorkCard work={work} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          No works in this category yet.
        </div>
      )}

      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <p className="text-gray-400 text-sm mb-4">
          Ready to start your own project with us?
        </p>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-200"
          style={{ backgroundColor: PRIMARY }}
        >
          Let's Talk Business →
        </Link>
      </div>
    </section>
  );
}
