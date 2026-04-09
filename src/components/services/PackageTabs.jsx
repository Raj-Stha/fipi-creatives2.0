"use client";

import Link from "next/link";
import { motion } from "motion/react";
import PackageCard from "./PackageCard";
import PackageComparison from "./PackageComparison";
import { PRIMARY } from "@/data/services";

export default function PackageTabs({ service }) {
  const filtered = service.packages;

  return (
    <section id="packages" className="bg-gray-50 max-w-7xl mx-auto px-6 py-16">
      {/* Section header */}
      <div className="mb-10 text-center">
        <p
          className="text-xs font-bold tracking-[0.3em] uppercase mb-2"
          style={{ color: PRIMARY }}
        >
          Choose Your Package
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          Pick the right plan for your goals
        </h2>
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Transparent pricing with no hidden fees. Choose the package that best fits your business needs.
        </p>
      </div>

      {/* Package grid - Always shows all now */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-20">
        {filtered.map((pkg, i) => (
          <motion.div
            key={pkg.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.28, delay: i * 0.1 }}
          >
            <PackageCard pkg={pkg} serviceSlug={service.slug} />
          </motion.div>
        ))}
      </div>

      {/* Comparison Section */}
      <PackageComparison service={service} />

      {/* Bottom CTA */}
      <div className="mt-16 text-center mb-24">
        <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 max-w-3xl mx-auto">
          <p className="text-gray-500 text-lg mb-6">
            Not sure which package is right for you?
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-200"
            style={{ backgroundColor: PRIMARY }}
          >
            Talk to an Expert →
          </Link>
        </div>
      </div>
    </section>
  );
}
