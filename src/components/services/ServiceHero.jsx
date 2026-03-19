"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ChevronRight, ArrowRight, Users, Star, TrendingUp as TrendIcon } from "lucide-react";
import {
  TrendingUp, Palette, Search, Code2, Share2, Target,
  MousePointerClick, BarChart3, Mail, Megaphone, Filter,
  Sparkles, Image, BookOpen, Layers, SearchCode, FileText,
  Link as LinkIcon, MapPin, LayoutTemplate, ShoppingCart,
  Building2, Cpu, Smartphone, Camera, Compass,
  Crown, MessageSquare, Tag,
} from "lucide-react";
import { PRIMARY, PRIMARY_LIGHT, SECONDARY } from "@/data/services";

const ICON_MAP = {
  TrendingUp, Palette, Search, Code2, Share2, Target,
  MousePointerClick, BarChart3, Mail, Megaphone, Filter,
  Sparkles, Image, BookOpen, Layers, SearchCode, FileText,
  Link: LinkIcon, MapPin, LayoutTemplate, ShoppingCart,
  Building2, Cpu, Smartphone, Camera, Users: Smartphone, Compass,
  Crown, MessageSquare, Tag,
};

export default function ServiceHero({ service }) {
  const Icon = ICON_MAP[service.icon] || Target;

  return (
    <section className="relative bg-white pt-28 pb-0 overflow-hidden">

      {/* Subtle top-right gradient wash */}
      <div
        className="absolute top-0 right-0 w-[55%] h-full pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at top right, ${PRIMARY}0d 0%, transparent 70%)`,
        }}
      />
      {/* Bottom decorative dots grid */}
      <div
        className="absolute bottom-0 left-0 w-64 h-64 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, ${PRIMARY} 1.5px, transparent 1.5px)`,
          backgroundSize: "20px 20px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="flex items-center gap-1.5 text-sm mb-10"
        >
          <Link href="/" className="text-gray-400 hover:text-gray-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
          <Link href="/#services" className="text-gray-400 hover:text-gray-600 transition-colors">Services</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
          <span className="font-semibold text-gray-700">{service.title}</span>
        </motion.nav>

        {/* ── Main split layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center pb-16">

          {/* ── LEFT: Text content ── */}
          <div>
            {/* Service badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border"
              style={{
                backgroundColor: PRIMARY_LIGHT,
                color: PRIMARY,
                borderColor: PRIMARY + "30",
              }}
            >
              <Icon className="w-3.5 h-3.5" />
              FiPi Services
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 leading-[1.08] tracking-tight mb-5"
            >
              {service.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg"
            >
              {service.description}
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="flex flex-wrap gap-3 mb-12"
            >
              <a
                href="#packages"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-200"
                style={{ backgroundColor: PRIMARY }}
              >
                Explore Packages
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border-2 text-gray-700 hover:border-gray-400 hover:text-gray-900 transition-all duration-300"
                style={{ borderColor: "#e5e7eb" }}
              >
                Talk to Us
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="grid grid-cols-3 gap-6 border-t border-gray-100 pt-8"
            >
              {[
                { icon: TrendIcon, label: "Packages", value: `${service.packages.length}+` },
                { icon: Users, label: "Happy Clients", value: "200+" },
                { icon: Star, label: "Satisfaction", value: "98%" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col gap-0.5">
                  <p className="text-2xl md:text-3xl font-bold text-gray-900">{s.value}</p>
                  <p className="text-xs text-gray-400 font-medium">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Hero image + floating cards ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative hidden lg:block"
          >
            {/* Decorative ring behind image */}
            <div
              className="absolute -inset-4 rounded-[2.5rem] opacity-10"
              style={{ background: `linear-gradient(135deg, ${PRIMARY}, ${SECONDARY})` }}
            />

            {/* Main image */}
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-2xl">
              <img
                src={service.heroImage}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              {/* subtle dark vignette at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              {/* Overlay icon badge */}
              <div
                className="absolute top-5 left-5 w-12 h-12 rounded-2xl flex items-center justify-center shadow-xl"
                style={{ backgroundColor: PRIMARY }}
              >
                <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
            </div>

            {/* Floating card — packages */}
            <motion.div
              initial={{ opacity: 0, y: 20, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-5 -left-8 bg-white rounded-2xl shadow-2xl border border-gray-100 px-5 py-4 flex items-center gap-3"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: SECONDARY + "22" }}
              >
                <Star className="w-5 h-5" style={{ color: SECONDARY }} fill={SECONDARY} />
              </div>
              <div>
                <p className="text-xs text-gray-400 leading-none mb-0.5">Satisfaction Rate</p>
                <p className="text-lg font-bold text-gray-900 leading-none">98%</p>
              </div>
            </motion.div>

            {/* Floating card — clients */}
            <motion.div
              initial={{ opacity: 0, y: -20, x: -10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -top-5 -right-6 bg-white rounded-2xl shadow-2xl border border-gray-100 px-5 py-4 flex items-center gap-3"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: PRIMARY_LIGHT }}
              >
                <Users className="w-5 h-5" style={{ color: PRIMARY }} />
              </div>
              <div>
                <p className="text-xs text-gray-400 leading-none mb-0.5">Happy Clients</p>
                <p className="text-lg font-bold text-gray-900 leading-none">200+</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave transition to packages section */}
      <div className="h-12 bg-gradient-to-b from-white to-gray-50" />
    </section>
  );
}
