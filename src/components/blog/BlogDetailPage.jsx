"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ChevronRight,
  Clock,
  Calendar,
  Tag,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import BlogCard from "./BlogCard";

const PRIMARY = "#7d2c91";
const PRIMARY_LIGHT = "#7d2c9115";
const SECONDARY = "#10b981";
const SECONDARY_LIGHT = "#10b98115";

export default function BlogDetailPage({ blog, related }) {
  return (
    <article className="bg-white min-h-screen">
      {/* ── Hero ── */}
      <section className="relative bg-white pt-28 pb-0 overflow-hidden">
        {/* bg wash */}
        <div
          className="absolute top-0 right-0 w-[55%] h-full pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at top right, ${PRIMARY}0d 0%, transparent 65%)`,
          }}
        />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="flex items-center gap-1.5 text-sm mb-10 flex-wrap"
          >
            <Link href="/" className="text-gray-400 hover:text-gray-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
            <Link href="/blog" className="text-gray-400 hover:text-gray-600 transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
            <span className="font-semibold text-gray-700 line-clamp-1">{blog.title}</span>
          </motion.nav>

          {/* Category badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-5"
          >
            <span
              className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide text-white shadow"
              style={{ backgroundColor: blog.categoryColor }}
            >
              {blog.category}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-6"
          >
            {blog.title}
          </motion.h1>

          {/* Excerpt */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="text-lg text-gray-500 leading-relaxed mb-8"
          >
            {blog.excerpt}
          </motion.p>

          {/* Meta row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex flex-wrap items-center gap-6 pb-8 border-b border-gray-100"
          >
            {/* Author */}
            <div className="flex items-center gap-3">
              <img
                src={blog.author.avatar}
                alt={blog.author.name}
                className="w-11 h-11 rounded-full object-cover border-2 border-white shadow"
              />
              <div>
                <p className="text-sm font-semibold text-gray-800">{blog.author.name}</p>
                <p className="text-xs text-gray-400">{blog.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {blog.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {blog.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Hero Image ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-5xl mx-auto px-6 mt-10 mb-0"
      >
        <div className="relative rounded-3xl overflow-hidden aspect-[16/7] shadow-2xl">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>
      </motion.div>

      {/* ── Article body ── */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="space-y-8">
          {blog.content.map((block, idx) => {
            if (block.type === "paragraph") {
              return (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4 }}
                  className="text-gray-700 text-[17px] leading-[1.85]"
                >
                  {block.text}
                </motion.p>
              );
            }

            if (block.type === "heading") {
              return (
                <motion.h2
                  key={idx}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4 }}
                  className="text-xl md:text-2xl font-bold text-gray-900 pt-4"
                  style={{ borderLeft: `4px solid ${PRIMARY}`, paddingLeft: "1rem" }}
                >
                  {block.text}
                </motion.h2>
              );
            }

            if (block.type === "image") {
              return (
                <motion.figure
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5 }}
                  className="my-10"
                >
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={block.src}
                      alt={block.caption}
                      className="w-full object-cover"
                    />
                  </div>
                  {block.caption && (
                    <figcaption className="mt-3 text-center text-sm text-gray-400 italic">
                      {block.caption}
                    </figcaption>
                  )}
                </motion.figure>
              );
            }

            return null;
          })}
        </div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-14 pt-8 border-t border-gray-100"
        >
          <div className="flex items-center gap-2 flex-wrap">
            <Tag className="w-4 h-4 text-gray-400" />
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-semibold border transition-colors"
                style={{
                  backgroundColor: PRIMARY_LIGHT,
                  color: PRIMARY,
                  borderColor: PRIMARY + "25",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Author card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mt-10 rounded-2xl border border-gray-100 p-6 flex items-center gap-5"
          style={{ backgroundColor: PRIMARY_LIGHT }}
        >
          <img
            src={blog.author.avatar}
            alt={blog.author.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md flex-shrink-0"
          />
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: PRIMARY }}>
              Written by
            </p>
            <p className="text-base font-bold text-gray-900">{blog.author.name}</p>
            <p className="text-sm text-gray-500">{blog.author.role}, FiPi Creatives</p>
          </div>
        </motion.div>

        {/* Back link */}
        <div className="mt-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all articles
          </Link>
        </div>
      </div>

      {/* ── Related posts ── */}
      {related.length > 0 && (
        <section className="bg-gray-50 py-20 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-2"
                  style={{ color: PRIMARY }}
                >
                  Keep reading
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Related Articles</h2>
              </div>
              <Link
                href="/blog"
                className="hidden sm:flex items-center gap-1.5 text-sm font-semibold transition-all hover:gap-2.5 duration-300"
                style={{ color: PRIMARY }}
              >
                View all
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((b, i) => (
                <BlogCard key={b.id} blog={b} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
