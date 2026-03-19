"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Clock, Calendar } from "lucide-react";

const PRIMARY = "#7d2c91";
const PRIMARY_LIGHT = "#7d2c9115";

export default function HomeBlogSection({ blogs }) {
  return (
    <section className="bg-white   overflow-hidden">
      <div className="max-w-7xl  py-12 px-6 mx-auto">
        {/* ── Section Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Ideas worth <span style={{ color: PRIMARY }}>reading</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Link
              href="/blog"
              className="group inline-flex items-center  text-primary hover:bg-primary hover:text-white gap-2 px-5 py-2.5 rounded-md text-sm font-semibold border-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              View All Blogs
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {blogs.map((blog, i) => (
            <HomeBlogCard key={blog.id} blog={blog} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeBlogCard({ blog, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/blog/${blog.slug}`}
        className="group overflow-hidden shadow-md bg-white rounded-md flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      >
        {/* ── Image area ── */}
        <div className="relative h-52 overflow-hidden flex-shrink-0">
          <img
            src={blog.thumbImage}
            alt={blog.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

          {/* Category badge — top left */}
          <div className="absolute top-4 left-4">
            <span
              className="px-3 py-1.5 rounded-full text-xs font-bold text-white backdrop-blur-sm shadow"
              style={{ backgroundColor: blog.categoryColor }}
            >
              {blog.category}
            </span>
          </div>

          {/* Title overlaid on image bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="font-bold text-white text-base leading-snug line-clamp-2 drop-shadow-sm">
              {blog.title}
            </h3>
          </div>
        </div>

        {/* ── Body with hover-slide gradient ── */}
        <div className="relative flex-grow overflow-hidden">
          {/* Purple gradient slides up on hover */}
          <div
            className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-350 ease-out"
            style={{
              background: `linear-gradient(135deg, ${PRIMARY} 0%, #5a1a6e 100%)`,
            }}
          />

          <div className="relative p-5 flex flex-col">
            {/* Meta */}
            <div className="flex items-center gap-4 text-xs text-gray-400 group-hover:text-white/70 transition-colors duration-300 mb-3">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3 h-3" />
                {blog.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3 h-3" />
                {blog.readTime}
              </span>
            </div>

            {/* Excerpt */}
            <p className="text-sm text-gray-500 group-hover:text-white/85 leading-relaxed line-clamp-3 transition-colors duration-300">
              {blog.excerpt}
            </p>

            {/* CTA — collapses to zero height when not hovered via grid-rows trick */}
            <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-out">
              <div className="overflow-hidden">
                <div className="pt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-100">
                  <span className="text-sm font-semibold text-white">
                    Read Article
                  </span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom accent bar ── */}
        <div
          className="h-1 flex-shrink-0 transition-all duration-300"
          style={{
            background: `linear-gradient(to right, ${PRIMARY}, ${blog.categoryColor})`,
          }}
        />
      </Link>
    </motion.div>
  );
}
