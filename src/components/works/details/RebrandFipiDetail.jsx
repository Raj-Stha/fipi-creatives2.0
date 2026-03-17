"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ExternalLink, Image as ImageIcon, Layout, Type, Palette, ChevronRight } from "lucide-react";
import { PRIMARY, PRIMARY_LIGHT, SECONDARY } from "@/data/services";

export default function RebrandFipiDetail({ work }) {
  const { content } = work;

  return (
    <div className="bg-white min-h-screen">
      {/* ── 1. Immersive Hero ── */}
      <section className="relative h-[80vh] min-h-[600px] flex items-end">
        <div className="absolute inset-0">
          <img
            src={work.image}
            alt={work.title}
            className="w-full h-full object-cover"
          />
          {/* Heavy gradient for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 pb-16">
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="flex items-center gap-1.5 text-sm mb-10 text-white/70"
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/50" />
            <Link href="/our-works" className="hover:text-white transition-colors">Our Works</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/50" />
            <span className="font-semibold text-white truncate max-w-[200px] md:max-w-xs">{work.title}</span>
          </motion.nav>
          
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 shadow-lg backdrop-blur-md bg-white/10 text-white border border-white/20">
                {work.category.replace("-", " ")}
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
                {work.title}
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap gap-8 text-white/80"
            >
              <div>
                <p className="text-xs uppercase tracking-widest text-white/50 mb-1">Client</p>
                <p className="font-semibold text-white">{work.client}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-white/50 mb-1">Year</p>
                <p className="font-semibold text-white">{work.year}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-white/50 mb-1">Services</p>
                <p className="font-semibold text-white">{work.tags.slice(0, 2).join(", ")}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. The Challenge & Solution (Magazine Style) ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Col - Summary */}
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
              <p className="text-gray-600 leading-relaxed mb-10 text-lg">
                {content?.challenge}
              </p>
              
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Layout className="w-5 h-5" style={{ color: PRIMARY }} />
                  Deliverables
                </h3>
                <ul className="space-y-4">
                  {work.tags.map((tag, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: SECONDARY }} />
                      {tag}
                    </li>
                  ))}
                  <li className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: SECONDARY }} />
                    Marketing Materials
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Right Col - Visual & Solution */}
            <div className="lg:col-span-8 space-y-16">
              {content?.gallery && content.gallery[0] && (
                 <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
                   <img src={content.gallery[0]} alt="Brand presentation" className="w-full h-auto" />
                 </div>
              )}
              
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Approach</h2>
                <p className="text-gray-600 leading-relaxed text-xl font-light">
                  {content?.solution}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Brand System (Colors & Typography) ── */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
             <h2 className="text-3xl font-bold text-gray-900 mb-4">The Brand System</h2>
             <p className="text-gray-500">A cohesive visual language designed for trust, growth, and modern aesthetics across global markets.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
             
             {/* Typography */}
             <div className="space-y-8">
               <div className="flex items-center gap-3 mb-8">
                 <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white shadow-sm border border-gray-100">
                   <Type className="w-6 h-6" style={{ color: PRIMARY }} />
                 </div>
                 <h3 className="text-2xl font-bold text-gray-900">Typography</h3>
               </div>
               
               <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
                 <div className="flex justify-between items-end mb-8 border-b border-gray-100 pb-8">
                   <div>
                     <p className="text-sm text-gray-400 uppercase tracking-widest mb-1">Primary Font</p>
                     <p className="text-3xl font-semibold" style={{ fontFamily: "sans-serif" }}>Inter Tight</p>
                   </div>
                   <div className="text-5xl font-light text-gray-300">Aa</div>
                 </div>
                 
                 <div className="space-y-6">
                   <div>
                     <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-2">Display Bold</p>
                     <p className="text-4xl font-bold text-gray-900">Building the Future.</p>
                   </div>
                   <div>
                     <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-2">Body Regular</p>
                     <p className="text-lg text-gray-600 leading-relaxed">Financial freedom accessible to everyone, everywhere. Seamlessly integrated into your daily workflow.</p>
                   </div>
                 </div>
               </div>
             </div>

             {/* Color Palette */}
             <div className="space-y-8">
               <div className="flex items-center gap-3 mb-8">
                 <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white shadow-sm border border-gray-100">
                   <Palette className="w-6 h-6" style={{ color: PRIMARY }} />
                 </div>
                 <h3 className="text-2xl font-bold text-gray-900">Color Palette</h3>
               </div>

               <div className="grid grid-cols-2 gap-4">
                 {content?.colors?.map((color, i) => (
                   <motion.div 
                     key={i}
                     whileHover={{ scale: 1.02 }}
                     className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 group"
                   >
                     <div 
                       className="w-full aspect-square rounded-2xl mb-4 shadow-inner" 
                       style={{ backgroundColor: color.hex, border: color.hex === "#F8FAFC" ? "1px solid #e5e7eb" : "none" }}
                     />
                     <p className="font-bold text-gray-900 group-hover:text-fipi-purple transition-colors">{color.name}</p>
                     <p className="text-xs text-gray-500 uppercase tracking-wider">{color.hex}</p>
                   </motion.div>
                 ))}
               </div>
             </div>
             
          </div>
        </div>
      </section>

      {/* ── 4. Impact & Results ── */}
      <section className="py-24 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             
             <div>
               <h2 className="text-4xl md:text-5xl font-bold mb-6">The Impact</h2>
               <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-lg">
                 The new brand identity resonated deeply with their target demographic, leading to immediate measurable results in user acquisition and trust.
               </p>
               
               <div className="grid grid-cols-2 gap-8">
                 {content?.results?.map((res, i) => (
                   <div key={i}>
                     <p className="text-4xl md:text-5xl font-light text-fipi-green mb-2">{res.value}</p>
                     <p className="text-sm font-semibold tracking-widest uppercase text-gray-500">{res.label}</p>
                   </div>
                 ))}
               </div>
             </div>
             
             {content?.testimonial && (
               <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 md:p-14 backdrop-blur-md">
                 <div className="text-6xl text-fipi-green opacity-40 mb-6 font-serif">"</div>
                 <p className="text-xl md:text-3xl font-medium leading-normal mb-10">
                   {content.testimonial.quote}
                 </p>
                 <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-fipi-purple to-fipi-green" />
                    <div>
                      <p className="font-bold text-lg">{content.testimonial.author}</p>
                      <p className="text-sm text-gray-400">{content.testimonial.role}</p>
                    </div>
                 </div>
               </div>
             )}
             
          </div>
        </div>
      </section>

      {/* ── 5. Full Width Visuals ── */}
      {content?.gallery && content.gallery.length > 1 && (
        <section className="py-12 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.gallery.slice(1).map((img, i) => (
              <div key={i} className="rounded-[2.5rem] overflow-hidden shadow-xl aspect-square md:aspect-auto md:h-[600px]">
                <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── 6. Next Project CTA ── */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-gray-400 mb-6">Like what you see?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10">Let's build something extraordinary together.</h2>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-200 text-lg"
            style={{ backgroundColor: PRIMARY }}
          >
            Start Your Project
            <ExternalLink className="w-5 h-5 ml-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
