"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { MapPin, ArrowRight, Globe2 } from "lucide-react";
import AboutPageHero from "./AboutPageHero";

const PRIMARY = "#7d2c91";
const PRIMARY_LIGHT = "#7d2c9115";
const SECONDARY = "#10b981";
const SECONDARY_LIGHT = "#10b98115";

export default function OurNetworkPage({ partnerCategories, networkStats, globalPresence }) {
  return (
    <>
      <AboutPageHero
        label="Our Network"
        title="Connected across"
        titleAccent="South Asia and beyond."
        subtitle="A carefully built ecosystem of technology partners, media alliances, agency networks, and 2,000+ influencers that gives our clients an unfair advantage."
        breadcrumb="Our Network"
        image="https://picsum.photos/seed/fipinetwork-hero/900/700"
      />

      {/* ── Stats row ── */}
      <section
        className="py-16 px-6"
        style={{ background: `linear-gradient(135deg, ${PRIMARY}08 0%, ${SECONDARY}08 100%)` }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {networkStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center"
              >
                <p className="text-4xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partner categories ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: PRIMARY }}>
              Partner Ecosystem
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our strategic partnerships
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Every relationship in our network is handpicked for quality, reliability, and complementary capability.
            </p>
          </div>

          <div className="space-y-20">
            {partnerCategories.map((cat, catIdx) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${catIdx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* ── Info side ── */}
                <div className={catIdx % 2 === 1 ? "lg:order-2" : ""}>
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wide mb-5 border"
                    style={{
                      backgroundColor: cat.color + "15",
                      color: cat.color,
                      borderColor: cat.color + "30",
                    }}
                  >
                    <span>{cat.icon}</span>
                    {cat.title}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-snug">
                    {cat.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed mb-8">{cat.description}</p>

                  {/* Partner list */}
                  <div className="grid grid-cols-2 gap-4">
                    {cat.partners.map((partner) => (
                      <div
                        key={partner.name}
                        className="flex items-center gap-3 p-4 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300 group"
                      >
                        <div className="w-12 h-12 rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm flex-shrink-0">
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-900 leading-none mb-0.5">
                            {partner.name}
                          </p>
                          <p className="text-xs text-gray-400">{partner.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── Visual side ── */}
                <div className={`relative ${catIdx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div
                    className="absolute -inset-3 rounded-[2.5rem] opacity-10 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at center, ${cat.color}, transparent)` }}
                  />
                  <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                    <img
                      src={`https://picsum.photos/seed/partner-${cat.id}/900/700`}
                      alt={cat.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    {/* Category label overlay */}
                    <div
                      className="absolute bottom-5 left-5 px-4 py-2 rounded-xl font-bold text-white text-sm shadow-lg"
                      style={{ backgroundColor: cat.color }}
                    >
                      {cat.icon} {cat.title}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Global Presence ── */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: PRIMARY }}>
              Where We Are
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Global Presence
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Headquartered in Kathmandu, with active offices and partner hubs across South Asia — and expanding.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {globalPresence.map((loc, i) => {
              const isComingSoon = loc.type === "Coming Soon";
              return (
                <motion.div
                  key={loc.country}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className={`rounded-2xl p-5 border transition-all duration-300 ${
                    isComingSoon
                      ? "bg-white border-gray-100 opacity-60"
                      : "bg-white border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200"
                  }`}
                >
                  <div className="text-3xl mb-3">{loc.flag}</div>
                  <p className="font-bold text-gray-900 text-sm">{loc.city}</p>
                  <p className="text-xs text-gray-400 mb-2">{loc.country}</p>
                  <span
                    className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold"
                    style={
                      loc.type === "HQ"
                        ? { backgroundColor: PRIMARY + "18", color: PRIMARY }
                        : isComingSoon
                        ? { backgroundColor: "#f3f4f6", color: "#9ca3af" }
                        : { backgroundColor: SECONDARY_LIGHT, color: SECONDARY }
                    }
                  >
                    {loc.type}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Become a partner CTA ── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className="rounded-3xl p-12 md:p-16 relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${PRIMARY}12 0%, ${SECONDARY}0a 100%)`,
              border: `1px solid ${PRIMARY}20`,
            }}
          >
            {/* Decorative */}
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ backgroundColor: PRIMARY }}
            />
            <div
              className="absolute bottom-0 left-0 w-48 h-48 rounded-full blur-3xl opacity-10 pointer-events-none"
              style={{ backgroundColor: SECONDARY }}
            />

            <div className="relative z-10 max-w-2xl">
              <Globe2 className="w-10 h-10 mb-6" style={{ color: PRIMARY }} />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-snug">
                Interested in joining our network as a{" "}
                <span style={{ color: PRIMARY }}>strategic partner?</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                We're always open to conversations with agencies, technology platforms, media companies, and creators who share our commitment to quality and integrity.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ backgroundColor: PRIMARY }}
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/about/who-we-are"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border-2 text-gray-700 hover:border-gray-400 transition-all duration-300"
                  style={{ borderColor: "#e5e7eb" }}
                >
                  Learn About FiPi
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
