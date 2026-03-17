"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    id: 1,
    title: "Branding",
    desc: "Build a powerful brand identity.",
    longDesc:
      "We craft compelling brand systems that position your business for recognition and trust, ensuring your voice echoes across all touchpoints.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop",
    align: "left",
    color: "from-fuchsia-600/40 to-green-600/40",
    badgeColor: "bg-fuchsia-500",
  },
  {
    id: 2,
    title: "Social",
    desc: "Connect with audiences digitally.",
    longDesc:
      "Our social strategies create meaningful engagement, transforming passive followers into loyal brand advocates and active customers.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop",
    align: "right",
    color: "from-green-600/40 to-fuchsia-600/40",
    badgeColor: "bg-green-500",
  },
  {
    id: 3,
    title: "SEO",
    desc: "Increase visibility in search.",
    longDesc:
      "Advanced technical SEO and content optimization structurally designed to drive sustainable, long-term organic growth for your platform.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    align: "left",
    color: "from-fuchsia-600/40 to-green-600/40",
    badgeColor: "bg-fuchsia-500",
  },
];

export default function GrowthServices() {
  const containerRef = useRef(null);

  // Track the scroll progress of the entire section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate dynamic properties based on scroll position
  // 0 -> 0.2: Transition from full focus to dim
  // 0.2 -> 0.8: Stay dim while cards scroll over
  // 0.8 -> 1.0: Transition back to full focus as the last card leaves the viewport (due to pb-[120vh])
  const bgOpacity = useTransform(scrollYProgress, [0, 0.2, 0.2, 0.5], [1, 0.8, 0.8, 1]);
  const bgScale = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.85], [1, 0.25, 0.5, 0.95]);
  const bgBlur = useTransform(scrollYProgress, [0, 0.2, 0.2, 0.75], ["blur(0px)", "blur(16px)", "blur(16px)", "blur(0px)"]);
  return (
    <section ref={containerRef} className="sticky  bg-[#050505]s  text-white">
      {/* Sticky Background Section */}
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden z-0">
        <div className="absolute inset-0 bg-white/10 z-0"></div>
        
        {/* Glow behind the title for style */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px] pointer-events-none z-10"></div>
        
        <motion.div 
          style={{ opacity: bgOpacity, scale: bgScale, filter: bgBlur }}
          className="relative z-20 text-center px-4 max-w-6xl mx-auto flex flex-col items-center justify-center"
        >
       
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter  mb-6 leading-none pb-4 pr-4"
          >
               {/* Using Fuchsia and Green textured for the title */}
            <span className="text-green-600">Scaling</span> <span className="text-fuchsia-800">Success</span>
          </motion.h2>
          {/* Subtitle also gets a beautiful thematic tint */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl md:text-3xl font-light leading-relaxed mx-auto max-w-3xl text-black/90"
          >
            Strategic growth solutions designed to elevate brands and accelerate business performance.
          </motion.p>
        </motion.div>
      </div>

      {/* Cards Scrollable Content */}
      <div className="relative z-10 max-w-[90rem] mx-auto px-6 pt-[10vh] pb-[200vh] space-y-20 md:space-y-32">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className={`flex w-full ${service.align === "right" ? "justify-end" : "justify-start"}`}
          >
            {/* Decreased width: lg:w-[65%] xl:w-[60%] */}
            <div className={`relative w-full lg:w-[65%] xl:w-[60%] group`}>
              
              {/* Outer Glow */}
              <div className={`absolute -inset-4 bg-gradient-to-br ${service.color} blur-2xl opacity-40 transition-opacity duration-700 group-hover:opacity-70`}></div>
              
              {/* Decreased aspect ratio for a smaller, sleeker container */}
              <div className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden bg-neutral-900 shadow-2xl flex items-end p-4 md:p-6 lg:p-8">
                {/* Image Background */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-white/10 z-10 pointer-events-none"></div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  />
                </div>

                {/* Content Inside Container (Glassmorphic) */}
                <div className="relative z-20 w-full md:w-[90%] lg:w-[85%] p-6 md:p-8 rounded-[0.5rem] bg-black/10 border border-white/[0.15] backdrop-blur-xl shadow-2xl transition-all duration-500 overflow-hidden">
                  
                  {/* Subtle internal gradient accent */}
                  <div className={`absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br ${service.color} opacity-20 rounded-full blur-[60px] pointer-events-none transition-opacity duration-700`}></div>
                  
                  <div className="relative z-10 flex flex-col items-start">
                    <div className="flex flex-wrap items-center gap-4 mb-4 md:mb-6">
                      {/* <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white font-mono text-base shadow-inner">
                        0{service.id}
                      </div> */}

                      <div className="flex items-center gap-3 bg-fuchsia-800 backdrop-blur-md border border-white/20 py-2 px-5 rounded-full shadow-lg">
                        <span className={`w-2 h-2 rounded-full bg-green-600 shadow-[0_0_12px_rgba(255,255,255,0.6)]`}></span>
                        <span className="text-white text-xs md:text-sm font-semibold tracking-widest uppercase">
                          {service.title}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-white tracking-tight">
                      {service.title}
                    </h3>

                    <p className="text-lg md:text-2xl text-neutral-200 mb-3 md:mb-4 font-medium leading-tight">
                      {service.desc}
                    </p>

                    <p className="text-sm md:text-lg text-white leading-relaxed font-light">
                      {service.longDesc}
                    </p>
                  </div>
                </div>

              </div>
            </div>
            
          </motion.div>
        ))}
      </div>
    </section>
  );
}