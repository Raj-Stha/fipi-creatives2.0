"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Clock, Calendar, ArrowRight } from "lucide-react";

const PRIMARY = "#7d2c91";

export default function BlogCard({ blog, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
    >
      <Link
        href={`/blog/${blog.slug}`}
        className="group block bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-400 overflow-hidden h-full flex flex-col"
      >
        {/* Thumbnail */}
        <div className="relative h-52 overflow-hidden bg-gray-100 flex-shrink-0">
          <img
            src={blog.thumbImage}
            alt={blog.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span
              className="inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-wide text-white shadow"
              style={{ backgroundColor: blog.categoryColor }}
            >
              {blog.category}
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 p-6">
          {/* Meta */}
          <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3 h-3" />
              {blog.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3 h-3" />
              {blog.readTime}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-base font-bold text-gray-900 leading-snug mb-2.5 group-hover:text-[#7d2c91] transition-colors duration-300 line-clamp-2">
            {blog.title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1 line-clamp-3">
            {blog.excerpt}
          </p>

          {/* Divider */}
          <div className="h-px bg-gray-100 mb-4" />

          {/* Author + CTA */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <img
                src={blog.author.avatar}
                alt={blog.author.name}
                className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-sm"
              />
              <div>
                <p className="text-xs font-semibold text-gray-800 leading-none">{blog.author.name}</p>
                <p className="text-[11px] text-gray-400 leading-none mt-0.5">{blog.author.role}</p>
              </div>
            </div>

            <span
              className="flex items-center gap-1 text-xs font-semibold transition-all duration-300 group-hover:gap-2"
              style={{ color: PRIMARY }}
            >
              Read
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
