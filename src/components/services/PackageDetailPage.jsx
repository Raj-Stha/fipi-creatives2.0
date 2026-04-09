"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  Check, ChevronRight,
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
    <div className="bg-gray-50 min-h-screen pt-20">

      {/* ── Header ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center md:text-left">
          <nav className="flex items-center justify-center md:justify-start gap-1 text-[9px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-4 flex-wrap">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="w-3 h-3 text-gray-300" />
            <Link href="/services" className="hover:text-primary relative z-30 cursor-pointer py-1">Services</Link>
            <ChevronRight className="w-3 h-3 text-gray-300" />
            <Link href={`/services/${service.slug}`} className="hover:text-primary">{service.title}</Link>
            <ChevronRight className="w-3 h-3 text-gray-300" />
            <span className="text-gray-900">{pkg.title}</span>
          </nav>

        </div>
      </section>

      {/* ── Compact Two-Column Content ── */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* ── LEFT: Services Card (Reduced Size) ── */}
          <section className="lg:col-span-7 relative bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 overflow-hidden group">
            
            {/* ── Premium Diagonal Badge ── */}
            <div className="absolute top-0 left-0 w-32 h-32 overflow-hidden pointer-events-none z-20">
              <div 
                className="absolute top-6 -left-10 w-40 py-1.5 transform -rotate-45 text-center text-[8px] sm:text-[9px] font-black uppercase tracking-[0.2em] text-white shadow-lg border-y border-white/10"
                style={{ 
                  background: `linear-gradient(135deg, ${PRIMARY}, ${SECONDARY})` 
                }}
              >
                {pkg.title}
              </div>
            </div>

            {/* ── Center: Minimalist Service Title ── */}
            <div className="absolute top-6 left-0 w-full flex justify-center z-10 pointer-events-none px-24">
              <div className="flex flex-col items-center">
                <span className="text-[7px] sm:text-[8px] font-black text-gray-400 uppercase tracking-[0.5em] text-center max-w-[200px] sm:max-w-none">
                  {service.title}
                </span>
                <div className="h-[2px] w-6 bg-secondary/30 rounded-full mt-1.5" />
              </div>
            </div>

            <div className="flex justify-end mb-10 relative z-20 pt-4 sm:pt-3">
              {/* ── Clean Minimalist Price Badge ── */}
              <div className="relative group/price">
                <div 
                  className="absolute -inset-1 blur-lg opacity-20 group-hover/price:opacity-40 transition-opacity rounded-2xl"
                  style={{ background: `linear-gradient(135deg, ${PRIMARY}, ${SECONDARY})` }}
                />
                <div 
                  className="relative flex items-center gap-4 px-6 py-3 rounded-2xl text-white shadow-2xl border border-white/20 backdrop-blur-xl transition-all hover:scale-105"
                  style={{ backgroundColor: PRIMARY }}
                >
                  <span className="text-xl sm:text-2xl font-black tracking-tight whitespace-nowrap">{pkg.price}</span>
                  <div className="h-4 w-px bg-white/20" />
                  <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">{pkg.priceNote}</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 grid sm:grid-cols-2 gap-2">
              {pkg.features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className="flex items-center gap-2.5 p-1.5 rounded-xl bg-gray-50/50 hover:bg-white border border-transparent hover:border-primary/10 hover:shadow-sm transition-all"
                >
                  <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Check className="w-4 h-4 text-secondary" strokeWidth={5} />
                  </div>
                  <span className="text-sm font-bold text-gray-700 tracking-tight leading-snug">{f}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-50 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/contact-us"
                className="flex-1 w-full h-12 flex items-center justify-center gap-2 rounded-xl text-sm font-black text-white transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                style={{ backgroundColor: PRIMARY }}
              >
                Get Started Now
                <Zap className="w-4 h-4" />
              </Link>
              <Link
                href={`/services/${service.slug}`}
                className="px-6 h-12 flex items-center justify-center text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-primary border border-gray-100 rounded-xl transition-all"
              >
                Compare Plans
              </Link>
            </div>
          </section>

          {/* ── RIGHT: Details Card (Compact) ── */}
          <section className="lg:col-span-5 bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
            {/* Slimmer Image Banner */}
            {pkg.image && (
              <div className="aspect-[21/9] relative overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent" />
              </div>
            )}

            <div className="p-6 md:p-8 space-y-6">
              <div className="space-y-2">
                <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5" />
                  Overview
                </h3>
                <p className="text-gray-600 text-sm font-medium leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-[10px] font-black text-secondary uppercase tracking-[0.3em] flex items-center gap-2">
                  <Target className="w-3.5 h-3.5" />
                  Best For
                </h3>
                <div 
                  className="rounded-2xl p-4 border border-secondary/20 bg-secondary/5"
                >
                  <p className="text-gray-800 text-sm font-bold leading-relaxed">
                    {pkg.whoIsItFor}
                  </p>
                </div>
              </div>

              {/* Compact Trust Message */}
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm flex-shrink-0">
                  <Zap className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="text-[11px] font-black text-gray-900 tracking-tight">Priority Support</h4>
                  <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">Included with your package</p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
