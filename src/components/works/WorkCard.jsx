"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, FolderOpen, Tag } from "lucide-react";
import { PRIMARY, PRIMARY_LIGHT, SECONDARY_LIGHT, SECONDARY } from "@/data/services";

export default function WorkCard({ work }) {
  // Let's assume the detail route will be created later. For now, we link to a placeholder /our-works/[slug]
  const href = `/our-works/${work.slug}`;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:border-gray-200 transition-all duration-300 flex flex-col overflow-hidden"
    >
      {/* ── Card image ── */}
      <div className="relative h-56 overflow-hidden bg-gray-100 flex-shrink-0">
        <img
          src={work.image}
          alt={work.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />

        {/* Client & Year Badge */}
        <div className="absolute bottom-4 left-4 z-10 text-white">
          <p className="text-[10px] uppercase font-bold tracking-widest text-white/80 mb-0.5">{work.year}</p>
          <p className="font-semibold text-sm leading-tight">{work.client}</p>
        </div>

        {/* Category Badge — top right */}
        {work.category && (
          <div className="absolute top-4 right-4 z-10">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase text-white shadow-lg backdrop-blur-md bg-black/30 border border-white/20"
            >
              {work.category.replace("-", " ")}
            </span>
          </div>
        )}
      </div>

      {/* ── Card body ── */}
      <div className="pt-8 px-6 pb-6 flex flex-col flex-1">
        {/* Title + description */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug group-hover:text-fipi-green transition-colors">
          {work.title}
        </h3>
        <p className="text-sm text-gray-500 mb-6 leading-relaxed line-clamp-2">
          {work.description}
        </p>

        {/* Divider */}
        <div className="h-px bg-gray-100 mb-6" />

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6 flex-1">
          {work.tags.map((tag, i) => (
            <span
              key={i}
              className="inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-lg bg-gray-50 text-gray-600 border border-gray-100"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link
          href={href}
          className="group/btn w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-200 hover:-translate-y-0.5"
          style={{ backgroundColor: PRIMARY }}
        >
          View Case Study
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
