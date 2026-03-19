"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Users, Award, Globe, Briefcase } from "lucide-react";
import AboutPageHero from "./AboutPageHero";

const PRIMARY = "#7d2c91";
const PRIMARY_LIGHT = "#7d2c9115";
const SECONDARY = "#10b981";
const SECONDARY_LIGHT = "#10b98118";

const STAT_ICONS = [Briefcase, Users, Award, Globe];

export default function WhoWeArePage({ data }) {
  const { companyStory, values } = data;

  return (
    <>
      <AboutPageHero
        label="About FiPi Creatives"
        title="We are a studio that"
        titleAccent="refuses to be ordinary."
        subtitle="FiPi Creatives is a full-service creative agency built on the belief that great strategy and bold design are not mutually exclusive — they are inseparable."
        breadcrumb="Who We Are"
        image="/images/about-hero.png"
      />

      {/* ── Story section ── */}
      <section className="bg-white  px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Image collage */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main image */}
            <div className="rounded-xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img
                src="https://picsum.photos/seed/fipioffice/900/700"
                alt="FiPi Creatives Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Floating stat card */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl border border-gray-100 px-6 py-5"
            >
              <p className="text-3xl font-bold text-gray-900">500+</p>
              <p className="text-sm text-gray-400 mt-0.5">Projects delivered</p>
            </motion.div> */}

            {/* Floating year badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="absolute -top-5 -left-5 w-20 h-20 rounded-2xl flex flex-col items-center justify-center shadow-xl border-2 border-white"
              style={{ backgroundColor: PRIMARY }}
            >
              <p className="text-2xl font-bold text-white leading-none">
                {companyStory.founded}
              </p>
              <p className="text-[10px] text-white/70 uppercase tracking-wider mt-0.5">Founded</p>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: PRIMARY }}
            >
              Our Story
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-8">
              From two friends with laptops to a studio of{" "}
              <span style={{ color: PRIMARY }}>30+ specialists</span>
            </h2>

            <div className="space-y-5">
              {companyStory.story.map((para, i) => (
                <p key={i} className="text-gray-600 leading-relaxed text-[15px] text-justify">
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/about/team"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ backgroundColor: PRIMARY }}
              >
                Meet the Team
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about/network"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border-2 text-gray-700 hover:border-gray-400 transition-all duration-300"
                style={{ borderColor: "#e5e7eb" }}
              >
                Our Network
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats row ── */}
      <section
        className=" py-12 px-6"
        style={{ background: `linear-gradient(135deg, ${PRIMARY}08 0%, ${SECONDARY}08 100%)` }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {companyStory.stats.map((stat, i) => {
              const Icon = STAT_ICONS[i % STAT_ICONS.length];
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm text-center"
                >
                  <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                  <p className="text-xs text-gray-400 font-medium">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">

            <h2 className="text-4xl md:text-5xl xl:text-[3.5rem] font-bold uppercase" style={{ color: PRIMARY }}> What drives us</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="rounded-3xl p-10 border border-gray-100 shadow-sm"
              style={{ background: `linear-gradient(135deg, ${PRIMARY}0a 0%, transparent 70%)` }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm border"
                style={{ backgroundColor: PRIMARY_LIGHT, borderColor: PRIMARY + "30" }}
              >
                🎯
              </div>
              <h3 className="text-xl font-bold text-green-500 uppercase mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">{companyStory.mission}</p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="rounded-3xl p-10 border border-gray-100 shadow-sm"
              style={{ background: `linear-gradient(135deg, ${SECONDARY}0a 0%, transparent 70%)` }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm border"
                style={{ backgroundColor: SECONDARY_LIGHT, borderColor: SECONDARY + "30" }}
              >
                🔭
              </div>
              <h3 className="text-xl font-bold text-green-500 uppercase mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">{companyStory.vision}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-4xl md:text-5xl xl:text-[3.5rem] font-bold uppercase mb-3" style={{ color: PRIMARY }}>
              What we stand for
            </p>
           
          
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-400"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-5 shadow-sm transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: val.color + "15", color: val.color }}
                >
                  {val.icon}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-3">{val.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hero image strip ── */}
      <div className="grid grid-cols-3 h-64 md:h-80 overflow-hidden">
        {["fipiwork1", "fipiwork2", "fipiwork3"].map((seed, i) => (
          <div key={i} className="overflow-hidden relative group">
            <img
              src={`https://picsum.photos/seed/${seed}/800/600`}
              alt=""
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
          </div>
        ))}
      </div>

      {/* ── Team CTA ── */}
      <section className="bg-white py-12 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: PRIMARY }}>
            The People Behind the Work
          </p>
          <h2 className="text-4xl md:text-5xl xl:text-[3.5rem] font-bold uppercase mb-5">
            Built by a team that{" "}
            <span style={{ color: PRIMARY }}>genuinely cares</span>
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            Every person at FiPi was chosen for their craft, their character, and their commitment to doing work that matters. Come meet them.
          </p>
          <Link
            href="/about/team"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            style={{ backgroundColor: PRIMARY }}
          >
            Meet Our Team
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </>
  );
}
