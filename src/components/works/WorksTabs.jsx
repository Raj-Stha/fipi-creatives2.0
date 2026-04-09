"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import WorkCard from "./WorkCard";
import { PRIMARY } from "@/data/services";

export default function WorksTabs({ works, categories }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // Get initial states from URL
  const initialCategory = searchParams.get("category") || "all";
  const initialChild = searchParams.get("child") || "all";

  const [activeTab, setActiveTab] = useState(initialCategory);
  const [activeChild, setActiveChild] = useState(initialChild);

  // Sync state with URL changes (back/forward button)
  useEffect(() => {
    const cat = searchParams.get("category") || "all";
    const child = searchParams.get("child") || "all";
    setActiveTab(cat);
    setActiveChild(child);
  }, [searchParams]);

  // Update URL helper
  const updateUrl = useCallback((category, child) => {
    const params = new URLSearchParams(searchParams);
    if (category === "all") {
      params.delete("category");
    } else {
      params.set("category", category);
    }

    if (child === "all") {
      params.delete("child");
    } else {
      params.set("child", child);
    }

    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }, [pathname, router, searchParams]);

  const handleTabChange = (catId) => {
    setActiveTab(catId);
    setActiveChild("all"); // Reset child when switching main category
    updateUrl(catId, "all");
  };

  const handleChildChange = (childId) => {
    setActiveChild(childId);
    updateUrl(activeTab, childId);
  };

  const currentCategory = categories.find(cat => cat.id === activeTab);
  const children = currentCategory?.children || [];

  const filtered = works.filter(work => {
    const matchParent = activeTab === "all" || work.category === activeTab;
    const matchChild = activeChild === "all" || work.childCategory === activeChild;
    return matchParent && matchChild;
  });

  return (
    <section id="projects" className="bg-white max-w-7xl mx-auto px-6 py-12">
      {/* Top Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-4">
           <div className="h-px w-12 bg-gray-200" />
           <span className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase">Our Portfolio</span>
           <div className="h-px w-12 bg-gray-200" />
        </div>
        <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
          Some Of Our <span style={{ color: PRIMARY }}>Recent Work</span>
        </h2>
      </div>

      {/* Parent Tabs - Pills */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => {
          const isActive = activeTab === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => handleTabChange(cat.id)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${
                isActive 
                  ? "text-white shadow-lg" 
                  : "bg-white text-gray-400 border-gray-200 hover:border-gray-300 hover:text-gray-600"
              }`}
              style={{ 
                backgroundColor: isActive ? PRIMARY : "transparent",
                borderColor: isActive ? PRIMARY : undefined
              }}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Child Tabs - List inline */}
      <AnimatePresence mode="wait">
        {children.length > 0 && (
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            {children.map((child) => (
              <button
                key={child.id}
                onClick={() => handleChildChange(child.id)}
                className={`text-sm font-bold transition-colors duration-200 relative pb-1 ${
                  activeChild === child.id ? "text-gray-900" : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {child.label}
                {activeChild === child.id && (
                  <motion.div 
                    layoutId="activeChildUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                    style={{ backgroundColor: PRIMARY }}
                  />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Works grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeTab}-${activeChild}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filtered.map((work, i) => (
            <WorkCard key={work.slug} work={work} />
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          No projects found in this category.
        </div>
      )}
    </section>
  );
}
