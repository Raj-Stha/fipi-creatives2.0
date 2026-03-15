"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Check, ArrowRight, Star } from "lucide-react";
import {
  TrendingUp, Palette, Search, Code2, Share2, Target,
  MousePointerClick, BarChart3, Mail, Megaphone, Filter,
  Sparkles, Image, BookOpen, Layers, SearchCode, FileText,
  Link as LinkIcon, MapPin, LayoutTemplate, ShoppingCart,
  Building2, Cpu, Smartphone, Camera, Users, Compass,
  Crown, MessageSquare, Tag,
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

export default function PackageCard({ pkg, serviceSlug }) {
  const Icon = ICON_MAP[pkg.icon] || Target;
  const href = `/services/${serviceSlug}/${pkg.slug}`;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:border-gray-200 transition-all duration-300 flex flex-col overflow-hidden"
    >
      {/* ── Card image ── */}
      <div className="relative h-48 overflow-hidden bg-gray-100 flex-shrink-0">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Badge — top right */}
        {pkg.badge && (
          <div className="absolute top-3.5 right-3.5 z-10">
            <span
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide text-white shadow-lg"
              style={{ backgroundColor: pkg.badgeColor }}
            >
              <Star className="w-2.5 h-2.5 fill-white stroke-none" />
              {pkg.badge}
            </span>
          </div>
        )}

        {/* Icon circle — bottom left, overlapping image */}
        <div
          className="absolute -bottom-5 left-5 w-11 h-11 rounded-2xl flex items-center justify-center shadow-lg border-2 border-white z-10 transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: PRIMARY_LIGHT }}
        >
          <Icon className="w-5 h-5" style={{ color: PRIMARY }} />
        </div>
      </div>

      {/* ── Card body ── */}
      <div className="pt-9 px-6 pb-6 flex flex-col flex-1">
        {/* Title + subtitle */}
        <h3 className="text-lg font-bold text-gray-900 mb-1 leading-snug">
          {pkg.title}
        </h3>
        <p className="text-sm text-gray-400 mb-5 leading-relaxed">
          {pkg.subtitle}
        </p>

        {/* Divider */}
        <div className="h-px bg-gray-100 mb-5" />

        {/* Features */}
        <ul className="space-y-2.5 mb-6 flex-1">
          {pkg.features.slice(0, 4).map((f, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
              <span
                className="mt-0.5 w-4 h-4 flex-shrink-0 rounded-full flex items-center justify-center"
                style={{ backgroundColor: SECONDARY_LIGHT }}
              >
                <Check className="w-2.5 h-2.5" style={{ color: SECONDARY }} strokeWidth={3} />
              </span>
              {f}
            </li>
          ))}
          {pkg.features.length > 4 && (
            <li className="text-xs text-gray-400 pl-6">
              +{pkg.features.length - 4} more included
            </li>
          )}
        </ul>

        {/* Price */}
        <div className="mb-5">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-gray-900">{pkg.price}</span>
            {pkg.priceNote && (
              <span className="text-xs text-gray-400">{pkg.priceNote}</span>
            )}
          </div>
        </div>

        {/* CTA */}
        <Link
          href={href}
          className="group/btn w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-200 hover:-translate-y-0.5"
          style={{ backgroundColor: PRIMARY }}
        >
          View Package
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
