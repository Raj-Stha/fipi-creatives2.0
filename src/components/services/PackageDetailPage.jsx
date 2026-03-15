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
  Crown, MessageSquare, Tag, Zap, HelpCircle,
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

function FaqItem({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-800 pr-4 text-sm">{faq.q}</span>
        <ChevronDown
          className="w-4 h-4 flex-shrink-0 transition-transform duration-300"
          style={{
            color: PRIMARY,
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            <p className="px-6 pb-5 text-gray-500 leading-relaxed text-sm">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

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
            <Link href="/#services" className="text-gray-400 hover:text-gray-600 transition-colors">Services</Link>
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

          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* Left: text */}
            <div className="flex-1">
              {/* Service pill */}
              <div
                className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-5 border"
                style={{ background: PRIMARY_LIGHT, color: PRIMARY, borderColor: PRIMARY + "30" }}
              >
                <ServiceIcon className="w-3 h-3" />
                {service.title}
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-3"
              >
                {pkg.title}
              </motion.h1>
              <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                {pkg.subtitle}
              </p>
            </div>

            {/* Right: price hero card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="w-full lg:w-72 bg-white rounded-3xl shadow-xl border border-gray-100 p-6 flex-shrink-0"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: PRIMARY_LIGHT }}
                >
                  <PkgIcon className="w-5 h-5" style={{ color: PRIMARY }} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Package Price</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-gray-900">{pkg.price}</span>
                    {pkg.priceNote && <span className="text-xs text-gray-400">{pkg.priceNote}</span>}
                  </div>
                </div>
              </div>

              <a
                href="/#contact"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-bold text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-200 hover:-translate-y-0.5 mb-2.5"
                style={{ backgroundColor: PRIMARY }}
              >
                Get Started
              </a>
              <a
                href="/#contact"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-200"
              >
                Ask a Question
              </a>
              <p className="text-[11px] text-gray-400 text-center mt-4">
                Free discovery call · No commitment
              </p>
            </motion.div>
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

            {/* Deliverables */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Deliverables</h2>
              <ul className="space-y-3">
                {pkg.deliverables.map((d, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 border border-gray-100 shadow-sm text-gray-700 text-sm"
                  >
                    <span
                      className="text-xs font-bold w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-full text-white"
                      style={{ backgroundColor: PRIMARY }}
                    >
                      {i + 1}
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            </section>

            {/* How It Works */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">How It Works</h2>
              <div className="relative">
                <div
                  className="absolute left-5 top-0 bottom-0 w-0.5"
                  style={{ backgroundColor: PRIMARY + "22" }}
                />
                <div className="space-y-6 relative">
                  {pkg.process.map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, delay: 0.1 + i * 0.1 }}
                      className="flex gap-5"
                    >
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 z-10 shadow-md"
                        style={{ backgroundColor: PRIMARY }}
                      >
                        {step.step}
                      </div>
                      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex-1">
                        <h4 className="font-bold text-gray-900 mb-1 text-sm">{step.title}</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* FAQs */}
            {pkg.faqs && pkg.faqs.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-gray-400" />
                  Frequently Asked Questions
                </h2>
                <div className="space-y-3">
                  {pkg.faqs.map((faq, i) => (
                    <FaqItem key={i} faq={faq} />
                  ))}
                </div>
              </section>
            )}

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
            <div className="sticky top-28 space-y-5">
              {/* Pricing card */}
              <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-7">
                <h3 className="font-bold text-gray-900 mb-1 text-base">{pkg.title}</h3>
                <p className="text-sm text-gray-400 mb-5">{pkg.subtitle}</p>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                  {pkg.priceNote && <span className="text-gray-400 text-sm">{pkg.priceNote}</span>}
                </div>

                <ul className="space-y-2.5 mb-7">
                  {pkg.features.slice(0, 6).map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        style={{ color: SECONDARY }}
                        strokeWidth={2.5}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="/#contact"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl text-sm font-bold text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-200 hover:-translate-y-0.5 mb-3"
                  style={{ backgroundColor: PRIMARY }}
                >
                  Get Started Now
                </a>
                <a
                  href="/#contact"
                  className="w-full flex items-center justify-center py-3 rounded-2xl text-sm font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-200"
                >
                  Schedule a Free Call
                </a>
              </div>

              {/* Other packages link */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                  Other packages
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="flex items-center gap-2 text-sm font-semibold transition-colors hover:underline"
                  style={{ color: PRIMARY }}
                >
                  View all {service.title} packages
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
