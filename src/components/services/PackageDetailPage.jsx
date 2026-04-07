"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  Check, ChevronRight, ChevronDown, ArrowLeft,
  TrendingUp, Palette, Search, Code2, Share2, Target,
  MousePointerClick, BarChart3, Mail, Megaphone, Filter,
  Sparkles, Image, BookOpen, Layers, SearchCode, FileText,
  Link as LinkIcon, MapPin, LayoutTemplate, ShoppingCart,
  Building2, Cpu, Smartphone, Camera, Users, Compass,
  Crown, MessageSquare, Tag, Zap,
} from "lucide-react";
import { PRIMARY, PRIMARY_LIGHT, SECONDARY, SECONDARY_LIGHT } from "@/data/services";

const ICON_MAP = {
  TrendingUp, Palette, Search, Code2, Share2, Target,
  MousePointerClick, BarChart3, Mail, Megaphone, Filter,
  Sparkles, Image, BookOpen, Layers, SearchCode, FileText,
  Link: LinkIcon, MapPin, LayoutTemplate, ShoppingCart,
  Building2, Cpu, Smartphone, Camera, Users, Compass,
  Crown, MessageSquare, Tag,
};

export default function PackageDetailPage({ service, pkg }) {
  const ServiceIcon = ICON_MAP[service.icon] || Target;
  const PkgIcon = ICON_MAP[pkg.icon] || Zap;

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ── Hero ── */}
      <section className="relative bg-white pt-28 pb-16 overflow-hidden">
        {/* Subtle bg wash */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
          style={{ background: `radial-gradient(ellipse at top right, ${PRIMARY}0a 0%, transparent 70%)` }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 text-sm mb-10 flex-wrap">
            <Link href="/" className="text-gray-400 hover:text-gray-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-300 flex-shrink-0" />
            <Link href="/services" className="text-gray-400 hover:text-gray-600 transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-300 flex-shrink-0" />
            <Link
              href={`/services/${service.slug}`}
              className="hover:underline transition-colors"
              style={{ color: PRIMARY }}
            >
              {service.title}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-300 flex-shrink-0" />
            <span className="text-gray-700 font-semibold truncate max-w-[180px]">{pkg.title}</span>
          </nav>

          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Service pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-8 border backdrop-blur-sm"
              style={{ background: PRIMARY_LIGHT, color: PRIMARY, borderColor: PRIMARY + "30" }}
            >
              <ServiceIcon className="w-3.5 h-3.5" />
              {service.title}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6"
            >
              {pkg.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed"
            >
              {pkg.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Main content ── */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* ── LEFT: detailed info ── */}
          <div className="lg:col-span-2 space-y-12">

            {/* Hero image */}
            {pkg.image && (
              <div className="rounded-3xl overflow-hidden aspect-[16/7] shadow-lg">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-600 leading-relaxed text-base">{pkg.description}</p>
            </section>

            {/* Who is it for — subtle secondary bg */}
            <section
              className="rounded-2xl p-6 border"
              style={{
                background: SECONDARY_LIGHT,
                borderColor: SECONDARY + "33",
              }}
            >
              <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2 text-sm uppercase tracking-widest">
                <Target className="w-4 h-4" style={{ color: SECONDARY }} />
                Who is this for?
              </h3>
              <p className="text-gray-700 leading-relaxed">{pkg.whoIsItFor}</p>
            </section>

            {/* What's Included */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What&apos;s Included</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {pkg.features.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100 shadow-sm"
                  >
                    <span
                      className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: SECONDARY }}
                    >
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </span>
                    <span className="text-sm text-gray-700">{f}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Back link */}
            <div>
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors group"
                style={{ color: PRIMARY }}
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                Back to {service.title} packages
              </Link>
            </div>
          </div>

          {/* ── RIGHT: sticky sidebar ── */}
          <div className="hidden lg:block">
            <div className="sticky top-28 space-y-6">
              {/* Pricing card */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-[2.5rem] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-8 relative overflow-hidden"
              >
                {/* Decorative accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gray-50 border border-gray-100 shadow-sm">
                      <PkgIcon className="w-6 h-6" style={{ color: PRIMARY }} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold mb-0.5">Package Price</p>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-3xl font-black text-gray-900">{pkg.price}</span>
                        {pkg.priceNote && <span className="text-sm text-gray-400 font-medium">{pkg.priceNote}</span>}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <p className="text-xs font-bold text-gray-900 uppercase tracking-widest flex items-center gap-2">
                       Core Features
                    </p>
                    <ul className="space-y-3">
                      {pkg.features.slice(0, 5).map((f, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600 leading-tight">
                          <div className="mt-1 w-4 h-4 rounded-full flex items-center justify-center bg-secondary/10 flex-shrink-0">
                            <Check className="w-2.5 h-2.5 text-secondary" strokeWidth={4} />
                          </div>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact-us"
                    className="w-full h-14 flex items-center justify-center gap-2 rounded-2xl text-sm font-bold text-white transition-all duration-500 hover:shadow-[0_10px_20px_rgba(125,44,145,0.3)] hover:-translate-y-1 mb-4"
                    style={{ backgroundColor: PRIMARY }}
                  >
                    Get Started Now
                  </Link>
                  <Link
                    href="/contact-us"
                    className="w-full h-14 flex items-center justify-center py-3 rounded-2xl text-sm font-semibold text-gray-600 bg-gray-50 hover:bg-gray-100 transition-all border border-gray-100"
                  >
                    Ask a Question
                  </Link>
                  <div className="flex items-center justify-center gap-4 mt-6 text-[10px] text-gray-400 font-medium">
                    <span className="flex items-center gap-1"><Zap className="w-3 h-3 text-secondary" /> Instant setup</span>
                    <span className="flex items-center gap-1"><Users className="w-3 h-3 text-secondary" /> Expert support</span>
                  </div>
                </div>
              </motion.div>

              {/* Navigation help */}
              <div className="bg-gray-950 rounded-[2rem] p-8 text-white relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 relative z-10">Quick Navigation</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="flex items-center justify-between text-sm font-bold group/link relative z-10"
                >
                  <span className="group-hover:text-secondary transition-colors">All {service.title} Plans</span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover/link:bg-secondary transition-all">
                    <ChevronRight className="w-4 h-4 group-hover/link:text-gray-950" />
                  </div>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
