"use client";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  useSpring,
} from "motion/react";
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

function ServiceCard({ service, index, progress }) {
  // Start cards slightly later to allow header to scroll away
  const start = 0.1 + index * 0.12;
  const end = start + 0.4;

  const cardProgress = useTransform(progress, [start, end], [0, 1], {
    clamp: true,
  });

  const smoothProgress = useSpring(cardProgress, {
    stiffness: 100,
    damping: 25,
    mass: 0.5,
  });

  // Half-circle path: Bottom-Right -> Center-Top -> Bottom-Left
  // Moved higher up the page
  const x = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    ["100vw", "0vw", "-100vw"],
  );
  const y = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    ["70vh", "-25vh", "70vh"],
  );
  const rotate = useTransform(smoothProgress, [0, 0.5, 1], [30, 0, -30]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.6, 1, 0.6]);
  const opacity = useTransform(
    smoothProgress,
    [0, 0.1, 0.5, 0.9, 1],
    [0, 1, 1, 1, 0],
  );

  return (
    <motion.div
      style={{
        x,
        y,
        rotate,
        scale,
        opacity,
        position: "absolute",
        zIndex: index,
      }}
      className="group w-[280px] md:w-[360px] aspect-[1/1.15] rounded-[2rem] overflow-hidden border border-white/20 bg-fipi-dark shadow-2xl"
    >
      {/* Full Cover Image */}
      <div className="absolute inset-0">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-fipi-dark via-fipi-dark/60 to-transparent opacity-90" />
        <div
          className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-60 transition-opacity duration-700`}
        />
      </div>

      {/* Content Layout */}
      <div className="relative h-full p-6 md:p-8 flex flex-col justify-between z-10">
        {/* Top Section: Icon & Number */}
        <div className="flex justify-between items-start">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-transform duration-500"
          >
            <service.icon className="w-5 h-5 md:w-7 md:h-7 text-fipi-green" />
          </motion.div>
          <div className="text-right">
            <span className="block text-fipi-light/20 font-mono text-3xl md:text-5xl font-black leading-none italic">
              0{index + 1}
            </span>
          </div>
        </div>

        {/* Bottom Section: Title & Description */}
        <div className="space-y-3 md:space-y-4">
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-display font-bold leading-[0.95] tracking-tighter text-white">
              {service.title.split(" ").map((word, i) => (
                <span key={i} className="block overflow-hidden">
                  <motion.span
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                    className="block"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h3>
            <div className="absolute -left-3 top-0 bottom-0 w-1 bg-fipi-green scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
          </div>

          <p className="text-fipi-light/80 text-xs md:text-sm leading-relaxed font-light max-w-[95%] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100">
            {service.description}
          </p>

          <div className="flex items-center gap-4 pt-2">
            <Link
              href={`/services/${service.slug}`}
              className="px-5 py-2.5 md:px-6 md:py-3 rounded-full bg-fipi-green text-fipi-dark font-bold text-[10px] md:text-xs uppercase tracking-widest flex items-center gap-2 shadow-xl shadow-fipi-green/20 hover:scale-105 transition-transform"
            >
              Learn More
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Background text parallax - adjusted to be lower
  const bgTextY = useTransform(scrollYProgress, [0, 1], ["10%", "0%"]);
  const bgOpacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.95, 1],
    [0, 0.45, 0.45, 0],
  );

  // Header scroll-away animation
  const headerY = useTransform(scrollYProgress, [0, 0.15], ["0%", "-100%"]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  // Animated background elements
  const orb1Y = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const orbRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section
      id="services"
      ref={targetRef}
      className="relative h-[320vh] bg-transparent"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-fipi-dark/85 backdrop-blur-[2px] pointer-events-none" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: orb1Y, rotate: orbRotate }}
          className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-fipi-green/5 blur-[120px]"
        />
        <motion.div
          style={{ y: orb2Y, rotate: -orbRotate }}
          className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-fipi-purple/5 blur-[150px]"
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Static Content Background (Large Parallax Text) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none overflow-hidden">
          <motion.div
            style={{ y: bgTextY, opacity: bgOpacity }}
            className="text-center z-0 translate-y-20"
          >
            <h2 className="  font-black mb-0 leading-none text-white/30">
              CREATIVE
            </h2>
            <h2 className="  font-black leading-none ">SERVICES</h2>
          </motion.div>
        </div>

        {/* Static Content Foreground (Header that scrolls away) */}
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          className="max-w-7xl mx-auto  w-full relative z-10 text-center mb-14"
        >
          <h2 className="text-6xl  font-display font-bold mb-8 tracking-tight">
            Our Creative <span className=" italic">Services</span>
          </h2>
          <p className="text-center w-full  text-xl leading-relaxed">
            We blend artistic vision with technical precision to deliver
            <span className="text-primary font-medium">
              {" "}
              extraordinary digital experiences
            </span>
            .
          </p>
        </motion.div>

        {/* Animated Cards Container */}
        <div className="relative w-full h-full flex items-center justify-center">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              progress={scrollYProgress}
            />
          ))}
        </div>

        {/* Scroll Progress Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
          <div className="h-[1px] w-24 bg-white/10 relative overflow-hidden">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="absolute inset-0 bg-fipi-green origin-left"
            />
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-fipi-light/40 font-mono">
            Scroll to Explore
          </span>
        </div>
      </div>
    </section>
  );
}
