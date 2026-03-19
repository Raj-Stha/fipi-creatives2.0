"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Linkedin, Twitter, Instagram } from "lucide-react";
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
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: PRIMARY }}>
              Founding Members
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              The people who started it all
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:border-gray-200 transition-all duration-400 overflow-hidden"
              >
                {/* Photo */}
                <div className="relative h-72 overflow-hidden">
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
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header + filter */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: PRIMARY }}>
                The Full Roster
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">All Team Members</h2>
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
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-gray-200 transition-all duration-300 overflow-hidden"
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
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Images */}
            <div className="grid grid-cols-2 gap-4">
              {["fipiculture1", "fipiculture2", "fipiculture3", "fipiculture4"].map((seed, i) => (
                <motion.div
                  key={seed}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`overflow-hidden rounded-2xl shadow-md ${i === 0 ? "col-span-2 aspect-[2/1]" : "aspect-square"}`}
                >
                  <img
                    src={`https://picsum.photos/seed/${seed}/800/600`}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: PRIMARY }}>
                Life at FiPi
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-6">
                A culture built on{" "}
                <span style={{ color: PRIMARY }}>curiosity</span> and collaboration
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                We work hard and we celebrate harder. At FiPi, we believe the best creative work emerges from an environment of psychological safety, respect, and genuine camaraderie.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                From design jams and strategy sprints to team retreats and skill-sharing sessions — we invest in our people as much as we invest in our clients.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Average Tenure", value: "2.8 yrs" },
                  { label: "Internal Promotions", value: "60%" },
                  { label: "Learning Budget / yr", value: "NPR 50K" },
                  { label: "Remote-friendly", value: "100%" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl p-4 border border-gray-100"
                    style={{ backgroundColor: PRIMARY_LIGHT }}
                  >
                    <p className="text-xl font-bold text-gray-900">{item.value}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
