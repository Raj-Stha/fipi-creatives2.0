"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { MapPin, ArrowRight, Globe2, Briefcase, Zap, Star, Users } from "lucide-react";
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
        className="py-20 px-6 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${PRIMARY}0a 0%, #ffffff 100%)` }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {networkStats.map((stat, i) => {
              let Icon = Briefcase;
              const label = stat.label.toLowerCase();
              if (label.includes("presence") || label.includes("countr") || label.includes("global")) Icon = Globe2;
              if (label.includes("partner") || label.includes("strategic")) Icon = Users;
              if (label.includes("influencer") || label.includes("network")) Icon = Zap;
              if (label.includes("creative") || label.includes("collab")) Icon = Star;
              
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group relative bg-white rounded-sm p-12 flex flex-col items-center justify-center text-center border border-gray-100/50 shadow-sm hover:shadow-2xl hover:border-transparent transition-all duration-700 overflow-hidden"
                >
                  {/* Background Icon (Large & Transparent) */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                    <Icon 
                      className="w-40 h-40 opacity-[0.03] group-hover:opacity-[0.06] transform -rotate-12 group-hover:rotate-0 transition-all duration-1000 group-hover:scale-150" 
                      style={{ color: PRIMARY }} 
                    />
                  </div>

                  {/* Top Accent Line */}
                  <div 
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 rounded-b-full opacity-0 group-hover:opacity-100 transition-all duration-500"
                    style={{ backgroundColor: PRIMARY }}
                  />

                  {/* Centered Content */}
                  <div className="relative z-10">
                    <motion.p 
                      className="text-5xl md:text-6xl font-black mb-3 tracking-tighter"
                      style={{ color: PRIMARY }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {stat.value}
                    </motion.p>
                    <p className="text-[12px] font-bold tracking-[0.2em] text-green-500 uppercase opacity-90 group-hover:text-green-900 transition-colors duration-300">
                      {stat.label}
                    </p>
                  </div>

                  {/* Corner Accent */}
                  <div 
                    className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full opacity-[0.04] blur-2xl transition-all duration-700 group-hover:scale-150"
                    style={{ backgroundColor: PRIMARY }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Partner categories ── */}
      <section className="bg-white py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl xl:text-[3.5rem] font-bold uppercase mb-6 leading-tight" 
              style={{ color: PRIMARY }}
            >
              Partner Ecosystem
            </motion.p>
          
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed"
            >
              Every relationship in our network is handpicked for quality, reliability, and complementary capability, ensuring our clients receive world-class solutions.
            </motion.p>
          </div>

          <div className="space-y-32">
            {partnerCategories.map((cat, catIdx) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-16 xl:gap-24 items-center ${catIdx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* ── Info side ── */}
                <div className={catIdx % 2 === 1 ? "lg:order-2" : ""}>
                  <div
                    className="inline-flex items-center gap-3 px-4 py-2 rounded-sm text-[10px] font-black tracking-[0.2em] uppercase mb-8 border transition-all duration-300"
                    style={{
                      backgroundColor: cat.color + "08",
                      color:PRIMARY,
                      borderColor: cat.color + "20",
                    }}
                  >
                    <span className="text-sm">{cat.icon}</span>
                    {cat.title}
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-6 leading-tight uppercase tracking-tight">
                    {cat.title}
                  </h3>
                  
                  <p className="text-gray-500 leading-relaxed mb-10 text-lg opacity-90">
                    {cat.description}
                  </p>

                  {/* Partner list */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {cat.partners.map((partner) => (
                      <div
                        key={partner.name}
                        className="flex items-center gap-4 p-5 rounded-sm border border-gray-100 bg-white hover:border-gray-200 hover:shadow-xl transition-all duration-500 group"
                      >
                        <div className="w-14 h-14 rounded-sm overflow-hidden bg-white border border-gray-50 shadow-sm flex-shrink-0 flex items-center justify-center p-2 group-hover:scale-105 transition-transform duration-300">
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                          />
                        </div>
                        <div>
                          <p className="text-[13px] font-bold text-gray-900 leading-none mb-1.5 uppercase tracking-wide">
                            {partner.name}
                          </p>
                          <p className="text-[11px] text-gray-400 font-medium">{partner.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── Visual side ── */}
                <div className={`relative ${catIdx % 2 === 1 ? "lg:order-1" : ""}`}>
                  {/* Background decorative shape */}
                  <div
                    className="absolute -inset-6 rounded-sm opacity-[0.03] pointer-events-none transform rotate-3"
                    style={{ backgroundColor: cat.color }}
                  />
                  
                  <div className="relative rounded-sm overflow-hidden aspect-[16/10] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] group">
                    <img
                      src={`https://picsum.photos/seed/partner-${cat.id}/1200/800`}
                      alt={cat.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                    {/* Category accent line */}
                    <div 
                      className="absolute bottom-0 left-0 w-full h-1"
                      style={{ backgroundColor: cat.color }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Global Presence ── */}
      {/* <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-4xl md:text-5xl xl:text-[3.5rem] font-bold uppercase mb-3" style={{ color: PRIMARY }}>
              Global Presence
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
      </section> */}

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
