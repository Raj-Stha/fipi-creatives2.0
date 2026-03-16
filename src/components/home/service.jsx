"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Globe,
  Palette,
  Camera,
  Video,
  ShoppingBag,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    slug: "web-development",
    title: "Web Design & Development",
    description:
      "Bespoke digital experiences built with cutting-edge technologies and user-centric design principles.",
    icon: Globe,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    color: "from-blue-600/40 to-fipi-purple/40",
  },
  {
    slug: "creative-design",
    title: "Branding & Graphic Design",
    description:
      "Crafting unique visual identities that resonate with your audience and stand out in the marketplace.",
    icon: Palette,
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80",
    color: "from-fipi-purple/40 to-pink-600/40",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Strategic growth campaigns that leverage data and creativity to drive results and ROI.",
    icon: TrendingUp,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    color: "from-fipi-green/40 to-blue-600/40",
  },
  {
    slug: "seo-optimization",
    title: "SEO Optimization",
    description:
      "Dominating search results and driving organic traffic through technical excellence.",
    icon: Camera,
    image:
      "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=800&q=80",
    color: "from-orange-600/40 to-fipi-green/40",
  },
  {
    slug: "social-media",
    title: "Social Media",
    description:
      "Building vibrant communities and powerful brand presence across all platforms.",
    icon: Video,
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
    color: "from-fipi-green/40 to-emerald-600/40",
  },
  {
    slug: "brand-strategy",
    title: "Brand Strategy",
    description:
      "Defining your purpose and positioning for long-term success in the market.",
    icon: ShoppingBag,
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
    color: "from-fipi-purple/40 to-fipi-green/40",
  },
];

export default function Services() {
  const containerRef = useRef(null);
  
  // Track scroll within the 300vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate dynamic dimensions for responsiveness
  const [dimensions, setDimensions] = useState({ width: 400, gap: 30 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setDimensions({ width: 280, gap: 15 });
      } else {
        setDimensions({ width: 400, gap: 30 });
      }
    };
    handleResize(); // Initial setup
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Distance to scroll horizontally: (total items - 1) * (item width + gap)
  const totalDistance = (services.length - 1) * (dimensions.width + dimensions.gap);
  
  // Translate horizontal distance based on vertical scroll
  const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance]);

  return (
    <section id="services" className="relative bg-[#020202] text-white">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-fipi-green/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-fipi-purple/5 blur-[150px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay" />
      </div>

      {/* Intro Section */}
      <div className="h-[50vh] flex flex-col justify-end items-center text-center pb-12 relative z-10 px-4">
        <h2 className="text-fipi-green text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 font-semibold">
          Our Expertise
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-display font-black uppercase tracking-tighter text-white mb-4 leading-none">
          Creative Services
        </h1>
        <p className="text-fipi-light/60 max-w-xl text-sm sm:text-base leading-relaxed hidden sm:block">
          We blend artistic vision with technical precision to deliver extraordinary digital experiences.
        </p>
      </div>

      {/* Main Scroll Container */}
      <div ref={containerRef} className="h-[300vh] relative">
        
        {/* Sticky Wrapper that locks to screen during scroll */}
        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
          
          {/* Centered starting container */}
          <div className="w-full sm:w-[400px] shrink-0 mx-auto pl-6 sm:pl-0">
            <motion.div 
              className="flex will-change-transform" 
              style={{ 
                x, 
                gap: `${dimensions.gap}px`,
                opacity: mounted ? 1 : 0, // Prevent unstyled jump before hydration
                transition: "opacity 0.3s ease"
              }}
            >
            {services.map((service, index) => (
              <ServiceGalleryItem 
                key={service.slug} 
                service={service} 
                index={index} 
                width={dimensions.width}
              />
            ))}
            </motion.div>
          </div>

        </div>
      </div>

      {/* Outro Spacer to allow finishing scroll cleanly */}
      <div className="h-[20vh] w-full flex justify-center items-center pointer-events-none"></div>

    </section>
  );
}

// Subcomponent for individual gallery cards
function ServiceGalleryItem({ service, index, width }) {
  return (
    <div 
      className="flex-shrink-0 relative overflow-hidden rounded-[2rem] group transition-all duration-300 border border-white/10 bg-fipi-dark shadow-2xl"
      style={{ 
        width: `${width}px`, 
        // 500px standard height, 380px on small screens to fit viewport comfortably
        height: width === 280 ? '380px' : '500px', 
      }}
    >
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
        style={{ backgroundImage: `url(${service.image})` }}
      />
      
      {/* Dark Multiply Overlay (Tokyo Nights vibe) */}
      <div className="absolute inset-0 bg-gradient-to-t from-fipi-dark via-fipi-dark/60 to-transparent mix-blend-multiply opacity-90" />
      
      {/* Vibrant Coloring mapped from user data */}
      <div className={`absolute inset-0 bg-gradient-to-t ${service.color} mix-blend-overlay opacity-50 group-hover:opacity-100 transition-opacity duration-700`} />
      
      {/* Base gradient for precise text legibility */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#020202] via-[#020202]/50 to-transparent opacity-90" />

      {/* Foreground Content Layout */}
      <div className="absolute inset-0 p-6 md:p-8 z-10 flex flex-col justify-end">
        
        {/* Icon & Number pairing */}
        <div className="flex items-center gap-4 mb-4">
          <motion.div 
            initial={false}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-transform duration-500"
          >
             <service.icon className="w-6 h-6 text-fipi-green" />
          </motion.div>
          <span className="text-xl md:text-2xl font-mono text-fipi-light/40 font-black italic">
            0{index + 1}
          </span>
        </div>
        
        {/* Title elements */}
        <div className="mb-2 relative">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white leading-[1.1] tracking-tight">
            {service.title}
          </h2>
          {/* Decorative hover line indicator */}
          <div className="absolute -left-3 md:-left-4 top-1 bottom-1 w-1 bg-fipi-green scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
        </div>
        
        {/* Descriptive body text overlapping with interactive components */}
        <p className="text-xs md:text-sm text-fipi-light/80 line-clamp-3 mb-6 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
          {service.description}
        </p>
        
        {/* Call To Action Buttons */}
        <Link 
          href={`/services/${service.slug}`}
          className="inline-flex w-max items-center gap-2 px-5 py-2.5 rounded-full bg-fipi-green text-fipi-dark font-bold text-[10px] sm:text-xs uppercase tracking-widest shadow-xl shadow-fipi-green/20 hover:scale-105 transition-transform"
        >
          Explore <ArrowUpRight className="w-3 h-3" />
        </Link>

      </div>
    </div>
  );
}
