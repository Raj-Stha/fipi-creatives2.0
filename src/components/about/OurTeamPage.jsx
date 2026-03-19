"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Linkedin, Twitter, Instagram, Timer, TrendingUp, BookOpen, MapPin } from "lucide-react";
import AboutPageHero from "./AboutPageHero";

const PRIMARY = "#7d2c91";
const PRIMARY_LIGHT = "#7d2c9115";
const SECONDARY = "#10b981";

const DEPT_COLORS = {
  Leadership: PRIMARY,
  Marketing: "#3b82f6",
  Technology: "#10b981",
  Strategy: "#f59e0b",
  Creative: "#ec4899",
};

export default function OurTeamPage({ teamMembers, departments }) {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? teamMembers : teamMembers.filter((m) => m.department === active);

  const featured = teamMembers.filter((m) => m.featured);

  return (
    <>
      <AboutPageHero
        label="Our People"
        title="The talented team"
        titleAccent="behind every brief."
        subtitle="Designers, strategists, developers, and storytellers — united by craft and driven by a shared obsession with exceptional work."
        breadcrumb="Our Team"
        image="https://picsum.photos/seed/fipiteam-hero/900/700"
      />

      {/* ── Featured cards (leadership) ── */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-4xl md:text-5xl xl:text-[3.5rem] font-bold uppercase mb-3" style={{ color: PRIMARY }}>
              who started it all
            </p>
           
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-white rounded-sm border border-gray-100 shadow-sm hover:shadow-2xl hover:border-gray-200 transition-all duration-400 overflow-hidden"
              >
                {/* Photo */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent" />

                  {/* Dept badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide text-white"
                      style={{ backgroundColor: DEPT_COLORS[member.department] || PRIMARY }}
                    >
                      {member.department}
                    </span>
                  </div>

                  {/* Social links — appear on hover */}
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                    {[Linkedin, Twitter, Instagram].map((Icon, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-0.5">{member.name}</h3>
                  <p className="text-sm font-medium mb-3" style={{ color: PRIMARY }}>{member.role}</p>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full team grid ── */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header + filter */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-4xl md:text-5xl xl:text-[3.5rem] font-bold uppercase mb-2" style={{ color: PRIMARY }}>
                The Full Roster
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {departments.map((dept) => {
                const isActive = active === dept;
                return (
                  <button
                    key={dept}
                    onClick={() => setActive(dept)}
                    className="px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-300"
                    style={
                      isActive
                        ? { backgroundColor: PRIMARY, color: "#fff", borderColor: PRIMARY }
                        : { backgroundColor: "#fff", color: "#6b7280", borderColor: "#e5e7eb" }
                    }
                  >
                    {dept}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filtered.map((member, i) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group bg-white rounded-sm border border-gray-100 shadow-sm hover:shadow-lg hover:border-gray-200 transition-all duration-300 overflow-hidden"
                >
                  {/* Photo */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent" />
                    {/* Social links */}
                    <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                      {[Linkedin, Twitter].map((Icon, idx) => (
                        <a
                          key={idx}
                          href="#"
                          className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
                        >
                          <Icon className="w-3 h-3" />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2 mb-0.5">
                      <h3 className="text-sm font-bold text-gray-900 leading-snug">{member.name}</h3>
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0"
                        style={{
                          backgroundColor: (DEPT_COLORS[member.department] || PRIMARY) + "18",
                          color: DEPT_COLORS[member.department] || PRIMARY,
                        }}
                      >
                        {member.department}
                      </span>
                    </div>
                    <p className="text-xs font-medium mb-2" style={{ color: PRIMARY }}>
                      {member.role}
                    </p>
                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── Culture strip ── */}
      <section className="bg-white py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p 
                className="text-4xl md:text-5xl xl:text-[3.5rem] font-bold uppercase mb-8 leading-[1.1]" 
                style={{ color: PRIMARY }}
              >
                Life at <span className="text-gray-900 block">FiPi </span>
              </p>
              
              <div className="space-y-6 text-gray-600">
                <p className="text-lg leading-relaxed">
                  We work hard and we celebrate harder. At FiPi, we believe the best creative work emerges from an environment of psychological safety, respect, and genuine camaraderie.
                </p>
                <p className="text-base leading-relaxed opacity-80">
                  From design jams and strategy sprints to team retreats and skill-sharing sessions — we invest in our people as much as we invest in our clients.
                </p>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Average Tenure", value: "2.8 YRS", icon: Timer },
                { label: "Growth Ratio", value: "60%", icon: TrendingUp },
                { label: "Learning Budget", value: "NPR 50K", icon: BookOpen },
                { label: "Remote-Ready", value: "100%", icon: MapPin },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="group relative bg-white rounded-sm p-8 border border-gray-100 hover:border-transparent transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl"
                  >
                    {/* Hover Background Accent */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500"
                      style={{ backgroundColor: PRIMARY }}
                    />
                    
                    {/* Icon Container */}
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg"
                      style={{ backgroundColor: PRIMARY_LIGHT }}
                    >
                      <Icon className="w-6 h-6" style={{ color: PRIMARY }} />
                    </div>

                    <div className="relative z-10">
                      <p className="text-3xl font-black text-gray-900 mb-2 tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                        {item.value}
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: PRIMARY }} />
                        <p className="text-[11px] font-bold tracking-[0.15em] text-green-500 uppercase leading-none">
                          {item.label}
                        </p>
                      </div>
                    </div>

                    {/* Subtle Corner Decoration */}
                    <div 
                      className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full opacity-0 group-hover:opacity-10 transition-all duration-500 blur-xl scale-50 group-hover:scale-150"
                      style={{ backgroundColor: PRIMARY }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Infinite Looping Images ── */}
        <div className="relative mt-8">
          <div className="flex overflow-hidden group">
            <motion.div 
              className="flex gap-4 px-4 whitespace-nowrap"
              animate={{ x: [0, -1920] }}
              transition={{ 
                duration: 40, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              {[...Array(12)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-72 h-48 md:w-96 md:h-64 rounded-xl overflow-hidden flex-shrink-0 shadow-lg border border-gray-100"
                >
                  <img
                    src={`https://picsum.photos/seed/culture-loop-${i % 8}/800/600`}
                    alt=""
                    className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-500 hover:scale-110"
                  />
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {[...Array(12)].map((_, i) => (
                <div 
                  key={`dup-${i}`} 
                  className="w-72 h-48 md:w-96 md:h-64 rounded-xl overflow-hidden flex-shrink-0 shadow-lg border border-gray-100"
                >
                  <img
                    src={`https://picsum.photos/seed/culture-loop-${i % 8}/800/600`}
                    alt=""
                    className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-500 hover:scale-110"
                  />
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Subtle side fades */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        </div>
      </section>
    </>
  );
}
