"use client";

import { motion } from "motion/react";
import { Check, Diamond, MessageCircle, Zap, TrendingUp, Crown,
  Sparkles, Palette, Search, Code2, Share2, Target,
  Compass, Smartphone, LayoutTemplate, Cpu } from "lucide-react";
import { PRIMARY, PRIMARY_LIGHT, SECONDARY, SECONDARY_LIGHT } from "@/data/services";

const ICON_MAP = {
  Zap, TrendingUp, Crown, Sparkles, Palette, Search, Code2,
  Share2, Target, Compass, Smartphone, LayoutTemplate, Cpu,
};

export default function PricingTiers({ tiers = [] }) {
  if (!tiers || tiers.length === 0) return null;

  return (
    <section>
      {/* Section header */}
      <div className="text-center mb-10">
        <p
          className="text-[11px] font-bold uppercase tracking-[0.3em] mb-3"
          style={{ color: PRIMARY }}
        >
          Pricing Plans
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
          Transparent Pricing, No Surprises
        </h2>
      </div>

      {/* 3 cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
        {tiers.map((tier, i) => {
          const Icon = ICON_MAP[tier.icon] || Zap;
          const isRec = tier.recommended;

          return (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.2}}
              whileHover={
                isRec
                  ? { scale: 1.03, boxShadow: `0 24px 60px ${PRIMARY}33` }
                  : { y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.10)" }
              }
              className="relative rounded-2xl p-7 flex flex-col transition-all duration-300 cursor-default"
              style={
                isRec
                  ? {
                      background: `linear-gradient(145deg, ${PRIMARY} 0%, #9b3ab0 100%)`,
                      color: "#fff",
                      boxShadow: `0 12px 40px ${PRIMARY}44`,
                    }
                  : {
                      background: "#fff",
                      border: "1.5px solid #f0f0f0",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                    }
              }
            >
              {/* Recommended badge */}
              {/* {isRec && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase text-white shadow-lg"
                  style={{ backgroundColor: SECONDARY }}
                >
                  ★ Recommended
                </div>
              )} */}

              {/* Plan name + icon */}
              <div className="flex items-start justify-between mb-4">
                <h3
                  className="text-xl font-bold"
                  style={{ color: isRec ? "#fff" : "#111827" }}
                >
                  {tier.name}
                </h3>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: isRec ? "rgba(255,255,255,0.18)" : PRIMARY_LIGHT,
                  }}
                >
                  <Icon
                    className="w-5 h-5"
                    style={{ color: isRec ? "#fff" : PRIMARY }}
                  />
                </div>
              </div>

              {/* Price */}
              <div className="mb-1">
                <span
                  className="text-4xl font-bold"
                  style={{ color: isRec ? "#fff" : "#111827" }}
                >
                  {tier.price}
                </span>
              </div>
              <p
                className="text-sm mb-4 font-medium"
                style={{ color: isRec ? "rgba(255,255,255,0.65)" : "#9ca3af" }}
              >
                {tier.priceNote}
              </p>

              {/* Description */}
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: isRec ? "rgba(255,255,255,0.82)" : "#6b7280" }}
              >
                {tier.description}
              </p>

              {/* Features */}
              <ul className="space-y-2.5 flex-1 mb-8">
                {tier.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2.5 text-sm">
                    <Diamond
                      className="w-3 h-3 flex-shrink-0"
                      style={{
                        color: isRec ? SECONDARY : PRIMARY,
                        fill: isRec ? SECONDARY : PRIMARY,
                      }}
                    />
                    <span style={{ color: isRec ? "rgba(255,255,255,0.88)" : "#374151" }}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.a
                href="/contact-us"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold transition-all duration-200"
                style={
                  isRec
                    ? { background: "#fff", color: PRIMARY }
                    : { background: PRIMARY, color: "#fff" }
                }
              >
                <MessageCircle className="w-4 h-4" />
                Let&apos;s Talk
              </motion.a>
            </motion.div>
          );
        })}
      </div>

      {/* Unique / Custom request banner */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.35 }}
        className="rounded-2xl border border-gray-150 bg-gray-50 p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5"
        style={{ borderColor: "#ebebeb" }}
      >
        <div>
          <h4 className="font-bold text-gray-900 mb-1.5 text-lg">Unique Request?</h4>
          <p className="text-sm text-gray-500 max-w-lg leading-relaxed">
            Looking for something custom?{" "}
            <a
              href="/#contact"
              className="font-semibold hover:underline"
              style={{ color: PRIMARY }}
            >
              Don&apos;t hesitate to reach out
            </a>{" "}
            — we&apos;ll brainstorm and build the perfect solution for you.
          </p>
        </div>
        <a
          href="/contact-us"
          className="flex-shrink-0 inline-flex items-center bg-primary gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
        >
          Let&apos;s Talk
        </a>
      </motion.div>
    </section>
  );
}
