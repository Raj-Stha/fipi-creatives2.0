"use client";

import Link from "next/link";
import { PRIMARY, SECONDARY } from "@/data/services";
import { Mail, MessageSquare, PhoneCall, ArrowRight } from "lucide-react";

export default function CustomProjectSection({ service }) {
  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-[3rem] shadow-xl shadow-purple-900/5 p-12 md:p-20 border border-gray-100 text-center relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -ml-32 -mb-32" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
              Ready for a <span style={{ color: PRIMARY }}>Custom Project?</span>
            </h2>
            <p className="text-gray-500 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
              {service.title} projects involve unique requirements and specific goals. We offer flexible, project-based pricing to ensure you only pay for exactly what you need.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 px-12 py-4 rounded-full font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-200"
                style={{ backgroundColor: PRIMARY }}
              >
                Start Consultation <ArrowRight size={18} />
              </Link>
              <Link
                href="mailto:info@fipicreatives.com"
                className="inline-flex items-center justify-center gap-2 px-12 py-4 rounded-full font-bold text-gray-700 bg-gray-100 transition-all duration-300 hover:bg-gray-200"
              >
                <Mail size={18} /> Email Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
