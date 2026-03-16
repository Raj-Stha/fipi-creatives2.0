"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ExternalLink, Calendar, Briefcase, Tag, ChevronRight } from "lucide-react";
import { PRIMARY, PRIMARY_LIGHT } from "@/data/services";

export default function GenericWorkDetail({ work }) {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ── Standard Hero ── */}
      <section className="relative pt-32 pb-16 bg-white overflow-hidden border-b border-gray-100">
        <div
          className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-50"
          style={{ background: `radial-gradient(ellipse at top right, ${PRIMARY}15 0%, transparent 70%)` }}
        />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="flex items-center justify-center gap-1.5 text-sm mb-10 text-gray-400"
          >
            <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
            <Link href="/our-works" className="hover:text-gray-600 transition-colors">Our Works</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
            <span className="font-semibold text-gray-700 truncate max-w-[200px] md:max-w-xs">{work.title}</span>
          </motion.nav>
          
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span
              className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
              style={{ backgroundColor: PRIMARY_LIGHT, color: PRIMARY }}
            >
              {work.category.replace("-", " ")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight mb-8">
              {work.title}
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed font-light mx-auto max-w-2xl">
              {work.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Main Content Area ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
             
             {/* Sticky Details Sidebar */}
             <div className="lg:col-span-4">
               <div className="sticky top-32 space-y-6">
                 
                 <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-50 pb-4">Project Details</h3>
                    
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0">
                          <Briefcase className="w-5 h-5 text-gray-400" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Client</p>
                          <p className="text-gray-900 font-semibold">{work.client}</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0">
                          <Calendar className="w-5 h-5 text-gray-400" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Year</p>
                          <p className="text-gray-900 font-semibold">{work.year}</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0">
                          <Tag className="w-5 h-5 text-gray-400" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Services</p>
                          <div className="flex flex-wrap gap-2 mt-2">
                             {work.tags.map((tag, i) => (
                               <span key={i} className="inline-block px-2.5 py-1 bg-gray-100 rounded-md text-xs font-semibold text-gray-600">
                                 {tag}
                               </span>
                             ))}
                          </div>
                        </div>
                      </div>
                    </div>
                 </div>

                 <Link
                    href="/#contact"
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-[1.5rem] font-bold text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-200 hover:-translate-y-0.5"
                    style={{ backgroundColor: PRIMARY }}
                  >
                    Discuss a Similar Project
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </Link>

               </div>
             </div>

             {/* Right Main Gallery / Content */}
             <div className="lg:col-span-8 space-y-12">
                <div className="rounded-[2rem] overflow-hidden shadow-2xl bg-white aspect-[16/10]">
                  <img src={work.image} alt={work.title} className="w-full h-full object-cover" />
                </div>
                
                <div className="prose prose-lg max-w-none text-gray-600">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">About the project</h2>
                  <p>
                    {work.description} This project challenged us to combine strategic foresight with execution excellence. We worked closely with the team at <strong>{work.client}</strong> to ensure all deliverables not only met but exceeded industry standards for the {work.category.replace("-", " ")} sector.
                  </p>
                  <p className="mt-6">
                    By focusing on scalable architecture, user-centric design, and data-driven performance metrics, the result was a highly successful deployment that delivered immediate ROI. Our comprehensive approach ensured that every touchpoint—from digital interaction to visual identity—spoke to the core audience effectively.
                  </p>
                </div>
             </div>
             
          </div>
        </div>
      </section>
    </div>
  );
}
