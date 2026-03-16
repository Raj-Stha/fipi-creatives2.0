"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ExternalLink, Calendar, Briefcase, Tag, ChevronRight } from "lucide-react";
import { PRIMARY, PRIMARY_LIGHT, SECONDARY } from "@/data/services";

export default function GenericWorkDetail({ work }) {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ── Standard Hero ── */}
      <section className="relative pt-32 pb-16 bg-white overflow-hidden border-b border-gray-100">
        <div
          className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-50"
          style={{ background: `radial-gradient(ellipse at top right, ${PRIMARY}15 0%, transparent 70%)` }}
        />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left text column */}
            <div className="lg:col-span-7">
              <motion.nav
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="flex items-center gap-1.5 text-sm mb-12 text-gray-400"
              >
                <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
                <ChevronRight className="w-3.5 h-3.5" style={{ color: SECONDARY }} />
                <Link href="/our-works" className="hover:text-gray-600 transition-colors">Our Works</Link>
                <ChevronRight className="w-3.5 h-3.5" style={{ color: SECONDARY }} />
                <span className="font-semibold text-gray-700 truncate max-w-[200px] md:max-w-xs">{work.title}</span>
              </motion.nav>
              
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="max-w-3xl"
              >
                <span
                  className="inline-block px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
                  style={{ backgroundColor: `${SECONDARY}15`, color: SECONDARY }}
                >
                  {work.category.replace("-", " ")}
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-8">
                  {work.title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-light mb-10">
                  {work.description}
                </p>
                
                {work.liveLink && (
                  <a
                    href={work.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-[1.5rem] font-bold text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                    style={{ backgroundColor: PRIMARY, boxShadow: `0 10px 25px -5px ${PRIMARY}60` }}
                  >
                    View Live Website
                    <ExternalLink className="w-5 h-5 ml-1" />
                  </a>
                )}
              </motion.div>
            </div>

            {/* Right image column */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-5 relative mt-8 lg:mt-0"
            >
              <div
                className="absolute -inset-4 rounded-[2.5rem] opacity-20 -z-10"
                style={{ background: `linear-gradient(135deg, ${PRIMARY}, ${SECONDARY})` }}
              />
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] border border-gray-100 bg-white">
                <img src={work.image} alt={work.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Main Content Area ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
             
             {/* Sticky Details Sidebar */}
             <div className="lg:col-span-4">
               <div className="sticky top-32 space-y-6">
                 
                 <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/80 backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                      <span className="w-8 h-1 rounded-full" style={{ backgroundColor: SECONDARY }}></span>
                      Project Base
                    </h3>
                    
                    <div className="space-y-8">
                      <div className="flex gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center flex-shrink-0 border border-gray-100">
                          <Briefcase className="w-5 h-5" style={{ color: SECONDARY }} />
                        </div>
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.2em] font-bold mb-1.5" style={{ color: SECONDARY }}>Client Partner</p>
                          <p className="text-gray-900 font-bold text-lg">{work.client}</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center flex-shrink-0 border border-gray-100">
                          <Calendar className="w-5 h-5" style={{ color: SECONDARY }} />
                        </div>
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.2em] font-bold mb-1.5" style={{ color: SECONDARY }}>Delivery Year</p>
                          <p className="text-gray-900 font-bold text-lg">{work.year}</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center flex-shrink-0 border border-gray-100">
                          <Tag className="w-5 h-5" style={{ color: SECONDARY }} />
                        </div>
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.2em] font-bold mb-2" style={{ color: SECONDARY }}>Capabilities</p>
                          <div className="flex flex-wrap gap-2.5 mt-2">
                             {work.tags.map((tag, i) => (
                               <span key={i} className="inline-block px-3 py-1.5 bg-gray-100 rounded-lg text-xs font-bold text-gray-600 shadow-sm border border-gray-200/60">
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
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-[1.5rem] font-bold text-gray-900 bg-white border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                    style={{ borderColor: PRIMARY }}
                  >
                    Start a Similar Project
                    <ChevronRight className="w-4 h-4 ml-1" style={{ color: PRIMARY }} />
                  </Link>

               </div>
             </div>

             {/* Right Main Gallery / Content */}
             <div className="lg:col-span-8 space-y-12">                
                <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed font-light mb-16">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display tracking-tight">Project Overview</h2>
                  <p>
                    {work.description} This project challenged us to combine strategic foresight with execution excellence. We worked closely with the team at <strong className="font-semibold text-gray-900">{work.client}</strong> to ensure all deliverables not only met but exceeded industry standards for the {work.category.replace("-", " ")} sector.
                  </p>
                  <p className="mt-8">
                    By focusing on scalable architecture, user-centric design, and data-driven performance metrics, the result was a highly successful deployment that delivered immediate ROI. Our comprehensive approach ensured that every touchpoint—from digital interaction to visual identity—spoke to the core audience effectively.
                  </p>
                </div>

                {/* Render gallery if exists */}
                {work.content?.gallery && work.content.gallery.length > 0 && (
                  <div className="space-y-8 mt-16 pt-16 border-t border-gray-200/60">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 font-display tracking-tight">Visual Highlights</h2>
                    <div className="grid grid-cols-1 gap-8">
                      {work.content.gallery.map((img, i) => (
                        <div key={i} className="rounded-[2.5rem] overflow-hidden shadow-xl bg-gray-100">
                          <img src={img} alt={`${work.title} Screenshot ${i + 1}`} className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700 ease-out" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
             </div>
             
          </div>
        </div>
      </section>
    </div>
  );
}
